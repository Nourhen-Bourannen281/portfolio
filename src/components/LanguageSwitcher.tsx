"use client";

import { useLocale } from "next-intl";
import { routing } from "../i18n/routing";
import { usePathname, useRouter } from "../i18n/navigation";
import styles from "./LanguageSwitcher.module.css";

const labels: Record<string, string> = {
  en: "EN",
  fr: "FR",
  ar: "عربي",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={styles.switcher}>
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          className={l === locale ? styles.active : styles.button}
          onClick={() => router.replace(pathname, { locale: l })}
          aria-label={`Change language to ${labels[l]}`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}