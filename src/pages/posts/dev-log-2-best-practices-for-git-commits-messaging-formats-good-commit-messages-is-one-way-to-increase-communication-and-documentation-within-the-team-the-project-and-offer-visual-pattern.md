---
layout: ../../layouts/article.astro
title: "Dev Log 2: Best Practices For Git Commits Messaging formats"
description: Good commit messages is one way to increase communication and
  documentation within the team, the project and offer visual pattern.
content: Good commit messages is one way to increase communication and
  documentation within the team, the project and offer visual pattern.
topics:
  - Documentation
date: 2023-02-22T21:51:59.746Z
image: public/assets/posts-images/tvcz6r7q2p371.png
author: Amine Amellouk
quote: Any fool can write code that computers can understand. Good programmers
  write code that humans can understand.
quote_by: Martin Fowler
image_source: "-"
---
Commit messages themselves are part of the documentation, whenever I find no documentation for a project then I sight silently, if at least your commits are well structured they could help new people understand the reasoning behind decisions in the projects and would help you remember stuff down the line if you need to. A thing plus to keep in mind, is to have a unified standard for a team, project or your whole organization. \
Look, this is not a guidelines for Git commits, we only have a look about 'git commit' command line on this blog post.

## How a simple commit looks like
A simple commit message looks like this `git commit -m ""`, while other format you can make it more descriptive by adding multiple `-m`, the values are concatenated as separate paragraphs, the first is the subject and the later are paragraphs `git commit -m "text" -m "text"`.

## Rule of thumb for writing messages

### Limit the subject line to 50 characters:
if you can't keep it to that limit then it's a good indication you don't know exactly what you're doing in that commit Sometimes it's okay if you're mentioning a name that is long or if you're referencing a ticket/issue, when it comes to issues you are better off writing them in such format of `WHAT WOULD BE THE STATUS OF TICKET IF THIS COMMIT IS APPROVED [#NUMBER OF TICKET]`. If you have to explain more then do it on the description.

### Capitalize only the first letter of the subject line:
But if you mention a name of a tool or person then these are an exception.
### Don't put a period at the end of the subject line:
A title should not end with a period

### Put a blank line between the subject line and the body:
This is a self descriptive rule, have a blank line between title and body, even you can have blank lines between body sections.

### Wrap the body at 72 characters of the message for each paragraph:
On some command-lines, this rule is applied by default.

### Use the imperative mood:
Start your messages with 'fix' instead of 'fixed' in the subject line and also in the description, consider commits as suggestions that will be added to a pull request therefore you're by having them approved or added they apply those changes to the code.

### Describe the what and why, but not how:
if you explain the how then you would be explaining the code that someone could simply open the file and see how it is done, what you should do instead is mention any limitations to the current code that could make use of improvement later. \
Do not assume the review understands what the original problem was. \
Always take into consideration if you're linking to an external resource that it might not be accessible in the near future therefore use that link as a reference for more details but mention anything you have so that your message can be self-contained, even though you don't have to explain the how a change was done but still if you have to describe the reasoning behind the way they were done with it. \
If the commit has to do with a test or bug then you could include exact steps for how to reproduce it and how to test the solution.

### Add a footer to mention any breaking changes:
A footer is simply another message and you use it to get into details of what functionality the commit break, the message should start with 'BREAKING CHANGE'. \
You can also use a footer to mention the status of tickets that would be affected by the changes on this commit.

## Commit verbs
Here are some suggested verbs to start your commit messages with:

```
chore      -> changes to the code that doesn't involve adding a feature, it can be a change in behavior or updates to existing functionalities or dependencies
docs       -> updates to the documentation
style      -> changes related to code formatting and does not affect the meaning of code, either comments, change text, indentation or even renaming functions and classes
feat       -> a new feature is introduced
fix        -> issue fix
refactor   -> refactored code that does not modify functionalities, doesn't add a feature nor fixes a bug, could be changing a function with another one similar
perf       -> changes that improves performances, those changes could be also mentioned by 'refactor', yet this is unique
test       -> adds new or correcting tests
revert     -> reverts to a previous commit
build      -> changes that affect the build system or external dependencies
ci         -> changes to continuous integration tools' configuration files like pipelines ad project version
ops        -> changes that affects operational side like infrastructure, deployment, backup and recovery
```

All of them could seem overwhelming at first and I usually use mostly 4 of them and you'll find yourself using chore, feat, fix and refactor.

## Make you verbs more meaningful
It can be recommended to even add which part of the code has been affected in between parentheses after the verb, this makes the commit history so much cleaner and organized, serves a more added good on monolithic repositories with many applications or components (known also as scopes):

```
chore(benchpress)
chore(travis)
```

If the commit introduces breaking changes you can draw attention to it by using the '!' symbol:

```
chore!: drop support for IE
```

## Commit template
A commit message can have two sections: a summary (verb (+component affected) + fragment + ticket number (+status of working on it)) and details (explains the why)

```
fix(store): added an extra 10s between each call to the change API after they had decreased their rate-limit [Fixes #1]

* Even though we want to display the change rate real-time on the store, having thousands of customers visits the website at once gets us blocked by the change API.
* What we did was to fetch and cache the supported currencies every 5 minutes and do a unique requests on the cart checkout.
* We also gain and save on performance and network usage.

PR closes #1
```

## Conclusion

What discussed here is my personal preference, yu can use it as it is or base on it your own best practices but keep it good as best it works for you and avoid at all cost bad commit messages even in your personal or private projects as the saying goes what one does when he has nothing is a good indication of what he will do when he has everything.

Keep in mind that:

* A commit should be about one thing.
* If you start listing multiple changes in a single commit then you're doing something wrong and making it harder to roll back if things fail.
* Keep a consistent commit flow, once a feature is implemented, commit it, same as for a fix for a function, a change in variable value and etc, this will give us later on a very good commit history that in itself would serve as a documentation and make them easier to review.

## Sources
This post was done thanks to the talks of Cameron McKenzie, Ryan McGeary, Chris Beams, Open Stack, Conventional Commits, The Angular Commit Message Conventions and others including my personal experience.