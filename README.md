# Portfolio - Marketing Engineer

Mini-site portfolio professionnel : comment j'industrialise le travail d'une agence paid media avec l'IA, du tracking a l'optimisation.

Site statique (HTML / CSS / JS, sans dependance serveur), deploye via GitHub Pages.

## Structure

| Page | Contenu |
|---|---|
| `index.html` | Accueil : these, fil rouge, systemes en production, vision & R&D, approche, stack |
| `reporting-loop.html` | Boucle fermee de reporting Google Ads (controle maker != checker) |
| `sea-platform.html` | Dashboard d'audit Google Ads live, moteur hybride regles + LLM |
| `audit-engine.html` | Moteur d'audit modulaire (~45 modules a contexte partage) |
| `mcp-servers.html` | Serveurs MCP maison (Google Ads, GTM) |
| `comms-assistant.html` | Triage mail, brouillons, comptes-rendus de reunion |
| `vision-rd.html` | Pipeline d'innovation : call vers compte-rendu, reporting autonome, tracking auto-repare, GSO |
| `assets/` | `styles.css` (design system) + `app.js` (interactions) |

## Developpement local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000
