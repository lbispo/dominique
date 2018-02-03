# Dominique

## A micro DOM library.

**Dominique** is a tiny JavaScript library of helper functions for the DOM, emphasizing plugin creation and manipulation of elements and attributes. **Note:**  Dominique is into Zen: she lives in the now and has no regrets. Include an <span title="ECMAScript">ES</span> polyfill at your discretion.

### Plugin creation.

#### The `$` loop.

Creates a custom plugin.

```js
const myPlugin = (a, fn) => {
	$(a, i => {
		//doSomething(i);
	}, fn);
};
```

**Note:** In the above example, `fn` creates a callback function for the plugin.

`$` can loop through a CSS selector, NodeList, HTMLCollection, HTMLElement, Set, or Array (items); Object or Map (keys); or Number (integers). Returns joined values for use with template literals:

```js
$('ul.jedi-names', ul => {
	ul.innerHTML = $(jedi, j => `<li>${j.name}</li>`);
});
```

Returns a single Element:

```js
$('#page')
```

### Elements.

#### `create(selector[, callback])`

```js
create('footer', function() {
	this.textContent = '&copy; 2017 Dominique';
	$('#page').appendChild(this);
});
```

Returns the new element:

```js
create('footer')
```

### Attributes.

**Note:** In all **attributes** functions, an object literal may be used in place of `Map`. Returned values are expected from callbacks.

#### `attributes(selector, Map | Object)`

Sets or removes one or more attributes. `this` references the `attributes` object.

```js
attributes('a', new Map()
	.set('role', false)
	.set('href', function() {
		return '#' + this.title.value;
	})
);
```

#### `classes(selector, Map | Object)`

Adds, removes, replaces, or toggles one or more classes. `this` references the `classList` object.

```js
classes('body', {
	'replace-me': 'replaced',
	toggled() { return this.contains('toggled') ? false : true }
});
```

**Note:** Dominique provides a shorthand for toggling a class:

```js
classes('body', new Map()
	.set('toggled', {})
);
```

#### `properties(selector, Map | Object)`

Adds one or more `dataset` properties (and their corresponding `data-*` attributes). `this` references the `dataset` object.

```js
properties('body', {
	username: loginHandler.user,
	admin() { return this.username === 'Dominique' ? true : false }
});

properties('body', new Map()
	.set('username', loginHandler.user)
	.set('admin', function() {
		return this.username === 'Dominique' ? true : false;
	})
);
```

**Note:** A value of `false`, unlike the other attribute functions, does not remove the property.

#### `styles(selector, Map | Object)`

Sets or removes one or more styles. `this` references the `style` object.

```js
styles('header', new Map(
	.set('color', function() {
		return this.background === 'darkred' ? 'white' : false;
	})
);
```

### Summary.

Pretty sweet, huh?

### Okay, um&hellip; filesize?

Oh, yeah: the filesize of Dominique, minified, comes screaming in at less than one and a half kaybees. Woo-hoo!

### Will you, won&rsquo;t you

Go on, take **Dominique** out for coffee. Let us know how it goes.