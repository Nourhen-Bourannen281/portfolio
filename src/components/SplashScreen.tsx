"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./SplashScreen.module.css";

const TOTAL_MS = 4200;

export default function SplashScreen({
  name,
  role,
  skipLabel,
}: {
  name: string;
  role: string;
  skipLabel: string;
}) {
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Already played since this page was loaded (for example after a language change)
    if (root.classList.contains("skip-splash")) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function finish() {
      root.style.overflow = "";
      root.classList.add("skip-splash");
    }

    if (reduceMotion) {
      finish();
      return;
    }

    // Block scrolling while the splash is visible
    root.style.overflow = "hidden";
    const timer = window.setTimeout(finish, TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
      root.style.overflow = "";
    };
  }, []);

  function handleSkip() {
    setSkipped(true);
    window.setTimeout(() => {
      const root = document.documentElement;
      root.style.overflow = "";
      root.classList.add("skip-splash");
    }, 700);
  }

  return (
    <div
      className={`${styles.splash} ${skipped ? styles.skipped : ""}`}
      onClick={handleSkip}
      role="presentation"
    >
      <div className={styles.glow} />

      <div className={styles.content}>
        <div className={styles.photoRing}>
          <Image
            src="/first-removebg-preview.png"
            width={400}
            height={400}
            alt=""
            className={styles.photo}
            priority
          />
        </div>

        <h1 className={styles.name}>{name}</h1>
        <p className={styles.role}>{role}</p>
      </div>

      <button type="button" className={styles.skip} onClick={handleSkip}>
        {skipLabel}
      </button>
    </div>
  );
}