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

Interesting way to think about it: http://javascriptweblog.wordpress.com/2010/06/28/understanding-javascript-timers/

Imagine yourself as a function in a single threaded environment. Its not unlike driving along a single lane highway towards a tunnel (the function executer) with a bunch of other functions lined up behind you. There are no other threads so there are no overtaking lanes. Just before you reach the invocation tunnel a traffic cop pulls you over and informs you that you are the subject of a setTimeout call. He asks you to wait for the specified time period. Other functions will overtake and get invoked first. After you have sat out the required delay the traffic cop waves you on. But you can’t always just pull back into the road to enter the tunnel – you still have to let other functions go ahead until there is a break in traffic. This is why even a 1 ms timeout will push a function to the back of the invocation queue. The 1 ms delay is by no means certain, in fact 1ms turns out to be the minimum time you will wait.

console.log(1);
setTimeout(function() {console.log(2)},1);
console.log(3);
console.log(4);
console.log(5);
//console logs 1,3,4,5,2
