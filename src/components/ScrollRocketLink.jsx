import React, { useState } from "react";
import RocketTransition from "./RocketTransition";

const ScrollRocketLink = ({ href, children, className, onClick }) => {
  const [showRocket, setShowRocket] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowRocket(true);
  };

  const handleTransitionEnd = () => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    if (onClick) {
      onClick(); // To close the mobile menu, for example
    }
    setShowRocket(false);
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
      <RocketTransition
        isVisible={showRocket}
        onTransitionEnd={handleTransitionEnd}
      />
    </>
  );
};

export default ScrollRocketLink;
