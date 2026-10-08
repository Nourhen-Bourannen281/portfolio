"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { site } from "../data/site";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const t = useTranslations("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Hidden field: real visitors never fill it, spam bots do
    const trap = e.currentTarget.elements.namedItem(
      "website"
    ) as HTMLInputElement | null;
    if (trap?.value) return;

    // No form service set up yet: open the visitor's mail app instead
    if (!site.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio - ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container">
      <Reveal>
        <h2 className="section-title">{t("title")}</h2>
        <p className={styles.intro}>{t("intro")}</p>

        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.glow} />

            <div className={styles.frame}>
              <Image
                src={site.contactImage}
                width={392}
                height={480}
                alt="Portrait of Nourhen"
                className={styles.photo}
              />
            </div>

            <div className={styles.bubble}>{t("bubble")}</div>

            <nav className={styles.links} aria-label={t("linksLabel")}>
              <a href={`mailto:${site.email}`} aria-label="Email">
                <LuMail />
              </a>
              <a href={`tel:${site.phoneLink}`} aria-label="Phone">
                <LuPhone />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </nav>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="name"
              required
              placeholder={t("name")}
              aria-label={t("name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              required
              placeholder={t("email")}
              aria-label={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={styles.input}
              name="message"
              required
              rows={6}
              placeholder={t("message")}
              aria-label={t("message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className={styles.trap}
            />

            <button
              type="submit"
              className={styles.button}
              disabled={status === "sending"}
            >
              {status === "sending" ? t("sending") : t("send")}
            </button>

            <p
              role="status"
              className={
                status === "success"
                  ? styles.success
                  : status === "error"
                  ? styles.error
                  : styles.status
              }
            >
              {status === "success" && t("success")}
              {status === "error" && t("error")}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}