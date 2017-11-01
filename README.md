# Dominique

## A micro DOM library.

**Dominique** is a tiny JavaScript library of helper functions for DOM (and other collection) iteration; element creation; setting multiple properties; and custom plugin creation.

**Note:**  Dominique is into Zen: she lives in the now and has no regrets. Include an <span title="ECMAScript 6">ES6</span> polyfill at your discretion.

### The `$` loop.

#### `$(collection[, callback])`

```javascript
$('p', p => p.style.color = 'DarkRed');
```

This example loops through a CSS selector, but `$` can also loop through an HTMLCollection (e.g. `document.body.children`), Array, Object, Set, Map, or Number. `$` is the only Dominique function that reserves a parameter for the current item in iteration.

#### The dollar without the loop.

```javascript
$('#page > :first-child').id = 'site-id';
```

Selects for a single element.

### Element creation.

#### `create(selector[, callback])`

```js
create('footer', function() {
	this.innerHTML = '&copy; 2017 Dominique.';
	$('body').appendChild(this);
});
```

**Note:** Dominique has taken the plunge: she has sworn off methods and thrown in with helper functions instead. While this may increase the risk of variable name collision in the short term, Dominique has taken the longer view&mdash;namespaced ES6 modules are coming! Wait for it&hellip;

```js
const domi = (function() {
	return {
		$: $,
		create: create //etc.
	}
})();
domi.$('body').appendChild(domi.create('footer'));
```

In the meantime, you can namespace Dominique&rsquo;s functions yourself with something like the above.

### Multiples.

#### `attributes(selector, Object)`

**Note:** `setAttributes` has been deprecated and replaced with `attributes`.

```javascript
attributes('input#click-me', {
	type: 'button',
	title: 'Pretty please?'
});
```

#### `properties(selector, Object)`

**Note:** `setProps` has been deprecated and replaced with `properties`.

```javascript
properties(document.body, {
	libraryEponym: 'Dominique',
	salutation: 'Grand Poobah'
});
```

This produces `data-*` attributes on the selector:

```html
<body data-library-eponym="Dominique" data-salutation="Grand Poobah"></body>
```

#### `styles(selector, Object)`

```javascript
styles('header, footer', {
	color: 'PaleVioletRed',
	background: 'DarkRed'
});
```


### Plugins.

```js
const colorize = (a, b, fn) => {
	$(a, i => {
		i.style.color = b;
	}, fn);
};
```

An example custom plugin. **Note:** The `fn` parameter, optional, provides for a callback:

```js
colorize('header h1', brandColor, function() {
	this.textContent = this.style.color;
});
```

Pretty sweet, huh?

### Okay, um&hellip; filesize?

Oh, yeah: the filesize of Dominique, minified, comes screaming in at less than a single kaybee. Woo-hoo!

### Will you, won&rsquo;t you

Go on, take **Dominique** out for coffee. Let us know how it goes.