import gsap from "gsap";
import Lenis from "lenis";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  // Scroll fluido
  const lenis = new Lenis();
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Momento principale: il nome passa da sottile a pesante, lettera per lettera
  const letters = document.querySelectorAll<HTMLElement>("[data-letter]");
  gsap.fromTo(
    letters,
    { "--w": 200 },
    { "--w": 800, duration: 1.4, ease: "power3.out", stagger: 0.06 }
  );
}
