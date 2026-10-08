import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiPython,
  SiPostman,
  SiGooglechrome,
  SiGooglegemini,
} from "react-icons/si";
import {
  LuBrain,
  LuClipboardCheck,
  LuBug,
  LuSmartphone,
  LuBot,
} from "react-icons/lu";
import styles from "./TechChip.module.css";

type Entry = { Icon: IconType; color?: string };

const ACCENT = "var(--accent)";

// No color = the icon follows the text color (works in light and dark mode)
const ICONS: Record<string, Entry[]> = {
  javascript: [{ Icon: SiJavascript, color: "#F7DF1E" }],
  typescript: [{ Icon: SiTypescript, color: "#3178C6" }],
  react: [{ Icon: SiReact, color: "#61DAFB" }],
  "next.js": [{ Icon: SiNextdotjs }],
  "node.js": [{ Icon: SiNodedotjs, color: "#5FA04E" }],
  express: [{ Icon: SiExpress }],
  "express.js": [{ Icon: SiExpress }],
  mongodb: [{ Icon: SiMongodb, color: "#47A248" }],
  "html & css": [
    { Icon: SiHtml5, color: "#E34F26" },
    { Icon: SiCss, color: "#663399" },
  ],
  git: [{ Icon: SiGit, color: "#F05032" }],
  github: [{ Icon: SiGithub }],
  python: [{ Icon: SiPython, color: "#3776AB" }],
  "machine learning": [{ Icon: LuBrain, color: ACCENT }],
  "manual testing": [{ Icon: LuClipboardCheck, color: ACCENT }],
  postman: [{ Icon: SiPostman, color: "#FF6C37" }],
  "chrome devtools": [{ Icon: SiGooglechrome, color: "#4285F4" }],
  "bug reporting": [{ Icon: LuBug, color: ACCENT }],
  "google gemini": [{ Icon: SiGooglegemini, color: "#8E75B2" }],
  "mobile app": [{ Icon: LuSmartphone, color: ACCENT }],
  "ai chatbot": [{ Icon: LuBot, color: ACCENT }],
};

export default function TechChip({
  name,
  small = false,
}: {
  name: string;
  small?: boolean;
}) {
  const icons = ICONS[name.toLowerCase()] ?? [];

  return (
    <span className={`${styles.chip} ${small ? styles.small : ""}`}>
      {icons.length > 0 && (
        <span className={styles.icons}>
          {icons.map(({ Icon, color }, i) => (
            <Icon
              key={i}
              className={styles.icon}
              style={color ? { color } : undefined}
              aria-hidden="true"
            />
          ))}
        </span>
      )}
      {name}
    </span>
  );
}