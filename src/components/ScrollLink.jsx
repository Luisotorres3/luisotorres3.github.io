import React, { useState } from "react";
import ScrollTransition from "./ScrollTransition";

const ScrollLink = ({ href, children, className = "", onClick }) => {
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    const currentScroll = window.scrollY;
    const targetScroll = targetSection.offsetTop;
    const direction = targetScroll > currentScroll ? "down" : "up";

    setShowTransition(true);

    // Ejecutar onClick prop si existe
    if (onClick) onClick(e);

    // Esperar un momento antes de iniciar el scroll
    setTimeout(() => {
      // Calcular la distancia total a recorrer
      const distance = Math.abs(targetScroll - currentScroll);
      const duration = 1000; // 1 segundo en ms
      const frames = 60; // 60 frames por segundo
      const totalFrames = (duration / 1000) * frames;
      let currentFrame = 0;

      // Función de easing
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animate = () => {
        currentFrame++;
        const progress = easeInOutQuad(currentFrame / totalFrames);
        const newPosition =
          currentScroll + (targetScroll - currentScroll) * progress;

        window.scrollTo(0, newPosition);

        if (currentFrame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => setShowTransition(false), 200);
        }
      };

      animate();
    }, 100);
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
