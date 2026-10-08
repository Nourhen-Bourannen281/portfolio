import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SplashScreen from "../../components/SplashScreen";
import Header from "../../components/Header";
import Reveal from "../../components/Reveal";
import Languages from "../../components/Languages";
import Experience from "../../components/Experience";
import SkillCard from "../../components/SkillCard";
import ProjectCard from "../../components/ProjectCard";
import Contact from "../../components/Contact";
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
              <a href="#contact" className={styles.secondary}>
                {tHero("contactCta")}
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
                src="/image.png"
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
            <div className={styles.about}>
              <div className={styles.aboutPhoto}>
                <div className={styles.aboutGlow} />
                <div className={styles.aboutFrame}>
                  <Image
                    src="/first-removebg-preview.png"
                    width={392}
                    height={480}
                    alt="Portrait of Nourhen"
                    className={styles.aboutImg}
                  />
                </div>
              </div>

              <div className={styles.aboutText}>
                <h2 className={styles.sectionTitle}>{tAbout("title")}</h2>
                <p className={styles.text}>{tAbout("text")}</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="container">
          <Reveal>
            <h2 className={styles.sectionTitle}>{tSkills("title")}</h2>
          </Reveal>

          <div className={styles.skillsGrid}>
            {skillGroups.map((group, i) => (
              <SkillCard
                key={group.key}
                index={i % 2}
                icon={group.key}
                title={tSkills(`groups.${group.key}`)}
                items={group.items}
                note={group.learning ? tSkills("learning") : undefined}
              />
            ))}
          </div>
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

        <Contact />
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