# SengekiWeb - Tattoo Artist Portfolio

A static portfolio website for a professional tattoo artist, built with Astro.

## Features

- 🖼️ **Gallery** - Filterable showcase of tattoo work
- 📄 **Bio Page** - Artist background and credentials
- 📞 **Contact Form** - Booking inquiries with detailed form
- 📱 **Responsive** - Works on all devices
- ⚡ **Fast** - Static site, optimized for performance
- 🎨 **Dark Theme** - Elegant dark design with gold accents

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Custom CSS (no framework dependencies)
- **Deployment:** Cloudflare Pages (recommended)
- **No Database:** Fully static site

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
SengekiWeb/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout with nav/footer
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── gallery.astro       # Gallery page
│   │   ├── bio.astro           # Artist bio
│   │   └── contact.astro       # Contact form
│   ├── components/             # Reusable components
│   └── assets/
│       └── images/             # Image assets
├── public/
│   └── favicon.svg
├── astro.config.mjs
└── package.json
```

## Customization

### Update Content

1. **Bio Page** (`src/pages/bio.astro`) - Replace placeholder text with real artist info
2. **Contact Info** (`src/pages/contact.astro`) - Update address, email, phone, social links
3. **Gallery** (`src/pages/gallery.astro`) - Add real images and update gallery items array

### Add Images

Place images in `src/assets/images/` and update the gallery items:

```js
const galleryItems = [
  { id: 1, title: 'Dragon Back Piece', category: 'Japanese', src: '/images/dragon.jpg' },
  // ...
];
```

## Deployment (Cloudflare Pages)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages deploy ./dist

# Or use Cloudflare Pages GitHub integration
# Settings → Pages → Connect Git → Select repo
```

## To Do

- [ ] Add real artist bio content
- [ ] Add real gallery images
- [ ] Configure contact form backend (Formspree, Netlify Forms, etc.)
- [ ] Add social media links
- [ ] Optimize images for web
- [ ] Add meta tags for SEO
- [ ] Consider adding a lightbox for gallery
- [ ] 

## License

MIT

---

Built with ❤️ for Sengeki Tattoo Studio
