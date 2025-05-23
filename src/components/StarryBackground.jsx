import React, { useRef, useEffect } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialization of canvas and 2D rendering context.
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set initial canvas dimensions and store star/meteor data.
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    // stars: Array to hold star objects. Each star has:
    //  x, y: random coordinates on canvas.
    //  radius: random size.
    //  alpha: initial random opacity.
    //  delta: random value for opacity oscillation (twinkling effect).
    //  speedY: random vertical speed for parallax/movement effect.
    let stars = [];
    // meteors: Array to hold meteor objects. Each meteor has:
    //  x, y: starting coordinates.
    //  length: length of the meteor tail.
    //  speedX, speedY: movement speed.
    //  opacity: for fade-out effect.
    let meteors = [];

    // initStars: Populates the `stars` array with randomly generated star objects.
    const initStars = () => {
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        delta: Math.random() * 0.02, // Small change for alpha oscillation
        speedY: 0.05 + Math.random() * 0.05, // Slow vertical displacement
      }));
    };

    // createMeteor: Randomly generates new meteors based on a probability (Math.random() < 0.01 means ~1% chance per frame).
    const createMeteor = () => {
      if (Math.random() < 0.01) {
        meteors.push({
          x: Math.random() * width, // Start from a random x position
          y: 0, // Start from the top of the screen
          length: 200 + Math.random() * 100, // Varying tail length
          speedX: 6 + Math.random() * 3, // Horizontal speed
          speedY: 3 + Math.random() * 2, // Vertical speed
          opacity: 1, // Initial full opacity
        });
      }
    };

    // drawStars: Handles rendering of stars on the canvas.
    const drawStars = () => {
      ctx.clearRect(0, 0, width, height); // Clear canvas for redrawing
      stars.forEach((star) => {
        // Update star alpha for twinkling effect
        star.alpha += star.delta;
        // Reverse delta if alpha goes out of 0-1 range
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;

        // Update star vertical position for parallax effect
        star.y += star.speedY;
        // Reset star to top if it moves off-screen vertically
        if (star.y > height) star.y = 0;

        // Draw the star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    };

    // drawMeteors: Handles rendering and updating of meteors.
    const drawMeteors = () => {
      meteors.forEach((meteor, index) => {
        // Draw the meteor trail
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        // The tail is drawn backwards from the meteor's current position
        ctx.lineTo(meteor.x - meteor.length, meteor.y - meteor.length * 0.5);
        ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Update meteor position
        meteor.x += meteor.speedX;
        meteor.y += meteor.speedY;
        // Decrease opacity for fade-out effect
        meteor.opacity -= 0.01;

        // Remove meteor if it's no longer visible
        if (meteor.opacity <= 0) meteors.splice(index, 1);
      });
    };

    // animate: The main animation loop. Clears and redraws stars and meteors,
    // and attempts to create new meteors in each frame. Uses requestAnimationFrame for smooth animations.
    const animate = () => {
      drawStars();
      drawMeteors();
      createMeteor();
      requestAnimationFrame(animate); // Loop the animation
    };

    initStars(); // Initialize stars on component mount
    animate(); // Start the animation loop

    // handleResize: Re-initializes canvas dimensions and star positions on window resize
    // to maintain the visual integrity of the background.
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars(); // Re-create stars based on new dimensions
    };

    window.addEventListener("resize", handleResize);
    // Cleanup: remove event listener when component unmounts.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default StarryBackground;
