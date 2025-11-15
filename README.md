# Lion Cage Website

Profesjonell nettside for Lion Cage prosjektgruppe. En moderne, responsiv nettside bygget med vanilla HTML, CSS og JavaScript.

## 📋 Innhold

- [Funksjoner](#funksjoner)
- [Struktur](#struktur)
- [Kom i gang](#kom-i-gang)
- [Utvikling](#utvikling)
- [Deployment](#deployment)
- [Tilpasning](#tilpasning)
- [Teknologier](#teknologier)

## ✨ Funksjoner

- **Responsivt design** - Fungerer perfekt på mobil, tablet og desktop
- **Flerspråklig støtte** - Norsk og engelsk (enkelt å utvide)
- **Markdown-artikler** - Enkelt å publisere nye artikler i markdown-format
- **Kontaktskjema** - Integrert med Formspree for enkel håndtering
- **SEO-vennlig** - Optimalisert for søkemotorer
- **Rask lasting** - Minimal bruk av eksterne biblioteker

## 📁 Struktur

```
Lion Cage nettside/
├── css/                    # Stilark
│   ├── styles.css         # Hovedstiler og utility-klasser
│   ├── nav-footer.css     # Navigasjon og footer
│   ├── home.css           # Landingsside
│   ├── about.css          # Om Oss
│   ├── articles.css       # Artikler
│   ├── projects.css       # Prosjekter
│   ├── services.css       # Tjenester
│   ├── contact.css        # Kontakt
│   ├── faq.css            # FAQ
│   └── partners.css       # Samarbeidspartnere
├── js/                     # JavaScript-filer
│   ├── components.js      # Navigasjon og footer komponenter
│   ├── i18n.js            # Flerspråklig støtte
│   ├── articles.js        # Artikkel-funksjonalitet
│   ├── markdown-parser.js # Markdown parsing
│   ├── projects.js        # Prosjekt-funksjonalitet
│   ├── contact.js         # Kontaktskjema
│   ├── faq.js             # FAQ accordion
│   └── utils.js           # Hjelpefunksjoner
├── pages/                  # HTML-sider
│   ├── about.html
│   ├── articles.html
│   ├── article-viewer.html
│   ├── projects.html
│   ├── services.html
│   ├── contact.html
│   ├── faq.html
│   └── partners.html
├── content/                # Innhold
│   ├── articles/          # Markdown artikler
│   ├── projects/          # Prosjekt-data
│   └── translations.json  # Oversettelser
├── images/                 # Bilder (legg til dine egne)
├── index.html             # Landingsside
├── netlify.toml           # Netlify konfigurasjon
├── package.json           # npm dependencies
└── README.md              # Denne filen
```

## 🚀 Kom i gang

### Forutsetninger

- En moderne nettleser (Chrome, Firefox, Safari, Edge)
- (Valgfritt) Node.js og npm hvis du vil kjøre en lokal server

### Installasjon

1. Klon eller last ned dette repositoriet

2. Åpne `index.html` direkte i nettleseren, eller kjør en lokal server:

```bash
# Med Python 3
python -m http.server 8000

# Med Node.js (installer http-server først: npm install -g http-server)
http-server

# Med PHP
php -S localhost:8000
```

3. Besøk `http://localhost:8000` i nettleseren

## 💻 Utvikling

### Legge til nye artikler

1. Opprett en ny `.md`-fil i `content/articles/`
2. Legg til frontmatter:

```markdown
---
title: Din artikkel tittel
date: 2025-01-15
author: Forfatter Navn
category: research|development|innovation
description: Kort beskrivelse
---

# Artikkel innhold her...
```

3. Legg til artikkelen i `js/articles.js`:

```javascript
const articlesData = [
  {
    id: 'new-article',
    title: 'Din artikkel tittel',
    excerpt: 'Kort sammendrag...',
    category: 'research',
    date: '2025-01-15',
    author: 'Forfatter Navn',
    file: 'din-artikel.md'
  },
  // ... eksisterende artikler
];
```

### Redigere team-medlemmer

Åpne `pages/about.html` og oppdater team-seksjonen med faktiske navn, roller og bilder.

### Legge til samarbeidspartnere

Rediger `pages/partners.html` og legg til dine faktiske samarbeidspartnere med logoer.

### Endre farger og design

Hovedfargene er definert i `css/styles.css`:

```css
:root {
  --primary-color: #0ea5e9;
  --primary-dark: #0284c7;
  --primary-light: #38bdf8;
  /* ... */
}
```

## 🌐 Deployment

### GitHub Pages

1. Opprett et GitHub repository
2. Push koden til repository
3. Gå til Settings > Pages
4. Velg branch (main/master) og root folder
5. Nettsiden vil være tilgjengelig på `https://brukernavn.github.io/repository-navn`

### Netlify

1. Opprett en konto på [Netlify](https://netlify.com)
2. Klikk "Add new site" > "Import an existing project"
3. Koble til GitHub repository eller dra og slipp prosjektmappen
4. Netlify vil automatisk deploye nettsiden
5. Gratis custom domain og HTTPS

### Vercel

1. Opprett en konto på [Vercel](https://vercel.com)
2. Importer GitHub repository
3. Deploy med standardinnstillingene

## 🔧 Tilpasning

### Kontaktskjema (Formspree)

1. Gå til [Formspree.io](https://formspree.io) og opprett en konto
2. Opprett et nytt skjema
3. Kopier Form ID
4. Åpne `pages/contact.html` og erstatt `YOUR_FORM_ID`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Flerspråklig innhold

Rediger `content/translations.json` for å legge til eller endre oversettelser:

```json
{
  "no": {
    "nav": {
      "home": "Hjem",
      // ...
    }
  },
  "en": {
    "nav": {
      "home": "Home",
      // ...
    }
  }
}
```

### Legge til nye språk

1. Legg til språket i `translations.json`
2. Oppdater `i18n.js` med språklogikk
3. Legg til språkvalg-knapp i navigasjonen

## 🛠 Teknologier

- **HTML5** - Semantisk markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS, ingen frameworks
- **Marked.js** - Markdown parsing (via CDN)
- **Formspree** - Kontaktskjema håndtering
- **Google Fonts** - Inter font

## 📝 Lisens

Dette prosjektet er laget for Lion Cage. Alle rettigheter forbeholdt.

## 🤝 Bidrag

Dette er et privat prosjekt for Lion Cage. For spørsmål eller forslag, ta kontakt via nettsiden.

## 📞 Kontakt

- E-post: kontakt@lioncage.no
- Nettside: [lioncage.no](https://lioncage.no)

---

**Laget med ❤️ av Lion Cage teamet**
