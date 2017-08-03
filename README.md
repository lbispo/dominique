# Dominique

## A micro DOM library
	
**Dominique** is a tiny JavaScript library who thinks most of the JavaScript DOM API is a-ok, and doesn't really need any sweeping, opinionated framework to take over and start bossing it around. But there *are* a few things about the DOM that are just, well, yeah. In need.

**Note:**  Dominique is into Zen: she lives in the now and has no regrets. Include an <span title="ECMAScript 6">ES6</span> polyfill at your discretion.

## Selectors.

Users of popular JavaScript libraries will be familiar with selectors such as `$('p')`, `$('#clickme')`, `$('.ma-cherie-amour')`, etc. Use this `$` selector pattern with JavaScript&rsquo;s awesome DOM properties and methods:

	$('html').lang = 'en';
	$('#clickme').focus();
	for (var i of $('.querybob')) {
		i.title = 'Hi, Bob!';
	}

**Note:** `$('html')` selects for `document.documentElement`; `$('body')` selects for `document.body`. All other tag, class, and compound selectors (in which the last element in the list is not an ID) will return an HTMLCollection; hence the loop above.

## Element creation.

To create an element, just include pointy brackets around a tag selector. To make an `li`, for example, use `$('<li>')`:

	let li = $('<li>');

No need to include those slashes or closing tags, either. Dominique thinks that&rsquo;s just silly.

## Pluralizer methods.

### `setAttributes()` and `styles()`

Use object notation to set multiple HTML attributes with `setAttributes()` (note the plural):
	
	$('#clickme').setAttributes({
		type: 'button',
		title: 'pretty-please',
		'data-trick': 'gotcha'
	});

Set multiple CSS styles with `styles()`:

	$('header')[0].styles({
		color: 'PaleVioletRed',
		backgroundColor: 'DarkRed',
		padding: '.1em 1em'
	});

### `setProps()`

`setProps()` allows you to set multiple properties and/or methods:

	$('#footer').setProps({
		textContent: 'Later, Bob!',
		className: 'footer-stuff',
		appendChild: $('<span>')
	});

Use an empty string for methods with no arguments, or an array of values for methods with two or more arguments:

	$('#clickme').setProps({
		focus: '',
		addEventListener: ['click', function() {
			alert('Wahoo!’)
		}, true]
	});

Use quotes around property strings containing punctuation (of course):

	$('body').setProps({
		'classList.add': ['dominique', 'ma-cherie-amour'],
		'style.fontFamily': 'Georgia, serif'
	});

You can also nest both `setAttributes()` and `styles()` within `setProps()`&mdash;natch!
		
	$('footer')[0].setProps({
		setAttributes: {
			title: 'Footer stuff',
			'data-role': 'contentinfo'
		},
		styles: {
			color: 'DarkRed',
			borderTop: 'thin solid'
		}
	});

Pretty sweet, huh?

**Final note:** Yes, all of Dominique&rsquo;s methods extend the DOM (but only in the most responsible, <span title=“ECMAScript 5”>ES5</span>-approved way). Yes, some people still think that&rsquo;s a bad idea. No, you don&rsquo;t have to use them.

## Okay, um&hellip; filesize?

Oh, yeah: the filesize of **Dominique**, minified, comes screaming in at 900-odd bytes. Yes, **bytes.** As in less than one Kay bee. That&rsquo;s like beating a four-minute mile. Woo-hoo!

## Will you, won&rsquo;t you

Go on, take **Dominique** out for coffee. Let us know how it goes.