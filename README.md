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

`$` converts all collections to a Map for iteration.

```js
$('div').get(0)
```

### Elements.

#### New elements.

##### `create(String[, callback])`

Creates a new Element and returns it.

```js
create('footer', footer => {
    footer.innerHTML = '&copy; 2018 Dominique'
})
```

#### Walking the DOM.

##### `follows(selector[, callback])`

Walks through a selector&rsquo;s next sibling elements; returns a Set of elements.

```js
follows('.any', el => {
    doSomething(el)
})
```

##### `precedes(selector[, callback])`

Walks through a selector&rsquo;s previous sibling elements; returns a Set of elements.

##### `step(selector[, callback])`

Selects for a single Element and returns it.

##### `walk(selector | collection[, callback])`

Walks through a selector or collection; returns a Set of elements.

#### Events.

##### `attach(selector, type, callback[, delegate &| options])`

Adds an event listener. Set a delegate and/or options with the last two, optional parameters. Variable references the Event object.

```js
attach(document, 'click', e => {
    e.preventDefault()
}, 'a', true)
```

##### `detach(selector, type, named callback)`

Removes an event listener. The callback must be named (both here and where the listener was added).

### Attributes.

**Note:** In all **attributes** functions, object literal notation may be used in place of the Map. Returned values are expected from callbacks.

##### `attributes(selector, library)`

Sets or removes one or more attributes. Variable references the `attributes` object.

```js
attributes('a', new Map()
    .set('role', false)
    .set('href', attrs => '#' + attrs.title.value;)
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

With a library: adds, removes, replaces, or toggles one or more classes. Variable references the `classList` object.

##### `properties(selector, library)`

Adds one or more `dataset` properties (and their corresponding `data-*` attributes). Variable references the `dataset` object.

**Note:** Unlike the other **attributes** functions, a value of `false` does not remove the property.

##### `styles(selector, library)`

Sets or removes one or more styles. Variable references the `style` object.

### Summary.

Pretty sweet, huh?

#### Okay, um&hellip; filesize?

Oh, yeah: the filesize of Dominique, minified, comes screaming in at less than two kaybees. Woo-hoo!

#### Will you, won&rsquo;t you?

Go on, take **Dominique** out for coffee. Let us know how it goes.