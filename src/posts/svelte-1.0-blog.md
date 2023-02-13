---
title: New Framework, New Blog
date: '2023-01-25'
excerpt: With Sveltekit v1.0 comes a new iteration of my forever WIP website!
archive: false
---

As it seems is tradition at this point - I rewrote my blog.

When I got the itch to jump back into VSCode a few days ago, I had already felt like rewriting it because I had seen what I thought would be a really nice way to do it on someone else's blog a while back. And, as it turns out, using software that's in beta can be pain later on when breaking changes are made (who woulda thought!) so when I found that blog post, there was a big disclaimer saying that Sveltekit had moved from the file-based writing the post was originally written for to *folder-based routing*.

That didn't turn out to be too much of a change though - sure I had to refactor my file structure and relearn data fetching and whatnot, but the new method has been working wonderfully. I did have some bizarre issues with npm and updating my packages but that's neither here nor there. The worst part about the new routing is that I end up with a bunch of `+page.svelte` files open in VSCode and it's sometimes hard to tell what's what. Either way, the new router is here, and I think it makes more sense. Whether or not that's because I've worked with it more recently than file-based routing or because it's actually more intuitive, I'm not sure.

Having said all that, what did I actually change? Not a whole lot, really. The most noticable change is probably the styling on the homepage and the blog index. Aside from that though, I added a new [archive](/blog/archive) page to keep my older posts that I don't like as much. I've also gotten rid of the projects page as I didn't really like how it looked and I didn't feel like it served much purpose. I might add it back in the future though, who knowsss.

ANYWAY - enough with words that are written well, go read [this](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) post by Josh Collinsworth and [this one](https://fantinel.dev/blog-development-sveltekit/) by Matt Fantinel if youre curious to see how my blog works now. i might write a more in-depth explanation of what my code actually does in the future bc i didn't exactly follow either of those but theyre close enough. i also dont feel like explaining how my code works :D you can always take a look at the [source](https://github.com/kaytwastaken/kayt-dev-svelte) though!