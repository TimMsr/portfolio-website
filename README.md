# Portfolio Website

A simple, responsive personal portfolio site built with plain HTML, CSS, and JavaScript. It showcases About, Experience, Projects, Education, Certifications, and Contact sections with a mobile-friendly navigation and small interactive touches.

## Features

- Responsive layout with mobile navigation toggle
- Clean sectioned design: About, Experience, Projects, Education, Certifications, Contact
- External links to GitHub and LinkedIn
- Copy-to-clipboard button for email in Contact section
- Simple mailto-based contact form (no backend required)

## Tech Stack

- HTML5, CSS3, JavaScript (no frameworks)
- Google Fonts (Poppins) via CDN
- Font Awesome icons via CDN

## Project Structure

- `index.html`: Main HTML page with all sections.
- `Style.css`: Global styles, responsive rules, and section styling.
- `script.js`: Mobile menu toggle and copy email behavior.
- `facesuit.png`: Profile image used in About/Experience sections.
- `comingsoon.jpeg`: Placeholder image used in Projects.

## Getting Started

- Option 1 — Open directly: Double-click `index.html` to view in a browser.
- Option 2 — Serve locally (recommended for CDN assets and CORS):
  - Use any static server (e.g., VS Code Live Server extension or `python3 -m http.server` in the project directory) and open the provided URL.

No build step is required.

## Customization

- Profile and links:
  - Update name, titles, and links in `index.html` (About, socials, CV link, GitHub button).
  - Replace `facesuit.png` with your own image (keep filename or update the `src` attributes).
- Sections and content:
  - Edit Experience/Projects/Education/Certifications markup in `index.html` to match your background.
  - Replace `comingsoon.jpeg` placeholders with real project thumbnails.
- Styles and theme:
  - Tweak colors, spacing, and component styles in `Style.css`.
  - Responsive behavior (media queries) is at the bottom of `Style.css`.
- Interactions:
  - Mobile menu toggle and copy-to-clipboard logic live in `script.js`.
  - The contact form uses a `mailto:` action. For a real backend, replace the form `action` with your endpoint and handle submissions server-side.

## Notes

- External CDNs (Google Fonts, Font Awesome) require an internet connection when viewing the site.
- The navigation menu collapses to a hamburger on small screens. Ensure `#menu-icon` and `.nav-links` exist and are styled; JavaScript toggles the `.active` class.

## Deployment

- GitHub Pages: Push this repository and configure Pages to serve from the root. Ensure assets are referenced with relative paths (as they are).
- Any static host (e.g., Netlify, Vercel, Cloudflare Pages): Drag-and-drop or point the host to the repository; no build step needed.

## License

- No explicit license included. If you plan to open-source, add a license file (e.g., MIT) to clarify usage.

## Acknowledgements

- Icons: Font Awesome
- Font: Google Fonts (Poppins)
