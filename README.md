# Atelier Hair Studio

Educational salon website built in Webflow and prepared as a static site.

## Files

- `index.html`: landing page.
- `privacy-policy.html`: demonstration privacy page with placeholder text.
- `css/`: site styles.
- `js/`: jQuery and Webflow runtime bundles.
- `images/`: local images, font files, SVG icons, video and video poster.

## Preview

Serve this directory with an HTTP server, for example:

```sh
python -m http.server 8080
```

Open `http://localhost:8080/`. The site is designed for the root of a domain.

## Vercel settings (deployment not yet authorized)

- Root directory: repository root.
- Framework preset: Other.
- Build command: leave empty; there is no build step.
- Output directory: `.`.
- Install command: leave empty; there are no package dependencies.

No Vercel project, deployment, or Git integration has been created as part of this preparation.

## Demo behavior

Booking and contact buttons open a demonstration popover. WhatsApp is disabled.
Newsletter is non-submitting demo content. Privacy text, cookies link, phone and copyright are placeholders.
Social links point to platform homepages. The 10-second salon video is muted and starts on request.

The existing favicon is the standard Webflow icon; a custom brand favicon is still to be chosen.
Webflow runtime, badge and source comments are retained. Media licensing is not asserted by this repository;
the original design and stock-video source terms should be retained by the project owner.
