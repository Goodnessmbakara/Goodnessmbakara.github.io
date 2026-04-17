"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const PHRASE_1 = "Ship it.";
const PHRASE_2 = "Then ship the next one.";

const TYPE_SPEED = 85;
const DELETE_SPEED = 45;
const START_DELAY = 450;
const HOLD_AFTER_PHRASE_1 = 900;
const PAUSE_BEFORE_PHRASE_2 = 300;

interface Props {
  className?: string;
}

export default function TypewriterHeadline({ className }: Props) {
  const [text, setText] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setText(PHRASE_2);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let delay = START_DELAY;

    const schedule = (value: string, at: number) => {
      timers.push(setTimeout(() => setText(value), at));
    };

    // Phase 1: type "Ship it."
    for (let i = 1; i <= PHRASE_1.length; i++) {
      schedule(PHRASE_1.slice(0, i), delay);
      delay += TYPE_SPEED;
    }

    delay += HOLD_AFTER_PHRASE_1;

    // Delete "Ship it."
    for (let i = PHRASE_1.length - 1; i >= 0; i--) {
      schedule(PHRASE_1.slice(0, i), delay);
      delay += DELETE_SPEED;
    }

    delay += PAUSE_BEFORE_PHRASE_2;

    // Phase 2: type "Then ship the next one."
    for (let i = 1; i <= PHRASE_2.length; i++) {
      schedule(PHRASE_2.slice(0, i), delay);
      delay += TYPE_SPEED;
    }

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <h1 className={className} aria-label={PHRASE_2}>
      <span>{text}</span>
      <span className={styles.caret} aria-hidden="true" />
    </h1>
  );
}
