"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

const PHRASES = [
  "Ship it. Then ship the next one.",
  "Ideas are cheap. Execution ships.",
  "Think in systems. Build in weeks.",
  "Deadlines don't bend. Neither do I.",
  "Less talk. More commits.",
];

const TYPE_SPEED = 70;
const DELETE_SPEED = 30;
const START_DELAY = 450;
const HOLD_AFTER_TYPED = 1800;
const PAUSE_BEFORE_RETYPE = 450;

interface Props {
  className?: string;
}

export default function TypewriterHeadline({ className }: Props) {
  const [text, setText] = useState("");
  const cancelledRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setText(PHRASES[0]);
      return;
    }

    cancelledRef.current = false;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(resolve, ms);
        if (cancelledRef.current) clearTimeout(id);
      });

    const typePhrase = async (phrase: string) => {
      for (let i = 1; i <= phrase.length; i++) {
        if (cancelledRef.current) return;
        setText(phrase.slice(0, i));
        await wait(TYPE_SPEED);
      }
    };

    const deletePhrase = async (phrase: string) => {
      for (let i = phrase.length - 1; i >= 0; i--) {
        if (cancelledRef.current) return;
        setText(phrase.slice(0, i));
        await wait(DELETE_SPEED);
      }
    };

    const loop = async () => {
      await wait(START_DELAY);
      let index = 0;
      while (!cancelledRef.current) {
        const phrase = PHRASES[index];
        await typePhrase(phrase);
        await wait(HOLD_AFTER_TYPED);
        await deletePhrase(phrase);
        await wait(PAUSE_BEFORE_RETYPE);
        index = (index + 1) % PHRASES.length;
      }
    };

    loop();

    return () => {
      cancelledRef.current = true;
    };
  }, []);

  return (
    <h1 className={className} aria-label={PHRASES[0]}>
      <span>{text}</span>
      <span className={styles.caret} aria-hidden="true" />
    </h1>
  );
}
