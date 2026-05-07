# Construction & Industrial Safety Website

A polished one-page website for an independent Canadian construction and industrial safety contractor.

## File Structure

- `index.html` - page shell and metadata
- `site-data.js` - editable business details, copy, services, credentials, testimonials, and links
- `app.js` - reusable section components and small interactions
- `styles.css` - responsive visual design
- `assets/` - future photos, resume PDF, and capability statement PDF

## How to Edit Placeholder Content

Start in `site-data.js`.

Replace:

- Resume and capability statement links
- Testimonials
- Credential badges
- Photo paths

Current contact details are already set to Edmonton, Alberta and linkedin.com/in/allanlayte.

Only publish credentials that are accurate. Remove any placeholder or uncertain certification before sending the site to clients.

## Photos to Use

Current image paths are set in `site-data.js`:

- `assets/allan-industrial-site.jpeg` - hero image
- `assets/allan-profile.jpeg` - about/profile image
- `assets/allan-hydro-field.jpeg` - field proof image
- `assets/allan-industrial-selfie.jpeg` - field proof image

Best-performing images for this audience:

- Professional headshot in PPE or clean workwear
- Real field photo on an industrial, construction, mining, utility, or shutdown site
- Photo reviewing plans, a tablet, permits, or a clipboard
- Photo near equipment or a workfront only if safe and permitted

Avoid fake-looking stock photos. A real but simple field photo will usually build more trust than a polished generic image.

## Contact Form

The form is frontend-ready, but no backend is connected yet.

Connect it with one of these options before publishing:

- Formspree
- Netlify Forms
- EmailJS
- A custom backend endpoint

The form submit handler is in `app.js`.

## Local Preview

Because this is a static site, you can open `index.html` directly in a browser.

For a local server, run:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Deployment

### Vercel

1. Create a new Vercel project.
2. Upload or connect this folder as a static site.
3. Use the default output; no build command is required.

### Netlify

1. Drag this folder into Netlify Drop, or connect it to a Git repository.
2. Leave build command blank.
3. Use `/` as the publish directory.

### Basic Static Host

Upload `index.html`, `styles.css`, `site-data.js`, `app.js`, and any future `/assets` files to the public web directory.
