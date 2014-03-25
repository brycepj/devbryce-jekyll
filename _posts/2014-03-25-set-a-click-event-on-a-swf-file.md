---
layout: post
title:  "Yes, you can painlessly set a click event on a .swf file"
date:   2014-03-25
categories: javascript
time: 1 min
snippet: No, you don't have to touch ActionScript or manipulate object params in the DOM if you don't want to. Spoiler alert, mousedown.
---
Flash is going the way of the dinosaur, but there are still lots of us that need to work with it.

At work, I recently had to write a script that would manipulate the DOM when a .swf `object` gets clicked.

That's difficult because the `object` element in the DOM doesn't respond to an inline`onclick` attribute, nor will it respond to js/jquery `.click()` event handlers.

You also can't set a click event on a wrapper because the .swf object, for all intents and purposes, has a z-index of infinity and will prevent the event from properly bubbling up.

I did some googling and found [this](http://stackoverflow.com/questions/1927627/how-to-add-click-event-to-swf-file):

> Why not stretch a big invisible button across the SWF? If it's not your SWF, then make another flash file with a button over the top, and import the SWF you wanted in the first place.

Gross.

I also read a few places that say you can pass a `param` to the `object` that makes the file transparent:

{% highlight html %}

<object data="yourMovie.swf" type="application/x-shockwave-flash" width="740" height="103" id="menu" align="middle"><param name="allowScriptAccess" value="sameDomain">

        <param name="wmode" value="transparent">

      //fallbacks and other stuff go here
</object>


{% endhighlight %}

But I couldn't get that to work.

What finally worked was using `onmousedown` (inline) or setting a 'mousedown' event listener (externally).

In fact, any of these would work:

Inline HTML:

{% highlight html %}

<script>

    $(document).ready(function(){

        function awesomeFunction(){

            //do your worst

        }

    });

</script>

<body>
    <object onmousedown="awesomeFunction()" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="550" height="400" id="movie_name" align="middle">
        <param name="movie" value="movie_name.swf"/>

        <!-- your fallbacks go here... see: http://helpx.adobe.com/flash/kb/object-tag-syntax-flash-professional.html -->

    </object>
</body>
{% endhighlight %}



External JS:

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

Note that the `.on()` and `.bind()` methods accept different parameters. If you don't know the difference, go read up on them [here](https://api.jquery.com/on/) (on) and [here](https://api.jquery.com/bind/) (bind).
