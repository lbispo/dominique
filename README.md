# Dominique

## A micro DOM library.

**Dominique** is a tiny JavaScript library of helper functions for the DOM, emphasizing plugin creation and manipulation of element properties and attributes. **Note:**  Dominique is into Zen: she lives in the now and has no regrets. Include an <span title="ECMAScript">ES</span> polyfill at your discretion.

### Plugin creation.

#### `$(collection[, callback(item | key)])`

Creates a custom plugin.

```js
const myPlugin = (a, fn) => {
	$(a, i => {
		//doSomething(i);
	}, fn);
};
```

**Note:** In the above example, `fn` creates a callback function for the plugin.

`$` can also be used as a convenient loop for a CSS selector, HTMLCollection, NodeList, Set, or Array (items); Object or Map (keys); or Number (integers):

```js
$('div', div => {
	div.title = 'I am a div.';
});
```

Returns a single element:

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

### Compound functions.

**Note:** In all compound functions, an object literal may be used in place of `Map`.

#### `attributes(selector, Map | Object)`

Adds or removes one or more attributes. `this` references the `attributes` object.

```js
attributes('a', new Map()
	.set('role', false)
	.set('href', function() {
		return '#' + this.title.value;
	})
);
```

**Note:** There are three values that will remove an attribute:

```js
attributes('body', { role: false });
attributes('body', { role: null });
attributes('body', { role: '' });
```

These will also work for removing classes or styles.

#### `classes(selector, Map | Object)`

Adds, removes, replaces, or toggles one or more classes. `this` references the `classList` object.

```js
classes('body', new Map()
	.set('ma-cherie-amour', true)
	.set('no-js', false)
	.set('replace-me', 'replaced')
	.set('toggled', function() {
		return this.contains('toggled') ? false : true;
	})
);
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
```

**Note:** `false` does not remove the property.

#### `styles(selector, Map | Object)`

Adds or removes one or more styles. `this` references the `style` object.

```js
styles('header', new Map()
	.set('color', function() {
		return this.background === 'darkred' ? 'white' : false;
	})
);
```

### Summary.

Pretty sweet, huh?

### Okay, um&hellip; filesize?

Oh, yeah: the filesize of Dominique, minified, comes screaming in at less than a kaybee and a half. Woo-hoo!

### Will you, won&rsquo;t you

Go on, take **Dominique** out for coffee. Let us know how it goes.