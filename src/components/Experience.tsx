import { useTranslations } from "next-intl";
import { experiences } from "../data/site";
import Reveal from "./Reveal";
import styles from "./Experience.module.css";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="container">
      <Reveal>
        <h2 className="section-title">{t("title")}</h2>

        <div className={styles.timeline}>
          {experiences.map((exp) => {
            const bullets = t.raw(`items.${exp.key}.bullets`) as string[];

            return (
              <article key={exp.key} className={styles.item}>
                <span className={styles.dot} />
                <p className={styles.period}>{exp.period}</p>
                <h3 className={styles.role}>{t(`items.${exp.key}.role`)}</h3>
                <p className={styles.company}>
                  {t(`items.${exp.key}.company`)}
                </p>

                <ul className={styles.bullets}>
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className={styles.stack}>
                  {exp.stack.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}