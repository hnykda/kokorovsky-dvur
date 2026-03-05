# Kokorovsky Dvůr — Website Working Document

## Overview

Website for the civic association **Kokorovsky Dvůr (KKDV)** — a historic manor/château restoration project.

- **Facebook**: https://www.facebook.com/kokodvur
- **Domains**: kokodvur.cz, kokorovskydvur.cz, zlutickyzamek.cz (registered on WEDOS)
- **Stack**: Next.js, deployed on Dan's server (hera), CI via Woodpecker
- **Code**: this repo

## People

| Person | Role | Contact |
|--------|------|---------|
| Dan Hnyk | Tech — build & deploy | hnykda@gmail.com |
| Jakub Mráz | Content — text & assets | Jakub.Mraz@seznam.cz |

---

## Website Structure (as defined by Jakub)

Navigation: rounded rectangle "buttons" on the homepage, each opens a section.

| # | Section | Status | Notes |
|---|---------|--------|-------|
| 1 | **Titulní stránka** (Homepage) | content received | PDF mockup sent; buttons as nav |
| 2 | **Historie 1680–2024** | content received | Parchment/yellowish bg, historic font, readable; photos illustrative |
| 3 | **Obnova od 2024** | content received | Updated ~1x/year; photos 4–6 need credit "foto: Ján Borecký" |
| 4 | **Chci přispět** (Donate) | content received | Text only; QR code for bank transfer desired (nice to have) |
| 5 | **Aktuality** (News/Events) | content received | Only "live" section; newest first, separated by horizontal lines |
| 6 | **Partneři** (Partners) | content received | Text + 5 partner logos |
| 7 | **Žlutický zámek** | content received | Jakub sent this last (forgot it initially) |

---

## Content & Assets from Jakub (emails, March 4 2026)

All converted and copied into the repo.

### Texts → `content/`
- [x] `historie.md` — converted from corrected docx
- [x] `obnova.md` — has inline placement notes from Jakub (e.g. `[Vlevo od nadpisu umístit „modernější" verzi loga]`)
- [x] `chci-prispet.md`
- [x] `aktuality.md` — already has real entries (volunteer days Apr 11 & May 23, 2026)
- [x] `partneri.md`
- [x] `zluticky-zamek.md`

### Images → `public/images/`
- [x] `titulní_stránka.jpg` + `titulní_stránka2.jpg` — homepage hero + detail
- [x] `logo-simple-rounded.png`, `plne-bez-pozadi.png` — logos
- [x] `web_titulní_strana.pdf` — homepage layout mockup (see Design Notes below)
- [x] `historie/sekce_historie1–5.jpg` — history section photos
- [x] `obnova/sekce_obnova1–6.jpg` — renovation photos (**4–6: credit "foto: Ján Borecký"**)
- [x] `partners/logo1–5.png/jpg` — partner logos

---

## Design Notes (from Jakub)

### Homepage layout (from PDF mockup)
```
┌─────────────────────────────────────────────┐
│         full-width panoramic hero photo      │
├──────┬──────────────────────────────┬────────┤
│ logo │  Záchrana Kokořovského       │ small  │
│(coat │  dvora ve Žluticích          │ detail │
│  of  ├────────────┬────────────┬────┤ photo  │
│ arms)│ HISTORIE   │  OBNOVA    │ŽLUT│        │
│      │ 1680—2024  │  OD 2024   │ZÁMK│        │
│      ├────────────┼────────────┼────┤        │
│      │   CHCI     │ AKTUALITY  │PART│        │
│      │  PŘISPĚT   │            │NEŘI│        │
└──────┴────────────┴────────────┴────┴────────┘
```
- 3×2 grid of rounded-rectangle navigation buttons
- Logo (coat of arms) on the left of the button grid
- Small building detail photo on the right
- Feel free to add creative interpretation

### Per-section design
- **Historie**: warm yellowish/parchment background, slightly historicizing but readable font; photos illustrative, not dominant
- **Aktuality**: newest entry on top, older below, separated by horizontal line
- **Partneři**: display logos of partner organizations
- **Obnova**: has Jakub's inline notes about logo/image placement — strip these before rendering

---

## Open Questions / To-Do

### From Jakub
- [ ] **Domain email**: Does he have an email on the domain (e.g., `info@kokorovskydvur.cz`)? He doesn't want to use a personal email as the public contact address. → **Dan to answer**
- [ ] **QR code for donations**: Show a bank payment QR code in "Chci přispět" so donors can scan & fill in their own amount. Nice to have, not critical.
- [ ] **Self-editing for Aktuality + Obnova**: Jakub wants to manage these sections himself eventually (non-technical user). → Future work, not blocking launch.

### Tech / Dev
- [x] Extract all `.docx` text content → `content/*.md`
- [x] Copy all images → `public/images/`
- [ ] Implement all 7 sections
- [ ] Match homepage to PDF mockup (roughly)
- [ ] Apply parchment styling to Historie section
- [ ] Add photo credits for renovation photos 4–6
- [ ] Display partner logos in Partners section
- [ ] Review with Jakub before going public ("beta review")

