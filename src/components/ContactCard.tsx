"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import styles from "./SkillCard.module.css";

const ICONS: Record<string, IconType> = {
  email: LuMail,
  phone: LuPhone,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function ContactCard({
  index,
  icon,
  title,
  value,
  href,
  external = false,
}: {
  index: number;
  icon: string;
  title: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Icon = ICONS[icon] ?? LuMail;

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${styles.card} ${visible ? styles.visible : ""}`}
      style={{ "--d": `${index * 140}ms` } as React.CSSProperties}
    >
      <header className={styles.header}>
        <span className={styles.iconBox}>
          <Icon className={styles.icon} aria-hidden="true" />
        </span>
        <h3 className={styles.title}>{title}</h3>
      </header>

      <p className={styles.text} dir="ltr" style={{ overflowWrap: "anywhere" }}>
        {value}
      </p>
    </a>
  );
}