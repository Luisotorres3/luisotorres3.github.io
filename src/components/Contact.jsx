import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--color-primary),0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--color-accent),0.15),transparent_30%)] pointer-events-none animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(var(--color-accent),0.1),transparent_30%)] pointer-events-none animate-pulse-slow" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <h2 className="text-4xl font-bold text-primary text-center mb-4 tracking-widest">
          {t("contact.title")}
        </h2>
        <p className="text-muted text-center mb-12">{t("contact.subtitle")}</p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-lg border border-accent/20 rounded-xl p-8 shadow-xl space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-primary">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder={t("contact.placeholders.name")}
              className="w-full px-4 py-2 bg-white/5 border border-accent/20 rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text placeholder:text-muted/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-primary">
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder={t("contact.placeholders.email")}
              className="w-full px-4 py-2 bg-white/5 border border-accent/20 rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text placeholder:text-muted/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-primary">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formState.message}
              onChange={handleChange}
              placeholder={t("contact.placeholders.message")}
              rows="4"
              className="w-full px-4 py-2 bg-white/5 border border-accent/20 rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-text placeholder:text-muted/50 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-background font-medium transition-all duration-300 ${
              status === "sending"
                ? "bg-accent/50 cursor-not-allowed"
                : "bg-accent hover:bg-accent/90"
            }`}
          >
            {status === "sending" ? (
              <>
                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                {t("contact.sending")}
              </>
            ) : (
              <>
                <FiSend className="text-lg" />
                {t("contact.send")}
              </>
            )}
          </motion.button>

          {/* Status messages */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-center mt-4"
            >
              {t("contact.success")}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-center mt-4"
            >
              {t("contact.error")}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
