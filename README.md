# Nine Media — Landing Page

Next.js 14 + Tailwind CSS landing page for Nine Media (ninemedia.co.in).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm start
```

## Structure
- `app/page.js` — assembles all sections
- `app/components/` — Header, Hero, About, Services, Clients, Portfolio,
  CaseStudies, Careers, Contact, Footer, PixelNine (signature "9" mark), data.js
- `tailwind.config.js` — brand color tokens (nm-yellow, nm-orange, nm-black, nm-cream, nm-ink)

## Before going live
1. Replace placeholder portfolio tiles in `app/components/Portfolio.js` with real campaign images.
2. Fill in real case study numbers in `app/components/data.js` (`caseStudies`).
3. Swap client wordmarks for real logos if you have usage rights, in `app/components/Clients.js`.
4. Wire the contact form in `app/components/Contact.js` to an actual email/CRM endpoint (e.g. a Next.js API route, Resend, or Formspree) — right now it only shows a local "sent" state.
5. Update careers roles in `app/components/data.js` (`roles`) as your hiring needs change.
6. Deploy on Render/Vercel — this is a standard Next.js app, no special config needed.
