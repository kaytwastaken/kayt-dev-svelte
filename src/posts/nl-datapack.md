---
title: My first datapack! New Life v1.0
date: '2022-08-06'
excerpt: Minecraft hardcore, with a twist!
archive: true
---

## if you care more about the techincal parts, skip to [that section](#the-technical-stuff)

### the datapack stuff

I made a datapack! It's called New Life!

![New Life logo](https://mc.kayt.dev/static/images/500px_newlife.png)

Ok but wait, what are datapacks? Good question, they're kind of like plugins or mods, but *much* easier to write and use. You put them in a specific folder inside the world, and you're off to the races! This makes it super nice for running on a server (though at this point it's on par with using plugins).

So what does it do? It adds lives to hardcore! It's heavily inspired by Grian's [Last Life]() series, so it replicated many of those features. I've written a much more detailed description of it over at [mc.kayt.dev](https://mc.kayt.dev/datapacks/new-life), but it adds a way of keeping track of, sharing, and gaining lives in a hardcore-like gamemode. More specifically, it was a way for me to get into command block scripting and Minecraft function notation.

### the technical stuff

When I first saw Grian's various Life series, I wondered how hard it would be to replicate those mechanics with command blocks. So I did that, or at least most of it. In a few hours I threw together a chain of command blocks that would replicate the basic hardcore life system.

```
onDeath is deaths scoreboard
lifeCount is dummy scoreboard

> repeat, unconditional, always active
execute if entity @a[scores={onDeath=1}, team=!dead] as @a[scores={onDeath=1}, team=!dead] run scoreboard players remove @s lifeCount 1
# On death of an alive player, remove one life from onDeath player

> chain, conditional, always active
execute as @a[scores={onDeath=1, lifeCount=0}, team=!dead] run team join dead @s
# For all onDeath players with 0 lives, join team dead

> chain, unconditional, always active
execute as @a[scores={onDeath=1}, team=dead] run gamemode spectator @s
# For all onDeath players on dead team, switch to spectator

> chain, unconditional, always active
execute as @a[scores={onDeath=1, lifeCount=1}, team=!dead] run team join red @s
# For all onDeath players with 1 life join team red

> chain, unconditional, always active
execute as @a[scores={onDeath=1, lifeCount=2}, team=!dead] run team join yellow @s
# For all onDeath players with 2 lives join team yellow

> chain, unconditional, always active
execute as @a[scores={onDeath=1, lifeCount=3}, team=!dead] run team join lightGreen @s
# For all onDeath players with 3 lives join team lightGreen

> chain, unconditional, always active
execute as @a[scores={onDeath=1, lifeCount=4..}, team=!dead] run team join darkGreen @s
# For all onDeath players with 4 or more lives join team darkGreen

> chain, unconditional, always active
execute as @a[scores={onDeath=1}] run scoreboard players set @s onDeath 0
# For all onDeath players set onDeath to 0
```

This couldn't do the more advanced things like sharing lives, or one of the features I wanted to add - gaining lives - though. To do that I moved onto datapacks, because, while command blocks work well, their limited autocomplete and single-command nature made it hard to do more complicated scripts.

Moving to datapacks was actually much easier than I thought it would be. The syntax is somewhat bizarre the first time you see it (see the above code block), but .mcfunction files are simply lists of in-game commands to be run in order. Unfortunately, this means you're stuck with the somewhat hacky method of storing information with scoreboards, checking conditionals with `execute if` subcommands, and the apparent lack of for loops. Though I'm not sure about that last one. There are probably ways to do more complicated flow control, but I'm not aware of any methods currently.

All of the source code for the pack is available on it's [github](https://github.com/Kaytwastaken/new-life) page. In the future I might write a more detailed description of how it all works here.