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
- [x] Primo commit eseguito (pronto per il push su GitHub)

## Fase 1 - Contenuti (prima del design!)
- [x] Scritta headline e presentazione in lingua inglese focalizzata su Cloud, Microservizi e Agentic AI
- [x] Definiti i progetti chiave con stack e descrizioni orientate ai risultati
- [x] Inserite competenze reali (Python, Java, SpringBoot, AWS, Kubernetes, Helm, AI Agents)
- [x] Inserita timeline esperienze (CCH Tagetik, Deloitte Consulting, Università di Salerno 110 e lode)
- [x] Contatti e social reali (email, LinkedIn, GitHub)
- [x] File placeholder `public/cv.pdf` configurato

## Fase 2 - Struttura e stile
- [x] Sostituiti tutti i placeholder in `index.astro` con layout a sezioni semantiche
- [x] Rifinita palette (Carta `#ECEFF3`, Inchiostro `#101828`, Blu `#2447F5`) e tipografia Bricolage Grotesque
- [x] Responsive layout per mobile, tablet e desktop
- [ ] Opzionale: Pagina dettaglio per ogni progetto (`src/pages/progetti/[slug].astro`)

## Fase 3 - Animazioni
- [x] Hero: animazione cinetica del nome con font variabile Bricolage Grotesque in `motion.ts`
- [x] Scroll fluido con Lenis e reveal con animazione GSAP/IntersectionObserver
- [x] Supporto e verifica `prefers-reduced-motion`
- [ ] Opzionale: Isola React con filtri animati per progetti / tecnologie

## Fase 4 - Qualità
- [ ] Lighthouse 90+ su tutte le metriche
- [ ] Meta tag, Open Graph e immagine di anteprima (`public/og.png`), `sitemap`
- [ ] Navigazione da tastiera e focus visibile
- [ ] Testare su telefono reale e su Firefox/Safari

## Fase 5 - Deploy
- [ ] Collegare il repo a Cloudflare Pages (build: `npm run build`, output: `dist`)
- [ ] Sottodominio `.pages.dev` oppure dominio personalizzato (facoltativo)
- [ ] Inserire il link nel CV e su LinkedIn
