# Owen Malone Portfolio

A static video-editing portfolio designed for GitHub Pages.

## Files

- `index.html` — page content
- `styles.css` — design and responsive layout
- `script.js` — small interactions

## Publish with GitHub Pages

1. Create or open the GitHub repository used for your site.
2. Upload all three site files to the root of the repository.
3. In GitHub, open **Settings → Pages**.
4. Set the source to **Deploy from a branch**.
5. Choose your main branch and `/ (root)`.
6. Save.

## Connect owenmalone.com

In GitHub Pages settings, add `owenmalone.com` as the custom domain.

GitHub will show you the DNS records it expects. Enter those records at your domain registrar, then enable HTTPS once GitHub confirms the DNS.

## Customize

Search `index.html` for:

- `Project One` through `Project Six`
- `hello@owenmalone.com`
- the About paragraph
- `SHOWREEL PLACEHOLDER`

Replace those with your real information.

### Add a Vimeo showreel

Replace the contents of `.modal-inner` in `index.html` with a Vimeo embed, for example:

```html
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
  width="100%"
  height="500"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen>
</iframe>
```

### Add real project thumbnails

The sample project cards currently use CSS gradients.

A simple replacement is:

```html
<div class="project-media" style="background-image:url('images/my-project.jpg'); background-size:cover; background-position:center;">
```

Create an `images` folder in the repository and upload your images there.
