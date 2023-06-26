---
title: my blog has RSS!
date: '2023-06-25'
excerpt: After saying I'll do it later for ages, I finally have an RSS feed for my blog!
archive: false
---

## awesome! how do i use it?

just point any rss aggregator at https://kayt.dev/rss :D

## ok but why did it take so long?

short story short, i get distracted easily, i don't use RSS much myself, and it seemed like too much of a hassle

short story somewhat longer, it always seemed cool, but given that i barely use RSS, it didn't seem like a priority to me. it was also a little bit of a pain to actually get it set up. there's plenty of tutorials available if you just search `sveltekit rss feed` but those were all made *before SvelteKit v1.0.0 was released*. as you'll know if you've read my ["new framework new blog"](/blog/svelte-1.0-blog) post, the update to v1 was a big one. <br><small>i mean, that's to be expected given that's it's a major version revision, but you know what i mean</small><br>svelte switched from file-based routing, to folder-based routing. if you're anything like me that means absolutely nothing at face value, but what it meant for adding RSS is mostly just that I had to filter for only search results after august 2022.

doing that brought me to a [wonderful tutorial](https://joyofcode.xyz/sveltekit-markdown-blog) from joyofcode.xyz<br><small>man i have to say i love xyz domains,,, they're just so,, ✨funky✨</small><br>it's about making a SvelteKit markdown blog, which happened to include a section on adding RSS. i absolutely recommend it if you're looking to do something similar.

after rewriting my post fetching api to match the one from the tutorial and setting up a route to serve the rss xml, i just had to validate it and make sure it actually worked

which would normally be incredibly easy

but apparently one of my extensions injects errant script tags into raw xml responses? they're completely empty, so I don't see any purpose to them, but this gave me a little bit of an extra hassle when validating.

at first, firefox was just showing me the plaintext, without any xml syntax or formatting. it looked off but i threw it in the validator and sure enough it failed

dont ask why i thought it would work, im not entirely sure myself.

but then i opened the developer console thinking maybe it just displaying strangely, and there was my largely perfect xml,, except for those script tags. I thought it was an issue with svelte putting them there, so i just looked up `svelte script tags xml` which led me to a [github issue](https://github.com/sveltejs/kit/issues/9360) which was immediately closed by the person who opened it stating it was an extension causing the issue.

that on its own is helpful enough i suppose, though i would've liked to have known which one it was before i went through disabling each extensions and reloading the rss page.

i was able to at the very least get the xml to display properly by disabling Privacy Possum, but there's still an erroneous script tag that only shows up in firefox with my extensions turned on but I can't be bothered to figure out which one is causing the issue.

it works fine in brave and firefox on my phone so :shrug:

~~in the future, i think i would like to have the feed show the full content of the posts rather than just a description, but the way im currently serving posts doesnt easily lend itself to that.~~

**EDIT: 2023-06-26<br>**
IT WORKS !! the rss feed now loads the whole content of posts rather than forcing you to open the link to the page (thanks elly)

i not particularly fond of how i fixed it, but hey it works and its not that bad.

but aaaaaaaanyway, we finally got RSS and i'm pretty proud of myself for adding it :)<br>so thank you dear reader for perusing my ramblings, and i hope you have a wonderful day full of joyous delight and adequate hydration.