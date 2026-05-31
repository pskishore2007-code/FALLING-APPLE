"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BookOpen, Users, Star, Landmark, GraduationCap, Building, User, Sparkles } from "lucide-react";
import STEMVisuals from "@/components/STEMVisuals";

export default function AboutPage() {
  const [appleState, setAppleState] = useState<"idle" | "falling" | "landed">("idle");

  const triggerAppleFall = () => {
    if (appleState !== "idle") return;
    setAppleState("falling");
    setTimeout(() => {
      setAppleState("landed");
    }, 800);
  };

  const resetApple = () => {
    setAppleState("idle");
  };

  // Fade-in animation definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  return (
    <div className="relative w-full overflow-hidden py-16 md:py-24 space-y-16 md:space-y-24 bg-background">
      {/* Visual background decorations */}
      <STEMVisuals />

      {/* Background abstract glowing spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 md:space-y-24"
      >
        {/* Header Block */}
        <motion.div variants={itemVariants} className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary px-3.5 py-1 rounded-full border border-primary/20">
            Founders & Vision
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
              Our Academy
            </span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Falling Apple STEM Academy was built on a simple philosophy: science is not read, it is built. Learn about the leaders shaping our hands-on educational ecosystem.
          </p>
        </motion.div>

        {/* Profile 1: Dr. T S Natarajan */}
        <motion.section variants={itemVariants} className="w-full">
          <div className="glass-card border border-border/80 rounded-3xl overflow-hidden shadow-xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-primary/30 transition-all duration-300 relative group">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Visual Avatar Card */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-5 relative z-10">
              <div className="relative p-1 bg-gradient-to-tr from-primary to-secondary rounded-full shadow-lg h-40 w-40 sm:h-48 sm:w-48 overflow-hidden hover:scale-102 transition-transform duration-300 bg-card">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-muted">
                  <Image
                    src="/ts-natarajan.png"
                    alt="Dr. T S Natarajan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 200px"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="font-extrabold text-2xl text-foreground">Dr. T S Natarajan</h2>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Chief Tech Mentor & Advisor</p>
                <p className="text-[10px] text-muted-foreground font-semibold">Former IIT Madras Professor</p>
              </div>
              
              {/* Quick credentials grid */}
              <div className="grid grid-cols-2 gap-3 w-full border-t border-border/60 pt-5 text-center">
                <div className="glass-card py-2.5 px-2 rounded-xl border border-border/50">
                  <p className="text-base font-extrabold text-foreground">50+</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Years Teaching</p>
                </div>
                <div className="glass-card py-2.5 px-2 rounded-xl border border-border/50">
                  <p className="text-base font-extrabold text-foreground">300+</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Live Shows</p>
                </div>
              </div>
            </div>

            {/* Biography Details */}
            <div className="lg:col-span-8 space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-md">Biography</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Dr. T S Natarajan: Well-known Professor of Physics
                </h3>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                <p>
                  Dr. T S Natarajan has spent nearly five decades in Teaching and Research, out of which more than forty years were at <strong>IIT Madras</strong> and seven years mentoring a new <strong>IIT at Tirupati</strong>. He has won several honors and awards during his long illustrious career.
                </p>
                <p>
                  His YouTube lectures on Basic Electronics under the NPTEL program have crossed <strong>2 million views</strong>. It was also adjudged as one of the &ldquo;Top 10 Most Popular Videos&rdquo; on education by the <strong>New York Times</strong> in 2010.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-border/40">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                    <Award className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">Olympiad Delegation Leader</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Took the first batch of Indian students to Reykjavík, Iceland, for the International Physics Olympiad (1998), winning several medals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                    <Landmark className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">Babulal Saraf Award</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Awarded the prestigious Babulal Saraf Award for his life-long contributing support to Physics and experimental models.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                    <BookOpen className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">300+ Scientific Demonstrations</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Conducted more than 300 spectacular physics demonstrations bordering on magic for audiences in India and abroad.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                    <GraduationCap className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">Teaching Aid Developer</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Designed numerous teaching kits and experiments in physics and electronics to simplify complex engineering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Profile 2: Anuradha */}
        <motion.section variants={itemVariants} className="w-full">
          <div className="glass-card border border-border/80 rounded-3xl overflow-hidden shadow-xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-secondary/30 transition-all duration-300 relative group">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Visual Avatar Card */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-5 relative z-10">
              <div className="relative p-1 bg-gradient-to-tr from-secondary to-accent rounded-full shadow-lg h-40 w-40 sm:h-48 sm:w-48 flex items-center justify-center hover:scale-102 transition-transform duration-300 bg-card overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/anuradha-v2.png"
                    alt="Anuradha"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="font-extrabold text-2xl text-foreground">Anuradha</h2>
                <p className="text-xs font-bold text-secondary uppercase tracking-wider">Director & Student Advocate</p>
                <p className="text-[10px] text-muted-foreground font-semibold">Delhi University & IMT Alumna</p>
              </div>
              
              {/* Quick credentials grid */}
              <div className="grid grid-cols-2 gap-3 w-full border-t border-border/60 pt-5 text-center">
                <div className="glass-card py-2.5 px-2 rounded-xl border border-border/50">
                  <p className="text-base font-extrabold text-foreground">7+ Yrs</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">NGO Education</p>
                </div>
                <div className="glass-card py-2.5 px-2 rounded-xl border border-border/50">
                  <p className="text-[10px] font-extrabold text-foreground">Corporate</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider font-semibold">HCL, ESPN, NIFT</p>
                </div>
              </div>
            </div>

            {/* Biography Details */}
            <div className="lg:col-span-8 space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-md">Director</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Anuradha: Bridging Classroom Education with Practical Execution
                </h3>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                <p>
                  Anuradha is a commerce graduate from the <strong>University of Delhi</strong> and holds a post-graduate diploma in Human Resources from <strong>IMT Ghaziabad</strong>. She has a rich and varied professional background, bringing corporate discipline and educational care to the academy.
                </p>
                <p>
                  She has worked with renowned organizations such as the <strong>National Institute of Fashion Technology (NIFT)</strong>, <strong>HCL</strong>, and <strong>ESPN Singapore</strong>. For over seven years, she has also been deeply involved with the <strong>Angel Xpress Foundation</strong>, a Mumbai-based NGO dedicated to educating and uplifting underprivileged students.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-border/40">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 shrink-0 mt-0.5">
                    <Users className="h-4.5 w-4.5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">Student Advocate & Parent Insights</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">As the mother of a teenager and an active student mentor, she understands the challenges children face in traditional, theory-only systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 shrink-0 mt-0.5">
                    <Building className="h-4.5 w-4.5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">Corporate Strategy Lead</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Leverages operational experience at ESPN Singapore and HCL to build clean, organized educational modules for the academy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 shrink-0 mt-0.5">
                    <Star className="h-4.5 w-4.5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">Social Upliftment</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">More than 7 years volunteering and managing educational drives for children from diverse financial backgrounds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 shrink-0 mt-0.5">
                    <BookOpen className="h-4.5 w-4.5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground">The Engineer Within</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">Reflecting on her own school years, she notes that hands-on kits could have inspired her to become an engineer, fueling her passion for this cause.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Philosophy Section with Interactive Newton Gravity Micro-Animation */}
        <motion.section 
          variants={itemVariants} 
          className="max-w-4xl mx-auto w-full"
        >
          <div className="glass-card border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-lg hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center bg-white/80 dark:bg-slate-900/50">
            
            {/* Interactive Physics Sandbox Container */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-48 h-52 flex flex-col justify-between relative bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-3 overflow-hidden select-none shadow-inner">
                {/* Grid backdrop */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                
                {/* Header Bar */}
                <div className="w-full flex items-center justify-between relative z-20 border-b border-slate-200/60 dark:border-slate-800/50 pb-1.5">
                  <span className="text-[8px] font-bold font-mono tracking-widest text-slate-500 dark:text-slate-400">GRAVITY_SIM.EXE</span>
                  <span className="flex items-center gap-1 text-[8px] text-emerald-500 font-mono font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ACTIVE
                  </span>
                </div>

                {/* Branch */}
                <div className="absolute top-8 inset-x-0 h-2 bg-amber-800 dark:bg-amber-900 rounded-b-md shadow-sm z-10" />

                {/* Apple Drop Zone */}
                <div className="flex-1 w-full relative flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {appleState === "idle" && (
                      <motion.div
                        key="idle-apple"
                        initial={{ y: -30, rotate: 0 }}
                        animate={{ y: [-28, -32, -28], rotate: [-3, 3, -3] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="cursor-pointer flex flex-col items-center text-4xl relative z-10"
                        onClick={triggerAppleFall}
                      >
                        <span className="text-[8px] absolute -top-5 bg-primary/95 text-white font-extrabold px-1.5 py-0.5 rounded-xs uppercase tracking-wider animate-bounce shadow-xs">
                          Click to Drop
                        </span>
                        🍎
                      </motion.div>
                    )}

                    {appleState === "falling" && (
                      <motion.div
                        key="falling-apple"
                        initial={{ y: -30 }}
                        animate={{ y: 40 }}
                        transition={{ duration: 0.35, ease: "easeIn" }}
                        className="text-4xl relative z-10"
                      >
                        🍎
                      </motion.div>
                    )}

                    {appleState === "landed" && (
                      <div className="absolute inset-0 flex flex-col items-center justify-end pb-3">
                        {/* Gravity Wave Rings */}
                        <motion.div
                          initial={{ scale: 0.1, opacity: 0.8 }}
                          animate={{ scale: 2.2, opacity: 0 }}
                          transition={{ duration: 0.65, ease: "easeOut" }}
                          className="absolute bottom-2.5 w-16 h-5 rounded-full border border-primary/60"
                        />
                        <motion.div
                          initial={{ scale: 0.1, opacity: 0.8 }}
                          animate={{ scale: 3.0, opacity: 0 }}
                          transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
                          className="absolute bottom-2.5 w-16 h-5 rounded-full border border-accent/40"
                        />
                        
                        <motion.div
                          initial={{ y: 40, scale: 1 }}
                          animate={{ y: [40, 32, 40], scale: [1, 1.08, 1] }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="text-4xl relative z-10 cursor-pointer"
                          onClick={resetApple}
                        >
                          🍎
                        </motion.div>

                        {/* Small floating reset button inside drop zone */}
                        <button 
                          onClick={resetApple}
                          className="absolute top-1 px-2.5 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-[8px] font-extrabold uppercase transition-all shadow-xs cursor-pointer"
                        >
                          Reset Sim
                        </button>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Ground */}
                <div className="w-full h-5 border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 rounded-lg relative z-20 flex items-center justify-center shadow-inner" />
              </div>
              <span className="text-[9px] font-extrabold font-mono text-slate-400 dark:text-slate-500 mt-2 tracking-widest uppercase">GRAVITY GROUND</span>
            </div>

            {/* Philosophy Text */}
            <div className="space-y-4 flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                Inquiry-Led Philosophy
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <Sparkles className="h-5.5 w-5.5 text-accent animate-pulse" /> Why We Call Ourselves Falling Apple
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                It is said that Sir Isaac Newton was sitting under an apple tree when he observed an apple fall, leading him to question the mechanics of gravity. That single moment of simple observation and questioning transformed human science. At Falling Apple Academy, we don&apos;t spoon-feed answers. We provide the falling apples, the tools, and the direction, letting kids formulate their own &ldquo;Aha!&rdquo; moments.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
