# SkillBridge public website

Plain HTML/CSS/JS, no build step. Arabic (default) and English with a switch.
It reads only the published catalog from Supabase and places orders through the `place_order` function, using the public anon key only.

## Files
- `index.html`, `courses.html`, `teachers.html`, `books.html`, `checkout.html`, `order.html`: the pages. They must sit at the top level of the repository.
- `assets/app.js`: settings, words in both languages, cart, header and footer. The student portal link is `PORTAL`.
- `assets/pages.js`: course, teacher and book lists, the enrol dialog, checkout and order status.
- `assets/site.css`: the whole visual identity.
- `assets/fonts/`: IBM Plex Sans Arabic (Arabic and Latin, OFL), hosted with the site.
- Photos: real photos from Pexels (free licence, no attribution required), loaded from images.pexels.com: 8419513 (RDNE Stock project, hero), 4778666 and 4778636 (cottonbro studio, page heads and closing box). Links are in `assets/site.css`.
- `assets/brand/`: the logo with the blue background removed. `*-reverse` is for dark backgrounds, `*-ink` for light ones, `mark-*` is the circles and SB only, `sb.*` is the SB letters only. PNG copies are included for use outside the site.

## Put it online (GitHub Pages)
Settings > Pages > Source: Deploy from a branch > main / (root) > Save.
Address: https://skillbridge-int.github.io/skillbridge-site/

## Settings
Bank details, wallet number, phone, WhatsApp, delivery fee, About text: edit in the management app, Catalog > Site settings.

## Custom domain
Pages > Custom domain, add skillbridge-int.com and the DNS records GitHub shows (at GoDaddy). No code change is needed.
