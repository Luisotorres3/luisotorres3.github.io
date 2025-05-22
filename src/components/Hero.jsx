import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let frame = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const createTextParticles = () => {
      const text = "Luis Soto Torres";
      // Ajustar tamaño de fuente según el ancho de la pantalla
      const fontSize = window.innerWidth < 768 ? 40 : 80;
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const x = canvas.width / 2;
      const y =
        window.innerWidth < 768
          ? canvas.height / 2 - 100
          : canvas.height / 2 - 50;

      ctx.fillText(text, x, y);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      particles = [];

      // Ajustar densidad de partículas - más densidad en móvil
      const step = window.innerWidth < 768 ? 3 : 4;

      // Color primario fijo del tema
      const primaryColor = "199, 112, 240"; // #c770f0 en RGB

      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const index = (y * canvas.width + x) * 4;
          const alpha = pixels[index + 3];

          if (alpha > 0) {
            const particleX =
              x - canvas.width / 2 + ctx.measureText(text).width / 2;
            particles.push({
              x: canvas.width + Math.random() * 50,
              y: y + (Math.random() * 40 - 20),
              targetX: x,
              targetY: y,
              size:
                window.innerWidth < 768
                  ? Math.random() * 1.2 + 1
                  : Math.random() * 1.5 + 1,
              opacity: Math.random() * 0.4 + 0.6, // Mayor opacidad base
              speed: Math.random() * 0.2 + 0.15,
              delay: particleX * (window.innerWidth < 768 ? 0.3 : 0.8),
              color: primaryColor,
            });
          }
        }
      }

      particles.sort((a, b) => a.delay - b.delay);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const drawStar = (ctx, x, y, size, opacity, color) => {
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size / 2;

      ctx.beginPath();
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 2);

      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const pointX = Math.cos(angle) * radius;
        const pointY = Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }

      ctx.closePath();

      // Aplicar color con glow effect
      ctx.fillStyle = `rgba(${color}, ${opacity})`;
      ctx.shadowColor = `rgba(${color}, 1)`;
      ctx.shadowBlur = 10;
      ctx.fill();

      // Añadir un segundo glow para más intensidad
      ctx.shadowBlur = 5;
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (frame > particle.delay) {
          const dx = particle.targetX - particle.x;
          const dy = particle.targetY - particle.y;

          particle.x += dx * particle.speed;
          particle.y += dy * particle.speed;

          // Movimiento flotante más suave
          particle.y += Math.sin(frame * 0.03) * 0.2;

          drawStar(
            ctx,
            particle.x,
            particle.y,
            particle.size,
            particle.opacity,
            particle.color
          );
        }
      });

      frame++;
      requestAnimationFrame(animate);
    };

    // Recrear partículas cuando cambie el tamaño de la ventana
    const handleResize = () => {
      setCanvasSize();
      createTextParticles();
    };

    window.addEventListener("resize", handleResize);
    createTextParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-40 md:mt-32 space-y-6"
        >
          <p className="text-lg md:text-2xl text-muted/90">
            {t("hero.subtitle")}
          </p>

          <p className="text-base md:text-xl text-muted/80 max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
