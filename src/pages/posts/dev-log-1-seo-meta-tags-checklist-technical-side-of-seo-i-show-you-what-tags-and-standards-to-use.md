---
layout: ../layouts/article.astro
title: "Dev Log 1: SEO Meta Tags Checklist"
description: Technical side of SEO, I show you what tags and standards to use.
content: example
topics:
  - HIDE_DEFAULT_TOPIC
date: 2023-02-19T20:32:59.745Z
image: public/assets/posts-images/pexels-evg-kowalievska-1174775.jpg
author: Amine Amellouk
quote: it’s not enough to be good. In order to be found, you have to be findable.
quote_by: Austin Kleon
image_source: EVG Kowalievska on Pexels
---
I've been sitting on this for while, recently I had to make a website SEO-friendly, so I went to previous projects as I tend to keep a documents in each one with what I've learned and useful links. Honestly, I dread the feeling to search for something for way too many times, that's why it's important to keep track of your learning in a concise document.


In this article, I present a cheat-sheet for various meta tags that you can copy&paste and I can look back at for easy access, this should serve primarly as a reference, you can find links for sources at the end section of this article. Remember, even if ChatGPT is trending for its capabilities to help you rank at the top of search engines' results, its equally important to have your tags in place.\


## Head Tags

The head tag `<head></head>` is where you'll add every `<meta>` tag, we'll see some on this section and keep other specifc ones for other sections.
### Responsiveness tag
Does tell that your website is mobile responsive so that you gain visibility in search results from mobile phones.
```html
<html>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</html>
```
### Title tag
Its what get shown in search results and should have keywords you want to rank for in results.
```html
<html>
  <title>Space Technologies</title>
</html>
```
### Description tag
Keep this one to 160 characters max, this tag should also include keywords to reinforce your title tag.
```html
<html>
  <meta name="description" content="The space race resulted in amazing innovations in terms of tech that allowed humans to see and understand better a fraction of the misterious universe" />
</html>
```
### Robot tag
Pay attention to this one, perhaps you have a page you don't want to show on search results, let's say an admin page or something new you're testing, the only way people can find it is if you give the a link or you have linked from other pages.
```html
<html>
  <meta name="robots" content="noindex,nofollow">
</html>
```
### Keywords tag
You probably shouldn't care to add this one, I'm adding it here as it used to work, but nowadays after being so much abused, search engines don't mind it the same value they used to give it before. What this tag does is to list the target keywords you want to rank for.
```html
<html>
  <meta name="keywords" content="example, another example" />
</html>
```
### Author tag
Name of the page's author.
```html
<html>
  <meta name="author" content="John Doe">
</html>
```
### Language tags
A language tag or attribute as we're going tells a search engine what language is the page written with, which help ranking it higher for users using it.

Bing use their own unique way of identifying a website's language which define the intended audience language but not necessarly the content's language. We use a combination of language code according to ISO 639-1 and region code according to ISO 3166. 
```html
<html>
  <meta http-equiv="content-language" content="en-us">
</html>
```
Otherwise, for other search engines, you can define it on the `<html></html>` tag according to ISO 639-1 language code.
```html
<html lang="en">
</html>
```
While here, we can also mention other tags that serve to link to other versions of your website in another language.
```html
<html>
  <link rel="alternate" hreflang="en" href="https://www.example.com">
  <link rel="alternate" hreflang="de" href="https://www.example.com/de">
</html>
```
We can be specific by adding regions.
```html
<html>
  <link rel="alternate" hreflang="en-ca" href="https://www.example.com/ca">
  <link rel="alternate" hreflang="en-au" href="https://www.example.com/au">
  <link rel="alternate" hreflang="x-default" href="https://www.example.com/" />
</html>
### Canonical tag
When search engines crawl your website, they can do it using many URLs for the same page, for example, crawling your home may lead an engine to have:
- https://yourwebsite.tld
- http://yourwebsite.tld/index.php
- and even more
These all lead to the same page, therefore by adding a canonical link we tell them which URL to pay attention to
```html
<html>
  <link rel="canonical" href="yourwebsite.tld"  />
</html>
```

body tags



social media

facebook

twitter

google+



location tags



translation tags



schema markup