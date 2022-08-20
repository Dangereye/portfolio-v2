import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScale(id, trigger, newOptions, newTriggers) {
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
      scale: 1.1,
      duration: 1,
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
