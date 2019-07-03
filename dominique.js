/*** Dominique, the micro DOM library     ***/
/*** https://github.com/lbispo/dominique/ ***/

	/** $: dominique function foundry **/

let $ = (a, ...args) => {
	a = a || {};
	let i, newArr, newMap = new Map(), newerMap = new Map(), k = a.constructor;
	
	if (k === String) {
		a = document.querySelectorAll(a);
		for (i = 0; i < a.length; i++) {
			newMap.set(i, a[i]);
		}
	} else if (k === Map) {
		newMap = new Map(a);
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
		
	if (!args[0]) {
		newMap.forEach((item, key) => {
			newMap[key] = item;
		});
		
		return newMap;
	} else {
		if (args[0].constructor === Function) {
			return [...newMap.keys()].map(i => {
				if (args[1]) {
					args[1].call(newMap.get(i), newMap.get(i));
				}
			
				return args[0](newMap.get(i), i);
			}).join('');
		} else {
			newMap.forEach((val, i) => {
				let reducer = function(accumulator, item) {
					if (val.constructor === Set || val.constructor === Map) {
						newerMap.set(i, accumulator.get(item));
					
						return accumulator.get(item) || {};
					} else {
						newerMap.set(i, accumulator[item]);
					
						return accumulator[item] || {};
					}
				}
				args.reduce(reducer, val);
			});
			
			newerMap.forEach((item, key) => {
				newerMap[key] = item;
			});
			
			return newerMap;
		}
	}
};

	/** elements **/

//aft

let aft = (a, fn) => {
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

//create

let create = (a, fn) => {
	if (a === '') {
		return undefined;
	}
	
	a = document.createElement(a);
	
	$(a, function() {}, fn);
	
	return a;
};

//fore

let fore = (a, fn) => {
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

	/** attributes **/

//attributes

let attributes = (a, b) => {
	$(a, i => {
		$(b, (val, attr) => {
			val = val && val.constructor === Function ? val.call(i, i.attributes) : val;
			
			i.setAttribute(attr, val);
		});
	});
};

//classes

let classes = (a, b) => {
	$(a, i => {
		if (b && !b.forEach && b.constructor !== Object) return;
		
		$(b, (val, attr) => {
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
		$(b, (val, prop) => {
			val = val && val.constructor === Function ? val.call(i, i.dataset) : val;
			
			i.dataset[prop] = val;
		});
	});
};

//styles

let styles = (a, b) => {
	$(a, i => {
		$(b, (val, attr) => {
			val = val && val.constructor === Function ? val.call(i, i.style) : val;
			
			i.style[attr] = val;
		});
	});
};

	/** events **/

//attach

let attach = (a, eventType, fn, x) => {
	$(a, i => {
		i.addEventListener(eventType, fn, x);
	});
};

//detach

let detach = (a, eventType, fn, x) => {
	$(a, i => {
		i.removeEventListener(eventType, fn, x)
	});
};

//delegate

let delegate = (a, b, eventType, fn, x) => {
	$(a, i => {
		i.addEventListener(eventType, e => {
			if (!e.target.matches(b)) return;
			
			fn.call(e.target, e);
		}, x);
	});
};