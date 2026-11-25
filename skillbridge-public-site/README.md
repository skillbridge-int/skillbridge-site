# SkillBridge public website

Plain HTML/CSS/JS, no build step. Arabic (default) and English with a switch.
It reads only the published catalog from your Supabase project and places orders through the `place_order` function. It uses the public anon key only.

## Put it online (free, GitHub Pages)
1. Run `09_APPLY_storefront_2026-11-25.sql` once in Supabase > SQL Editor.
2. On GitHub create a new repository (for example `skillbridge-site`), Public.
3. Upload every file and folder from this zip (index.html, assets, ...), commit to main.
4. Settings > Pages > Source: Deploy from a branch > main / (root) > Save.
5. Address will be https://skillbridge-int.github.io/skillbridge-site/

## Settings
Bank details, wallet number, phone, WhatsApp, delivery fee: edit in the management app, Catalog > Site settings.
The student portal link is `PORTAL` in `assets/app.js`.

## Later, with skillbridge-int.com
Pages > Custom domain, add the domain and the DNS records GitHub shows (at GoDaddy). No code change is needed for this site.
