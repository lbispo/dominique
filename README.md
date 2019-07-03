# Dominique

## A micro DOM library.

**Dominique** is a tiny JavaScript library of helper functions for the <span title="Document Object Model">DOM</span>, emphasizing plugin creation and looping convenience. **Note:**  Dominique is into Zen; she lives in the now and has no regrets. Include an <span title="ECMAScript">ES</span> polyfill at your discretion.

### Plugin creation.

#### The `$` loop and plugin factory.

##### `$(selector | element | collection, fn[, var])`

Creates a custom plugin. In this example, `fn` creates a callback function for the plugin.

```js
const myPlugin = (a, fn) => {
	$(a, (item, key) => {
		doSomething(key, item)
	}, fn)
}
```

Use the plugin:

```js
myPlugin('.any', any => {
	doSomethingElse(any)
})
```

Loop through diverse collections and return joined values for convenience in templating:

```js
$('ul.monster-names', ul => {
	ul.innerHTML = $(monsterArr, m => `<li>${ m.name }</li>`)
})
```

##### `$(selector | element | collection[, ...strings])`

Return a map of keys and items:

```js
$('user-posts', 'dataset', 'username').forEach((user, i) => {
	posters[i] = user
})

let op = $(posters).get(0)
```

#### All other Dominique functions

&hellip; are just plugins created with `$`. Scope is set on the selected elements; a callback variable can reference different things depending on the function.

### Elements.

**Note:** All **Elements functions** return an element, set of elements, or document fragment.

##### `aft(selector | element[, callback])`

Walks through a selector&rsquo;s next sibling elements.

```js
aft('.any', el => {
	doSomething(el)
})
```

##### `create(nodeName[, fn])`

Creates a new Element.

```js
create('footer', footer => {
	doSomething(footer)
})
```

##### `fore(selector | element[, fn])`

Walks through a selector&rsquo;s previous sibling elements.

##### `step(selector | element[, fn])`

Selects for a single Element.

##### `walk(selector | element | collection[, fn])`

Walks through a selector, or pulls elements from a collection.

#### Events.

##### `attach(selector, type, fn[, propogation])`

Adds an event listener. Variable references the Event object.

```js
attach(document, 'click', e => {
	e.preventDefault()
}, true)
```

##### `delegate(selector, selector, eventType, fn[, propagation])`

Delegates an event:

```js
delegate('body', 'button', 'click', e => {
	console.log(e.path)
}, true)
```

**Note:** Events added with `delegate` cannot be removed. If you might need to do so, use `attach` instead.

##### `detach(selector, type, named fn[, propogation])`

Removes an event listener added via `attach` or `addEventListener`. The callback must be named (both here and where the listener was added); arguments must be consistent.

### Attributes.

**Note:** Returned values are expected from callbacks.

##### `attributes(selector, library)`

Sets one or more attributes. Callback variable references the `attributes` object.

```js
attributes('a', new Map()
	.set(‘role’, ‘button’)
	.set(‘href’, attrs => ‘#’ + attrs.title.value)
)
```

##### `classes(selector, collection | library)`

With a collection: adds one or more classes.

```js
classes('body', new Set()
	.add(‘dominique’)
	.add(‘ma-cherie-amour’)
)
```

With a library: adds, removes, replaces, or toggles one or more classes. Callback variable references `classList`.

```js
classes('body', new Map()
	.set(‘dominique’, true)
	.set(‘no-js’, false)
	.set(‘replace-this’, ‘with-this’)
	.set(‘toggler’, cl => !cl.contains(‘toggler’)
)
```

A shorthand for adding a class:

```js
classes('body', 'dominique')
```

A shorthand for toggling a class:

```js
classes('body', { toggler: {} })
```

Returns a Map of elements and `className` properties.

##### `properties(selector, library)`

Adds one or more `dataset` properties (and their corresponding `data-*` attributes). Callback variable references `dataset`.

##### `styles(selector, library)`

Sets or removes one or more styles. Callback variable references the `style` object.

### Summary.

Pretty sweet, huh?

#### Okay, um&hellip; filesize?

Oh, yeah: the filesize of Dominique minified comes screaming in at less than two kaybees. Woo-hoo!

#### Will you, won&rsquo;t you?

Go on, take **Dominique** out for coffee. Let us know how it goes.