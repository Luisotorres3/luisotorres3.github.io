import React from "react";
import data from "../data/about.json";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        ¡Hola, soy Luis Soto Torres!
      </h1>
      <p className="text-lg md:text-xl text-muted max-w-2xl">
        Ingeniero Informático explorando el universo del desarrollo web 🚀
      </p>
      <br />
      <p className="text-lg md:text-xl text-muted max-w-2xl">
        {data.description}
      </p>
    </section>
  );
};

export default Hero;
