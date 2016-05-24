window.$ = function(a) {
	
	NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
	
	Element.prototype.styles = function(a) {
		for (var i in a) {
			this.style[i] = a[i];
		}
	};
	
	Element.prototype.setAttributes = function(a) {
		for (var i in a) {
			this.setAttribute(i, a[i]);
		}
	};
		
	Element.prototype.property = function(a) {
		for (var i in a) {
			if (a[i].constructor == Object) {
				for (var j in a[i]) {
					this[i][j] = a[i][j];
				}
			} else {
				this[i] = a[i];
			}
		}
	};
		
	Element.prototype.method = function(a) {
		for (var i in a) {
			if (a[i].constructor == Array) {
				i = this[i](a[i][0], a[i][1]);
			} else if (a[i].constructor == Object) {
				for (var j in a[i]) {
					if (a[i][j].constructor == Array) {
						this[a[i]] = this[i][j](a[i][j][0], a[i][j][1]);
					} else {
						this[a[i]] = this[i][j](a[i][j]);
					}
				}
			} else {
				i = this[i](a[i]);
			}
		}
	};
	
	if (a == 'html') {
		return document.documentElement;
	} else if (a == 'body') {
		return document.body;
	} else if (a.startsWith('<')) {
		a = a.substring(1, a.length - 1);
		return document.createElement(a);
	} else if (a.startsWith('#')) {
		if (a.indexOf(' ') >= 0) {
			return document.querySelectorAll(a);
		} else {
			return document.querySelector(a);
		}
	} else {
		return document.querySelectorAll(a);
	}
	
}