---
layout: post
title:  "Why do I keep seeing 'e' passed as a parameter in JavaScript functions?"
date:   2014-03-14
categories: javascript
time: 4 min
snippet: The answer is simple, but 'e' confused me for a while. Here's a practical explanation, along with a few code samples and resources for further reading.   
---

Maybe you're looking at something like this: 

{% highlight javascript %}

$('#myTable').click(function(e) {
    var clicked = $(e.target);
    clicked.css('background', 'red');
});

{% endhighlight %}

If you're familiar with jQuery, you know we're selecting an element with the id 'myTable', and watching for a user to click on it. When they do, the background of something is styled red.

But what's that 'e' for, and where did it come from?

In this case, 'e' is a reference to an 'event object', which is an object that stores alls sorts of information when the event you designate (in this case, a 'click') happens.

If you've done some reading on this, you'll notice [people saying](http://stackoverflow.com/questions/3535996/jquery-javascript-functione-what-is-e-why-is-it-needed-what-does-it-ac) 'e' doesn't have to be called 'e'. You can name it whatever you want. In other words, the code samples below, acheive exactly the same thing as the code sample above.

{% highlight javascript %}

//example with 'event'

$('#myTable').click(function(event) {
    var clicked = $(event.target);
    clicked.css('background', 'red');
});

//example with 'foo'

$('#myTable').click(function(foo) {
    var clicked = $(foo.target);
    clicked.css('background', 'red');
});


//example with 'Cockamemie'

$('#myTable').click(function(Cockamemie) {
    var clicked = $(Cockamemie.target);
    clicked.css('background', 'red');
});

{% endhighlight %}

So, if 'e' is not affected by what you call it, where is it, and where does it come from?

This is what confused me for the longest time. And it's the key to understanding this usage of 'e'. 

When a jQuery event handler fires (like `.click()` or `.scroll()` or `.resize()` or `.hover()`), jQuery *automatically* passes details about that event including the name of the element it occured on (in this case, an element with the id 'myTable'), the type of event it was that fired (in this case, 'click'), the time at which the event occurred, and much much more. You can refer to and use these in your function freely, using simple object dot notation.



For example: 
{% highlight javascript %}

$('#myTable').click(function(e) {

	var type = e.type //stores the string 'click'
	var target = e.target //stores the string '#myTable'
	var timestamp = e.timeStamp //stores the time the event occured
	var which = e.which //stores the specific key or button that was pressed to fire the event
});


So, when the jQuery event handler passes this object automatically, that means all you need to do to access it in your function is pass a parameter called 'event' or 'foo' or 'Cockamemie' or 'e' into your function and refer to it later. 

Now for a slightly more advanced use of this event object, refer to our opening example:

{% highlight javascript %}

$('#myTable').click(function(e) {
    var clicked = $(e.target);
    clicked.css('background', 'red');
});

{% endhighlight %}

You see e.target has been referred to as part of a jQuery selector, which means that once e.target evaluates into "#myTable" we're putting it directly into a jQuery selector to be manipulated in the next line. If you left out the jQuery selector, the variable 'clicked' would be a simple string and the next line of CSS would break. 

Well, hopefully that helped. Now that you know what 'e' is referring to, head to the [jQuery Event Object API](https://api.jquery.com/category/events/event-object/) to see other information you can access in any jQuery event handler. 
 