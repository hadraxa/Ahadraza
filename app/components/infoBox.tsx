import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Style from "./Style/infoBox.module.css";

gsap.registerPlugin(ScrollTrigger);

interface InfoBoxProps {
  cards: Array<{
    topText: string;
    bottomText: string;
  }>;
  customBottomVal?: string;
}

function InfoBox({ cards, customBottomVal }: InfoBoxProps) {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      cardRefs.current.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -50 : 50,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }
  }, []);

  return (
    <div className={Style.infoContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: customBottomVal,
          left: "0",
          right: "0",
          padding: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={Style.infoCards}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
          >
            <div className={Style.cardCont}>
              <div className={Style.topText}>
                <p>{card.topText}</p>
              </div>
              <div className={Style.bottomText}>
                <p>{card.bottomText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoBox;
