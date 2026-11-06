# Piano di lavoro: portfolio

Obiettivo: sito veloce, curato e a costo zero da allegare alle candidature.
Stack: Astro + isole React + Tailwind (v4) + GSAP + Lenis. Hosting: Cloudflare Pages.

## Direzione di design
- Palette: Spazio profondo cosmico `#070B14`, Carte stellari `#0F172A`, Bagliore Pulsar Blu `#3B82F6`, Stella Polare Oro `#FACC15`, Polvere di stelle `#94A3B8`.
- Font: Bricolage Grotesque (titoli cinetici, asse peso variabile) + Public Sans (testo).
- Momento memorabile unico: Canvas interattivo della volta celeste con le costellazioni del Grande Carro (Ursa Major) e Cassiopea che puntano alla Stella Polare (Polaris) + animazione cinetica del nome.
- Filosofia: "The North Star Principle" (Attitudine, problem solving sistemico e soft skill > pura memorizzazione mnemonica della sintassi nell'era AI).
- Hosting: GitHub Pages (automatizzato con GitHub Actions CI/CD a costo zero).

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
- [x] Includere sezione "Playground & Indie Experiments" per valorizzare i progetti personali (Godot party games, Next.js Expense Tracker) che dimostrano passione per il coding, game dev e curiosità tecnica a 360°

## Fase 2 - Struttura e stile
- [x] Sostituiti tutti i placeholder in `index.astro` con layout a sezioni semantiche
- [x] Rifinita palette (Carta `#ECEFF3`, Inchiostro `#101828`, Blu `#2447F5`) e tipografia Bricolage Grotesque
- [x] Responsive layout per mobile, tablet e desktop
- [x] Isola React (`ProjectGallery.tsx`) con filtri per categorie (All, Enterprise & Cloud, AI & Modern Web, Indie Lab & Games)
- [x] Effetto "Spotlight Hover" radiale che segue il cursore sulle card dei progetti
- [x] Pulsante "Copy Email" con feedback visivo interattivo

## Fase 3 - Animazioni
- [x] Hero: animazione cinetica del nome con font variabile Bricolage Grotesque in `motion.ts`
- [x] Scroll fluido con Lenis e reveal con animazione GSAP/IntersectionObserver
- [x] Transizioni native tra pagine (Astro View Transitions in `Layout.astro`)
- [x] Supporto e verifica `prefers-reduced-motion`

## Fase 4 - Qualità
- [x] Ottimizzazione statica (100/100 performance zero-runtime con isole on demand)
- [x] Meta tag, Open Graph image (`public/og.png`), Twitter cards e `robots.txt`
- [x] Navigazione da tastiera e focus visibile (outline custom)

## Fase 5 - Deploy (GitHub Pages)
- [x] Configurato workflow automatico GitHub Actions `.github/workflows/deploy.yml`
- [x] Configurato `astro.config.mjs` con `site` e `base` per GitHub Pages
- [x] Push eseguito con successo sul branch `main` del repository GitHub
- [ ] Abilitare GitHub Pages nelle impostazioni della repo su GitHub (Source: "GitHub Actions")
- [ ] Inserire il link definitivo nel CV e su LinkedIn
