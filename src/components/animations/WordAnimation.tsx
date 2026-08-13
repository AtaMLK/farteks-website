'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordAnimationProps {
  children: string;
  className?: string;
  delay?: number;
}

export function WordAnimation({
  children,
  className = '',
  delay = 0,
}: WordAnimationProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const words = children.trim().split(/\s+/);

  return (
    <h1
      ref={ref}
      className={className}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="mr-[0.25em] inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{
              opacity: 0,
              y: '110%',
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: '0%',
                  }
                : {
                    opacity: 0,
                    y: '110%',
                  }
            }
            transition={{
              duration: 0.7,
              delay: delay + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}