"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Rocket, Settings, Cpu, Microscope, Compass, Lightbulb } from "lucide-react";

// SVG path for a circuit trace
const CircuitTrace = ({ d, duration = 4, delay = 0 }: { d: string; duration?: number; delay?: number }) => (
  <svg className="absolute inset-0 w-full h-full text-primary/10 dark:text-primary/5 pointer-events-none" fill="none" viewBox="0 0 800 600">
    <motion.path
      d={d}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0.05 }}
      animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0.05, 0.4, 0.4, 0.05],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </svg>
);

export default function STEMVisuals() {
  // Array of floating icons for STEM using Lucide React elements
  const floatingIcons = [
    { Icon: Bot, size: 36, x: "8%", y: "12%", delay: 0, color: "text-primary/20 dark:text-primary/10" },
    { Icon: Rocket, size: 40, x: "88%", y: "15%", delay: 1.5, color: "text-secondary/20 dark:text-secondary/10" },
    { Icon: Settings, size: 32, x: "78%", y: "72%", delay: 0.5, color: "text-accent/20 dark:text-accent/10" },
    { Icon: Cpu, size: 34, x: "10%", y: "68%", delay: 2.2, color: "text-primary/20 dark:text-primary/10" },
    { Icon: Microscope, size: 36, x: "48%", y: "82%", delay: 3.1, color: "text-accent/20 dark:text-accent/10" },
    { Icon: Compass, size: 30, x: "44%", y: "8%", delay: 1.0, color: "text-secondary/20 dark:text-secondary/10" },
    { Icon: Lightbulb, size: 38, x: "92%", y: "52%", delay: 2.8, color: "text-primary/20 dark:text-primary/10" },
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full hero-glow blur-3xl opacity-60 dark:opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] rounded-full hero-glow blur-3xl opacity-60 dark:opacity-40" />

      {/* SVG Circuit Traces */}
      <CircuitTrace d="M 50,150 L 150,150 L 200,200 L 200,350 L 300,350" duration={6} delay={0} />
      <CircuitTrace d="M 750,180 L 650,180 L 600,130 L 600,50" duration={5} delay={1.5} />
      <CircuitTrace d="M 100,500 L 250,500 L 300,450 L 300,550" duration={7} delay={3} />
      <CircuitTrace d="M 700,480 L 550,480 L 500,430 L 450,480" duration={8} delay={0.8} />

      {/* Rotating Gear Background vectors */}
      <div className="absolute -top-16 -left-16 w-48 h-48 text-muted/20 dark:text-muted/5 opacity-25 dark:opacity-5 animate-spin-slow">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      </div>

      <div className="absolute -bottom-20 -right-20 w-64 h-64 text-muted/20 dark:text-muted/5 opacity-25 dark:opacity-5 animate-spin-reverse">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      </div>

      {/* Floating Outline Icons */}
      {floatingIcons.map((item, idx) => {
        const IconComp = item.Icon;
        return (
          <motion.div
            key={idx}
            className="absolute select-none hidden md:block pointer-events-none"
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-12, 12, -12],
              rotate: [-6, 6, -6],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 7 + idx,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconComp
              size={item.size}
              className={`${item.color} stroke-[1.2] transition-all`}
            />
          </motion.div>
        );
      })}

      {/* Floating Dots / Particle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(147,51,234,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(59,130,246,0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
    </div>
  );
}
