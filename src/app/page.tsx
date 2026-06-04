"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Users,
  Wrench,
  ChevronRight,
  ChevronLeft,
  Star,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Send,
  Play,
  Clock,
  Layers,
  GraduationCap,
  ShieldCheck,
  Zap,
  Cpu,
  Activity,
  Terminal,
  RotateCcw,
  Magnet
} from "lucide-react";
import STEMVisuals from "@/components/STEMVisuals";

// 3 slides based on live site questions
const sliderSlides = [
  {
    question: "Do you want your child to say NO to TV?",
    answer: "Encourage your child to engage in hands-on activities, such as science experiments or creative projects, which can capture their interest and keep them away from screens.",
    bg: "https://fallingapple.in/wp-content/uploads/2024/11/2148882134.jpg",
    actionText: "Book Trial Class",
    link: "#enquiry"
  },
  {
    question: "Do you want to explore the mysteries of science in a lab in a cool way?",
    answer: "Provide opportunities for your child to participate in interactive science workshops or enroll them in programs that make learning science exciting and fun.",
    bg: "https://fallingapple.in/wp-content/uploads/2024/11/2148882134.jpg",
    actionText: "Explore 7 Modules",
    link: "#modules"
  },
  {
    question: "Do you want your child to be the next Einstein?",
    answer: "Foster a love for learning by exposing your child to problem-solving activities, innovative educational tools, and an environment that encourages curiosity and critical thinking.",
    bg: "https://fallingapple.in/wp-content/uploads/2024/11/2148882134.jpg",
    actionText: "Learn About IIT Mentors",
    link: "/about-us"
  }
];

// The 6 official modules with live images
const stemModules = [
  {
    title: "Building 3D models",
    desc: "Build houses, ambulances, cars, and many more using cardboards, ice cream sticks, balloons etc. with glue guns and integrating them with small motors & switches.",
    img: "https://fallingapple.in/wp-content/uploads/2024/11/98166.jpg",
    age: "Ages 8-10",
    duration: "Level 1"
  },
  {
    title: "Arduino Applications",
    desc: "Learn to control sensors and gadgets using Arduino microcontroller boards using programming and designing circuits.",
    img: "https://fallingapple.in/wp-content/uploads/2024/11/2148863420.jpg",
    age: "Ages 10-18",
    duration: "Level 2"
  },
  {
    title: "Basic Electronics",
    desc: "Learn modern semiconductor electronic devices such as PN-Junction diodes, transistors, application circuits, etc.",
    img: "https://fallingapple.in/wp-content/uploads/2024/11/2149067253.jpg",
    age: "Ages 9-18",
    duration: "Level 1-2"
  },
  {
    title: "Advanced Electronics",
    desc: "Build circuits using ICs, both linear and digital, using solderless breadboards, basic soldering techniques, LED wiring, etc.",
    img: "https://fallingapple.in/wp-content/uploads/2024/11/2150880933.jpg",
    age: "Ages 10-18",
    duration: "Level 3"
  },
  {
    title: "Digital Electronics",
    desc: "Basic logic functions - AND, OR, NOT, NAND, NOR, XOR, XNOR, Universal Logic Gates, Combinational Logic Circuits, etc.",
    img: "https://fallingapple.in/wp-content/uploads/2024/11/2147922367.jpg",
    age: "Ages 11-18",
    duration: "Level 3-4"
  },
  {
    title: "Perform DIY Fun Experiments in Physics",
    desc: "Learn conservation of energy, distance & displacement concepts, sound & vibrations, Newton’s laws, chemical reactions, and lots of other concepts with balloons, rubber bands, water, etc.",
    img: "https://fallingapple.in/wp-content/uploads/2024/11/64821.jpg",
    age: "Ages 8-15",
    duration: "Level 1-3"
  }
];

// Self-hosted activity videos
const activityVideos = [
  "https://fallingapple.in/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-26-at-14.59.33_dd61a612.mp4",
  "https://fallingapple.in/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-26-at-14.59.46_d086076c.mp4",
  "https://fallingapple.in/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-26-at-14.59.47_9bc1da47.mp4",
  "https://fallingapple.in/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-26-at-14.59.45_a0ceb9d6.mp4"
];

// Activity images
const activityImages = [
  "https://fallingapple.in/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-14.59.46_88da5c87-1024x460.jpg",
  "https://fallingapple.in/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-14.59.46_a6defc12-1024x460.jpg",
  "https://fallingapple.in/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-26-at-14.59.45_4f0c2995-1024x460.jpg"
];

