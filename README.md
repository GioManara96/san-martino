# San Martino

Sito statico in React + Vite + Tailwind, pubblicato su GitHub Pages:
https://giomanara96.github.io/san-martino/

## Sviluppo locale

```bash
npm install
npm run dev
```

## Come si pubblica

```bash
git checkout main
npm install
npm run deploy
```

Fatto. Dopo 1-2 minuti il sito online è aggiornato.

### Cosa succede dietro

- `npm run deploy` lancia prima `predeploy` → `npm run build`, che genera la cartella `dist/`.
- Poi il pacchetto npm [`gh-pages`](https://www.npmjs.com/package/gh-pages) prende `dist/` e la pusha sul branch **`gh-pages`** con un commit chiamato "Updates".
- GitHub Pages (Settings → Pages → *Deploy from a branch* → `gh-pages` / `/ (root)`) serve il contenuto di quel branch.

### Cose da sapere

- **Non fare merge tra `main` e `gh-pages`.** Hanno history separate di proposito: `main` contiene il sorgente, `gh-pages` solo la build generata. Git dirà che le history non sono collegate: è normale.
- **Non modificare a mano il branch `gh-pages`**: viene sovrascritto a ogni deploy.
- Il `base: "/san-martino/"` in `vite.config.js` serve perché il sito vive in una sottocartella. Se cambia il nome del repo o si aggiunge un dominio personalizzato, va aggiornato.
- **Dopo il deploy vedo ancora la vecchia versione?** È la cache del browser (GitHub Pages usa `max-age=600`, cioè 10 minuti). Ricaricare con Cmd+Shift+R o aprire in incognito.
- Per controllare che il deploy sia arrivato: `git fetch && git log -1 origin/gh-pages` deve mostrare un commit "Updates" con la data di oggi.
