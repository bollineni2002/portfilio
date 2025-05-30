'use client';

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeContext } from '@/contexts/theme-context';

interface AnimatedLogoProps {
  className?: string;
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';
  const isDark = theme === 'dark';

  // Dynamic stroke color based on theme - exactly as in original
  const strokeColor = isDark ? '#fff' : '#000';

  // Dynamic animation values based on theme - exactly as in original
  const topBoxAnimateValues = isDark
    ? 'rgba(255,255,255,1); rgba(100,100,100,0)'
    : 'rgba(0,0,0,1); rgba(100,100,100,0)';

  const bottomBoxAnimateValues = isDark
    ? 'rgba(100,100,100,0); rgba(255,255,255,1)'
    : 'rgba(100,100,100,0); rgba(0,0,0,1)';

  return (
    <motion.svg
      key={theme} // Re-render when theme changes - exactly like original implementation
      viewBox="0 0 100 100"
      className={cn('logo-svg', className)}
      style={{ stroke: strokeColor }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        >
          {/* Left line */}
          <path d="M 21 40 V 59">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              values="0 21 59; 180 21 59"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Right line */}
          <path d="M 79 40 V 59">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              values="0 79 59; -180 79 59"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Top line */}
          <path d="M 50 21 V 40">
            <animate
              attributeName="d"
              values="M 50 21 V 40; M 50 59 V 40"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Bottom line */}
          <path d="M 50 60 V 79">
            <animate
              attributeName="d"
              values="M 50 60 V 79; M 50 98 V 79"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Top box */}
          <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
            <animate
              attributeName="stroke"
              values={topBoxAnimateValues}
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Middle box */}
          <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />

          {/* Bottom box */}
          <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
            <animate
              attributeName="stroke"
              values={bottomBoxAnimateValues}
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Main group animation */}
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="0 0; 0 -19"
            dur="2s"
            repeatCount="indefinite"
          />
        </g>
    </motion.svg>
  );
}
