---
title: First post
author: Excel
create_date: 2022-11-27T21:24:13
tagline: Don't waste your time, this is just to test the post format
description: Nothing interesting, just checking the post format
tag: experiment,misc
---

<figure align="center">
  <img alt="random" src="https://picsum.photos/600" />
  <figcaption>Figure: some random image</figcaption>
</figure>

This is the **very** first post since this web is made. We will not find any
meaningful information, and it's not worth our time to stay here.

By the way, this website looks so old-fashioned. Why? It looks simple to me
but maybe extremely too simple for others. I built it to write and share my
writing, so I just want to make it readable. The goals are

- Font should be clear
- No distraction when reading
- Focus on writing post

We might find the design is mostly familiar with website that we find
in https://search.marginalia.nu/

> Witing Tresno Jalaran Soko Kulino,
> Witing Mulyo Jalaran Wani Rekoso.

## Let's not read further

The image above is taken from https://picsum.photos/ , I'm grateful they provide
interesting set of images, so I can use it to embed placeholder image. What image
do you see? I see an image of wooden bridge at the beach where the sky is as blue
as the water.

### Better read the other post or just leave

So this post is created with markdown. I did some tweak and changing frameworks
to see where it fits my workflow. I don't keep the old work but if I count
it this is probably the 4th version where the 3rd version did manage to launch
in a very short time. On the 3rd version, I tried to write an SSR website from
scratch and end up not satisfied with the result. So I prefer to use Sveltekit
because I want it to be static and avoid _Content Management System_ (CMS)
to write my content. Why? Internet is not reliable here.

```ts
export const parseDate = (date: string) =>
	new Date(date).toLocaleDateString(undefined, {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
```

Let's check

1. Number one
2. Number two

---

Alright, we're done.
