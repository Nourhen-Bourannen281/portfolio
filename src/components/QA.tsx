import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import SkillCard from "./SkillCard";
import styles from "./QA.module.css";

// One icon per QA card, in the same order as the "areas" in the messages files
const areaIcons = ["checks", "responsive", "bug", "regression", "api"];

export default function QA() {
  const t = useTranslations("QA");
  const areas = t.raw("areas") as { title: string; text: string }[];

  return (
    <section id="qa" className="container">
      <Reveal>
        <h2 className="section-title">{t("title")}</h2>
        <p className={styles.intro}>{t("intro")}</p>
      </Reveal>

      <div className={styles.grid}>
        {areas.map((area, i) => (
          <SkillCard
            key={area.title}
            index={i % 3}
            icon={areaIcons[i] ?? "qa"}
            title={area.title}
            text={area.text}
          />
        ))}
      </div>
    </section>
  );
}