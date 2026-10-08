import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SplashScreen from "../../components/SplashScreen";
import Header from "../../components/Header";
import Reveal from "../../components/Reveal";
import Languages from "../../components/Languages";
import Experience from "../../components/Experience";
import QA from "../../components/QA";
import TechChip from "../../components/TechChip";
import ProjectCard from "../../components/ProjectCard";
import { routing } from "../../i18n/routing";
import { site, skillGroups, projects } from "../../data/site";
import styles from "./page.module.css";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const tHero = useTranslations("Hero");
  const tAbout = useTranslations("About");
  const tSkills = useTranslations("Skills");
  const tProjects = useTranslations("Projects");
  const tFooter = useTranslations("Footer");

  return (
    <>
      <SplashScreen
        name={tHero("fullName")}
        role={tHero("role")}
        skipLabel="Skip"
      />

      <Header />

      <main>
        <section id="top" className={`container ${styles.hero}`}>
          <div className={styles.heroText}>
            <span className={styles.badge}>
              <span className={styles.dot} />
              {tHero("badge")}
            </span>

            <p className={styles.greeting}>{tHero("greeting")}</p>
            <h1 className={styles.title}>
              <span className={styles.accent}>{tHero("name")}</span>
            </h1>
            <p className={styles.role}>{tHero("role")}</p>
            <p className={styles.tagline}>{tHero("tagline")}</p>

            <div className={styles.buttons}>
              <a href="#projects" className={styles.primary}>
                {tHero("projectsCta")}
              </a>
              <a
                href={site.cv}
                download="Nourhen-Bourannen-CV.pdf"
                className={styles.secondary}
              >
                {tHero("cvCta")}
              </a>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <strong>{projects.length}+</strong>
                <span>{tHero("statProjects")}</span>
              </div>
              <div className={styles.stat}>
                <strong>{routing.locales.length}</strong>
                <span>{tHero("statLanguages")}</span>
              </div>
              <div className={styles.stat}>
                <strong>MERN</strong>
                <span>{tHero("statStack")}</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.glow} />
            <div className={styles.frame}>
              <Image
                src="/first-removebg-preview.png"
                width={500}
                height={500}
                alt="Portrait of Nourhen"
                className={styles.photo}
                priority
              />
            </div>
            <span className={`${styles.float} ${styles.f1}`}>React</span>
            <span className={`${styles.float} ${styles.f2}`}>Node.js</span>
            <span className={`${styles.float} ${styles.f3}`}>MongoDB</span>
          </div>
        </section>

        <section id="about" className="container">
          <Reveal>
            <h2 className={styles.sectionTitle}>{tAbout("title")}</h2>
            <p className={styles.text}>{tAbout("text")}</p>
          </Reveal>
        </section>

        <section id="skills" className="container">
          <Reveal>
            <h2 className={styles.sectionTitle}>{tSkills("title")}</h2>
            <div className={styles.groups}>
              {skillGroups.map((group) => (
                <div key={group.key} className={styles.group}>
                  <h3 className={styles.groupTitle}>
                    {tSkills(`groups.${group.key}`)}
                  </h3>
                  <div className={styles.chips}>
                    {group.items.map((skill) => (
                      <TechChip key={skill} name={skill} />
                    ))}
                  </div>
                  {group.learning && (
                    <p className={styles.note}>{tSkills("learning")}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Languages />

        <Experience />

        <section id="projects" className="container">
          <Reveal>
            <h2 className={styles.sectionTitle}>{tProjects("title")}</h2>
            <div className={styles.grid}>
              {projects.map((project) => (
                <ProjectCard key={project.key} project={project} />
              ))}
            </div>
          </Reveal>
        </section>

        <QA />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <p>
          © {new Date().getFullYear()} Nourhen. {tFooter("rights")}
        </p>
      </footer>
    </>
  );
}