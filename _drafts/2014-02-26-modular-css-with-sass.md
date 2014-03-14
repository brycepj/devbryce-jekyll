---
layout: post
title:  "How I modularize my stylesheets with SASS and SMACSS"
date:   2014-02-05
categories: scss
time: 15 min
snippet: Much thanks to CSS pre-processors, it's easy to break up your styles into flexible, reusable modules. Here's how I do it with SASS and SMACSS.  
---

There's a lot of talk about 'modular CSS' these days. Chris Coyier talks about it [here](http://css-tricks.com/sass-style-guide/), Louis Lazaris talks about it [here](http://www.impressivewebs.com/modular-css-media-queries-sass/) and smart folks like Johnathan Snook and Nicole Sullivan have really written extensively about strategies ([SMACSS](http://smacss.com/book/) and [OOCSS](http://oocss.org/), respectively) that help designers and developers acheive it. 

Really, modular code is not a new idea. It's based on old school software engineering principles that designers and CSS people can finally start seriously implementing now that we have pseudo-programming-language supersets of CSS to work with. 

That said, when I was first learning about pre-processors, I didn't really have any good examples of how to organize my code with them. Everything I read sounded great, but felt a little abstract, and removed from the many complicated decisions you make when you're coding up a website or app. 

In this post, I'll walk you through a simple project (this blog) that will help us explore how SASS (sorry LESS people, [SASS is objectively better](http://css-tricks.com/sass-vs-less/)) and SMACSS can change your workflow. But first...

## Wait, why 'modular CSS' though?

Given that cascading stylesheets are fairly simple, you might wonder: why not just write all of your CSS on one stylesheet (especially for small projects) Not to mention, we usually end up linking to a single stylesheet from the HTML. The main reasons are to make your like easier--by and large if you're keeping it all to one stylesheet, performance isn't likely to be a big deal. Link to piece about 

## File Structure

First off, here's a snapshot of how I usually organize my files.

![scss file structure](/assets/images/folder-structure.png)

Styling that will apply globally goes, naturally, in a global folder, while page specific elements (like the loop, which shows a list of post previews) go in a modules folder. Here, I only have one file in the pages folder, but if I wanted to use different stylesheets for different pages, this is where I'd designate that (more on what's actually contained in these stylesheets later). Finally, the vendors folder, which is where I usually stash icon font stylesheets, bootstrap styling, and in this case, syntax highlighting styles for code samples. 

## A tour of the stylesheets

Clearly I'm working with a lot of different files, none of which I'm linking to in my HTML `<head>`. That's because SASS makes it easy to only ever have to link to one CSS file on each page, which is good for performance (fewer HTTP request = good). When I compile it all (using Grunt--more on this later), it all sits in one pretty little `stlye.css` file. 

Below I've included snippets from the top of each of my SASS files, to give you an idea of what I use the file for and how it makes it into the final stylesheet. 


Show HTML page  with one CSS link

Show the Overall File structure and briefly describe each section

Show imports in base and modules and pages section

Show an example of the layout file

Show an example of the header file

Show an example of a state file

Show example of the base file

Show an example of the mixins file

and the swatch

## Compile it all with Grunt or Codekit

Then with Grunt (or CodeKit), it's easy to select all the files, preprocess them and then turn them into one stylesheet. Show grunt file. Link to 24 ways article. 

## Concluding Thoughts

