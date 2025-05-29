import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./strips.module.css";

gsap.registerPlugin(ScrollTrigger);

function Strips() {
  useEffect(() => {
    const animatedText = document.querySelector(
      `.${style.AnimatedText}`
    ) as HTMLElement;

    if (animatedText) {
      const originalText = animatedText.textContent?.trim() || "";

      animatedText.innerHTML = `${originalText} ${originalText}`;

      gsap.to(animatedText, {
        scrollTrigger: {
          trigger: animatedText,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        x: "-50%",
        ease: "none",
      });
    }
  }, []);

  return (
    <div className={style.StripCon}>
      <div className={style.StripText}>
        <h1 className={style.AnimatedText}>
          💻 website developer 🎇 full-stack developer 🎇 ux/ui designer 🎇
          software developer 💻 website developer 🎇 full-stack developer 🎇
          ux/ui designer 🎇 software developer
        </h1>
      </div>
    </div>
  );
}

export default Strips;
