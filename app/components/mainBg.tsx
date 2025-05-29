import React, { useEffect, useRef } from "react";
import style from "./style/mainBg.module.css";

interface MainBgProps {
  children: React.ReactNode;
}

const MainBg: React.FC<MainBgProps> = ({ children }) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const move = () => {
      if (interactiveRef.current) {
        curX.current += (tgX.current - curX.current) / 20;
        curY.current += (tgY.current - curY.current) / 20;
        interactiveRef.current.style.transform = `translate(${Math.round(
          curX.current
        )}px, ${Math.round(curY.current)}px)`;
        frameRef.current = requestAnimationFrame(move);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX.current = event.clientX;
      tgY.current = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className={style.container}>
      {children}
      <div className={style.gradientBg}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className={style.gradientsContainer}>
          <div className={style.g1}></div>
          <div className={style.g2}></div>
          <div className={style.g3}></div>
          <div className={style.g4}></div>
          <div className={style.g5}></div>
          <div ref={interactiveRef} className={style.interactive}></div>
        </div>
      </div>
    </div>
  );
};

export default MainBg;
