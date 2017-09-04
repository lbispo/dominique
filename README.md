# Dominique

## A micro DOM library
	
**Dominique** is a tiny JavaScript library who thinks most of the JavaScript DOM API is A-OK, and doesn't really need any sweeping, opinionated framework to take over and start bossing it around. But there *are* a few things about the DOM that are just, well, yeah. In need.

**Note:**  Dominique is into Zen: she lives in the now and has no regrets. Include an <span title="ECMAScript 6">ES6</span> polyfill at your discretion.

## The dollar loop

Users of popular JavaScript libraries will be familiar with selectors such as `$('#click-me')`, `$('.ma-cherie-amour')`, etc. Dominique has a different take on this pattern. Include callback function as a second argument to loop through a selector:

```javascript
$('p', function(p) {
	p.style.color = 'DarkRed';
});
```

More values can be passed into the function as needed:

```javascript
$('[type=hidden]', (i, j=user.input) => {
	i.setAttribute('value', j);
});
```

You can access the numerical index/key/name of iterated items with `this` (but not within arrow functions, which have lexical scope&mdash;send your complaints and/or compliments to the good folks at <span title="https://www.ecma-international.org/">ECMA</span>):
	
```javascript
let names = ['Bob', 'Carl', 'Fred'];
$('li.names', function(li) {
	li.textContent = names[this];
});
```

### The dollar without the loop.

You can optionally omit the callback to retrieve only the first instance of a selector:

```javascript
$('#page > :first-child').id = 'site-id';
```

**Note:** Because this doesn&rsquo;t return a collection, you can&rsquo;t use the `$` constructor in ordinary JavaScript loops. Sorry about that; Dominique had to choose. Take a look at the handy loops above and tell her you really mind.

You can also use `$` to loop through objects, arrays, maps, sets, or numbers.

### Element creation.

To create an element, just include pointy brackets around a tag name and pass it to `$`. To make an `li`, for example, use `$('<li>')`:

```javascript
names.forEach(function() {
	$('ul').appendChild($('<li>')).className = 'names';
});
```

No need to include those slashes or closing tags, either. Dominique thinks that&rsquo;s just silly.

## Aggregator functions.

Make your code a little easier on the eyes.

### `setAttributes()`

Set multiple HTML attributes using object notation with `setAttributes()` (note the plural):

```javascript
$('#click-me').setAttributes({
	type: 'button',
	title: 'Pretty please?',
	'data-trick': 'gotcha'
});
```

### `styles()`

Set multiple CSS styles with `styles()`:

```javascript
$('header, footer', i => {
	i.styles({
		color: 'PaleVioletRed',
		backgroundColor: 'DarkRed',
		padding: '.5em 1em'
	});
}
```

### `setProps()`

This method allows you to set multiple DOM properties and/or methods:

```javascript
for (let i of document.body.children) {
	i.setProps({
		title: 'Page stuff',
		className: 'page',
		appendChild: $('<footer>')
	});
}
```

Use an empty string for methods with no arguments, or an array of values for methods with two or more arguments:

```javascript
$('#click-me').setProps({
	focus: '',
	'classList.add': ['dominique', 'ma-cherie-amour'],
	'style.fontFamily': 'Dominique, serif'
});
```

You can also nest both `setAttributes()` and `styles()` within `setProps()`&mdash;natch!
	
```javascript	
$('footer').setProps({
	setAttributes: {
		title: 'Footer stuff',
		role: 'contentinfo'
	},
	styles: {
		color: 'DarkRed',
		borderTop: 'thin solid'
	}
});
```

Pretty sweet, huh?

**A final note:** Yes, all of Dominique&rsquo;s methods extend the DOM (but only in the most responsible, <span title="ECMAScript 5">ES5</span>-approved way). Yes, some people still think that&rsquo;s a bad idea. No, you don&rsquo;t have to use them.

## Okay, um&hellip; filesize?

Oh, yeah: the filesize of Dominique, minified, comes screaming in at just over a single kaybee. Woo-hoo!

## Will you, won&rsquo;t you

Go on, take **Dominique** out for coffee. Let us know how it goes.