---

## Existing Codebase

Current structure under `src/app/`:
- `page.tsx` — homepage
- `o-nas/page.tsx` — "about us" page
- `kontakt/page.tsx` — contact page
- `blog/[slug]/` — blog/news (could become Aktuality)

Content: `content/` — now populated with all 6 section markdown files

Public images: `public/images/` — logos, homepage photos, `historie/`, `obnova/`, `partners/` subdirs

---

## Email Correspondence (Jakub → Dan, March 4 2026)

### 13:39 — web KKDV - titulní stránka
> Ahoj Dane, po delší prodlevě navazuji na "web-spolupráci", konečně jsem nashromáždil všechny potřebné podklady, i jsme se interně shodli, co všechno by na tom webu mělo být a co ne.
>
> Pro lepší přehlednost to budu posílat tematicky po jednotlivých částech (sekcích), včetně příslušných příloh.
>
> Začni titulní stránkou: posílám pdf soubor, jak by plus/mínus měla titulní stránka vypadat. Ty obdélníky se zakulacenými rohy s nápisy by měly fungovat jako "tlačítka", po kliknutí na ně se otevře příslušná sekce.
>
> Samozřejmě to nemusí vypadat 100% jako v tom náhledu, klidně do toho zapoj nějakou vlastní invenci, nápad či kreativní přístup.
>
> Maily s jednotlivými sekcemi budou následovat :-)

### 13:51 — web KKDV - sekce historie
> V příloze zasílám příslušný text. Vizuálně bych si to představoval tak, že pozadí textu nebude čistě bílé, ale takové sešle nažloutlé - jak kdyby to bylo napsané na nějaký historický pergamen, font textu asi taky nějaký lehce historující, ale aby to nebylo na úkor dobré čitelnosti a srozumitelnosti. Velikost a umístění fotografií nechám na Tobě (můžou být pod textem, či je může text "obtékat", jak se to bude hodit; jejich účel je spíš ilustrační, pro představu, nikoli dominantní či zaměřené na zkoumání nějakých detailů...).

### 13:57 — web KKDV - sekce historie - opravná verze textu
> A už v tom dělám zmatky... Poslal jsem omylem pouze text sekce bez umístění fotografií a popisků k nim - tímto to napravuji a přikládám aktuální verzi :-).

### 14:01 — web KKDV - sekce obnova od 2024
> Text, fotky i logo v příloze. K fotografiím 4, 5, 6, prosím připsat "foto: Ján Borecký"

### 14:10 — web KKDV - sekce Chci přispět
> Zde přikládám pouze text, tam žádné obrázky nebudou. Pokud by k bodu 1 šlo rovnou zobrazit i QR kód k platbě, do kterého by si případný dárce sám napsal částku, kterou chce poslat, bylo by to super (lidi jsou strašně líní, takž čím jednoduššeji to půjde, tím větší pravděpodobnost, že někdo přispěje...) Když ne, nevadí...

### 14:12 — web KKDV - sekce Aktuality
> Tohle bude jediná "živější" část webu, kam budeme čas od času vkládat informace o chystaných akcích - bude to vždy formou krátké textové zprávy, po rozkliknutí ať je nejnovější vždy nahoře, starší pak směrem dolů, oddělené vizuálně nějakou vodorovnou čarou.

### 14:21 — web KKDV - sekce partneři
> Poslední sekce - posílám textový soubor a loga jednotlivých partnerů.
>
> Jinak co se týče potřeby a četnosti "editací", tak "živé" budou pouze sekce "aktuality", kde se sem tam něco bude přidávat, a sekce "obnova od 2024" - tam jsem to ale koncipoval tak, že vždycky přibude jednorázově text plus pár fotek vždy po konci kalendářního roku (t.j. 1x za rok). Takže pokud to nebude nějak komplikované, klidně si to nějak obsloužím sám, ať Tě s tím nemusíme otravovat :-).
>
> Myslím, že to nijak zvlášť nespěchá - mně to taky trvalo několik měsíců, než jsem to dotáhl - akorát až budeš mít nějakou ucelenou verzi, tak poprosíme o zkouknutí, než se to "zpřístupní" široké veřejnosti, abychom mohli doladit případné nedostatky.
>
> Každopádně zatím moc děkuju za spolupráci. — Kuba Mráz

### 14:24 — web KKDV - sekce Žlutický zámek
> No vida - ještě na jednu sekci jsem zapomněl!
>
> V příloze zasílám text a zároveň se zeptám - v rámci těch domén je k dispozici i nějaký e-mail? (třeba info@kokorovskydvur.cz nebo tak něco). Nechce se mi tam úplně jako kontaktní mail dávat soukromou adresu někoho z nás. Pokud ne, tak bych ji založil třeba na seznamu...

---

## Notes

- Jakub is non-technical — no GitHub/Next.js knowledge. Self-editing needs a simple CMS-like interface eventually.
- "Less is more" philosophy — simple, clean structure.
- Not urgent — Jakub took months to gather content; a "beta" review before public launch is the goal.
- Once a working version exists, show to Jakub + others for feedback before going live.
