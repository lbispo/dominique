/*** Dominique, the micro DOM library     ***/
/*** https://github.com/lbispo/dominique/ ***/

	/*** $ function foundry ***/

function $(a = {}, foo, fn) {
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
}

	/* create */

function create(a, fn) {
	a = document.createElement(a);
	$(a, function() {}, fn);
	return a;
}

	/* attributes */

function attributes(a, b) {
	$(a, function(i) {
		for (let attribute in b) {
			i.setAttribute(attribute, b[attribute]);
		}
	});
}

	/* properties */

function properties(a, obj, fn) {
	$(a, i => {
		for (let j in obj) {
			i.dataset[j] = obj[j];
		}
	}, fn);
};

	/* styles */

function styles(a, b, fn) {
	$(a, function(i) {
		for (let styl in b) {
			i.style[styl] = b[styl];
		}
	}, fn);
}