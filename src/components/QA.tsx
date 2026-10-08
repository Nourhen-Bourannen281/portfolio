import { useTranslations } from "next-intl";
import { qaTools } from "../data/site";
import Reveal from "./Reveal";
import TechChip from "./TechChip";
import styles from "./QA.module.css";

export default function QA() {
  const t = useTranslations("QA");
  const areas = t.raw("areas") as { title: string; text: string }[];

  return (
    <section id="qa" className="container">
      <Reveal>
        <h2 className="section-title">{t("title")}</h2>
        <p className={styles.intro}>{t("intro")}</p>

        <div className={styles.grid}>
          {areas.map((area) => (
            <article key={area.title} className={styles.card}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardText}>{area.text}</p>
            </article>
          ))}
        </div>

        <h3 className={styles.toolsTitle}>{t("toolsTitle")}</h3>
        <div className={styles.tools}>
          {qaTools.map((tool) => (
            <TechChip key={tool} name={tool} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}