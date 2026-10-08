import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { site, type Project } from "../data/site";
import TechChip from "./TechChip";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("Projects");

  const title = t(`${project.key}.title`);
  const description = t(`${project.key}.description`);
  const codeUrl = project.code || site.github;
  const linkedinUrl = project.linkedin || site.linkedin;

  const actions = (
    <div className={styles.actions}>
      <a
        href={codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.btnLight}`}
      >
        <FaGithub aria-hidden="true" />
        {t("code")}
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.btnOutline}`}
      >
        <FaLinkedin aria-hidden="true" />
        LinkedIn
      </a>
    </div>
  );

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {project.image ? (
          <Image
            src={project.image}
            alt={title}
            fill
            sizes="(max-width: 700px) 100vw, 380px"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.window}>
              <span />
              <span />
              <span />
            </div>
            <span className={styles.placeholderTitle}>{title}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.head}>
          <h3 className={styles.title}>{title}</h3>
          {project.year && <span className={styles.year}>{project.year}</span>}
        </div>

        {project.team && <span className={styles.team}>{t("team")}</span>}

        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <TechChip key={tech} name={tech} small />
          ))}
        </div>

        {/* Phones and tablets: no hover, so the info is always visible */}
        <div className={styles.inline}>
          <p className={styles.inlineText}>{description}</p>
          {actions}
        </div>
      </div>

      {/* Computers: appears when the mouse is over the card */}
      <div className={styles.overlay}>
        <h4 className={styles.overlayTitle}>{title}</h4>
        <p className={styles.overlayText}>{description}</p>
        {actions}
      </div>
    </article>
  );
}