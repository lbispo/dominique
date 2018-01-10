/*** Dominique, the micro DOM library     ***/
/*** https://github.com/lbispo/dominique/ ***/

	/*** dominique function foundry ***/

let $ = function(a, foo, fn) {
	a = a || {};
	let i;
	function y(x) {
		foo(x);
		if (fn !== undefined) {
			fn.call(x);
		}
	}
	if ((a.constructor === String) && (arguments.length === 1)) {
		return document.querySelector(a);
	}
	if ((a.length !== undefined) || (a.constructor === Set)) {
		if (a.constructor === String) {
			a = document.querySelectorAll(a);
		}
		for (i of a) {
			y(i);
		}
	} else if (a.constructor === Object) {
		for (i in a) {
			y(i);
		}
	} else if (a.constructor === Map) {
		for (i of a.keys()) {
			y(i);
		}
	} else if (a.constructor === Number) {
		for (i = 0; i < a; i++) {
			y(i);
		}
	} else {
		y(a);
	}
};

//dominique's little helpers

let dominique = {
	funcify: function(x, y, z) {
		if (x && x.constructor === Function) {
			x = x.call(z[y]);
		}
		return x;
	},
	mapify: function(x) {
		if (x.constructor === Object) {
			x = new Map(Object.entries(x));
		}
		return x;
	}
};

	/* elements */

//create

let create = (a, fn) => {
	a = document.createElement(a);
	$(a, function() {}, fn);
	return a;
};

	/* compound functions */

//attributes

let attributes = (a, b) => {
	b = dominique.mapify(b);
	$(a, i => {
		b.forEach((val, attr) => {
			val = dominique.funcify(val, 'attributes', i);
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
	b = dominique.mapify(b);
	$(a, i => {
		b.forEach((val, attr) => {
			val = dominique.funcify(val, 'classList', i);
			if (val === false) {
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
	b = dominique.mapify(b);
	$(a, i => {
		b.forEach((val, prop) => {
			val = dominique.funcify(val, 'dataset', i);
			i.dataset[prop] = val;
		});
	});
};

//styles

let styles = (a, b) => {
	b = dominique.mapify(b);
	$(a, function(i) {
		b.forEach((val, attr) => {
			val = dominique.funcify(val, 'style', i);
			if (val === false) {
				i.style.removeProperty(attr);
			} else {
				i.style[attr] = val;
			}
		});
	});
};
