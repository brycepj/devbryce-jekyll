---
layout: post
title:  "Staging files with git quickly and precisely in interactive mode"
date:   2014-08-25
categories: git
time: 3 min
snippet: I used to think there were only two ways to stage files with git prior to commiting them-- all at once, or one at a time. Until I found interactive mode.
---

I used to think there were only two ways to stage files with git prior to commiting them: `git add filename` -- which stages files one at a time -- and `git commit -am` -- which automatically stages all modified files and commits them. 99% of the time I used the latter, as it is far faster and always seemed to get the job done.

This worked well until I started working at a company that cares about its commit histories. It was important that commits articulately describe modifications made, and that unrelated modifications be committed separately. 

To be careful, I started only using `git add filepath` to make sure I wasn't commiting changes that weren't mentioned in the commit message. It was tedious, to the point that I started thinking there had to be a better way. Turns out, there is. 

It's called interactive mode. Run it with: `git add -i`. 

First thing, you'll be taken to a file that shows all the files you've changed and asks you what you want to stage. 

It will look something like this: 

```
          staged     unstaged path
  1:    unchanged     +80/-185 .idea/workspace.xml
  2:    unchanged        +2/-2 README.md
  3:    unchanged        +1/-1 scss/global/_layout.scss
  4:    unchanged        +1/-0 scss/modules/_aside.scss
  5:    unchanged        +5/-0 ts/view/Container.ts

*** Commands ***
  1: status	  2: update	  3: revert	  4: add untracked
  5: patch	  6: diff	  7: quit	  8: help
What now> 

```

The line at the bottom, "What now" is a prompt for you to tell it what you want. If you want to quickly stage any relevant files, type `u` and `Enter` to update.

Then, in the next prompt, type the numbers associated with the files you want to stage, separated by commas. 

Like this: 

```
           staged     unstaged path
  1:    unchanged     +80/-185 .idea/workspace.xml
  2:    unchanged        +2/-2 README.md
  3:    unchanged        +1/-1 scss/global/_layout.scss
  4:    unchanged        +1/-0 scss/modules/_aside.scss
  5:    unchanged        +5/-0 ts/view/Container.ts
Update>> 2,1

```

Above, I've opted to stage files "2" (README.md) and "1" (.idea/workspace.xml) because they were part of the same general change I was working on (documentation). Now, hit `Enter` again, and you'll get a screen showing you the files you've selected with asterisks next to them. Like this: 

```
           staged     unstaged path
* 1:    unchanged     +80/-185 .idea/workspace.xml
* 2:    unchanged        +2/-2 README.md
  3:    unchanged        +1/-1 scss/global/_layout.scss
  4:    unchanged        +1/-0 scss/modules/_aside.scss
  5:    unchanged        +5/-0 ts/view/Container.ts
Update>> 
```

If that's all you wanted to do, type in "q" and hit `Enter` to exit, and you're done. Type `git status` into the command line, and you'll see that the files you chose have been staged and are ready to be committed. 
