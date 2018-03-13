# Dominique

## A micro DOM library.

**Dominique** is a tiny JavaScript library of helper functions for the <span title="Document Object Model">DOM</title>, emphasizing plugin creation and manipulation of elements and their attributes. **Note:**  Dominique is into Zen: she lives in the now and has no regrets. Include an <span title="ECMAScript">ES</span> polyfill at your discretion.

### Plugin creation.

#### The `$` loop.

Creates a custom plugin. In this example, `fn` creates a callback function for the plugin.

```js
const myPlugin = (a, fn) => {
    $(a, (item, key) => {
        //doSomething(key, item);
    }, fn);
};
```

Loop through diverse collections and return joined values for convenience in templating:

```js
$('ul.jedi-names', ul => {
    ul.innerHTML = $(jediArr, j => `<li>${ j.name }</li>`);
});
```

`$` converts all collections to a Map for iteration. Return the Map:

```js
$('div').get(0)
```

### Elements.

#### `create(String[, callback])`

Creates a new Element and returns it.

```js
create('footer', function() {
    this.textContent = '&copy; 2018 Dominique';
});
```

#### `step(selector[, callback])`

Selects for a single Element and returns it.

```js
step('body', function() {
    this.id = 'home';
});
```

#### `walk(collection[, callback])`

Walks through a selector; returns a Set of elements.

```js
walk('.any', function() {
    this.title = 'Any Element';
});
```

### Attributes.

**Note:** In all **attributes** functions, object literal notation may be used in place of `new Map()`. Returned values are expected from callbacks.

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
classes('body', new Map()
	.set('replace-me', 'replaced')
	.set('toggled', function() {
		return this.contains('toggled') ? false : true }
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
properties('body', new Map()
    .set('username', loginHandler.user)
    .set('admin', function() {
        return this.username === 'Dominique' ? true : false;
    })
);
```

**Note:** Unlike the other **attributes** functions, a value of `false` does not remove the property.

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

Oh, yeah: the filesize of Dominique, minified, comes screaming in at less than one and a half kaybee. Woo-hoo!

### Will you, won&rsquo;t you

Go on, take **Dominique** out for coffee. Let us know how it goes.