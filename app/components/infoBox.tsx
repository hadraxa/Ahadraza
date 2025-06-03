import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  // Styles object
  const styles = {
    infoContainer: {
      width: "100%",
      height: "100vh",
      position: "relative" as const,
    },
    infoCards: {
      width: "20%",
      height: "20vh",
      borderRadius: "12px",
      margin: "0 10px",
      backdropFilter: "blur(25px) saturate(200%)",
      WebkitBackdropFilter: "blur(25px) saturate(200%)",
      backgroundColor: "rgba(87, 87, 87, 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.125)",
      padding: "30px",
      textAlign: "start" as const,
    },
    topText: {
      textTransform: "uppercase" as const,
      fontSize: "17px",
      fontWeight: "100",
      color: "#e4c200",
    },
    bottomText: {
      fontSize: "3rem",
      fontWeight: "600",
    },
    animatedText: {
      willChange: "transform, opacity",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute" as const,
      bottom: customBottomVal || "0",
      left: "0",
      right: "0",
      padding: "20px",
    },
    // Mobile styles
    mobileStyles: {
      infoCards: {
        width: "90%",
        height: "auto",
        margin: "10px auto",
        padding: "20px",
      },
      topText: {
        fontSize: "15px",
      },
      bottomText: {
        fontSize: "2rem",
      },
      infoContainer: {
        bottom: "100px",
      }
    }
  };

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

  // Function to handle responsive styles
  const getResponsiveStyle = (baseStyle: any, mobileStyle: any, isMobile: boolean) => {
    return isMobile ? { ...baseStyle, ...mobileStyle } : baseStyle;
  };

  // Check if mobile (you might want to use a more sophisticated detection)
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.infoContainer}>
      <div style={styles.cardContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={getResponsiveStyle(styles.infoCards, styles.mobileStyles.infoCards, isMobile)}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
          >
            <div>
              <div style={getResponsiveStyle(styles.topText, styles.mobileStyles.topText, isMobile)}>
                <p>{card.topText}</p>
              </div>
              <div style={getResponsiveStyle(styles.bottomText, styles.mobileStyles.bottomText, isMobile)}>
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