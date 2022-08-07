import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScaleDown(id, trigger, duration = 1, delay = 0.3) {
  useEffect(() => {
    const animate = gsap.from(id, {
      opacity: 0,
      scale: 1.2,
      duration,
      delay,
      ease: "back.out(1.1)",
      scrollTrigger: trigger,
    });
    return () => {
      animate.kill();
    };
  }, []);
  return { id, trigger, duration, delay };
}