// FAQ items
const faqItems = [
  {
    question: "Do you want your child to say NO to TV?",
    answer: "Encourage your child to engage in hands-on activities, such as science experiments or creative projects, which can capture their interest and keep them away from screens."
  },
  {
    question: "Do you want to explore the mysteries of science in a lab in a cool way?",
    answer: "Provide opportunities for your child to participate in interactive science workshops or enroll them in programs that make learning science exciting and fun."
  },
  {
    question: "Do you want your child to be the next Einstein?",
    answer: "Foster a love for learning by exposing your child to problem-solving activities, innovative educational tools, and an environment that encourages curiosity and critical thinking."
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Dr. TS Natarajan",
    role: "Academic Advisor & IIT Madras Mentor",
    text: "At Falling Apple, we offer a dedicated space to help kids explore science through actual doing. There is no examination; only the pure experience of building, testing, and debugging. If things go wrong, we always have the scientific method to blame!",
    rating: 5
  },
  {
    name: "Anuradha",
    role: "Director & Mother",
    text: "Having mentored children for years, we understand how a practical hands-on approach builds concrete engineering confidence that books can never replicate. Watching children's faces light up when their custom circuit works is an absolute joy.",
    rating: 5
  },
  {
    name: "Arun K.",
    role: "Parent of 12yo Student",
    text: "My daughter loves spending her weekends building 3D cardboard prototypes and wiring sensor circuits. The faculty guide them step-by-step and let them explore their own ideas.",
    rating: 5
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [playingVideoIdx, setPlayingVideoIdx] = useState<number | null>(null);
  const [activeMindset, setActiveMindset] = useState<"observe" | "question" | "build">("observe");
  
  // Hero Lab Simulator states
  const [activeHeroTab, setActiveHeroTab] = useState<"electronics" | "arduino" | "physics">("electronics");
  const [lightLevel, setLightLevel] = useState(70); // LDR light level from 0 to 100
  const isLedOn = lightLevel < 40;
  const [isCompiling, setIsCompiling] = useState(false);
  const [serialOutput, setSerialOutput] = useState<string[]>([]);
  const [electromagnetCurrent, setElectromagnetCurrent] = useState(2.0); // current in Amperes (0 to 5)
  const [magnetDistance, setMagnetDistance] = useState(60); // distance in mm (15 to 100)
  const [isMagnetOn, setIsMagnetOn] = useState(true); // electromagnet switch state
  
  // Enquiry form states
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    parentName: "",
    phone: "",
    course: "Building 3D models",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Track coordinates for Bento hover glow
  const handleBentoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  // Autoplay slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  };

  const handleVideoPlay = (idx: number) => {
    const video = videoRefs.current[idx];
    if (playingVideoIdx === idx) {
      if (video) {
        video.pause();
        video.muted = true;
      }
      setPlayingVideoIdx(null);
    } else {
      // Pause current playing video
      if (playingVideoIdx !== null) {
        const oldVideo = videoRefs.current[playingVideoIdx];
        if (oldVideo) {
          oldVideo.pause();
          oldVideo.muted = true;
        }
      }
      if (video) {
        video.muted = false; // Unmute for user-clicked play
        video.play().catch(() => {});
      }
      setPlayingVideoIdx(idx);
    }
  };

  const handleRunCode = () => {
    setIsCompiling(true);
    setSerialOutput(["Compiling light_sensor.ino...", "Initializing board communication...", "Uploading binaries to Arduino board (COM3)...", "Upload complete!"]);
    
    setTimeout(() => {
      setIsCompiling(false);
      setSerialOutput(prev => [
        ...prev,
        "--- Serial Monitor (9600 baud) ---",
        "LDR PIN A0 Reading: 820 -> LED state: LOW (Light Room)",
        "LDR PIN A0 Reading: 650 -> LED state: LOW (Light Room)",
        "LDR PIN A0 Reading: 210 -> LED state: HIGH (Dark Room - Switch ON)",
        "LDR PIN A0 Reading: 180 -> LED state: HIGH (Dark Room - Switch ON)",
        "LDR PIN A0 Reading: 790 -> LED state: LOW (Light Room)"
      ]);
    }, 1500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hi Falling Apple STEM Academy!\n\nI'd like to book a *Trial Class* with the following details:\n- *Student Name:* ${formData.studentName}\n- *Age:* ${formData.age}\n- *Parent Name:* ${formData.parentName}\n- *Phone:* ${formData.phone}\n- *Interested Module:* ${formData.course}\n- *Notes:* ${formData.notes || "None"}`;
    const encodedText = encodeURIComponent(message);
    
    setTimeout(() => {
      window.open(`https://wa.me/918110066113?text=${encodedText}`, "_blank");
    }, 1000);
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* LATEST NEWS/ANNOUNCEMENT BANNER */}
      <div className="w-full bg-linear-to-r from-primary/10 via-purple-500/10 to-accent/10 border-b border-border/80 py-3.5 px-4 text-center relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-extrabold uppercase tracking-wider">
            Latest Event
          </span>
          <span className="text-foreground">
            We recently conducted a successful <strong>2-Day STEM & Robotics Teacher Training Program</strong> to empower local school educators!
          </span>
          <div className="flex gap-3 mt-1 sm:mt-0">
            <Link href="/blog" className="text-primary hover:text-secondary underline font-bold transition-colors">
              Read Blog Post
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="/achievements" className="text-primary hover:text-secondary underline font-bold transition-colors">
              View Showcase
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-16 sm:space-y-24 md:space-y-28">
        {/* 1. IMMERSIVE SPLIT HERO SECTION */}
        <section className="relative min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden bg-white dark:bg-slate-950 flex items-center py-20 lg:py-0 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-white to-slate-50/40 dark:from-slate-900 dark:via-slate-950 dark:to-black pointer-events-none transition-all duration-300" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Spotlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">
            
            {/* Left Column: Symmetrical Apple-style layout */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-6">
                {/* Glowing location-based badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 dark:border-primary/30">
                  <MapPin className="h-3.5 w-3.5" />
                  📍 Visit our physical Lab in Adyar, Chennai
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                  Where Hands-On Science <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                    Attracts Young Minds
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed font-medium">
                  Just like magnetic fields pull materials together, our interactive lab in Adyar draws children (ages 8+) away from screen time and into building physical electronics, coding microcontrollers, and engineering real prototypes.
                </p>
              </div>

              {/* Symmetrical CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="#enquiry"
                  className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Book Trial Class
                </Link>
                <Link
                  href="/modules"
                  className="px-8 py-4 rounded-xl font-bold text-sm bg-white dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/15 border border-slate-200 dark:border-white/20 hover:border-slate-300 dark:hover:border-white/35 backdrop-blur-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  View Syllabus
                </Link>
              </div>
            </div>

            {/* Right Column: Lab Simulator console */}
            <div className="lg:col-span-6 w-full">
              <div className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/90 shadow-2xl overflow-hidden glass-card">
                {/* Header Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100/80 dark:bg-slate-950/70 border-b border-slate-200 dark:border-white/5">
                  {/* Window Controls */}
                  <div className="flex space-x-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  
                  {/* Active Tab Name */}
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider">
                    {activeHeroTab === "electronics" && "sensor_circuit.py"}
                    {activeHeroTab === "arduino" && "light_sensor.ino"}
                    {activeHeroTab === "physics" && "electromagnet_attraction.py"}
                  </span>
                  
                  {/* Right status light */}
                  <span className="flex items-center gap-1 text-[10px] text-emerald-500 dark:text-emerald-400 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Tab Bar Selectors */}
                <div className="flex bg-slate-50/50 dark:bg-slate-950/40 border-b border-slate-200 dark:border-white/5">
                  <button
                    onClick={() => setActiveHeroTab("electronics")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-bold border-r border-slate-200 dark:border-white/5 transition-colors cursor-pointer ${
                      activeHeroTab === "electronics"
                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-b-2 border-b-primary"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
                    }`}
                  >
                    <Zap className="h-3.5 w-3.5 text-yellow-500" />
                    ⚡ Electronics
                  </button>
                  <button
                    onClick={() => setActiveHeroTab("arduino")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-bold border-r border-slate-200 dark:border-white/5 transition-colors cursor-pointer ${
                      activeHeroTab === "arduino"
                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-b-2 border-b-primary"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
                    }`}
                  >
                    <Cpu className="h-3.5 w-3.5 text-cyan-500" />
                    📟 Arduino Code
                  </button>
                  <button
                    onClick={() => setActiveHeroTab("physics")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-bold transition-colors cursor-pointer ${
                      activeHeroTab === "physics"
                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-b-2 border-b-primary"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
                    }`}
                  >
                    <Magnet className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
                    🧲 Attraction
                  </button>
                </div>

                {/* Main Editor/Workspace Pane */}
                <div className="p-6 min-h-[350px] flex flex-col justify-between bg-white/50 dark:bg-slate-900/40">
                  {activeHeroTab === "electronics" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-xs text-slate-500 dark:text-slate-400">System Sensor: Photoresistor (LDR) Circuit</p>
                      </div>
                      
                      {/* Interactive SVG circuit */}
                      <div className="flex justify-center py-4 relative">
                        <svg className="w-72 h-40 text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-950/30 border border-slate-200 dark:border-white/5 rounded-xl shadow-xs" viewBox="0 0 300 160">
                          <defs>
                            <pattern id="circuit-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="2" cy="2" r="0.8" fill="rgba(0,0,0,0.04)" className="dark:fill-white/10" />
                            </pattern>
                          </defs>
                          <rect width="300" height="160" fill="url(#circuit-grid)" rx="8" />

                          {/* Wire paths */}
                          <path
                            d="M 50,80 L 100,80 M 140,80 L 200,80 M 200,80 L 200,40 L 250,40 M 200,80 L 200,120 L 250,120 M 250,40 L 250,80 M 250,120 L 250,80 M 250,80 L 50,80"
                            fill="none"
                            stroke={isLedOn ? "rgba(59, 130, 246, 0.6)" : "rgba(0,0,0,0.1)"}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className={isLedOn ? "animate-circuits dark:stroke-blue-500/50" : "dark:stroke-white/15"}
                          />

                          {/* Components */}
                          <circle cx="50" cy="80" r="14" fill="currentColor" stroke="currentColor" strokeWidth="2" className="text-slate-100 dark:text-slate-800 stroke-slate-300 dark:stroke-slate-600" />
                          <text x="50" y="84" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace" className="fill-slate-600 dark:fill-slate-400">5V</text>
                          
                          <g transform="translate(100, 65)">
                            <rect x="0" y="5" width="40" height="20" fill="currentColor" stroke="#eab308" strokeWidth="2" rx="4" className="text-slate-100 dark:text-slate-800" />
                            <path d="M 5,10 C 15,20 25,10 35,20" fill="none" stroke="#eab308" strokeWidth="1.5" />
                            <text x="20" y="-3" textAnchor="middle" fontSize="9" fill="#eab308" fontWeight="bold" fontFamily="monospace">LDR</text>
                          </g>
                          
                          <g transform="translate(235, 65)">
                            <circle cx="15" cy="15" r="14" fill={isLedOn ? "rgba(59, 130, 246, 0.1)" : "currentColor"} stroke={isLedOn ? "#3b82f6" : "currentColor"} strokeWidth="2" className={isLedOn ? "" : "text-slate-100 dark:text-slate-800 stroke-slate-300 dark:stroke-slate-600"} />
                            <path d="M 10,15 L 20,15 M 15,10 L 15,20 M 12,12 L 18,15 L 12,18 Z" fill={isLedOn ? "#3b82f6" : "none"} stroke={isLedOn ? "#3b82f6" : "currentColor"} strokeWidth="1.5" className={isLedOn ? "" : "text-slate-400 dark:text-slate-600"} />
                            {isLedOn && (
                              <circle cx="15" cy="15" r="18" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" className="animate-ping" />
                            )}
                            <text x="15" y="-3" textAnchor="middle" fontSize="9" fill={isLedOn ? "#3b82f6" : "currentColor"} fontWeight="bold" fontFamily="monospace" className={isLedOn ? "" : "text-slate-400 dark:text-slate-400"}>LED</text>
                          </g>
                        </svg>

                        <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-white/95 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-[9px] font-mono shadow-xs text-slate-700 dark:text-slate-300">
                          Status: <span className={isLedOn ? "text-blue-500 font-bold" : "text-amber-500 font-bold"}>{isLedOn ? "DARK (LED ON)" : "LIGHT (LED OFF)"}</span>
                        </div>
                      </div>

                      {/* Slider controller */}
                      <div className="space-y-2 bg-slate-100/50 dark:bg-slate-950/30 p-4 rounded-xl border border-slate-200/50 dark:border-white/5">
                        <div className="flex justify-between items-center text-[11px]">
                          <span className="text-slate-600 dark:text-slate-300 font-semibold">Simulate Light Level:</span>
                          <span className="text-yellow-600 dark:text-yellow-400 font-bold font-mono text-xs">{lightLevel}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={lightLevel}
                          onChange={(e) => setLightLevel(Number(e.target.value))}
                          className="w-full accent-primary bg-slate-200 dark:bg-slate-800 h-1 rounded-lg cursor-pointer"
                        />
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 italic text-center">
                          Slide below 40% (night shadow) to trigger sensor & turn ON the LED.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeHeroTab === "arduino" && (
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      {/* Code Editor */}
                      <div className="font-mono text-[10px] sm:text-xs text-slate-700 dark:text-slate-300 overflow-y-auto max-h-[170px] bg-slate-50/80 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-white/5 scrollbar-thin select-text">
                        <div className="text-slate-400 dark:text-slate-500">{"// Arduino LDR Light Control"}</div>
                        <div><span className="text-pink-600 dark:text-pink-400">const int</span> LDR_PIN = A0;</div>
                        <div><span className="text-pink-600 dark:text-pink-400">const int</span> LED_PIN = 13;</div>
                        <div><span className="text-purple-600 dark:text-purple-400">void</span> <span className="text-blue-600 dark:text-blue-400">setup</span>() &#123;</div>
                        <div className="pl-4">pinMode(LED_PIN, <span className="text-amber-600 dark:text-amber-400">OUTPUT</span>);</div>
                        <div className="pl-4">Serial.begin(9600);</div>
                        <div>&#125;</div>
                        <div><span className="text-purple-600 dark:text-purple-400">void</span> <span className="text-blue-600 dark:text-blue-400">loop</span>() &#123;</div>
                        <div className="pl-4"><span className="text-pink-600 dark:text-pink-400">int</span> lightVal = analogRead(LDR_PIN);</div>
                        <div className="pl-4">Serial.println(lightVal);</div>
                        <div className="pl-4"><span className="text-pink-600 dark:text-pink-400">if</span> (lightVal &lt; 400) &#123;</div>
                        <div className="pl-8">digitalWrite(LED_PIN, <span className="text-amber-600 dark:text-amber-400">HIGH</span>);</div>
                        <div className="pl-4">&#125; <span className="text-pink-600 dark:text-pink-400">else</span> &#123;</div>
                        <div className="pl-8">digitalWrite(LED_PIN, <span className="text-amber-600 dark:text-amber-400">LOW</span>);</div>
                        <div className="pl-4">&#125;</div>
                        <div className="pl-4">delay(100);</div>
                        <div>&#125;</div>
                      </div>

                      {/* Serial Console */}
                      <div className="space-y-2">
                        {serialOutput.length > 0 && (
                          <div className="bg-slate-950 dark:bg-black/80 rounded-xl p-3 font-mono text-[9px] text-slate-300 dark:text-slate-400 border border-slate-200 dark:border-white/5 max-h-[85px] overflow-y-auto space-y-1">
                            {serialOutput.map((out, idx) => (
                              <div key={idx} className={out.includes("Reading") ? "text-cyan-400" : out.includes("complete") ? "text-emerald-400" : "text-slate-400"}>
                                {out}
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex gap-2">
                          <button
                            onClick={handleRunCode}
                            disabled={isCompiling}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
                          >
                            {isCompiling ? (
                              <>
                                <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Running compiler...
                              </>
                            ) : (
                              <>
                                <Play className="h-3.5 w-3.5 fill-white" />
                                Upload & Run Code
                              </>
                            )}
                          </button>
                          
                          {serialOutput.length > 0 && (
                            <button
                              onClick={() => setSerialOutput([])}
                              className="px-3 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                              title="Clear Screen"
                            >
                              <RotateCcw className="h-3.5 w-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeHeroTab === "physics" && (
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      <div className="text-center">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Physics Laboratory: Electromagnetic Attraction Engine</p>
                      </div>

                      {/* Electromagnet Attraction Box */}
                      <div className="h-36 bg-slate-50/50 dark:bg-slate-950/40 rounded-xl border border-slate-200 dark:border-white/5 relative flex justify-center items-center overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="attraction-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="2" cy="2" r="0.8" fill="rgba(0,0,0,0.04)" className="dark:fill-white/3" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#attraction-grid)" />
                        </svg>

                        {(() => {
                          const current = isMagnetOn ? electromagnetCurrent : 0;
                          const distance = magnetDistance;
                          const force = current === 0 ? 0 : (2000 * Math.pow(current, 2)) / Math.pow(distance, 2);
                          const isSnapped = isMagnetOn && force > 12;
                          const ballX = isSnapped ? 185 : 120 + distance * 1.3;
                          
                          return (
                            <>
                              {/* Electromagnet Core & Coils */}
                              <svg className="w-full h-full" viewBox="0 0 300 140">
                                {/* DC Power Supply */}
                                <g transform="translate(15, 45)">
                                  <rect x="0" y="5" width="30" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400 dark:text-slate-600" />
                                  <line x1="15" y1="5" x2="15" y2="0" stroke="currentColor" strokeWidth="2" className="text-slate-400 dark:text-slate-600" />
                                  <line x1="15" y1="45" x2="15" y2="50" stroke="currentColor" strokeWidth="2" className="text-slate-400 dark:text-slate-600" />
                                  <text x="15" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" className="fill-slate-500 dark:fill-slate-400 font-mono">DC</text>
                                  <text x="5" y="16" textAnchor="middle" fontSize="10" className="fill-red-500 font-mono">+</text>
                                  <text x="25" y="16" textAnchor="middle" fontSize="10" className="fill-blue-500 font-mono">-</text>
                                </g>

                                {/* Wires */}
                                <path
                                  d="M 30,45 L 30,25 L 85,25 M 30,95 L 30,115 L 85,115"
                                  fill="none"
                                  stroke={isMagnetOn ? "#eab308" : "#64748b"}
                                  strokeWidth="1.5"
                                  className={isMagnetOn && electromagnetCurrent > 0 ? "animate-circuits" : ""}
                                />

                                {/* Iron Core */}
                                <rect x="80" y="55" width="100" height="30" rx="4" fill="currentColor" stroke="currentColor" strokeWidth="1.5" className="text-slate-200 dark:text-slate-700 stroke-slate-300 dark:stroke-slate-600" />
                                <text x="130" y="73" textAnchor="middle" fontSize="8" fontWeight="extrabold" className="fill-slate-500 dark:fill-slate-300 font-mono uppercase tracking-wider">CORE</text>

                                {/* Coils */}
                                {[90, 105, 120, 135, 150, 165].map((x, i) => (
                                  <path
                                    key={i}
                                    d={`M ${x},50 C ${x+5},50 ${x+8},90 ${x+3},90`}
                                    fill="none"
                                    stroke={isMagnetOn && electromagnetCurrent > 0 ? "#f97316" : "#b45309"}
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                  />
                                ))}

                                {/* Magnetic Field lines */}
                                {isMagnetOn && electromagnetCurrent > 0 && (
                                  <g className="text-primary/30 dark:text-primary/20">
                                    <path d="M 80,60 A 15,15 0 0,0 80,80" fill="none" stroke="currentColor" strokeWidth={0.5 + electromagnetCurrent * 0.8} strokeDasharray="3 3" opacity={0.5 + electromagnetCurrent/10} />
                                    <path d="M 80,50 A 25,25 0 0,0 80,90" fill="none" stroke="currentColor" strokeWidth={0.5 + electromagnetCurrent * 0.8} opacity={0.3 + electromagnetCurrent/12} />
                                    
                                    <path d="M 180,60 A 15,15 0 0,1 180,80" fill="none" stroke="currentColor" strokeWidth={0.5 + electromagnetCurrent * 0.8} strokeDasharray="3 3" opacity={0.7 + electromagnetCurrent/10} />
                                    <path d="M 180,50 A 25,25 0 0,1 180,90" fill="none" stroke="currentColor" strokeWidth={0.5 + electromagnetCurrent * 0.8} opacity={0.5 + electromagnetCurrent/12} />
                                    <path d="M 180,40 A 35,35 0 0,1 180,100" fill="none" stroke="currentColor" strokeWidth={0.5 + electromagnetCurrent * 0.6} opacity={0.3 + electromagnetCurrent/15} />
                                  </g>
                                )}

                                {/* Apple Object */}
                                <g transform={`translate(${ballX}, 70)`}>
                                  {isSnapped && (
                                    <circle cx="0" cy="0" r="16" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="animate-ping" opacity="0.6" />
                                  )}
                                  
                                  <circle cx="0" cy="0" r="10" fill="url(#ball-grad)" stroke="#64748b" strokeWidth="1" />
                                  <path d="M 0,-10 C -2,-14 2,-16 0,-18" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                                  <path d="M 0,-14 C 2,-14 5,-12 3,-10 Z" fill="#22c55e" />
                                </g>

                                <defs>
                                  <radialGradient id="ball-grad" cx="30%" cy="30%" r="70%">
                                    <stop offset="0%" stopColor="#f1f5f9" />
                                    <stop offset="60%" stopColor="#cbd5e1" />
                                    <stop offset="100%" stopColor="#475569" />
                                  </radialGradient>
                                </defs>
                              </svg>

                              {/* Simulation Overlay badges */}
                              <div className="absolute top-2 right-3 px-2 py-0.5 rounded-md bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-[9px] font-mono shadow-xs text-slate-700 dark:text-slate-300">
                                Current: <span className="text-amber-500 font-bold">{current.toFixed(1)}A</span>
                              </div>
                              
                              <div className="absolute bottom-2 left-3 px-2 py-0.5 rounded bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-[9px] font-mono shadow-xs text-slate-700 dark:text-slate-300">
                                Distance: <span className="text-purple-600 dark:text-purple-400 font-bold">{distance}mm</span>
                              </div>

                              <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-[9px] font-mono shadow-xs text-slate-700 dark:text-slate-300">
                                Force: <span className="text-cyan-600 dark:text-cyan-400 font-bold">{force.toFixed(1)} N</span>
                              </div>

                              {isSnapped && (
                                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center pointer-events-none">
                                  <div className="px-3 py-1 rounded-full bg-blue-500/95 text-white font-extrabold text-[10px] tracking-wider uppercase animate-bounce shadow-md">
                                    🧲 Attracted & Snapped!
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </div>

                      {/* Interactive Controls */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-100/50 dark:bg-slate-950/30 p-3 rounded-xl border border-slate-200 dark:border-white/5">
                        <div className="flex flex-col justify-center space-y-1">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">Power Magnet:</span>
                          <button
                            onClick={() => setIsMagnetOn(!isMagnetOn)}
                            className={`w-full py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                              isMagnetOn
                                ? "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400"
                                : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                            }`}
                          >
                            {isMagnetOn ? "⚡ Switch ON" : "⚪ Switch OFF"}
                          </button>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="text-slate-500 dark:text-slate-400">Coil Current:</span>
                            <span className="text-amber-500 font-bold font-mono">{electromagnetCurrent} A</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="5"
                            step="0.5"
                            value={electromagnetCurrent}
                            onChange={(e) => setElectromagnetCurrent(Number(e.target.value))}
                            disabled={!isMagnetOn}
                            className="w-full accent-amber-500 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg cursor-pointer disabled:opacity-50"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="text-slate-500 dark:text-slate-400">Distance:</span>
                            <span className="text-purple-600 dark:text-purple-400 font-bold font-mono">{magnetDistance} mm</span>
                          </div>
                          <input
                            type="range"
                            min="15"
                            max="100"
                            value={magnetDistance}
                            onChange={(e) => setMagnetDistance(Number(e.target.value))}
                            className="w-full accent-purple-500 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg cursor-pointer mt-2.5"
                          />
                        </div>
                      </div>

                      {/* Pull of Innovation Tagline */}
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 italic text-center leading-relaxed">
                        🧲 <span className="font-bold text-slate-700 dark:text-slate-300">Pull of Innovation:</span> Why study fields from a textbook? Come to our Adyar center to build real electromagnets, wire circuits, and experience the spark of physics in person!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. ADYAR INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative py-8">
        <STEMVisuals />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                Experiential STEM Education
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                An <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Innovation Space</span> for Kids at Adyar, Chennai
              </h2>
            </div>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Falling Apple STEM Academy is Adyar&apos;s premier innovation hub, where school students (ages 8+) transition from passive screen time to active, physical creation. Guided by IIT graduates, kids discover the direct physics, electronics, and coding behind real-world tech.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="group p-5 bg-card/60 backdrop-blur-md rounded-2xl border border-border/70 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-500/5 text-blue-500">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground">Active Prototyping</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Students build, solder, and program physically. Focus on absolute hands-on making rather than screen time.
                </p>
              </div>

              <div className="group p-5 bg-card/60 backdrop-blur-md rounded-2xl border border-border/70 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-500/5 text-purple-500">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground">7 Progressive Tracks</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  From basic 3D cardboard shapes to advanced robotic circuits, structured via 70+ cumulative graded experiments.
                </p>
              </div>

              <div className="group p-5 bg-card/60 backdrop-blur-md rounded-2xl border border-border/70 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 text-amber-500">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground">IIT Madras Mentors</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Guided by senior academic instructors and alumni with over 40 years of engineering and curriculum design experience.
                </p>
              </div>

              <div className="group p-5 bg-card/60 backdrop-blur-md rounded-2xl border border-border/70 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-500">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground">Stress-Free Learning</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  No boring theoretical exams. Assessments are fully based on constructing functioning prototypes and active exploration.
                </p>
              </div>
            </div>
          </div>

          {/* Core Visuals Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[390px] min-h-[430px] rounded-3xl border border-border/80 bg-gradient-to-b from-card to-muted/40 p-8 flex flex-col justify-between shadow-2xl glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500">
              
              {/* Card Header */}
              <div className="flex justify-between items-center w-full relative z-10">
                {/* Floating 3D Apple Logo */}
                <div className="relative w-12 h-12 flex items-center justify-center bg-primary/10 rounded-2xl border border-primary/20 shadow-xs">
                  <motion.svg
                    className="w-7 h-7 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    animate={{
                      y: [-2, 2, -2],
                      rotate: [-3, 3, -3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path d="M17.48 11.96c0 2.21-1.42 4-3.17 4-1.2 0-1.74-.6-2.33-.6-.6 0-1.16.6-2.33.6C7.9 15.96 6.48 14.17 6.48 11.96c0-2.82 2-4.5 3.83-4.5.94 0 1.54.4 2.17.4.63 0 1.22-.4 2.17-.4 1.83 0 3.83 1.68 3.83 4.5z M11.98 6.46c1-1 2.5-.5 2.5-.5s.5 1.5-.5 2.5-2.5.5-2.5.5-.5-1.5.5-2.5z" />
                  </motion.svg>
                </div>
                
                {/* Active Center Badge with live Pulse */}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Adyar Center
                </span>
              </div>

              {/* Title & Interactive Tabs */}
              <div className="space-y-4 my-6 relative z-10">
                <h3 className="font-extrabold text-xl text-foreground tracking-tight">Curiosity-Led Learning</h3>
                
                {/* Mindset Tabs Selector */}
                <div className="flex gap-1.5 p-1 bg-muted/65 dark:bg-muted/30 rounded-xl border border-border/40">
                  {(["observe", "question", "build"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveMindset(tab)}
                      className={`flex-1 text-[11px] font-extrabold py-2 rounded-lg capitalize transition-all cursor-pointer ${
                        activeMindset === tab
                          ? "bg-card text-foreground shadow-xs border border-border/40"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Animated content box */}
                <div className="min-h-[110px] flex flex-col justify-center bg-muted/20 dark:bg-muted/10 rounded-xl p-4 border border-border/30">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMindset}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-1.5"
                    >
                      <h4 className="font-bold text-xs text-primary capitalize flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        The {activeMindset} Phase
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {activeMindset === "observe" && (
                          "We train kids to observe details in physical systems—just like Newton and the falling apple. They learn to ask deep questions about motion, electronics, and structures."
                        )}
                        {activeMindset === "question" && (
                          "Students formulate testable hypotheses and design systematic experiments. They learn logical variables and science principles rather than dry memorization."
                        )}
                        {activeMindset === "build" && (
                          "Equipped with physical tools, students wire circuits, write microcontroller code (Arduino), solder sensors, and assemble 3D prototypes to prove their theories."
                        )}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer Slots & CTA */}
              <div className="border-t border-border/50 pt-4 space-y-3 relative z-10 w-full mt-auto">
                <div className="flex justify-between items-center text-[10px] text-muted-foreground font-medium">
                  <span>📅 Weekdays & Weekends</span>
                  <span>Flexible slots</span>
                </div>
                <Link
                  href="#enquiry"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-sm hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Book a Free Center Tour
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 7 MODULES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="modules">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Curriculum Tracks</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Our 7 Practical STEM Modules
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Each module contains 10 graded experiments. Students progress at their own pace with absolute hands-on tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stemModules.map((mod, idx) => {
            const isWide0 = idx === 0;
            const isWide4 = idx === 4;
            const isWide6 = idx === 6;
            const isTall1 = idx === 1;
            
            let gridSpan = "";
            if (isWide0) gridSpan = "lg:col-span-2 lg:row-span-1";
            else if (isWide4) gridSpan = "lg:col-span-2 lg:row-span-1";
            else if (isWide6) gridSpan = "lg:col-span-3 lg:row-span-1";
            else if (isTall1) gridSpan = "lg:col-span-1 lg:row-span-2";
            else gridSpan = "lg:col-span-1 lg:row-span-1";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onMouseMove={handleBentoMouseMove}
                className={`bento-card rounded-3xl p-[1px] transition-all duration-300 ${gridSpan} group shadow-xs hover:shadow-xl`}
              >
                <div className={`relative z-10 w-full h-full rounded-[23px] bg-card overflow-hidden flex flex-col justify-between ${
                  isWide0 ? "lg:flex-row" : 
                  isWide4 ? "lg:flex-row-reverse" : 
                  isWide6 ? "lg:flex-row" : ""
                }`}>
                  
                  {/* Module Thumbnail */}
                  <div className={`relative bg-muted overflow-hidden shrink-0 ${
                    isWide0 || isWide4 ? "h-48 lg:h-full w-full lg:w-[45%]" :
                    isWide6 ? "h-48 lg:h-full w-full lg:w-[40%]" :
                    isTall1 ? "h-56 w-full" : "h-44 w-full"
                  }`}>
                    <Image
                      src={mod.img}
                      alt={mod.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    
                    {/* Floating Age/Level Tags */}
                    <div className="absolute bottom-3 left-4 flex gap-2 z-10">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-primary/95 text-white rounded-md backdrop-blur-xs">
                        {mod.age}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-secondary/95 text-white rounded-md backdrop-blur-xs">
                        {mod.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content Pane */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="font-extrabold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                        {mod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {mod.desc}
                      </p>

                      {/* Extra context details for wide & tall cards */}
                      {isTall1 && (
                        <div className="pt-2 space-y-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">Core Projects:</span>
                          <ul className="grid grid-cols-1 gap-1.5 text-xs text-muted-foreground">
                            <li className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full" />
                              Smart Irrigation Valve
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full" />
                              Ultrasonic Radar Simulator
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full" />
                              Wireless Bluetooth Robot
                            </li>
                          </ul>
                        </div>
                      )}

                      {isWide6 && (
                        <div className="pt-2 space-y-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">Key Physics Concepts:</span>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <span className="text-emerald-500">✓</span> Conservation of Energy
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-emerald-500">✓</span> Newton&apos;s Motion Laws
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-emerald-500">✓</span> Sound & Vibration Nodes
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-emerald-500">✓</span> Chemical Reactions Basics
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                      <Link
                        href="/modules"
                        className="text-xs font-bold text-primary flex items-center gap-1 group/btn"
                      >
                        View Experiments
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                      <Link href="#enquiry" className="text-xs font-bold text-muted-foreground hover:text-foreground">
                        Enroll Now
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. ACTIVITIES VIDEO GALLERY */}
      <section className="w-full bg-linear-to-b from-transparent via-muted/30 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">In Action</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Classroom & Science Activities
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Watch real, self-hosted activity videos of our kids building robots, soldering circuitry, and launching experiments.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityVideos.map((vid, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] max-w-[280px] mx-auto w-full group shadow-md border border-white/5"
                onMouseEnter={() => {
                  if (playingVideoIdx !== idx) {
                    const video = videoRefs.current[idx];
                    if (video) {
                      video.muted = true;
                      video.play().catch(() => {});
                    }
                  }
                }}
                onMouseLeave={() => {
                  if (playingVideoIdx !== idx) {
                    const video = videoRefs.current[idx];
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }
                }}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={vid}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  muted
                  controls={playingVideoIdx === idx}
                />
                
                {playingVideoIdx !== idx && (
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 transition-opacity group-hover:bg-black/20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-black/30 px-2.5 py-1 rounded-md w-fit backdrop-blur-xs">
                      Activity Video {idx + 1}
                    </span>
                    
                    <button
                      onClick={() => handleVideoPlay(idx)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      aria-label="Play Video"
                    >
                      <Play className="h-6 w-6 fill-white ml-0.5" />
                    </button>
                    
                    <span className="text-[11px] text-white/80 text-center font-medium bg-black/20 py-1.5 rounded-lg backdrop-blur-xs">
                      Hover to Preview / Click to Play
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Gallery Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {activityImages.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden aspect-video bg-muted border border-border shadow-xs group"
              >
                <Image
                  src={img}
                  alt={`STEM classroom activity ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-black/30 px-2 py-1 rounded-md backdrop-blur-xs">
                    Laboratory Class Session
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VETERAN IIT MENTOR / TEAM HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Bio Text & Accolade Cards */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1 text-left">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                Academic Advisor & Mentor
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Designed & Guided by <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">Dr. T S Natarajan</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                Dr. T S Natarajan is a veteran Professor of Physics with <strong>nearly five decades of teaching and research</strong>, including more than 40 years at <strong>IIT Madras</strong> and seven years establishing the physics curriculum at IIT Tirupati.
              </p>
            </div>

            {/* Accolades Cards Grid */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="p-5 bg-card/45 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl border border-border/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative group/card overflow-hidden flex flex-col sm:flex-row gap-4 items-start">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover/card:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover/card:scale-110 transition-transform duration-300 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm text-foreground">Global Recognition</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    His YouTube lectures on Basic Electronics under the NPTEL program have crossed <strong className="text-primary">2 million views</strong> and were adjudged among the &ldquo;Top 10 Most Popular Videos&rdquo; by the <strong className="text-foreground font-bold">New York Times</strong>.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 bg-card/45 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl border border-border/80 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 relative group/card overflow-hidden flex flex-col sm:flex-row gap-4 items-start">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 transform scale-y-0 group-hover/card:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover/card:scale-110 transition-transform duration-300 shrink-0">
                  <Wrench className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm text-foreground">300+ Demo Shows</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    He has designed hundreds of physical science teaching aids and conducted over <strong className="text-purple-500">300 live demonstrations</strong> making complex physics concepts feel intuitive and exciting.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-5 bg-card/45 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl border border-border/80 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 relative group/card overflow-hidden flex flex-col sm:flex-row gap-4 items-start">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform scale-y-0 group-hover/card:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover/card:scale-110 transition-transform duration-300 shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm text-foreground">International Olympiad Leader</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Advises on national curriculum development and led the Indian student delegation to Reykjavik, Iceland, for the prestigious <strong className="text-emerald-500">International Physics Olympiad</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-primary/80 transition-colors group"
              >
                Learn More About Our Team
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Visual Profile Card */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center w-full">
            <div className="relative w-full max-w-[350px] aspect-square sm:aspect-auto sm:min-h-[420px] rounded-3xl border border-border/80 dark:border-white/10 bg-gradient-to-b from-card to-muted/40 p-8 flex flex-col justify-between shadow-2xl glass-card overflow-hidden group hover:border-primary/20 transition-all duration-500">
              
              {/* Decorative glows */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/15 transition-all duration-500" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-secondary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-secondary/15 transition-all duration-500" />
              
              {/* Card Header Profile */}
              <div className="flex flex-col items-center text-center space-y-4 relative z-10 w-full">
                {/* stylized profile shield */}
                <div className="relative w-28 h-28 flex items-center justify-center bg-gradient-to-tr from-primary to-secondary rounded-2xl p-[2px] shadow-lg shadow-primary/10">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] overflow-hidden relative">
                    <Image
                      src="/ts-natarajan.png"
                      alt="Dr. T S Natarajan"
                      fill
                      className="object-cover"
                      sizes="110px"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-slate-900 shadow-md z-10">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-xl text-foreground">Dr. T S Natarajan</h3>
                  <p className="text-xs font-bold text-primary mt-1">Former IIT Madras Professor</p>
                  <p className="text-[10px] text-muted-foreground font-semibold mt-0.5">Babulal Saraf Award Winner</p>
                </div>
              </div>

              {/* Stats Counters Grid */}
              <div className="grid grid-cols-3 gap-2 w-full border-y border-border/60 dark:border-white/10 py-5 my-6 justify-around text-center relative z-10">
                <div>
                  <p className="text-lg font-extrabold text-foreground">40+ Yrs</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider font-semibold">At IIT-M</p>
                </div>
                <div className="border-l border-border/60 dark:border-white/10 h-8 self-center" />
                <div>
                  <p className="text-lg font-extrabold text-foreground">2M+</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider font-semibold">Video Views</p>
                </div>
                <div className="border-l border-border/60 dark:border-white/10 h-8 self-center" />
                <div>
                  <p className="text-lg font-extrabold text-foreground">300+</p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider font-semibold">Demo Shows</p>
                </div>
              </div>

              {/* Card Footer Motto */}
              <div className="text-center relative z-10 w-full">
                <p className="text-xs text-muted-foreground italic font-medium">
                  &ldquo;No examinations; only the pure experience of building, testing, and debugging.&rdquo;
                </p>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* 5.5. TESTIMONIALS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            What Parents & Advisors Say
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg">
            Hear from our mentors, partners, and parents who have experienced our hands-on STEM curriculum.
          </p>
        </div>

        <div className="relative bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-lg overflow-hidden">
          {/* Glassmorphic decorative glow */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center space-y-6 relative z-10"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 justify-center">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg sm:text-xl font-medium italic text-foreground max-w-2xl leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].text}&rdquo;
              </blockquote>

              {/* Author Details */}
              <div className="space-y-1">
                <p className="font-extrabold text-base text-foreground">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-xs font-semibold text-primary">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-8 relative z-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-card border border-border/70 rounded-2xl overflow-hidden shadow-xs transition-colors hover:border-primary/20"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  <span className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0 ml-4 font-extrabold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/40"
                    >
                      <p className="p-5 text-xs sm:text-sm text-muted-foreground leading-relaxed bg-muted/20">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
          >
            📸 Academy Snapshots
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
          >
            See Learning{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              In Action
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            A glimpse into the hands-on world inside our Adyar lab — robot builds, science bootcamps, circuit experiments, and more.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer aspect-square sm:aspect-auto"
          >
            <img
              src={activityImages[0]}
              alt="Falling Apple STEM Academy - Students at work"
              className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Workshop</span>
              <p className="text-white font-bold text-sm mt-0.5">Live Lab Session — Adyar</p>
            </div>
          </motion.div>

          {/* Emoji Gallery Cards */}
          {[
            { emoji: "🤖", label: "Robotics Build", category: "Bootcamp", color: "from-blue-500/20 to-primary/10" },
            { emoji: "🔌", label: "Arduino Circuit", category: "Electronics", color: "from-amber-500/20 to-yellow-500/10" },
            { emoji: "🧪", label: "Prism Optics", category: "Experiment", color: "from-purple-500/20 to-secondary/10" },
            { emoji: "💡", label: "Solar Tracker", category: "Project", color: "from-emerald-500/20 to-accent/10" },
            { emoji: "🚀", label: "Water Rocket", category: "Experiment", color: "from-red-500/20 to-orange-500/10" },
            { emoji: "💻", label: "Python Coding", category: "Classroom", color: "from-cyan-500/20 to-primary/10" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={`relative rounded-2xl overflow-hidden glass border border-border/70 group flex flex-col items-center justify-center p-6 min-h-[130px] cursor-pointer hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${item.color}`}
            >
              <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 select-none">
                {item.emoji}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className="text-[9px] text-primary font-bold uppercase tracking-widest">{item.category}</span>
                <p className="text-white font-bold text-xs mt-0.5">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Images Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
          {activityImages.slice(1).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Falling Apple STEM Academy activity ${i + 2}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold text-xs">Live at Adyar Academy</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-primary/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
          >
            View Full Gallery
            <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* 8. ADMISSIONS / WhatsApp TRIAL FORM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="enquiry">
        <div className="relative rounded-3xl overflow-hidden border border-border/90 bg-linear-to-b from-card to-muted/40 p-8 sm:p-12 shadow-xl glass-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Description Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Join Today</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Book a Trial Class
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Bring your child to our Adyar center for a 1-hour private session. They will build their first circuit or write their first script and experience hands-on learning.
              </p>
              
              <div className="space-y-2.5 pt-2 text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Individual attention (Batches &lt; 10)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Guided by certified mentors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>All project materials provided</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-background/50 border border-border/50 p-6 rounded-2xl shadow-xs">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                  <span className="text-4xl animate-bounce">🚀</span>
                  <h3 className="font-extrabold text-foreground text-lg">Redirecting to WhatsApp...</h3>
                  <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                    Opening chat with Falling Apple STEM Academy mentor. If it doesn&apos;t open automatically, click the green button below:
                  </p>
                  <a
                    href={`https://wa.me/918110066113?text=${encodeURIComponent(
                      `Hi Falling Apple STEM Academy!\n\nI'd like to book a *Trial Class* with the following details:\n- *Student Name:* ${formData.studentName}\n- *Age:* ${formData.age}\n- *Parent Name:* ${formData.parentName}\n- *Phone:* ${formData.phone}\n- *Interested Module:* ${formData.course}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-green-500 hover:bg-green-600 transition-all flex items-center gap-1.5 shadow-md shadow-green-500/20"
                  >
                    Connect via WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" aria-label="Book Trial Class Form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="floating-label-group">
                      <input
                        id="studentName"
                        type="text"
                        required
                        placeholder=" "
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      />
                      <label htmlFor="studentName">Student Name</label>
                    </div>
                    <div className="floating-label-group">
                      <input
                        id="studentAge"
                        type="number"
                        required
                        min="5"
                        max="18"
                        placeholder=" "
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                      <label htmlFor="studentAge">Student Age</label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="floating-label-group">
                      <input
                        id="parentName"
                        type="text"
                        required
                        placeholder=" "
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                      <label htmlFor="parentName">Parent Name</label>
                    </div>
                    <div className="floating-label-group">
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder=" "
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>

                  <div className="floating-label-group">
                    <select
                      id="course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    >
                      {stemModules.map((m) => (
                        <option key={m.title} value={m.title}>{m.title}</option>
                      ))}
                    </select>
                    <label htmlFor="course">Select STEM Module</label>
                  </div>

                  <div className="floating-label-group">
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder=" "
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="resize-none"
                    />
                    <label htmlFor="notes">Notes / Preference (Optional)</label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Book Trial Class & Send WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CENTER TIMINGS & MAP LOCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Details Card */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-card p-6 sm:p-8 rounded-2xl shadow-xs space-y-6">
            <div className="space-y-4">
              <h3 className="font-extrabold text-xl text-foreground">Innovation Center</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Drop by our academy to look at existing student projects and try out DIY kits. We are located in a quiet, green residential street in Gandhinagar, Adyar.
              </p>
            </div>

            <ul className="space-y-4 text-xs text-muted-foreground">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Door no 3, 3rd Crescent Park Road,
                  <br />
                  Gandhinagar, Adyar,
                  <br />
                  Chennai - 600020
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>(+91) 81100 66113</span>
                  <span>044 - 4603 6240</span>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
                <span>info@fallingapple.in</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">Center Hours:</p>
                  <p>Mon - Fri: 4:00 PM - 8:00 PM</p>
                  <p>Weekends: 10:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/918110066113"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl text-xs font-bold text-white bg-green-500 hover:bg-green-600 transition-colors shadow-sm"
            >
              Direct Chat with Center Director
            </a>
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-border/80 min-h-[300px]">
            <iframe
              title="Falling Apple STEM Academy Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.48154131557!2d80.25265691482236!3d13.004944990833918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ed2a370e0f%3A0xe5c35b4369cfc68a!2s3rd%20Crescent%20Park%20Rd%2C%20Gandhi%20Nagar%2C%20Adyar%2C%20Chennai%2C%20Tamil%20Nadu%20600020!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
