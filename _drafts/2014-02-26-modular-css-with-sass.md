---
layout: post
title:  "How I modularize my stylesheets with SASS and SMACSS"
date:   2014-02-05
categories: scss
time: 5 min
snippet: Much thanks to CSS pre-processors, it's easy to break up your styles into flexible, reusable modules. Here's how I do it.  
---

There's a lot of talk about 'modular CSS'. Chris Coyier talks about it here, here, and here, and smart folks like Johnathan Snook and Nicole Sullivan have really laid out some methodlogies (SMACSS and OOCSS, respectively) that help designers and developers do it. 

That being said, when I was doing that I didn't really have any good examples of what it looked like. Below I'll walk you through a simple project that allows us to explore how it might be used and compare it against the long stylesheet. 

## Wait, but why 'modular'?

Given that cascading stylesheets are fairly simple, you might wonder. Not to mention, we usually end up linking to a single stylesheet from the HTML. The main reasons are to make your like easier--by and large if you're keeping it all to one stylesheet, performance isn't likely to be a big deal. Link to piece about 

## File Structure

## A tour of the stylesheets

In my opinion, the two most important reasons are DRY and ease of development/maintainability.

Show HTML page  with one CSS link

Show the Overall File structure and briefly describe each section

Show imports in base and modules and pages section

Show an example of the layout file

Show an example of the header file

Show an example of a state file

Show example of the base file

Show an example of the mixins file

and the swatch

## Compile it Grunt or Codekit

Then with Grunt (or CodeKit), it's easy to select all the files, preprocess them and then turn them into one stylesheet. Show grunt file. Link to 24 ways article. 

## Concluding Thoughts

