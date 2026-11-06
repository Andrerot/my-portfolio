# Piano di lavoro: portfolio

Obiettivo: sito veloce, curato e a costo zero da allegare alle candidature.
Stack: Astro + isole React + Tailwind (v4) + GSAP + Lenis. Hosting: Cloudflare Pages.

## Direzione di design (da rivedere insieme)
- Palette: Carta `#ECEFF3`, Inchiostro `#101828`, Blu `#2447F5`, Griglia `#CBD3DD`.
- Font: Bricolage Grotesque (titoli, asse peso variabile) + Public Sans (testo).
- Momento memorabile unico: il nome nell'hero passa da sottile a pesante lettera per lettera. Il resto resta sobrio.
- Regole: niente animazioni a pioggia, rispettare `prefers-reduced-motion`, mobile first.

## Fase 0 - Setup (30 min)
- [x] Inizializzazione progetto Astro con TypeScript
- [x] Configurazione React e Tailwind (v4 via `@tailwindcss/vite`)
- [x] Installazione dipendenze `gsap` e `lenis`
- [x] Struttura `src/` (`pages`, `layouts`, `styles`, `scripts`) e verifica build riuscita
- [ ] Primo commit e push su GitHub

## Fase 1 - Contenuti (prima del design!)
- [ ] Scrivere headline e 2 righe di presentazione (chi sei, cosa cerchi)
- [ ] Scegliere 3-4 progetti migliori: problema, scelte tecniche, risultato, link a repo e demo
- [ ] Elenco competenze reale (linguaggi, framework, strumenti)
- [ ] CV in PDF aggiornato (`public/cv.pdf`)
- [ ] Contatti: email, LinkedIn, GitHub

## Fase 2 - Struttura e stile
- [ ] Sostituire i placeholder in `index.astro`
- [ ] Rifinire palette e tipografia, controllare i contrasti
- [ ] Responsive: 360px, 768px, 1280px
- [ ] Pagina dettaglio per ogni progetto (`src/pages/progetti/[slug].astro`)

## Fase 3 - Animazioni
- [ ] Hero: animazione del nome (già impostata in `motion.ts`)
- [ ] Un solo effetto allo scroll (es. sezione progetti con ScrollTrigger)
- [ ] Transizioni tra pagine (View Transitions di Astro)
- [ ] Opzionale: una piccola isola React interattiva (filtro progetti per tecnologia)
- [ ] Verificare `prefers-reduced-motion`

## Fase 4 - Qualità
- [ ] Lighthouse 90+ su tutte le metriche
- [ ] Meta tag, Open Graph e immagine di anteprima (`public/og.png`), `sitemap`
- [ ] Navigazione da tastiera e focus visibile
- [ ] Testare su telefono reale e su Firefox/Safari

## Fase 5 - Deploy
- [ ] Collegare il repo a Cloudflare Pages (build: `npm run build`, output: `dist`)
- [ ] Sottodominio `.pages.dev` oppure dominio personalizzato (facoltativo)
- [ ] Inserire il link nel CV e su LinkedIn
