// http://github.com/lbispo/dominique

{ let i, j, k;
	
	Object.defineProperties(Element.prototype, {
		'styles': {
			configurable: true,
			value: function(a) {
				for (i in a) {
					this.style[i] = a[i];
				}
			}
		},
		'setAttributes': {
			configurable: true,
			value: function(a) {
				for (i in a) {
					this.setAttribute(i, a[i]);
				}
			}
		},
		'setProps': {
			configurable: true,
			value: function(a) {
				for (i in a) {
					if (i.indexOf('.') > 0) {
						j = i.split('.');
						if (typeof this[j[0]][j[1]] === 'function') {
							if (a[i].constructor === Array) {
								for (k in a[i]) {
									k = this[j[0]][j[1]](a[i][k]);
								} 
							} else {
								i = this[j[0]][j[1]](a[i]);
							}
						} else {
							this[j[0]][j[1]] = a[i];
						}
					} else if (a[i].constructor === Array) {
						i = this[i](a[i][0], a[i][1], a[i][2]);
					} else if (typeof this[i] === 'function') {
						i = this[i](a[i]);
					} else if (a[i].constructor === Object) {
						for (j in i) {
							if (i === 'styles') {
								this.style[j] = a[i][j];
							} else {
								this.setAttribute(j, a[i][j]);
							}
						}
					} else {
						this[i] = a[i];
					}
				}
			}
		}
	});
	
}

window.$ = function(a, fn) {
	
	let i, j;
	
	if (a.constructor === Number) {
		for (i = 0; i < a; i++) {
			fn.call(i, a[i]);
		}
	} else if (a.constructor === Object) {
		for (i in a) {
			fn.call(i, a[i]);
		}
	} else if (a.constructor === Map) {
		for ([i, j] of a) {
			fn.call(i, j);
		}
	} else if (a.constructor === Set) {
		for (i of a) {
			fn.call(a[i], i);
		}
	} else if (arguments.length == 1) {
		if (a.startsWith('<')) {
			a = a.substring(1, a.length - 1);
			return document.createElement(a);
		} else {
			return document.querySelector(a);
		}
	} else {
		if (a.constructor === String) {
			a = document.querySelectorAll(a);
		}
		for (i = 0; i < a.length; i++) {
			fn.call(i, a[i]);
		}
	}
	
};