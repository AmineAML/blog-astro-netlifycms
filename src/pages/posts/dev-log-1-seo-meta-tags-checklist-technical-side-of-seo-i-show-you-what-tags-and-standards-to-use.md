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
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
</html>
```
### Title tag
Its what get shown in search results and should have keywords you want to rank for in results.
```html
<html>
  <head>
    <title>Space Technologies</title>
  </head>
</html>
```
### Description tag
Keep this one to 160 characters max, this tag should also include keywords to reinforce your title tag.
```html
<html>
  <head>
    <meta name="description" content="The space race resulted in amazing innovations in terms of tech that allowed humans to see and understand better a fraction of the misterious universe" />
  </head>
</html>
```
### Robot tag
Pay attention to this one, perhaps you have a page you don't want to show on search results, let's say an admin page or something new you're testing, the only way people can find it is if you give the a link or you have linked from other pages.
```html
<html>
  <head>
    <meta name="robots" content="noindex,nofollow">
  </head>
</html>
```
### Keywords tag
You probably shouldn't care to add this one, I'm adding it here as it used to work, but nowadays after being so much abused, search engines don't mind it the same value they used to give it before. What this tag does is to list the target keywords you want to rank for.
```html
<html>
  <head>
    <meta name="keywords" content="example, another example" />
  </head>
</html>
```
### Author tag
Name of the page's author.
```html
<html>
  <head>
    <meta name="author" content="John Doe">
  </head>
</html>
```
### Language tags
A language tag or attribute as we're going tells a search engine what language is the page written with, which help ranking it higher for users using it.

Bing use their own unique way of identifying a website's language which define the intended audience language but not necessarly the content's language. We use a combination of language code according to ISO 639-1 and region code according to ISO 3166. 
```html
<html>
  <head>
    <meta http-equiv="content-language" content="en-us">
  </head>
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
  <head>
    <link rel="alternate" hreflang="en" href="https://www.example.com">
    <link rel="alternate" hreflang="de" href="https://www.example.com/de">
  </head>
</html>
```
We can be specific by adding regions.
```html
<html>
  <head>
    <link rel="alternate" hreflang="en-ca" href="https://www.example.com/ca">
    <link rel="alternate" hreflang="en-au" href="https://www.example.com/au">
    <link rel="alternate" hreflang="x-default" href="https://www.example.com/" />
  </head>
</html>
### Canonical tag
When search engines crawl your website, they can do it using many URLs for the same page, for example, crawling your home may lead an engine to have:
- https://yourwebsite.tld
- http://yourwebsite.tld/index.php
- and even more
These all lead to the same page, therefore by adding a canonical link we tell them which URL to pay attention to
```html
<html>
  <head>
    <link rel="canonical" href="yourwebsite.tld"  />
  </head>
</html>
```

## body tags
There are some rules for tags you use in the HTML body that you should keep in mind to help search engines' crawlers to better understand the content on your pages. When making a layout for make sure include the following elements:
- Header tags
- ALT attributes for the `<img />` tag
- ARIA attributes for tags other than an image tag
### Anchor tag
When linking to an external website that has a low authority, this can harm your rankings on search results, add 'external nofollow' to `<a>` tag to protect your authority and also the text should be descriptive to help make sense of the link:
```html
<html>
  <body>
     <a href="http://www.website.com/" rel="nofollow">Low authority website</a>
  </body>
</html>
```
Such ways that were newly introduced to help crawlers better understand your website are: \
Sponsored link which identifies affiliate links, means you were paid to have the link on your page.
```html
<html>
  <body>
     <a href="http://www.website.com/" rel="sponsored">Link Text</a>
  </body>
</html>
```
UGC (User Generated Content) link to protect yourself from the bad effect it can have on your website authority from users of your website (say you have a comment section) linking to external websites (I should mention that vice versa, when a website with good authority links to yours it does improve yours' authority on the web).
```html
<html>
  <body>
     <a href="http://www.website.com/" rel="ugc">Link Text</a>
  </body>
</html>
```


## social media

### Facebook

### twitter

### Google+



## Location tags



## Translation tags
Language affects the SEO of your website, one way is that search engines results might display pages from your website that are translated in a language your content is not available in, this is done because of the auto translate feature.\
You might think that this is a good idea, you get to have a wider outreach of your content without having to write content in other languages all thanks to a search engine feature.\
But here is the trick, this translation is done automatically on the results page (if you're on a desktop you can add extensions to your browser that translate content in your own language) and when the person opens your page they get surprised the content isn't in a language they can understand nor in the language used in their search, as fast they leave your website which harms the bounce rate of it.\
How can we fix this? actually there is multitude of ways to deal with this which can disable manual translation if the user uses a translation extension.
### Tag specific
Let's you won't to disable translation on a section on the page, or perhaps in this example your company name is 'Frozen Fruits' it doesn't make sense to be translate to French as the trademark is registered in English.
```html
<html>
  <body>
     <small>© 2020 <span translate="no">BrandName</span></small>
  </body>
</html>
```
### All page
Disable auto translation on the whole page can be done on the HTML tag.
```html
<html class="notranslate" translate="no">
</html>
```
### Website
Or you can disable the translation on the whole website by telling robots when crawling the website.
```html
<html>
  <head>
    <meta name="robots" content="notranslate">
  </head>
</html>
```
Otherwise, you can target only Google.
```html
<html>
  <head>
    <meta name="googlebot" content="notranslate">
  </head>
</html>
```

schema markup