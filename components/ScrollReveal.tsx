'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}


export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = ''
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '20px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(30px)';
      case 'down':
        return 'translateY(-30px)';
      case 'left':
        return 'translateX(30px)';
      case 'right':
        return 'translateX(-30px)';
      case 'scale':
        return 'scale(0.95)';
      default:
        return 'translateY(30px)';
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case 'scale':
        return 'scale(1)';
      default:
        return 'translateY(0) translateX(0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        transform: isVisible ? getVisibleTransform() : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionProperty: 'transform, opacity',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}