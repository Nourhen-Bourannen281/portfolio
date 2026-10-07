"use client";

import { useEffect, useState } from "react";
import SplashCursor from "./SplashCursor";

export default function CursorEffect() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasMouse = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setEnabled(hasMouse && !reduceMotion);
  }, []);

  if (!enabled) return null;

  return (
    <SplashCursor
      DENSITY_DISSIPATION={3.5}
      VELOCITY_DISSIPATION={2}
      PRESSURE={0.1}
      CURL={3}
      SPLAT_RADIUS={0.2}
      SPLAT_FORCE={6000}
      COLOR_UPDATE_SPEED={10}
      SHADING
      RAINBOW_MODE={false}
      COLOR="#6c4cf1"
    />
  );
}