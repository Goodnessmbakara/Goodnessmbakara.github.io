"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

const PHRASE = "Ship it. Then ship the next one.";

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
      setText(PHRASE);
      return;
    }

    cancelledRef.current = false;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(resolve, ms);
        if (cancelledRef.current) clearTimeout(id);
      });

    const typePhrase = async () => {
      for (let i = 1; i <= PHRASE.length; i++) {
        if (cancelledRef.current) return;
        setText(PHRASE.slice(0, i));
        await wait(TYPE_SPEED);
      }
    };

    const deletePhrase = async () => {
      for (let i = PHRASE.length - 1; i >= 0; i--) {
        if (cancelledRef.current) return;
        setText(PHRASE.slice(0, i));
        await wait(DELETE_SPEED);
      }
    };

    const loop = async () => {
      await wait(START_DELAY);
      while (!cancelledRef.current) {
        await typePhrase();
        await wait(HOLD_AFTER_TYPED);
        await deletePhrase();
        await wait(PAUSE_BEFORE_RETYPE);
      }
    };

    loop();

    return () => {
      cancelledRef.current = true;
    };
  }, []);

  return (
    <h1 className={className} aria-label={PHRASE}>
      <span>{text}</span>
      <span className={styles.caret} aria-hidden="true" />
    </h1>
  );
}
