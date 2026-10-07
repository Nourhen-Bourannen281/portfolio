import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
  const t = useTranslations("Nav");

  return (
    <header className={styles.header}>
      <a href="#top" className={styles.logo}>
        Nourhen Bourannen
      </a>

      <nav className={styles.nav}>
        <a href="#about">{t("about")}</a>
        <a href="#skills">{t("skills")}</a>
        <a href="#experience">{t("experience")}</a>
        <a href="#projects">{t("projects")}</a>
        <a href="#qa">{t("qa")}</a>
      </nav>

      <div className={styles.actions}>
        <LanguageSwitcher />
        <ThemeToggle label={t("theme")} />
      </div>
    </header>
  );
}