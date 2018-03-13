/*** Dominique, the micro DOM library     ***/
/*** https://github.com/lbispo/dominique/ ***/

	/** dominique function foundry **/

let $ = (a, foo, fn) => {
	a = a || {};
	
	let i, newArr, newMap = new Map(), k = a.constructor;
	
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
	} else if (k === Object) {
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
			if (fn) {
				fn.call(newMap.get(i));
			}
			
			return foo(newMap.get(i), i);
		}).join('');
	}
};

	/** elements **/

//create

let create = (a, fn) => {
	if (a === '') {
		a = false;
	}
	a = document.createElement(a);
	
	$(a, function() {}, fn);
	
	return a;
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

	/** attributes **/

//attributes

let attributes = (a, b) => {
	$(a, i => {
		$(b).forEach((val, attr) => {
			val = val.constructor === Function ? val.call(i.attributes) : val;
			
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
			val = val.constructor === Function ? val.call(i.classList) : val;
			
			if (!val) {
				i.classList.remove(attr);
			} else if (val === true) {
				i.classList.add(attr);
			} else if (val.constructor === Object) {
				i.classList.toggle(attr);
			} else {
				i.classList.replace(attr, val);
			}
		});
	});
};

//properties

let properties = function(a, b) {
	$(a, i => {
		$(b).forEach((val, prop) => {
			val = val.constructor === Function ? val.call(i.dataset) : val;
			
			i.dataset[prop] = val;
		});
	});
};

//styles

let styles = (a, b) => {
	$(a, i => {
		$(b).forEach((val, attr) => {
			val = val.constructor === Function ? val.call(i.style) : val;
			
			if (val === false) {
				i.style.removeProperty(attr);
			} else {
				i.style[attr] = val;
			}
		});
	});
};
