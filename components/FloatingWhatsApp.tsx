"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./FloatingWhatsApp.module.css";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = "2347041203832",
  defaultMessage = "Hi Goodness, I saw your portfolio and would like to connect!",
}: FloatingWhatsAppProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isLeftSide, setIsLeftSide] = useState(false);

  const containerRef = useRef<HTMLAnchorElement>(null);
  const dragStartRef = useRef<{
    startX: number;
    startY: number;
    elemX: number;
    elemY: number;
  }>({ startX: 0, startY: 0, elemX: 0, elemY: 0 });
  const hasDraggedRef = useRef(false);

  // Normalize phone number
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  // Handle window resizing to keep button within bounds
  const handleResize = useCallback(() => {
    if (!position || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const maxX = Math.max(12, window.innerWidth - rect.width - 12);
    const maxY = Math.max(12, window.innerHeight - rect.height - 12);

    const clampedX = Math.min(Math.max(12, position.x), maxX);
    const clampedY = Math.min(Math.max(12, position.y), maxY);

    if (clampedX !== position.x || clampedY !== position.y) {
      setPosition({ x: clampedX, y: clampedY });
    }
    setIsLeftSide(clampedX < window.innerWidth / 2);
  }, [position]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handlePointerDown = (e: React.PointerEvent<HTMLAnchorElement>) => {
    // Only primary button (left click or single touch)
    if (e.button !== 0) return;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      dragStartRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        elemX: rect.left,
        elemY: rect.top,
      };
      hasDraggedRef.current = false;
      setIsDragging(true);
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!isDragging || !containerRef.current) return;

    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;

    // Movement threshold to distinguish click from drag
    if (Math.hypot(deltaX, deltaY) > 5) {
      hasDraggedRef.current = true;
    }

    if (hasDraggedRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const maxX = Math.max(12, window.innerWidth - rect.width - 12);
      const maxY = Math.max(12, window.innerHeight - rect.height - 12);

      const targetX = Math.min(
        Math.max(12, dragStartRef.current.elemX + deltaX),
        maxX
      );
      const targetY = Math.min(
        Math.max(12, dragStartRef.current.elemY + deltaY),
        maxY
      );

      setPosition({ x: targetX, y: targetY });
      setIsLeftSide(targetX < window.innerWidth / 2);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  };

  const dynamicStyle: React.CSSProperties = position
    ? {
        left: `${position.x}px`,
        top: `${position.y}px`,
        right: "auto",
        bottom: "auto",
      }
    : {};

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        ref={containerRef}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={dynamicStyle}
        className={`${styles.floatingContainer} ${
          isDragging ? styles.isDragging : ""
        } ${isLeftSide ? styles.reverseLayout : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={handleClick}
        aria-label="Direct message Goodness Mbakara on WhatsApp (+2347041203832)"
        title="Direct message Goodness on WhatsApp (Drag to move)"
      >
        <div className={styles.tooltip}>
          <span className={styles.tooltipTitle}>Direct Message</span>
          <span className={styles.tooltipSubtitle}>+234 704 120 3832</span>
        </div>

        <div className={styles.buttonWrapper}>
          <div className={styles.pulseRing} aria-hidden="true" />
          <div className={styles.button}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className={styles.onlineBadge} aria-hidden="true" />
          </div>
        </div>
      </a>
    </aside>
  );
}
