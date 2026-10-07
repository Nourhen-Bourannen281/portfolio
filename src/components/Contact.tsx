"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { site } from "../data/site";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const t = useTranslations("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio - ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="container">
      <Reveal>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.intro}>{t("intro")}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            required
            placeholder={t("name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.input}
            type="email"
            required
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={styles.input}
            required
            rows={5}
            placeholder={t("message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            {t("send")}
          </button>
        </form>

        <div className={styles.links}>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phoneLink}`} dir="ltr">
            {site.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}