import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollFadeIn({ y = 50, duration = 1 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,

      { opacity: 0, y },

      {
        opacity: 1,

        y: 0,

        duration,

        scrollTrigger: {
          trigger: el,

          start: "top 80%",

          toggleActions: "play none none none",
        },
      }
    );
  }, [y, duration]);

  return ref;
}
