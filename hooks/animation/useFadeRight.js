import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useFadeRight(
  condition = true,
  id,
  trigger,
  stagger = 0.1,
  duration = 0.6,
  delay = 0
) {
  useEffect(() => {
    if (condition) {
      const animate = gsap.from(id, {
        opacity: 0,
        x: -150,
        stagger,
        duration,
        delay,
        ease: "back.out(1.1)",
        scrollTrigger: { trigger, start: "top center", markers: false },
      });
      return () => {
        animate.kill();
      };
    }
  }, [condition]);
  return { condition, id, trigger, stagger, duration, delay };
}
