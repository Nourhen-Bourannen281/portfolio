import Image from "next/image";
import type { IconType } from "react-icons";
import { useTranslations } from "next-intl";
import { LuGlobe } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { Project } from "../data/site";
import TechChip from "./TechChip";
import styles from "./ProjectCard.module.css";

type ProjectLink = { href: string; label: string; Icon: IconType };

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("Projects");

  const title = t(`${project.key}.title`);
  const description = t(`${project.key}.description`);

  // Only the links that really exist for this project
  const links = [
    project.live && { href: project.live, label: t("live"), Icon: LuGlobe },
    project.code && { href: project.code, label: t("code"), Icon: FaGithub },
    project.linkedin && {
      href: project.linkedin,
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
  ].filter(Boolean) as ProjectLink[];

  const actions =
    links.length > 0 ? (
      <div className={styles.actions}>
        {links.map(({ href, label, Icon }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${i === 0 ? styles.btnLight : styles.btnOutline}`}
          >
            <Icon aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    ) : null;

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