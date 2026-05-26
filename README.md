# Codexan Website

Marketing site for **Codexan** — cloud consultancy & managed services across AWS, Azure, GCP, and private cloud.

Built with **Next.js 14 (App Router)** + **Tailwind CSS**. Dark, futuristic visual style with neon cyan→violet gradients, animated grid, and aurora glows.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.jsx        # root layout, fonts, metadata
  page.jsx          # home — composes all sections
  globals.css       # Tailwind + design tokens, animations
components/
  Logo.jsx          # SVG mark + wordmark (single source of truth)
  Header.jsx        # sticky nav
  Footer.jsx
  Hero.jsx          # hero with animated stats
  Services.jsx      # 6 service cards
  Platforms.jsx     # AWS / Azure / GCP / Private cloud
  Process.jsx       # 4-step methodology
  CaseStudies.jsx   # case study cards + client logo wall (placeholders)
  About.jsx         # company narrative + live-NOC visual
  Contact.jsx       # contact form (mailto fallback)
public/
  logo.svg          # full lockup (mark + wordmark)
  favicon.svg       # hex mark only
```

## Logo

The Codexan logo is a hexagonal cloud-platform mark with an **X** monogram inside, paired with the `CODEXAN` wordmark in Space Grotesk. It uses a cyan-to-violet gradient (`#22d3ee → #8b5cf6`).

- Full lockup: `public/logo.svg`
- Mark only (favicon / app icon): `public/favicon.svg`
- React component: `components/Logo.jsx`

All three are pure SVG — edit colors via the `<linearGradient>` stops.

## Editing content

All editable copy lives in `/content` as JSON. Components import it at build time via [`lib/content.js`](lib/content.js):

```
content/
  site/
    hero.json           # hero copy + stats
    about.json          # about section + facts
    client-logos.json   # logo wall
  services/             # one JSON file per service card
  case-studies/         # one JSON file per case study
```

You can edit these files directly in your editor, **or** use the admin UI (next section).

## Admin dashboard (Decap CMS)

A web-based admin lives at **`/admin`** — powered by [Decap CMS](https://decapcms.org), which commits content edits straight to this Git repo.

### One-time setup on Netlify

1. Push this repo to GitHub and connect it as a Netlify site (build settings come from `netlify.toml`).
2. In the Netlify dashboard: **Site settings → Identity → Enable Identity**.
3. **Identity → Registration → Invite only** (you don't want random signups).
4. **Identity → Services → Git Gateway → Enable Git Gateway** (this is what lets Decap commit on the user's behalf).
5. **Identity → Invite users** — invite each editor by email. They get a magic link to set their password.
6. Editors visit `https://<your-site>/admin`, log in, and start editing.

Content edits become git commits → Netlify rebuilds → site updates automatically. Every change is in `git log`, so you can revert.

The CMS schema lives in [`public/admin/config.yml`](public/admin/config.yml) — add new fields or collections there.

## Contact form submissions

The contact form uses **Netlify Forms** (zero-config). Submissions show up in:

- Netlify dashboard → **Forms** → `contact`
- Configure email notifications under **Forms → Notifications**

After a successful submit the user is redirected to [`/thanks`](app/thanks/page.jsx).

Spam protection: a hidden honeypot field (`bot-field`) catches naive bots. For more, enable Netlify's reCAPTCHA in **Forms → Settings**.

## Deployment

Push to GitHub, connect to Netlify — `netlify.toml` does the rest. The `@netlify/plugin-nextjs` runtime handles SSR.

For Vercel, you'd need to swap Netlify Identity + Forms for an equivalent (GitHub OAuth proxy for Decap; Formspree/Resend for forms).