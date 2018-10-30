/*** Dominique, the micro DOM library     ***/
/*** https://github.com/lbispo/dominique/ ***/

	/** $: dominique function foundry **/

let $ = (a, foo, fn) => {
	a = a || {};
	
	let i, j, newArr, newMap = new Map(), k = a.constructor;
	
	if (k === String) {
		a = document.querySelectorAll(a);
		for (let i = 0; i < a.length; i++) {
			newMap.set(i, a[i]);
		}
	} else if (k === Map) {
		newMap = a;
	} else if (typeof a[Symbol.iterator] === 'function') {
		newArr = Array.from(a);
		newArr.forEach((item, i) => {
			newMap.set(i, item);
		});
	} else if (k === Object || k === DOMStringMap) {
		for (i in a) {
			newMap.set(i, a[i]);
		}
	} else if (k === Number) {
		for (i = 0; i < a; i++) {
			newMap.set(i, i);
		}
	} else {
		newMap.set(0, a);
	}
	
	if (!foo) {
		return newMap;
	} else {
		return [...newMap.keys()].map(i => {
			j = newMap.get(i);
			
			if (fn) {
				fn.call(j, j);
			}
			
			return foo(j, i);
		}).join('');
	}
};

	/** elements: new elements **/

//create

let create = (a, fn) => {
	if (a === '') {
		a = false;
	}
	
	a = document.createElement(a);
	
	$(a, function() {}, fn);
	
	return a;
};

	/** elements: walking the dom **/

//follows

let follows = (a, fn) => {
	let newSet = new Set();
	
	$(a, i => {
		let val = i.nextElementSibling;
		
		if (val) {
			newSet.add(val);
		}
	});
	
	$(newSet, i => {}, fn);
	
	return newSet;
};

//precedes

let precedes = (a, fn) => {
	let newSet = new Set();
	
	$(a, i => {
		let val = i.previousElementSibling;
		
		if (val) {
			newSet.add(val);
		}
	});
	
	$(newSet, i => {}, fn);
	
	return newSet;
};

//step

let step = (a, fn) => {
	a = $(a).get(0);
	
	a = a || {};
	
	$(a, i => {}, fn);
	
	return a;
};

/////walk

let walk = (a, fn) => {
	let newSet = new Set();
	
	$(a, i => {
		if (i instanceof HTMLElement) {
			newSet.add(i);
		}
	});
	
	$(newSet, i => {}, fn);
	
	return newSet;
};

	/** elements: events **/

//attach

let attach = (a, b, fn, y = false, z = false) => {
	$(a, i => {
		if (y && y.constructor === String) {
			i.addEventListener(b, function(e) {
				if (e.target.matches(y)) {
					fn.call(e.target, e);
				}
			}, z);
		} else {
			i.addEventListener(b, fn, y);
		}
	});
};

//detach

let detach = (a, b, c) => {
	$(a, i => {
		i.removeEventListener(b, c)
	})
};

	/** attributes **/

//attributes

let attributes = (a, b) => {
	$(a, i => {
		$(b).forEach((val, attr) => {
			val = val && val.constructor === Function ? val.call(i, i.attributes) : val;
			
			if (val === false) {
				i.removeAttribute(attr);
			} else {
				i.setAttribute(attr, val);
			}
		});
	});
};

//classes

let classes = (a, b) => {
	$(a, i => {
		$(b).forEach((val, attr) => {
			val = val && val.constructor === Function ? val.call(i, i.classList) : val;
			
			if (b.constructor === Array || b.constructor === Set) {
				i.classList.add(val);
			} else {
				if (!val) {
					i.classList.remove(attr);
				} else if (val === true) {
					i.classList.add(attr);
				} else if (val.constructor === Object) {
					i.classList.toggle(attr);
				} else {
					i.classList.replace(attr, val);
				}
			}
		});
	});
};

//properties

let properties = (a, b) => {
	$(a, i => {
		$(b).forEach((val, prop) => {
			val = val && val.constructor === Function ? val.call(i, i.dataset) : val;
			
			i.dataset[prop] = val;
		});
	});
};

//styles

let styles = (a, b) => {
	$(a, i => {
		$(b).forEach((val, attr) => {
			val = val && val.constructor === Function ? val.call(i, i.style) : val;
			
			if (val === false) {
				i.style.removeProperty(attr);
			} else {
				i.style[attr] = val;
			}
		});
	});
};