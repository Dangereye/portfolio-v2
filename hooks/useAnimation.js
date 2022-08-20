import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useMove(id, trigger, newOptions, newTriggers) {
  const animation = {
    id,
    options: {
      scrollTrigger: {
        trigger,
        start: "top center",
        markers: false,
        ...newTriggers,
      },
      opacity: 0,
      y: 300,
      stagger: 0,
      duration: 0.6,
      delay: 0,
      ease: "ease-out",
      ...newOptions,
    },
  };

  useEffect(() => {
    if (animation.id) {
      const animate = gsap.from(animation.id, {
        ...animation.options,
      });
      return () => {
        animate.kill();
      };
    }
  }, []);
  return { animation };
}
