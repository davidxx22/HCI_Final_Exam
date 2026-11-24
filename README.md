# PhilHealth HCI redesign

A six-page student prototype for an HCI evaluation of PhilHealth’s public information website. It uses the group’s Figma design as a visual reference and makes common tasks easier to find, including membership information, benefit categories, accredited facilities, and downloadable forms.

## Run locally

Use Node.js 22.12+ or a newer supported LTS release and npm. From this folder:

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. To type-check and build the prototype:

```sh
npm run build
npm run preview
```

The production output is in `dist/`. Any future static host must route unknown paths to `index.html` so direct links to app pages and the prototype’s recovery page work.

## Project structure

| Location | Purpose |
| --- | --- |
| `src/App.tsx` | Route table, shared navigation, page title and focus handling, and footer |
| `src/pages/` | Six prototype pages and a fallback page |
| `src/components/` | Shared cards, form controls, disclosures, page headings, and official links |
| `src/content/` | Typed form records and official URLs |
| `src/styles/` | Shared colors, type, layout, and responsive rules |
| `public/` | Local campaign artwork from PhilHealth |

The prototype uses React, TypeScript, Vite, React Router, Lucide, and plain CSS. It keeps filter state in the browser URL. Official forms and directories open on PhilHealth’s website. The Downloads list is a representative selection and links to the complete catalog.

See [CHECKLIST.md](CHECKLIST.md) for progress, [AGENT.md](AGENT.md) for contributor instructions, and [UX notes](docs/UX-NOTES.md) for sources and demo scenarios.
