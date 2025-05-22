import React, { useState } from "react";
import ScrollTransition from "./ScrollTransition";

const ScrollLink = ({ href, children, className = "" }) => {
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    const currentScroll = window.scrollY;
    const targetScroll = targetSection.offsetTop;
    const direction = targetScroll > currentScroll ? "down" : "up";

    setShowTransition(true);

    // Esperar a que termine la animación antes de hacer scroll
    setTimeout(() => {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setShowTransition(false), 800); // Duración de la animación
    }, 400); // Mitad de la duración de la animación
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={`relative ${className}`}>
        {children}
      </a>
      <ScrollTransition
        isVisible={showTransition}
        onAnimationComplete={() => {}}
        direction={
          window.scrollY > document.querySelector(href)?.offsetTop
            ? "up"
            : "down"
        }
      />
    </>
  );
};

export default ScrollLink;
