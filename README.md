# Portfolio - Aleksa Gajic | Systèmes IA, Paid & Tracking

Site vitrine freelance, positionné autour de trois expertises (l'IA et l'automatisation en offre
principale, adossées au pilotage SEA et au tracking). Cible : agences paid en quête de renfort et
annonceurs cherchant un freelance. C'est un **actif de conversion** (à envoyer en prospection, bio
LinkedIn, propositions commerciales), pas un actif d'acquisition de trafic organique.

Site statique (HTML / CSS / JS, sans dépendance serveur), déployé via GitHub Pages sur
`https://aleksaprox.github.io`.

## Structure

| Page | Rôle |
|---|---|
| `index.html` | Accueil : hero IA-first, 3 expertises (`#offre`), parcours (`#parcours`), preuves, contact (`#contact`) |
| `ia.html` | Pilier 1 (offre principale) : Systèmes IA & automatisation |
| `paid.html` | Pilier 2 : Pilotage SEA & performance |
| `tracking.html` | Pilier 3 : Tracking & Data |
| `realisations.html` | Hub des 6 systèmes (avec badges de statut) → pages détail |
| `etudes-de-cas.html` | 4 cas clients anonymisés (chiffres à valider, voir backlog) |
| `reporting-loop.html` | Détail système : reporting en boucle fermée (maker ≠ checker) |
| `sea-platform.html` | Détail système : dashboard d'audit Google Ads live |
| `audit-engine.html` | Détail système : moteur d'audit ~45 modules |
| `mcp-servers.html` | Détail système : serveurs MCP Google Ads + GTM |
| `comms-assistant.html` | Détail système : triage mail, brouillons, comptes-rendus |
| `vision-rd.html` | Détail système : feuille de route (agents Slack, autotracking, GSO) |
| `assets/styles.css` | Design system (source de vérité visuelle) |
| `assets/app.js` | Interactions (menu mobile, nav active, reveal scroll, fallback mailto du form) |

## Navigation

Menu unifié sur toutes les pages : **Expertises** (`index.html#offre`) · **Réalisations** ·
**Études de cas** · **Parcours** (`index.html#parcours`) · CTA **Réserver un appel** (`index.html#contact`).
Footer unifié identique partout (Expertises / Preuves / Contact).

## Dépendances à brancher (cf. backlog `Freelance/Site Web/README.md`)

- **Prise de RDV** : le bouton « Réserver un appel » ouvre l'email tant que le lien cal.com/Calendly
  n'est pas renseigné (chercher `TODO cal.com` dans `index.html`).
- **Formulaire** : `action` Formspree à remplacer (`REMPLACER_PAR_VOTRE_ID` dans `index.html`).
  En attendant, `app.js` bascule automatiquement l'envoi sur l'email (repli mailto).
- **Études de cas** : remplacer les placeholders `[XX]` par les chiffres réels validés avant de
  partager le site (chercher `TODO chiffre réel` dans `etudes-de-cas.html`).

## Développement local

```bash
cd "About Me/Portfolio"
python3 -m http.server 8000
# puis http://localhost:8000
```

## Déploiement

Repo GitHub : `aleksaprox/aleksaprox.github.io` (GitHub Pages, branche par défaut).
Commit + push → mise en ligne automatique.
