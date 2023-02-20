---
layout: ../layouts/article.astro
title: "Dev Log 1: SEO Meta Tags Checklist"
description: Technical side of SEO, I show you what tags and standards to use.
content: Technical side of SEO, I show you what tags and standards to use.
topics:
  - SEO
date: 2023-02-19T20:32:59.745Z
image: public/assets/posts-images/pexels-evg-kowalievska-1174775.jpg
author: Amine Amellouk
quote: it’s not enough to be good. In order to be found, you have to be findable.
quote_by: Austin Kleon
image_source: EVG Kowalievska on Pexels
---
I've been sitting on this for while, recently I had to make a website SEO-friendly, so I went to previous projects as I tend to keep a documents in each one with what I've learned and useful links. Honestly, I dread the feeling to search for something for way too many times, that's why it's important to keep track of your learning in a concise document.


In this article, I present a cheat-sheet for various meta tags that you can copy&paste and I can look back at for easy access, this should serve primarily as a reference, you can find links for sources at the end section of this article. Remember, even if ChatGPT is trending for its capabilities to help you rank at the top of search engines' results, its equally important to have your tags in place.


## Head Tags

The head tag `<head></head>` is where you'll add every `<meta>` tag, we'll see some on this section and keep other specific ones for other sections.
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

Bing use their own unique way of identifying a website's language which define the intended audience language but not necessarily the content's language. We use a combination of language code according to ISO 639-1 and region code according to ISO 3166. 
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
This would not effect your find-ability on search results, however when someone pastes your link on e.g Facebook, you need to have it well formatted which brings more attention to it. Social network use different rules for formatting.
### Facebook
Facebook don't have their unique standard with whom they force you to use, rather, they use Open Graph tags, here is an example for how to use it with an article page.
```html
<html>
  <head>
    <meta property="og:title" content="Space Technologies Week Updates">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://spacetechnologies.com">
    <meta property="og:image" content="https://image.link">
    <meta property="og:image:alt" content={`Thumbnail space technologies latest week updated for blog post">
    <meta property="og:description" content="Looking at the stars we always wondered what is there, are those lanterns hanged above us or is that whole other worlds there">
    <meta property="og:site_name" content="Spce Technologies">
    <meta property="fb:admins" content="Facebook numeric ID" />
    <meta property="article:published_time" content="01/01/2022">
    <meta property="article:modified_time" content="02/01/2022">
    <meta property="article:author:first_name" content="John">
    <meta property="article:author:last_name" content="Doe">
    <meta property="article:section" content="Tech">
    <meta property="article:tag" content="Tech">
  </head>
</html>
```
### Twitter
Has its own rules for Meta Tags to follow.
```html
<html>
  <head>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@doe_john />
    <meta name="twitter:title" content="Space Technologies" />
    <meta name="twitter:description" content="Looking at the stars we always wondered what is there, are those lanterns hanged above us or is that whole other worlds there" />
    <meta name="twitter:image" content="https://image.link" />
    <meta name="twitter:image:alt" content="Space Technologies Thumbnail" />
  </head>
</html>
```
### Google+
As for Google+, its based on the Schema Markup.
```html
<html>
  <head>
    <meta itemprop="name" content="Space Technologies">
    <meta itemprop="description" content="Looking at the stars we always wondered what is there, are those lanterns hanged above us or is that whole other worlds there">
    <meta itemprop="image" content="https://image.link"> 
  </head>
</html>
```

## Location tags
These tags are for the physical location of a business therefore it boosts your Local SEO. \
The first one is for the geographic latitude and longitude.
```html
<html>
  <head>
    <meta name="geo.position" content="48.169822;11.601171" />
  </head>
</html>
```
Add another one for the country code and regional code.
```html
<html>
  <head>
    <meta name="geo.region" content="DE-BY" />
  </head>
</html>
```
Next, is the name of the place, typically this should refer to your city or the nearest town.
```html
<html>
  <head>
    <meta name="geo.placename" content="München" />
  </head>
</html>
```
The ICBM is a valid tag and is similar to the 'position' shown above, it's widely used.
```html
<html>
  <head>
    <meta name="ICBM" content="48.169822, 11.601171" />
  </head>
</html>
```
This last one has nothing to do with the geo location of your business, alas some databases extract the title of your page from the meta, title can be the same one of your page title.
```html
<html>
  <head>
    <meta name="DC.title" content="Space Technologies" />
  </head>
</html>
```

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
     <small>© 2020 <span translate="no">Frozen Fruits</span></small>
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

## Schema Markup
Schemas are used to structure data on the internet, web pages, email messages and beyond, it's the language search engines use to read and understand the content of your page, its the one responsible for correctly formatting your page on the search results, just think of how food recipes pages or news articles look unique the search engine results. Schema Markup is a semantic vocabulary, you'll have to use an encoding format like JSON-LD as the one I prefer and we'll be seeing an example of it, other encodings include MicroData and RDFa. \
JSON-LD is embedded in the `<head></head>` tag, the following is an example for an article page.
```html
<html>
  <head>
     <script type="application/ld+json">
       {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": Space Techonologies,
          "image": [
               "https://image.link"
          ],
          "datePublished": date,
          "dateModified": date,
          "author": {
             "@type": "Person",
             "name": John Doe,
                 "url": johndoe.com
             }
          }
     </script>
  </head>
</html>
```

## Tools
It never a bad idea to check the validity of your SEO, on this part I'm going to list a couple of useful tool to do audits:
- [Checkbot](https://www.checkbot.io/)
- [Woorank](https://www.woorank.com/)

Have a look at these tags validators and generators:
- [HTML Geo Tag Generator](https://www.geo-tag.de/generator/en.html)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google's Rich Results Test for Schema Markup Validator](https://developers.google.com/search/docs/appearance/structured-data)
- [Pinterest Rich Pin Validator](https://developers.pinterest.com/tools/url-debugger/)

And of course official tools to up your game:
- [Google Search Console](https://search.google.com/search-console/about/)
- [Bing Webmaster](https://www.bing.com/webmasters/about)
- [Yandex Webmaster](https://webmaster.yandex.com/welcome/)
- [Google Search Performance Report](https://support.google.com/webmasters/answer/7576553)

Looking to find keywords, then you can use these tools:
- [Ubersuggest](https://neilpatel.com/ubersuggest/)
- [Google's Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)

## Conclusion
This post can only serve as a reference and quick-to-check guide, if you want to learn more then I can make another article delving deep into things here or you can look at the bellow resources for more details.

## Sources and useful links
- [W3C Meta Tags](https://www.w3schools.com/tags/tag_meta.asp)
- [Bounce Rate](https://www.w3schools.com/tags/tag_meta.asp)
- [Schema](https://schema.org/)
- [JSON-LD](https://json-ld.org/)
- [MicroData](https://html.spec.whatwg.org/multipage/microdata.html#microdata)
- [RDFa](https://rdfa.info/)
- [https://ogp.me/](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)