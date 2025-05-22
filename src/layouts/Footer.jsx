import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Luisotorres3",
    icon: <FiGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/luisotorres3",
    icon: <FiLinkedin />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/luisotorres3",
    icon: <FiTwitter />,
  },
  {
    name: "Email",
    url: "mailto:luis.soto.torres3@gmail.com",
    icon: <FiMail />,
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full py-12 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(var(--color-primary),0.1),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent text-xl transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-muted text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} Luis Soto Torres. All rights reserved.
          </p>
          <p className="text-xs">
            🚀 Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
