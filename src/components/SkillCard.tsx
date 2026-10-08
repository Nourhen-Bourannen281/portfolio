"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  LuGlobe,
  LuBrainCircuit,
  LuShieldCheck,
  LuWrench,
  LuListChecks,
  LuMonitorSmartphone,
  LuBug,
  LuRefreshCw,
  LuTerminal,
} from "react-icons/lu";
import TechChip from "./TechChip";
import styles from "./SkillCard.module.css";

const ICONS: Record<string, IconType> = {
  web: LuGlobe,
  data: LuBrainCircuit,
  qa: LuShieldCheck,
  tools: LuWrench,
  checks: LuListChecks,
  responsive: LuMonitorSmartphone,
  bug: LuBug,
  regression: LuRefreshCw,
  api: LuTerminal,
};

export default function SkillCard({
  index,
  icon,
  title,
  items,
  text,
  note,
}: {
  index: number;
  icon: string;
  title: string;
  items?: string[];
  text?: string;
  note?: string;
}) {
  const ref = useRef<HTMLElement>(null);
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

  const Icon = ICONS[icon] ?? LuGlobe;

  return (
    <article
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ""}`}
      style={{ "--d": `${index * 140}ms` } as React.CSSProperties}
    >
      <header className={styles.header}>
        <span className={styles.iconBox}>
          <Icon className={styles.icon} aria-hidden="true" />
        </span>
        <h3 className={styles.title}>{title}</h3>
      </header>

      {text && <p className={styles.text}>{text}</p>}

      {items && items.length > 0 && (
        <div className={styles.chips}>
          {items.map((item, i) => (
            <span
              key={item}
              className={styles.chip}
              style={{ "--i": i } as React.CSSProperties}
            >
              <TechChip name={item} />
            </span>
          ))}
        </div>
      )}

      {note && <p className={styles.note}>{note}</p>}
    </article>
  );
}