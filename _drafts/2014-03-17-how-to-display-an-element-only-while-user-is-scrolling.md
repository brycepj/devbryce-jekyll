---
layout: post
title:  "How to display an element only while the user is scrolling"
date:   2014-03-17
categories: javascript
time: 3 min
snippet: Certain navigation elements are only useful to users when they're looking for new content. The following is a simple tutorial for making an element fade in as the user scrolls and fadeout as they pause to read.    
---



{% highlight javascript %}

$(function () {
    var toc = $('.tableOfContents');
    var fadeTimer;

    toc.fadeOut();
    $(window).scroll(function () {
        toc.fadeIn();

        if (fadeTimer) {
            clearTimeout(fadeTimer);
        }

        fadeTimer = setTimeout(function () {
            fadeTimer = 0;
            toc.fadeOut();
        }, 10000);
    });
});


{% endhighlight %}