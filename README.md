# Dominique

## A micro DOM library.

**Dominique** is a tiny JavaScript library of helper functions for the <span title="Document Object Model">DOM</span>, emphasizing plugin creation and manipulation of elements and their attributes. **Note:**  Dominique is into Zen: she lives in the now and has no regrets. Include an <span title="ECMAScript">ES</span> polyfill at your discretion.

### Plugin creation.

#### The `$` loop.

Creates a custom plugin. In this example, `fn` creates a callback function for the plugin.

```js
const myPlugin = (a, fn) => {
    $(a, (item, key) => {
        doSomething(key, item);
    }, fn);
};
```

Use the plugin:

```js
myPlugin('.any', function() {
    doSomething(this);
});
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

#### `after(selector[, callback])`

Walks through a selector&rsquo;s next sibling elements; returns them as a Set.

```js
after('.any', function() {
    doSomething(this);
});
```

#### `attach(selector, type, callback[, delegate &| options])`

Adds an event listener. Set a delegate and/or options with the last two, optional parameters.

```js
attach(document, 'click', function(e) {
    e.preventDefault();
}, 'a', true);
```

#### `before(selector[, callback])`

Walks through a selector&rsquo;s previous sibling elements; returns them as a Set.

```js
before('.any', function() {
    doSomething(this);
});
```

#### `create(String[, callback])`

Creates a new Element and returns it.

```js
create('footer', function() {
    this.innerHTML = '&copy; 2018 Dominique';
});
```

#### `detach(selector, type, named callback)`

Removes an event listener. The callback must be named (both here and where the listener was added).

```js
detach('button', 'click', namedEventHandler);
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

#### `attributes(selector, library)`

Sets or removes one or more attributes. `this` references the `attributes` object.

```js
attributes('a', new Map()
    .set('role', false)
    .set('href', function() {
        return '#' + this.title.value;
    })
);
```

#### `classes(selector, library | collection)`

Adds, removes, replaces, or toggles one or more classes. `this` references the `classList` object.

```js
classes('body', new Map()
    .set('replace-me', 'replaced')
    .set('toggle-me', function() {
        return this.contains('toggle-me') ? false : true;
    })
);
```

A shorthand for toggling a class:

```js
classes('body', new Map()
    .set('toggle-me', {})
);
```

A shorthand for adding one or more classes (array literal notation may be used in place of `new Set()`:

```js
classes('body', new Set()
    .add('dominique')
    .add('ma-cherie-amour')
);
```

#### `properties(selector, library)`

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

#### `styles(selector, library)`

Sets or removes one or more styles. `this` references the `style` object.

```js
styles('header', new Map(
    .set('background', currentWidgetColor)
    .set('color', function() {
        return this.background === 'darkred' ? 'white' : false;
    })
);
```

### Summary.

Pretty sweet, huh?

### Okay, um&hellip; filesize?

Oh, yeah: the filesize of Dominique, minified, comes screaming in at less than two kaybees. Woo-hoo!

### Will you, won&rsquo;t you

Go on, take **Dominique** out for coffee. Let us know how it goes.