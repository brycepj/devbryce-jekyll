---
layout: post
title:  "Why is 'e' passed as a parameter in some JavaScript functions?"
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

If you're familiar with jQuery, you know we're selecting an element with an id attribute 'myTable', and watching for a user to click on it. When they do, the background of 'clicked' is styled red.

But what's that 'e' for, and where did it come from?

In this case, 'e' is a reference to an 'event object' (a JavaScript object of key-value pairs), that stores all sorts of information when an event (in this case, a 'click') happens.

If you've done some reading on this already, you'll have noticed [people saying](http://stackoverflow.com/questions/3535996/jquery-javascript-functione-what-is-e-why-is-it-needed-what-does-it-ac) that 'e' doesn't have to be called 'e'. You can name it whatever you want. In other words, in the code samples below, you'll get exactly the same result as you would using the code from the sample above.

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

So, if 'e' is not affected by what you call it, what is it, and where does it come from?

This is what confused me for the longest time. And it's the key to understanding this usage of 'e'. 

When a jQuery event handler (like `.click()` or `.scroll()` or `.resize()` or `.hover()`) fires, jQuery *automatically* passes details about that event to the event handler function. 

Those details are contained in an object (the event object we referred to earlier), including the name of the element the event occured on (in this case, an element with the id 'myTable'), the type of event that was that fired (in this case, 'click'), the time at which the event occurred, and much much more. 

So, when we say the jQuery event handler is passed this object automatically, that means all you need to do to access it in your event handler function is reference a parameter called 'event' or 'foo' or 'Cockamemie' or 'e' and refer to it somewhere in the body of the function. 

You can refer to and use this parameter in your function freely--like you would any other variable pointing to an object--using simple object dot notation. See what I mean in the code sample below. 

For example: 
{% highlight javascript %}

$('#myTable').click(function(e) {

	var type = e.type //stores the string 'click' for further use
	var target = e.target //stores the string '#myTable'
	var timestamp = e.timeStamp //stores the time the event occured
	var which = e.which //stores the specific key or button that was pressed to fire the event.


});

{% endhighlight %}

You may have already realized how the event object could be extremely useful if you want to perform a certain action depending on the nature of the event. 

For example, imagine we're creating a [Todo list](http://todomvc.com). We want users to be able to hit the 'Enter' key to save a newly inputted to-do item, rather than have to click a button on the page.

So we'd set an event listener to watch for 'keydown' events, but we only want to fire that event if the key they pressed was the 'Enter' key. To do that, we'd refer to the event object, which contains information about the event--in this case, it can tell us which key the user pressed. 

{% highlight javascript %}

$("#todo-input").on('keydown', function(e){
    if (!e.which === 13) {   //if not the enter key, stop executing the function
    return;                     
} 

// add your code to save the todo item 

});

{% endhighlight %}

Now for another convenient use of the event object, let's look back to our opening example:

{% highlight javascript %}

$('#myTable').click(function(e) {
    var clicked = $(e.target);
    clicked.css('background', 'red');
});

{% endhighlight %}

You see `e.target` has been referred to as part of a jQuery selector, which means that once `e.target` evaluates to "#myTable" we're going to use it directly in a new jQuery selector to be manipulated with the next line. 

Well, hopefully that helped you. Now that you know what 'e' is referring to, head to the [jQuery Event Object API](https://api.jquery.com/category/events/event-object/) to see other information you can access in any jQuery event handler. 

 