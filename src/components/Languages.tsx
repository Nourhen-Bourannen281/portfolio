import { useTranslations } from "next-intl";
import { languages } from "../data/site";
import Reveal from "./Reveal";
import styles from "./Languages.module.css";

export default function Languages() {
  const t = useTranslations("Languages");

  return (
    <section id="languages" className="container">
      <Reveal>
        <h2 className="section-title">{t("title")}</h2>
        <ul className={styles.list}>
          {languages.map((lang) => (
            <li key={lang.key} className={styles.item}>
              <span className={styles.name}>{t(lang.key)}</span>
              <span
                className={styles.stars}
                role="img"
                aria-label={`${lang.stars} / 5`}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={i < lang.stars ? styles.on : styles.off}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}