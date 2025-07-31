import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import RocketLink from "../components/RocketLink";
import SimpleLink from "../components/SimpleLink";

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
    name: "CV",
    url: "/CV_Luis_Soto_Torres_English.pdf",
    icon: <FiFileText />,
  },
  {
    name: "Email",
    url: "mailto:luis.soto.torres3@gmail.com",
    icon: <FiMail />,
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full py-12 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <RocketLink
              key={link.name}
              href={link.url}
              className="text-muted hover:text-accent text-xl transition-colors duration-300"
            >
              {link.icon}
            </RocketLink>
          ))}
        </div>

        {/* Portfolio versions */}
        <div className="flex justify-center gap-4 mb-8">
          <SimpleLink
            href="https://luisotorres3.github.io/portfolio_v1/"
            className="text-accent hover:text-primary transition-colors duration-300 flex items-center gap-2"
          >
            <span className="text-sm">{t("footer.portfolio_v1")}</span>
            <span className="text-lg">🌠</span>
          </SimpleLink>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} Luis Soto Torres. {t("footer.rights")}
          </p>
          <p className="text-xs">🚀 {t("footer.built_with")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
