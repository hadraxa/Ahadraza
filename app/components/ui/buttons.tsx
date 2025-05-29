import React, { useEffect, useRef } from "react";
import styles from "./buttons.module.css";

interface ButtonEffectProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ButtonEffect: React.FC<ButtonEffectProps> = ({
  text,
  onClick,
  className,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;
    if (!button || !circle) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      circle.style.top = `${e.clientY - rect.top}px`;
      circle.style.left = `${e.clientX - rect.left}px`;
    };
    const handleMouseEnter = () => (circle.style.scale = "1");
    const handleMouseLeave = () => (circle.style.scale = "0");

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      onClick={onClick}
      ref={buttonRef}
      className={`${styles.button} ${styles.buttonSecondary} ${
        className || ""
      }`}
    >
      <div ref={circleRef} className={styles.circle} />
      <span>{text}</span>
    </button>
  );
};

export default ButtonEffect;
