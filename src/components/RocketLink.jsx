import React, { useState } from "react";
import RocketTransition from "./RocketTransition";

const RocketLink = ({ href, children, className = "" }) => {
  const [showRocket, setShowRocket] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowRocket(true);

    // Navegar después de un breve retraso para la animación
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
      setShowRocket(false);
    }, 1000);
  };

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={`relative group ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {/* Mini cohete que aparece en hover */}
        <span className="absolute -right-4 -top-4 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          🚀
        </span>
      </a>
      <RocketTransition isVisible={showRocket} onAnimationComplete={() => {}} />
    </>
  );
};

export default RocketLink;
