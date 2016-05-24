# Dominique

## A micro DOM library
	
**Dominique** is a tiny JavaScript library who thinks most of the JavaScript DOM API is a-ok, and doesn't need any sweeping and opinionated framework to take over and start bossing it around. But there are a few things about the DOM that are just, well. Yeah. In need.

**Important:** Dominique may not play well with other libraries that use `$`.

**Also:** If you need to worry about really junk browsers, then you&rsquo;d better include an <span title="ECMAScript6">ES6</title> polyfill. Dominique is into Zen: she lives in the now and has no regrets.

## Selectors.

Users of popular JavaScript libraries will be well familiar with such selectors as `$('p')`, `$('#clickme')`, `$('.ma-cherie-amour')`, etc. Use this `$` selector pattern with JavaScript&rsquo;s awesome DOM properties and methods:

#### Examples

	$('html').lang = 'en';
	$('body').classList.add('dominique');
	$('#clickme').addEventListener('click', function() {
		alert('Wahoo!');
	});

**Note:** `$('html')` selects for `document.documentElement`; `$('body')` selects for `document.body`.

## Looping.

If you need to loop through an HTMLCollection, Dominique allows you to use the newer and simpler `for...of` loop (instead of the classic but bothersome `for` loop in vanillaJS):

#### Example

	for (var querybobs of $('.querybob')) {
		querybobs.innerHTML = 'Hi, Bob!';
	}

If you need to grab just one element from a collection, go array-like:

#### Example

	$('.querybob')[1].style.color = 'lightSeaGreen';

## Element creation.

To access `document.createElement()`, simply include pointy brackets around a tag selector. To create an `h3`, for example, use `$('<h3>')`:

#### Example

	$('#page').appendChild($('<h3>')).innerHTML = 'Footer:';

## Pluralizer properties and methods.

Dominique includes four pluralizer methods: `property()`, `method()`, `setAttributes()`, and `styles()`.

### `property()`

With the `property()` method, you can pluralize settable static properties using standard object notation:

	textContent: 'Later, Bob.'

Use a nested object for native chains of two methods, (in particular `style[x]`):

	style: {
		color: 'crimson'
	}

#### Example

	$('#page').appendChild($('<footer>')).property({
		textContent: 'Later, Bob.',
		className: 'footer-stuff',
		style: {
			color: 'crimson',
			'font-style': 'italic'
		}
	});

### `method()`

With `method()`, you can pluralize settable methods.

#### Variations:

Use a single value for methods possessing a single argument:

	appendChild: $('<p>')

Use an empty string for methods possessing no arguments:

	focus: ''

Use an array of strings for methods possessing two arguments:

	setAttribute: ['title', 'page-stuff']

Use a nested object for native chains of two methods, e.g. `classList.add`:

	classList: {
		add: 'dominique'
	}

#### Examples:
		
	$('#clickme').method({
		focus: '',
		addEventListener: ['click', function() {
			alert('Wahoo!');
		}]
	});

	$('#page').method({
		setAttribute: ['title', 'page-stuff'],
		classList: {
			add: ['dominique', 'ma-cherie-amour'],
			remove: 'page'
		}
	});

### `setAttributes()` and `styles()`

Set multiple attributes with `setAttributes()` (note the plural):

#### Example:
	
	$('#clickme').setAttributes({
		type: 'button',
		title: 'pretty-please',
		'data-trick': 'gotcha'
	});

Set multiple attributes with `styles()`:

#### Example:

	$('#page').styles({
		backgroundColor: 'blanchedAlmond',
		padding: '1em'
	});

Pretty sweet, huh?

**Note:** For now, at least, these four pluralizer methods &ndash; `property()`, `method()`, `styles()`, and `setAttributes()` &ndash; are separate from each other, and cannot be nested.

## Okay, um... filesize?

Oh, yeah: the filesize of Dominique, minified, comes screaming in at 900-odd bytes. Yes, **bytes.** As in less than one kayBee. That&rsquo;s like beating a four-minute mile. Woo-hoo!

## Will you, won&rsquo;t you beta test?

Go on, take **Dominique** out for coffee. Let us know how it goes.