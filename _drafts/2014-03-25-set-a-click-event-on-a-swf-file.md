---
layout: post
title:  "Yes, you can painlessly set a click event on a .swf file"
date:   2014-03-25
categories: javascript
time: 1 min
snippet: No, you don't have to touch actionscript or manipulate object params in the DOM. 
---
Flash is going the way of the dinosaur, but there are still lots of us that need to work with it occassionally. 

At work, I recently had to write some JavaScript that would manipulate the DOM when a .swf `object` is clicked. 

That's difficult because the `object` in the DOM doesn't respond to an inline`onclick` attribute (tsk! tsk!) nor does it like your everyday external js/jquery click event.

You also can't set a click event on a wrapper because the .swf object, for all intents and purposes, has a z-index of infinity so the click won't properly bubble up to its parent element. 

The trick is using `onmousedown` or setting a 'mousedown' event listener.

Any of these would work: 

{% highlight javascript %}

//in vanilla js

var swf = document.getElementById('my-swf-obj');

swf.addEventLister('mousedown',function(e){

	//do your worst

});


//or with jquery 'on'

$('#my-swf-object').on('mousedown','#swf-parent',function(e) {

   //do your worst

});

//or with jquery 'bind'

$('#my-swf-object').bind('mousedown', function(e) {

   //do your worst

});

{% endhighlight %}

Take note that the `.on()` and `bind()` methods accept different parameters. If you don't know the difference, go read up on them [here](https://api.jquery.com/on/) (on) and [here](https://api.jquery.com/bind/) (bind).

