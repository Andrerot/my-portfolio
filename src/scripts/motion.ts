import gsap from "gsap";
import Lenis from "lenis";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  // 1. Lenis smooth inertia scrolling
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

  // 2. Signature Hero Kinetic Typography (variable font weight animation letter by letter)
  const letters = document.querySelectorAll<HTMLElement>("[data-letter]");
  if (letters.length > 0) {
    gsap.fromTo(
      letters,
      {
        "--w": 200,
        opacity: 0.3,
        y: 10,
      },
      {
        "--w": 800,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.04,
      }
    );
  }

  // 3. Smooth reveal for cards and sections
  const cards = document.querySelectorAll<HTMLElement>(".card, .timeline-item, .skill-box");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            entry.target,
            { opacity: 0, y: 20 },
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
