# Owen Malone Portfolio v5

Changes in this version:

- Removed the decorative arrow.
- Removed section numbering.
- Replaced the gridded background with a calmer warm-paper gradient.
- The showreel now plays directly on the page using Vimeo.
- Project cards are structured so vertical Vimeo embeds can be added directly later.
- The Alexi Lalas project no longer redirects to YouTube. Add a Vimeo link for that piece when ready.

## Current showreel

Vimeo:
https://vimeo.com/1132630379

Embedded with:
https://player.vimeo.com/video/1132630379

## Adding a vertical Vimeo project

Replace a thumbnail frame with:

```html
<div class="project-video">
  <iframe
    src="https://player.vimeo.com/video/YOUR_VIDEO_ID?title=0&byline=0&portrait=0"
    title="Project title"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```

The `.project-video` class is already set to 9:16.

## Publishing

Upload/replace:
- index.html
- styles.css
- script.js
- lalas-vertical.jpg
