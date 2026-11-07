import gsap from "gsap";
import Lenis from "lenis";

function initMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Lenis smooth inertia scrolling
  if (!reduceMotion) {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  // 2. Initial Variable Font Entrance Animation
  const letters = document.querySelectorAll<HTMLElement>("[data-letter]");
  if (letters.length > 0 && !reduceMotion) {
    gsap.fromTo(
      letters,
      {
        "--w": 200,
        opacity: 0.3,
        y: 12,
      },
      {
        "--w": 750,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.035,
      }
    );
  }

  // 3. "Gravitational Lens" — Magnetic Cursor Proximity Typography
  const heroH1 = document.querySelector<HTMLElement>(".hero h1");
  if (heroH1 && !reduceMotion) {
    const letterSpans = heroH1.querySelectorAll<HTMLElement>("[data-letter]");

    heroH1.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      letterSpans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(mouseX - centerX, mouseY - centerY);
        const maxDist = 130;

        if (dist < maxDist) {
          const factor = 1 - dist / maxDist; // 0 (far) to 1 (center)
          const targetWeight = Math.round(750 + factor * 220); // 750 up to 970
          const liftY = -factor * 6; // subtle physical lift
          span.style.setProperty("--w", `${targetWeight}`);
          span.style.transform = `translateY(${liftY}px)`;
          span.style.textShadow = `0 0 ${Math.round(factor * 20)}px rgba(96, 165, 250, ${factor * 0.8})`;
          span.style.color = factor > 0.4 ? "#ffffff" : "";
        } else {
          span.style.setProperty("--w", "750");
          span.style.transform = "translateY(0px)";
          span.style.textShadow = "none";
          span.style.color = "";
        }
      });
    });

    heroH1.addEventListener("mouseleave", () => {
      letterSpans.forEach((span) => {
        gsap.to(span, {
          "--w": 750,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            span.style.textShadow = "none";
            span.style.color = "";
          },
        });
      });
    });
  }

  // 4. "Cypher / Terminal Decrypt" Engine
  const GLYPHS = "0123456789ABCDEF!<>-_/[]{}—=+*^?#_αβγλ";
  const decryptElements = document.querySelectorAll<HTMLElement>("[data-decrypt]");

  function scramble(element: HTMLElement) {
    if (element.dataset.decrypting === "true") return;
    element.dataset.decrypting = "true";

    const originalText = element.dataset.original || element.textContent || "";
    if (!element.dataset.original) {
      element.dataset.original = originalText;
    }

    const length = originalText.length;
    let iteration = 0;
    const maxIterations = 9;
    const speed = 25; // ms per tick

    const interval = setInterval(() => {
      element.textContent = originalText
        .split("")
        .map((char, index) => {
          if (char === " " || char === "\u00A0") return char;
          if (index < (iteration / maxIterations) * length) {
            return originalText[index];
          }
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      iteration++;
      if (iteration > maxIterations) {
        clearInterval(interval);
        element.textContent = originalText;
        element.dataset.decrypting = "false";
      }
    }, speed);
  }

  decryptElements.forEach((el) => {
    // Decrypt on hover
    el.addEventListener("mouseenter", () => scramble(el));

    // Optional decrypt once on scroll into view
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            scramble(el);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
  });

  // 5. Smooth Reveal for Cards & Sections
  const cards = document.querySelectorAll<HTMLElement>(".card, .timeline-item, .skill-box");
  if (!reduceMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 18 },
              { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((c) => {
      c.style.opacity = "0";
      observer.observe(c);
    });
  }
}

// Run immediately and on Astro View Transitions
initMotion();
document.addEventListener("astro:page-load", initMotion);
