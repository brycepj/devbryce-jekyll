---
layout: post
title:  "How to display a fixed element only while the user is scrolling"
date:   2014-03-17
categories: javascript
time: 3 min
snippet: Certain navigation elements are only useful to users when they're looking for new content. The following is a simple tutorial for making an element fade in as the user scrolls and fadeout as they pause to read.    
---
I was recently working on a really long, content-heavy web page (it would take you at least thirty seconds to scroll through it) that needed to be scrollable, and also easily navigable.

We decided we'd need a sticky Table of Contents that can:

1. fit within a containing element (sidebar) initially
2. take on a fixed position when its top border touches the top of the page (it has to be 'sticky')
3. appear only as the user scrolls, and disappear after a few seconds of no scrolling, to get out of the user's way. 

I imagine this effect would be useful whenever a user scrolling indicates they're looking for something on the page, and you want to temporarily show them tools or information that could help find what they're looking for.

Here's the full snippet, if that's what you're after:

{% highlight javascript %}

$(function () {

    var el = $('.the-element');
    var elDepth = el.offset().top;
    var fadeTimer;

    $(window).scroll(function () {
        el.fadeIn();

        if (fadeTimer) {
            clearTimeout(fadeTimer);
        }

        fadeTimer = setTimeout(function () {
            fadeTimer = 0;
            el.fadeOut();
        }, 10000);

        var scrollDepth = $(window).scrollTop();

        if (elDepth > scrollDepth) {
            el.css({
                position:'fixed'
                });
        } else {
            el.css({
                position:'absolute'
                });
        }
    });

});

{% endhighlight %}

If you want to understand how it works, read on. 

There are two distinct functionalities at work here, even though we're running it all through one event listener. We'll split it up into two.

## First, make it sticky

There are [plenty of plugins](https://www.google.com/search?q=sticky+jquery+element&oq=sticky+jquery+element&aqs=chrome..69i57j0l5.5262j0j7&sourceid=chrome&espv=210&es_sm=91&ie=UTF-8#q=sticky+element+jquery) out there to help you do this with any element, but it's simple enough to do on your own. 

Once you know...

1. how far your sticky element is from the top of the page initially
2. how far the user has scrolled  

...you're in business. 

Let's store those values in variables: 

{% highlight javascript %}

$(function () {
//store a reference to the DOM element
    var el = $('.the-element'); 
//get the element's distance from the top of the page (pixels)  
    var elDepth = el.offset().top; 
//check how far the user has scrolled  
    var scrollDepth = $(window).scrollTop(); 
});

{% endhighlight %}

Next, we add an event listener that checks if the user has scrolled as far as the element's depth, and then decides what its CSS positioning should be as a result. 

{% highlight javascript %}

$(function () {

    var el = $('.the-element');
    var elDepth = el.offset().top;

    $(window).scroll(function () {
       
        var scrollDepth = $(window).scrollTop();

        if (elDepth > scrollDepth) {
            el.css({
                position:'fixed'
                });
        } else {
            el.css({
                position:'absolute'
                });
        }
    });

});

{% endhighlight %}

Notice that we declare scrollDepth inside the event handler. That's because every time the event handler fires (whenever the user scrolls), we need to check anew how far the user has scrolled. 

It's equally significant that we declare the sticky element's depth outside of the event handler. If we stored the element's distance from the top of the page on every scroll event, we'd run into a couple of problems. 

First, we'd be needlessly re-evaluating a value we already know the first time we store it, which would be terrible for performance. Second, the value of elDepth would change each time you declare it, since the element's distance from the top of the page is changing. That will really cause problems for you once you've scrolled any further than elDepth.

So the first part is done. Let's work on the second part in a separate event handler and integrate it all later. 

## Second, we make it fade in and out when the user scrolls

If you know about the `setTimeout` method, you might think this is as simple as attaching an event handler to the scroll, fading it in, setting a Timeout to occur in a few seconds, and fading out. 

Like this: 

{% highlight javascript %}

$(function () {
//select the element
    var el = $('.the-element'); 

    $(window).scroll(function () {
//fade it into view when the user scroll
        el.fadeIn(); 
//wait 5 seconds and fade it out again
        setTimeout(function () { 
            el.fadeOut();
        }, 5000);

    });

});

{% endhighlight %}

Not quite.

This would probably work if it were a `click()` or `hover()` event handler, or any other handler that doesn't usually fire in short succession. But because we're working with a scroll event handler (which often fires many times per second), the event is likely to fire multiple times during the timeout event. When that happens, you end up with the element fading in and out very quickly for several seconds while the browser tries to catch up after the timeout. 

So, we need to use the clearTimeout method, as well as a simple flag to check to see if the timer has already been set before proceeding through the entire event handler. 

Here's how we do it: 

{% highlight javascript %}

$(function () {

    var el = $('.the-element');
// declare the flag here, so the value persists between events    
    var fadeTimer; 

    $(window).scroll(function () {
        el.fadeIn();
//if fadeTime returns true, it has already been set...
        if (fadeTimer) { 
 //...so we need to clear it, or in other words, deactivate it. 
            clearTimeout(fadeTimer);
        }
//here, we initialize/re-activate the timeout
        fadeTimer = setTimeout(function () { 
// when the timeout is finished, we'll reset its value
            fadeTimer = 0;
//and fade out the element 
            el.fadeOut(); 
//set the timeout to ten seconds
        }, 10000); 
    });

});

{% endhighlight %}

In essence, we've told it to restart the timer every time a scroll event fires. 

Finally, we squish steps one and two together and we're done. 

{% highlight javascript %}

$(function () {

    var el = $('.the-element');
    var elDepth = el.offset().top;
    var fadeTimer;

    $(window).scroll(function () {
        el.fadeIn();

        if (fadeTimer) {
            clearTimeout(fadeTimer);
        }

        fadeTimer = setTimeout(function () {
            fadeTimer = 0;
            el.fadeOut();
        }, 10000);

        var scrollDepth = $(window).scrollTop();

        if (elDepth > scrollDepth) {
            el.css({
                position:'fixed'
                });
        } else {
            el.css({
                position:'absolute'
                });
        }
    });

});

{% endhighlight %}

Hope that helps. Happy javascripting. 


