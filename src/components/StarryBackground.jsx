import React, { useRef, useEffect } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let stars = [];
    let meteors = [];

    const initStars = () => {
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        delta: Math.random() * 0.02,
        speedY: 0.05 + Math.random() * 0.05, // para desplazamiento vertical suave
      }));
    };

    const createMeteor = () => {
      if (Math.random() < 0.01) {
        meteors.push({
          x: Math.random() * width,
          y: 0,
          length: 200 + Math.random() * 100,
          speedX: 6 + Math.random() * 3,
          speedY: 3 + Math.random() * 2,
          opacity: 1,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;

        star.y += star.speedY;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    };

    const drawMeteors = () => {
      meteors.forEach((meteor, index) => {
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - meteor.length, meteor.y - meteor.length * 0.5);
        ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        meteor.x += meteor.speedX;
        meteor.y += meteor.speedY;
        meteor.opacity -= 0.01;

        if (meteor.opacity <= 0) meteors.splice(index, 1);
      });
    };

    const animate = () => {
      drawStars();
      drawMeteors();
      createMeteor();
      requestAnimationFrame(animate);
    };

    initStars();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);
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
