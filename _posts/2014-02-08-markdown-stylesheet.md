---
layout: post
title:  "Markdown Style Starter"
date:   2014-03-08 12:53:23
categories: test-category
snippet: Starting a new website and want to see all of your styles in one place? Copy and Paste the Markdown below.  
---



Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

Emphasis, aka italics, with *asterisks*

Strong emphasis, aka bold, with **asterisks**

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.


Here's our logo (hover to see the title text):

Inline-style: 
![alt text](../assets/images/roll.jpg)

Reference-style: 
![alt text][logo]

Inline `code` has `back-ticks around` it.

{% highlight javascript %}

 function Container() {
	
	var display, direction, wrap, 
	justify, items, content, setCurrent,properties,
	displayCurrent, resetContainer, printdefaultVal,
	currentProperties;

	this.currentProperties = [];

//having trouble here bc it sets properties on first go 
	this.printCurrent = function() {
		
		var newProperties = this.properties;

		for (var i = 0; i < newProperties.length;i++) {
		
			console.log(newProperties.current);
		}

	};

{% endhighlight %}

##html

{% highlight html %}

<div class="post-preview">   
    <span class="pp-stripe"></span>
    <h2 class="pp-title">this is the ittle</h2>
    <p class="pp-desc">this is the snippert</p>
    <div class="pp-bottom-wrap">
        <span class="pp-time">est read time: 5 min</span>
        <a class="pp-btn" href="http://tautcop.yomc">Read more</a>
    </div>
</div> 
{% endhighlight %}

{% highlight scss%}

.mm-link {
	@extend %mm-font;
	display:inline-block;
	margin:.5em .4em .6em .4em;
	transition:color .2s ease-in;
	&:hover {
		color:darken($white,15%);
	}

	@include bp-min(850px) {
		@include font-size(1.35,1.6);
		padding-bottom:.25em;
	}


	.highlight code, .highlight pre {
    color: #fff;
    background-color: rgb(29,31,33);
	}
		.highlight .hll {
    background-color: #222;
	}
	.highlight .c {
    color: #7f9f7f;
}
}

{%endhighlight%}
The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3


> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
