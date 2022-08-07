import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useFadeDown(
  id,
  trigger,
  stagger = 0.1,
  duration = 0.8,
  delay = 1
) {
  useEffect(() => {
    const animate = gsap.from(id, {
      opacity: 0,
      y: -150,
      stagger,
      duration,
      delay,
      ease: "back.out(1.1)",
      scrollTrigger: trigger,
    });
    return () => {
      animate.kill();
    };
  }, []);
  return { id, trigger, stagger, duration, delay };
}
