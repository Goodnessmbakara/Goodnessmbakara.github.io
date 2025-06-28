'use client';

import { useEffect, useRef, useState } from 'react';

interface StaggeredRevealProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  threshold?: number;
  className?: string;
}

export default function StaggeredReveal({
  children,
  staggerDelay = 100,
  direction = 'up',
  threshold = 0.1,
  className = ''
}: StaggeredRevealProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false));
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * staggerDelay);
          });
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
  }, [children.length, staggerDelay, threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(20px)';
      case 'down':
        return 'translateY(-20px)';
      case 'left':
        return 'translateX(20px)';
      case 'right':
        return 'translateX(-20px)';
      case 'scale':
        return 'scale(0.95)';
      default:
        return 'translateY(20px)';
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
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className="transition-all duration-500 ease-out"
          style={{
            transform: visibleItems[index] ? getVisibleTransform() : getInitialTransform(),
            opacity: visibleItems[index] ? 1 : 0,
            transitionDelay: `${index * 30}ms`,
            willChange: 'transform, opacity'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}