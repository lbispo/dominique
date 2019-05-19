# Dominique

## A micro DOM library.

**Dominique** is a tiny JavaScript library of helper functions for the <span title="Document Object Model">DOM</span>, emphasizing plugin creation and manipulation of elements and their properties. **Note:**  Dominique is into Zen; she lives in the now and has no regrets. Include an <span title="ECMAScript">ES</span> polyfill at your discretion.

### Plugin creation.

#### The `$` loop.

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
    doSomething(any)
})
```

Loop through diverse collections and return joined values for convenience in templating:

```js
$('ul.jedi-names', ul => {
    ul.innerHTML = $(jediArr, j => `<li>${ j.name }</li>`)
})
```

Return a property of a selector:

```js
$('div', 'textContent')
```

`$` converts all collections to a Map for iteration.

```js
$('div').get(0)
```

### Elements.

#### New elements.

##### `create(nodeName[, callback])`

Creates a new Element and returns it.

```js
create('footer', footer => {
    doSomething(footer)
})
```

#### Walking the DOM.

##### `aft(selector[, callback])`

Walks through a selector&rsquo;s next sibling elements; returns a Set of elements.

```js
aft('.any', el => {
    doSomething(el)
})
```

##### `fore(selector[, callback])`

Walks through a selector&rsquo;s previous sibling elements; returns a Set of elements.

##### `step(selector[, callback])`

Selects for a single Element and returns it.

##### `walk(selector | collection[, callback])`

Walks through a selector or collection; returns a Set of elements.

#### Events.

##### `attach(selector, type, callback[, propogation])`

Adds an event listener. Variable references the Event object.

```js
attach(document, 'click', e => {
    e.preventDefault()
}, true)
```

##### `detach(selector, type, named callback[, propogation])`

Removes an event listener added via `attach` or `addEventListener`. The callback must be named (both here and where the listener was added), arguments must be consistent.

##### `delegate(selector, selector, eventType, callback[, propagation])`

Delegates an event:

```js
delegate('body', 'button', 'click', e => {
	console.log(e.path)
}, true)
```

**Note:** Events added with `delegate` cannot be removed. If you might need to do so, use `attach` instead.

### Attributes.

**Note:** Returned values are expected from callbacks.

##### `attributes(selector, library)`

Sets or removes one or more attributes. Callback variable references the `attributes` object.

```js
attributes('a', new Map()
    .set('role', false)
    .set('href', attrs => '#' + attrs.title.value)
)
```

##### `classes(selector, collection | library)`

With a collection: adds one or more classes:

```js
classes('body', new Set()
    .add('dominique')
    .add('ma-cherie-amour')
)
```

With a library: adds, removes, replaces, or toggles one or more classes. Callback variable references the `classList` object.

```js
classes('body', new Map()
	.set('dominique', true)
	.set('no-js', false)
	.set('replace-this', 'with-this')
	.set('toggler', cl => !cl.contains('toggler')
)
```

##### `properties(selector, library)`

Adds one or more `dataset` properties (and their corresponding `data-*` attributes). Callback variable references the `dataset` object.

**Note:** Unlike the other **attributes** functions, a value of `false` does not remove the property.

##### `styles(selector, library)`

Sets or removes one or more styles. Callback variable references the `style` object.

### Summary.

Pretty sweet, huh?

#### Okay, um&hellip; filesize?

Oh, yeah: the filesize of Dominique minified comes screaming in at less than two kaybees. Woo-hoo!

#### Will you, won&rsquo;t you?

Go on, take **Dominique** out for coffee. Let us know how it goes.