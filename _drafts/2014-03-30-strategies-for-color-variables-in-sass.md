---
layout: post
title:  "4 strategies for naming and organizing color variables with SASS or LESS"
date:   2014-03-30
categories: scss
time: 7 min
snippet: With CSS pre-processors, you can create variables to store color values so you can reference them throughout your project. Here are a few ways to keep them organized.
---

LESS and SASS add a lot to what you can do with CSS. The benefit you see in most introductory tutorials is color variables.

They don't really revolutionize the way we write front-end code, but anyone who's coded a website knows how useful it would be to change every occurence of a color on a whim, or be able to write color values in real English, rather than constantly keep looking up hex and rgb values.

But the examples you'll see most often are not actually demonstrative of how you should use them in your own projects.

Take for example, the tutorial on SASS.

>It says this this this and this

1. Call them colors

CODE sample
$blue : #999999
$purple : #333333
$dark-purple : #333333
Pros
-makes it easy when you're building a small site to quickly type in variables and change all occurences of those variables later. Good for refactoring into LESS or SASS, where you want to categorize all uses of a color quickly.
Cons
-ongoing maintence you won't remember at all where things are used, change the value to look good in one place, looks bad elsewhere
-gets crazy when you start adding shades of color
-doesn't have any locality


2. Call them colors, but do it locally

split up your pages, and because they're preprocessed they won't show up in your code. You can put them at the top of a page if you use a color. Global variables will be available everywhere and local ones will be overwritten.

PROS
-you get the
-if different pages have different themes or pallettes allows you to localize meaning

CONS
-could get very disorganized very quickly if your working with multiple values

3. Name them by where they occur

PROS
-you'll never mix it up
-very modular easy to know what you're changing

CONS
Super specific

4. Name them by color and module

In my mind, this is the sweetspot. It reminds me a lot of the SMACSS naming methodology actually.

You name them as specifically as you can with color and the modules they're in.

Group almost, like you would your SASS files. With global colors, and

PROS

CONS
-Takes longer, and you'll be working with a bigger stylesheet.

Protip: If you use Webstorm, you get this sweet little toolbar that shows the actual color of the value.