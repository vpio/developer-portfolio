---
title: 'Simple Metronome'
date: 2019-04-09 00:00:00
featured_image: '/images/30day/metronome-scrn1.png'
excerpt: A Metronome Application built with Tone.js
---

![](/images//30day/metronome-scrn1.png)

## What is it?

* A simple Metronome application built with the Tone.js library
* Set the bpm and press play and this app will play a sample of a woodblock to keep the time for you.

_This App is live! Go [here](http://piomolina.com/metronome) to try it out for yourself!_

---

### Working with Audio

Since I move into technology, it's always seemed intimidating to get into any sort of audio programming. With the assistance of the Tone.js library, my first voyage was fairly painless.

I initially tried to create this application with the Howler.js library. This is another incredible library for working with audio in web development, with one major shortcoming. When I finally got my woodblock sample to play on a loop at set intervals, I noticed that the timing was inconsistent.

Thanks to a youtube channel called [The Audio Programmer](https://www.youtube.com/channel/UCpKb02FsH4WH4X_2xhIoJ1A) and this [video](https://www.youtube.com/watch?v=31Qm_upl8kU), I learned that the internal JS clock (forgive me if I totally butcher this I know i'm barely scraping the surface) is not very precise. However, there is a web API called `AudioContext` which has an extremely precise clock for working with audio - and the Tone library provides easy ways to manipulate audio against that clock using built in methods.

If you'd like to check out the code for the _Full Project_ go [here](https://github.com/vpio/Simple-Metronome) to see the GitHub repository.

---

<!-- <iframe width="150" height="74" src="https://player.vimeo.com/video/306033787" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe> -->

Thanks for reading! Please feel free to connect with me on LinkedIn to follow my #30AppChallenge

<a href="https://www.linkedin.com/in/piomolina/" class="button button--large">LinkedIn</a>
