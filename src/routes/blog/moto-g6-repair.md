---
title: 'Acetone, a three-year-old phone, and Right to Repair'
date: '2021-7-28'
---

## Flashing Android and some background

As you may know if you follow me on [Twitter](https://twitter.com/kayt_was_taken), I've been dabbling in the world of custom Android ROMs for about 3 months now (i think? tbh i cant remember). It started with flashing my old Nexus 5x with Lineage 15 - I will be forever grateful to the engineers who made it so easy to unlock the bootloader on that phone - then I moved on to my brother's old Moto g7 (hereby referred to as just Moto). I was rather disappointed that unlocking the bootloader was a more involved process, but at least Motorola still made it easy.

If I remember correctly, the process is essentially:

- Run a command over adb to get a device ID

- Go to Motorola's developer portal

- Input that device ID and your email

- Run another adb command with the code they send you

- Profit?

They also make it really easy to revert back providing the stock ROM right there

I installed DotOS 5.0 on the Moto one and daily drove it while I was too scared to touch my LG G7's (referred to as LG) bootloader. I have to say, the devs that maintain all these forks are more than talented; Dot flavored Android 11 is a treat.

Unfotunately however, my initial disappointment when unlocking the Moto's bootloader would be met with immense nerves, almost sleepless nights, unnecessarily complicated guides, some anger, and frankly a lot of disappointment when I eventually started working on my LG. To be fair a lot of those nerves could be attributed to my oddly sentimental attachment to this phone, but unless you have one specific European model of the phone you have to:

- Use a Qualcomm tool to edit specific storage partitions

- Trick the phone into thinking it's a different phone

- Unlock the bootloader

- Turn the phone back into the phone it was before

- Flash a different version of the stock firmware if you have an American model

- And hope that you didn't do anything wrong

just to load a custom ROM.

> WHY IN GOD'S NAME DO YOU HAVE TO EDIT SYSTEM PARTITIONS JUST TO UNLOCK THE BOOTLOADER ON A PHONE ?? THAT WAS LEGITIMATELY ONE OF THE MOST NERVEWRACKING THINGS I HAVE EVER DONE

Ahem- pardon me. *eyes the right to repair tag*

Anyway, after misreading guides, getting my phone stuck in bootloops for multiple days (i didn't know you could hold power + volume down to turn it off :/ ), trial-and-erroring different Google App packages, and crying a bit because multiple times I thought I broke something, I loaded OrangeFox Recovery, flashed DotOS 5.1, rebooted to OFox, installed GApps, and got to the oh so glorious setup screen.

It's been close to a month since then, and I absolutely love it so far. Unfortunately, the Assistant button doesn't work without a paid app and fingerprint genstures don't work like they do on my Moto, but having two working phones with custom Android is such an amazing feeling.

*(apparently google fi will also send you a data-only sim for free (no literally, free) to use in whatever phone, ofc you still pay for data but)*

But, ohoho my tech masochism doesn't end there, certainly not.

The battery in my brother's old, old phone (don't ask me how he goes through so many i have no idea) died which is why he got the Moto g7. This one was a Moto g6 (which I'll just be calling g6). Now, as it happened, ifixit just happened to have a Father's Day sale, and I happened to want an ifixit toolkit, and they happened to a g6 battery replacement kit...

## Repairing a Moto g6 and getting a little creative

![A photo of an ifixit toolkit laid out with a custom clear Moto g6 and an extra set of tools used to replace the battery.](https://kayt.dev/static/motog6_ifixit.jpg)

So there I was 60 bucks later. A broken g6, a new battery, and the tools I'd need to begin my amateur phone repair journey. Now, I don't know about you, but I haven't seen many transparent phones, so let's talk about how I got to what you see in that image.

> This is where I run into the main reason I included the right to repair tag on this post...

I followed [this](https://www.ifixit.com/Guide/Motorola+Moto+G6+Battery+Replacement/127829) ifixit guide if you're in a similar situation.

Now I understand why phones are held together with glue. It makes it much easier to waterproof, and it undoubtedly holds the phone together very well. But when it gets to the battery, I see zero reason to hold it in with such strong glue especially with soft-shell Li-ions. It is way too easy to bend the battery out of shape and make it infeasible to use it again (for any application, not just in a phone). Even if you just wanted to replace the screen, you have to take the battery out, but if it got bent when taking it out you probably wouldn't want to put it back in. Now this difficulty could just be because this is the first time I've repaired a phone, but when manufacturers claim that people repairing their devices is dangerous, when they're the ones making it dangerous, I strongly believe it should be easier. In an ideal world I wouldn't have even needed to buy any tools because it would be easy enough to do with what I already had.

I digress however, if you do want to hear more passionate ramblings about Right to Repair, let me know! I would be more than happy to oblige. Let's get back the interesting part, the back.

After replacing the battery and testing the phone, I remembered a [Jerry Rig Everything](https://www.youtube.com/user/JerryRigEverything) video where he did a similar mod on a glass-backed phone. He just had to scratch away the paint to make the back clear, but I couldn't get off that easily with my plastic sandwich of a g6. I tried scraping the paint off, but I couldn't with any plastic tools and I didn't want to scratch the back with metal tools. So I turned to the only reasonable option: nail polish remover, paper towels, and patience! (i dont necessarily recommend this, but if you do it, make sure your area is well ventilated) Over the next few hours I slowly removed all the paint from the back panel leaving me with a rather unique phone, imo.

I cut some of the adhesive ifixit included in the kit, glued the phone back together, and now I'm left with three fully working phones! Soon I would like to update it to A11 as it's most recent update was A10. I've been eyeing Nezuko 1.4, Pixel Experience, and Dot 5.1 but I haven't bothered to really look into the options. Once I do though, I was thinking of doing a proper* comparison between front fingerprint sensors and rear fingerprint sensors.

*As proper as it really can be seeing and my LG and Moto have fairly different designs than the now-aging g6.*

## Closing notes and some other stuff

Anyway, like I said, I'm planning on flashing the g6 with A11, but I've also been thinking about doing camera comparisons between my phones and a DSLR. That will definitely find it's home here once I get around to it. If you're interested in the Right to Repair movement, I highly recommend checking out [ifixit](https://www.ifixit.com/Right-to-Repair) (im obv not sponsored or anything, though I would love to be), [Jerry Rig Everything](https://www.youtube.com/user/JerryRigEverything), and [Louis Rossman](https://www.youtube.com/user/rossmanngroup).

'til next time, thanks for reading, check me out on [XDA](https://forum.xda-developers.com/m/kayt_was_taken.11697793/#xdadevices_inventory), and uhh drink water :)