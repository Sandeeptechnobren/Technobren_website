# TechnoBren Infotech — Next.js

This is the Next.js port of the TechnoBren Infotech website.

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`) + custom component classes in `globals.css`
- **Carousels:** `swiper/react`
- **Fonts:** Poppins via `next/font/google`
- **Icons:** Font Awesome 6.1.1 via CDN
- **Contact backend:** Next.js API route + Nodemailer (Gmail SMTP)

## Getting started

```bash
npm install
cp .env.example .env.local      # then fill in real SMTP creds
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

Create `.env.local` (gitignored) from `.env.example`:

| Var          | Example                                                |
| ------------ | ------------------------------------------------------ |
| `SMTP_HOST`  | `smtp.gmail.com`                                       |
| `SMTP_PORT`  | `587`                                                  |
| `SMTP_USER`  | `your-gmail@gmail.com`                                 |
| `SMTP_PASS`  | Gmail App Password (NOT your account password)         |
| `MAIL_FROM`  | `Technobren Contact <your-gmail@gmail.com>`            |
| `MAIL_TO`    | Address that should receive contact submissions        |

> The legacy `send_mail.php` had its Gmail App Password committed to source.
> **Rotate that password in the Gmail account before going live**, regardless
> of whether the new project reuses it.

## Project layout

```
src/
  app/                       # routes (App Router)
    layout.tsx               # root: header + footer + Poppins + FA CDN
    page.tsx                 # /  (home)
    about/, services/, solutions/, industry/, our-team/,
    custom-software-development/, mobile-app/, vans-sales/,
    contact/, thank-you/
    api/contact/route.ts     # POST handler — Nodemailer
    not-found.tsx
    globals.css              # Tailwind + @theme tokens + component layer
  components/
    layout/Header.tsx, Footer.tsx
    shared/Button.tsx, ArrowRight.tsx, Tabs.tsx, LocationCards.tsx
    carousel/SwiperCarousel.tsx, FeedbackCarousel.tsx,
             IndustriesCarousel.tsx, ClientsCarousel.tsx
    contact/ContactForm.tsx
  lib/
    data/                    # navigation, locations, services, industries, team, feedback
    types/content.ts
    validation/contact.ts    # Zod schema
    email/template.ts        # HTML email body builder
public/
  images/                    # all site images (was assets/imgs/)
```

## Routes

| Legacy file                              | New route                        |
| ---------------------------------------- | -------------------------------- |
| `index.html`                             | `/`                              |
| `about.html`                             | `/about`                         |
| `service.html`                           | `/services`                      |
| `solution.html`                          | `/solutions`                     |
| `industry.html`                          | `/industry`                      |
| `our-team.html`                          | `/our-team`                      |
| `custom-software-development.html`       | `/custom-software-development`   |
| `mobile-app.html`                        | `/mobile-app`                    |
| `vans-sales.html`                        | `/vans-sales`                    |
| `contact.html`                           | `/contact`                       |
| `Thank_you.html`                         | `/thank-you`                     |

## Scripts

```bash
npm run dev         # dev server with Turbopack
npm run build       # production build
npm start           # run production build locally
npm run lint        # eslint
```

## Deploying

Recommended target: **Vercel**.

1. Push to GitHub.
2. Import the repo in Vercel.
3. Set the six env vars above (Production scope).
4. Deploy. The `/api/contact` route runs as a serverless Node function.

## Notes

- `.env.local` is gitignored by `create-next-app` defaults — never commit secrets.
- The contact form posts JSON to `/api/contact`, validates with Zod (400 on bad input),
  and sends mail via Nodemailer (500 on SMTP failure). On success, the client redirects to `/thank-you`.
- Bootstrap 5, jQuery, and AOS from the legacy site are dropped. Tailwind utilities + a small
  component layer in `globals.css` cover all custom styles.
