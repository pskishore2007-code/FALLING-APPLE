"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cpu, Wrench, Settings2, FlaskConical, Binary, Layers, BookOpen, Clock, Award, Sparkles, Compass, ArrowRight, RotateCcw, HelpCircle, CheckCircle2 } from "lucide-react";
import STEMVisuals from "@/components/STEMVisuals";

// Official 6 modules matching fallingapple.in
const modulesData = [
  {
    id: "3d-models",
    icon: Wrench,
    title: "Building 3D Models",
    age: "Ages 8-10",
    level: "Beginner",
    duration: "12 Weeks (1 class/week)",
    kits: "DIY Structural & Mechanical Kit",
    image: "https://fallingapple.in/wp-content/uploads/2024/11/98166.jpg",
    summary: "Build cardboard and wooden models integrated with motors, switches, and simple mechanical actuators to understand physics in 3D.",
    syllabus: [
      "Introduction to cardboard engineering and safety glue guns.",
      "Gears & Pulleys: Speed vs. force trade-offs in mechanical assemblies.",
      "Motorized Vehicles: Constructing motorized wheels, axles, and drivetrains.",
      "Integrated Builds: Crafting fully functioning houses, ambulances, and cars."
    ],
    projects: ["Motorized Balloon Car", "Cardboard Hydraulic Crane", "Ambulance Siren Toy", "Windmill Mechanical Lift"],
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20"
  },
  {
    id: "basic-electronics",
    icon: Settings2,
    title: "Basic Electronics",
    age: "Ages 9-18",
    level: "Beginner to Intermediate",
    duration: "16 Weeks (1 class/week)",
    kits: "Breadboard & Analogue Semiconductor Box",
    image: "https://fallingapple.in/wp-content/uploads/2024/11/2149067253.jpg",
    summary: "Learn the foundation of modern electrical hardware, working on solderless breadboards to build semiconductor logic circuits.",
    syllabus: [
      "Voltage, Current & Resistance: Understanding Ohm's Law.",
      "Semiconductor Devices: PN-junction diodes, LEDs, and rectification.",
      "Transistor Switches: Implementing NPN/PNP transistors as switches and amplifiers.",
      "Circuit Analysis: Reading schematics and troubleshooting connections."
    ],
    projects: ["LED Flashlight Circuit", "Light-Sensor Night Light", "Transistor Sound Amplifier", "Simple Solar Charger"],
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    id: "advanced-electronics",
    icon: Cpu,
    title: "Advanced Electronics",
    age: "Ages 10-18",
    level: "Intermediate to Advanced",
    duration: "16 Weeks (1 class/week)",
    kits: "Advanced IC & Soldering Starter Set",
    image: "https://fallingapple.in/wp-content/uploads/2024/11/2150880933.jpg",
    summary: "Graduate to complex integrated circuits (ICs), learning operational amplifiers, timer ICs, and basic PCB soldering.",
    syllabus: [
      "Integrated Circuits (ICs): Working with 555 timers and linear amplifiers.",
      "Waveform Generators: Constructing pulse and frequency generators.",
      "Soldering Techniques: Safe soldering of components onto PCBs.",
      "LED Wiring Arrays: Connecting parallel/series grids and power regulators."
    ],
    projects: ["555 Siren Generator", "Blinking LED Christmas Tree", "Custom PCB Audio Oscillator", "Power Supply Regulator Board"],
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20"
  },
  {
    id: "digital-electronics",
    icon: Binary,
    title: "Digital Electronics",
    age: "Ages 11-18",
    level: "Advanced",
    duration: "12 Weeks (1 class/week)",
    kits: "Digital Logic Gates Kit",
    image: "https://fallingapple.in/wp-content/uploads/2024/11/2147922367.jpg",
    summary: "Learn the binary math and logic gates that power modern computers. Construct arithmetic logic gates on breadboards.",
    syllabus: [
      "Logic Gates: AND, OR, NOT, NAND, NOR, XOR, and XNOR.",
      "Truth Tables & Boolean Algebra: Designing logic conditions.",
      "Combinational Logic Circuits: Encoders, decoders, and multiplexers.",
      "Sequential Logic Basics: Introduction to flip-flops and counting registers."
    ],
    projects: ["Binary Adder Circuit", "Digital Door Lock System", "4-Bit Counter LED Display", "Custom Multiplexer Switch"],
    color: "text-pink-500 bg-pink-500/10 border-pink-500/20"
  },
  {
    id: "arduino-apps",
    icon: Cpu,
    title: "Arduino Applications",
    age: "Ages 10-18",
    level: "Intermediate to Advanced",
    duration: "16 Weeks (1 class/week)",
    kits: "Arduino Microcontroller & Sensor Set",
    image: "https://fallingapple.in/wp-content/uploads/2024/11/2148863420.jpg",
    summary: "Learn microcontroller programming and configure hardware inputs/outputs to construct automated robotics and IoT panels.",
    syllabus: [
      "Introduction to Arduino IDE: Writing sketch setup and loop structures.",
      "Analogue vs. Digital: Reading light LDRs, ultrasonic sensors, and moisture indexes.",
      "Driving Motors: Controlling servo gears, relays, and stepper systems.",
      "IoT Displays: Printing parameters onto LCD and OLED screens."
    ],
    projects: ["Smart Soil Irrigation Valve", "Ultrasonic Distance Radar", "Laser Alarm Security Gate", "LCD Digital Clock"],
    color: "text-rose-500 bg-rose-500/10 border-rose-500/20"
  },
  {
    id: "physics-experiments",
    icon: FlaskConical,
    title: "Perform DIY Physics Experiments",
    age: "Ages 8-15",
    level: "Beginner to Intermediate",
    duration: "12 Weeks (1 class/week)",
    kits: "DIY Optics & Mechanics Physics Box",
    image: "https://fallingapple.in/wp-content/uploads/2024/11/64821.jpg",
    summary: "Perform hands-on experiments validating physics principles like laws of motion, prism light dynamics, and sound resonance.",
    syllabus: [
      "Mechanics: Kinetic vs. potential energy, distance vs. displacement.",
      "Optics: Refraction index, focal lengths, lenses, and prism light bands.",
      "Acoustics: Waves, frequencies, speed of sound, and vibrations.",
      "Magnetism & Chemistry: DIY electromagnets and safe acid-base indicators."
    ],
    projects: ["Newtonian Ball Cradle", "Optics Prism Rainbow Box", "Electromagnet Pick-Up Arm", "Baking Soda Chemical Reactor"],
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
  }
];

// Recommendation logic based on Age, Skill, and Focus inputs
const getRecommendationId = (age: string, skill: string, focus: string): string => {
  if (focus === "coding") {
    return "arduino-apps";
  }
  if (focus === "electronics") {
    if (age === "8-10") {
      return "basic-electronics";
    }
    if (skill === "written") {
      return "arduino-apps";
    }
    if (skill === "blocks") {
      return "advanced-electronics";
    }
    if (age === "13-18") {
      return "digital-electronics";
    }
    return "basic-electronics";
  }
  // Default/hands-on focus
  if (age === "8-10") {
    return "3d-models";
  }
  if (age === "9-12" && skill === "beginner") {
    return "3d-models";
  }
  return "physics-experiments";
};

// Interactive Breadboard Circuit with SVG highlights, animated flow paths, and responsive tooltip description box
function InteractiveCircuit() {
  const [isClosed, setIsClosed] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState<"battery" | "switch" | "resistor" | "led" | null>(null);

  const cols = Array.from({ length: 17 }, (_, i) => 100 + i * 18);
  const rowsTop = [96, 112, 128, 144];
  const rowsBottom = [176, 192, 208, 224];

  const componentExplanations = {
    battery: {
      title: "9V Battery Source",
      desc: "The chemical energy source. It provides 9 volts of potential difference (voltage), pushing electrons through the circuit when a complete path is formed.",
      concept: "Voltage & Direct Current (DC)",
    },
    switch: {
      title: "Tactile Push Switch",
      desc: "A push-button switch. When open, it breaks the connection. When pressed (ON), it creates a continuous copper path for electricity to flow.",
      concept: "Open vs. Closed Circuit",
    },
    resistor: {
      title: "1k Ohm Resistor",
      desc: "Resists electrical flow. Without a resistor, the 9V battery would overload and burn out the LED. It safeguards the components by limiting current.",
      concept: "Ohm's Law (V = I * R)",
    },
    led: {
      title: "Red Light-Emitting Diode (LED)",
      desc: "A semiconductor that converts electrical energy directly into light. It is polarized, meaning current can only flow from the long anode (+) to the short cathode (-).",
      concept: "Diode Polarity & Electroluminescence",
    },
  };

  return (
    <div className="flex flex-col gap-4 bg-background border border-border p-4 rounded-2xl shadow-inner select-none">
      <div className="relative w-full rounded-xl overflow-hidden bg-muted/30 border border-border/60">
        <svg viewBox="0 0 500 320" className="w-full h-auto">
          <style>{`
            @keyframes flow {
              to { stroke-dashoffset: -20; }
            }
            .flow-line {
              stroke-dasharray: 6, 4;
              animation: flow 1.5s linear infinite;
            }
            @keyframes led-glow {
              0%, 100% { filter: drop-shadow(0 0 2px rgba(239, 68, 68, 0.4)); }
              50% { filter: drop-shadow(0 0 12px rgba(239, 68, 68, 0.9)); }
            }
            .led-active {
              animation: led-glow 2s infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .flow-line {
                animation: none !important;
                stroke-dasharray: none !important;
              }
              .led-active {
                animation: none !important;
                filter: drop-shadow(0 0 6px rgba(239, 68, 68, 0.7)) !important;
              }
            }
          `}</style>

          {/* Breadboard Base */}
          <rect x="80" y="40" width="340" height="240" rx="16" fill="#F4F4F5" stroke="#E4E4E7" strokeWidth="4" />
          <rect x="80" y="156" width="340" height="8" fill="#D4D4D8" />

          {/* Power Rails */}
          <line x1="100" y1="56" x2="400" y2="56" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="72" x2="400" y2="72" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="248" x2="400" y2="248" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="264" x2="400" y2="264" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />

          {/* Holes */}
          {cols.map((cx) => (
            <React.Fragment key={cx}>
              <circle cx={cx} cy={56} r={2} fill="#71717A" opacity={0.4} />
              <circle cx={cx} cy={72} r={2} fill="#71717A" opacity={0.4} />
              {rowsTop.map((cy) => (
                <circle key={cy} cx={cx} cy={cy} r={2} fill="#71717A" opacity={0.3} />
              ))}
              {rowsBottom.map((cy) => (
                <circle key={cy} cx={cx} cy={cy} r={2} fill="#71717A" opacity={0.3} />
              ))}
              <circle cx={cx} cy={248} r={2} fill="#71717A" opacity={0.4} />
              <circle cx={cx} cy={264} r={2} fill="#71717A" opacity={0.4} />
            </React.Fragment>
          ))}

          {/* 9V Battery */}
          <g>
            {/* Battery Body */}
            <rect x="15" y="80" width="50" height="85" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            <rect x="25" y="70" width="12" height="10" rx="2" fill="#94A3B8" />
            <circle cx="53" cy="74" r="6" fill="#94A3B8" />
            
            {/* Label */}
            <rect x="23" y="100" width="34" height="40" rx="3" fill="#F59E0B" />
            <text x="40" y="123" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="bold" fontFamily="sans-serif">9V</text>
            <text x="40" y="133" textAnchor="middle" fill="#0F172A" fontSize="5.5" fontWeight="bold" letterSpacing="0.5" fontFamily="sans-serif">BATTERY</text>
          </g>

          {/* Main Circuit Wires */}
          {/* Red wire battery (+) to top red rail */}
          <path d="M 31 70 C 31 20, 100 20, 100 56" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          {/* Black wire battery (-) to bottom blue rail */}
          <path d="M 53 74 C 53 10, 10 200, 100 264" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />

          {/* Breadboard wiring connections */}
          {/* Red jumper from top rail to switch input column 136 */}
          <path d="M 136 56 L 136 96" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Switch bridge wire: switch out column 172 to resistor row 208 */}
          <path d="M 172 112 L 208 112 L 208 128" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Jumper resistor column 280 to LED anode column 316 */}
          <path d="M 280 128 L 316 128 L 316 192" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Black jumper from LED cathode column 334 to bottom rail */}
          <path d="M 334 192 L 334 264" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />

          {/* Resistor Component */}
          <g>
            {/* Leads */}
            <path d="M 208 128 L 220 128 M 268 128 L 280 128" fill="none" stroke="#94A3B8" strokeWidth="2" />
            {/* Body */}
            <rect x="220" y="120" width="48" height="16" rx="4" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Color Bands */}
            <rect x="228" y="120" width="4" height="16" fill="#78350F" /> {/* Brown */}
            <rect x="236" y="120" width="4" height="16" fill="#000000" /> {/* Black */}
            <rect x="244" y="120" width="4" height="16" fill="#EF4444" /> {/* Red */}
            <rect x="256" y="120" width="4" height="16" fill="#F59E0B" /> {/* Gold */}
          </g>

          {/* Tactile Switch Component */}
          <g>
            <rect x="126" y="90" width="56" height="44" rx="4" fill="#3F3F46" stroke="#27272A" strokeWidth="2" />
            {/* Button */}
            <circle cx="154" cy="112" r="13" fill={isClosed ? "#10B981" : "#EF4444"} className="cursor-pointer transition-colors duration-200" onClick={() => setIsClosed(!isClosed)} />
            <circle cx="154" cy="112" r="6" fill="#F4F4F5" opacity={0.3} className="pointer-events-none" />
          </g>

          {/* LED Component */}
          <g>
            {/* LED Legs */}
            <path d="M 316 192 L 316 170 L 322 170" fill="none" stroke="#94A3B8" strokeWidth="2.5" />
            <path d="M 334 192 L 334 170 L 328 170" fill="none" stroke="#94A3B8" strokeWidth="2.5" />
            {/* Base */}
            <rect x="314" y="166" width="22" height="4" rx="1" fill={isClosed ? "#EF4444" : "#7F1D1D"} className="transition-colors duration-200" />
            {/* Bulb */}
            <path d="M 316 166 C 316 148, 334 148, 334 166 Z" fill={isClosed ? "#EF4444" : "#991B1B"} opacity={isClosed ? 0.95 : 0.6} className={`transition-all duration-200 ${isClosed ? "led-active" : ""}`} />
            {/* Light Rays if closed */}
            {isClosed && (
              <g stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
                <line x1="325" y1="142" x2="325" y2="134" />
                <line x1="312" y1="149" x2="305" y2="143" />
                <line x1="338" y1="149" x2="345" y2="143" />
              </g>
            )}
          </g>

          {/* Current Flow Animation Overlays (Yellow running paths) */}
          {isClosed && (
            <g fill="none" stroke="#FBBF24" strokeWidth="1.5" className="flow-line pointer-events-none" opacity="0.9">
              {/* Battery output to rail */}
              <path d="M 31 70 C 31 20, 100 20, 100 56" />
              {/* Along top red rail */}
              <line x1="100" y1="56" x2="136" y2="56" />
              {/* Red rail to switch */}
              <line x1="136" y1="56" x2="136" y2="96" />
              {/* Inside switch to out pin */}
              <path d="M 136 96 L 136 112 L 172 112" />
              {/* Out wire to resistor row */}
              <path d="M 172 112 L 208 112 L 208 128" />
              {/* Through resistor */}
              <line x1="208" y1="128" x2="280" y2="128" />
              {/* Resistor to LED anode */}
              <path d="M 280 128 L 316 128 L 316 192" />
              {/* Through LED legs and bulb */}
              <path d="M 316 192 L 316 170 L 325 160 L 334 170 L 334 192" />
              {/* Cathode back to rail */}
              <line x1="334" y1="192" x2="334" y2="264" />
              {/* Back along bottom rail */}
              <line x1="334" y1="264" x2="100" y2="264" />
              {/* Negative wire back to battery */}
              <path d="M 100 264 C 10 200, 53 10, 53 74" />
            </g>
          )}

          {/* Interactive Component Hover Overlays */}
          {/* Battery */}
          <rect x="10" y="66" width="60" height="104" fill="transparent" className="cursor-pointer" 
            onMouseEnter={() => setHoveredComponent("battery")} onMouseLeave={() => setHoveredComponent(null)} />
          {/* Switch */}
          <rect x="124" y="86" width="60" height="52" fill="transparent" className="cursor-pointer" onClick={() => setIsClosed(!isClosed)}
            onMouseEnter={() => setHoveredComponent("switch")} onMouseLeave={() => setHoveredComponent(null)} />
          {/* Resistor */}
          <rect x="204" y="112" width="84" height="32" fill="transparent" className="cursor-pointer" 
            onMouseEnter={() => setHoveredComponent("resistor")} onMouseLeave={() => setHoveredComponent(null)} />
          {/* LED */}
          <rect x="306" y="140" width="38" height="60" fill="transparent" className="cursor-pointer" 
            onMouseEnter={() => setHoveredComponent("led")} onMouseLeave={() => setHoveredComponent(null)} />
        </svg>

        {/* Floating status label inside breadboard box */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/75 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs select-none">
          <span className={`h-2 w-2 rounded-full ${isClosed ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
            Switch: {isClosed ? "Closed (ON)" : "Open (OFF)"}
          </span>
        </div>
      </div>

      {/* Component explanations panel */}
      <div className="p-4 rounded-xl bg-muted/40 border border-border/50 min-h-28 flex flex-col justify-center transition-all duration-200">
        <AnimatePresence mode="wait">
          {hoveredComponent ? (
            <motion.div
              key={hoveredComponent}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xs sm:text-sm text-foreground">
                  {componentExplanations[hoveredComponent].title}
                </h4>
                <span className="text-[10px] font-semibold text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                  {componentExplanations[hoveredComponent].concept}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {componentExplanations[hoveredComponent].desc}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-center text-xs text-muted-foreground py-2 flex flex-col items-center gap-1"
            >
              <HelpCircle className="h-5 w-5 text-muted-foreground/60 animate-bounce" />
              <span>Hover over components (Battery, Switch, Resistor, LED) or tap the button to turn it on!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ModulesPage() {
  const [activeTab, setActiveTab] = useState(modulesData[0].id);
  // Toggle for Basic Electronics: show interactive circuit or project image
  const [electronicsView, setElectronicsView] = useState<"simulation" | "image">("simulation");
  const [finderStep, setFinderStep] = useState(0); // 0: Start, 1: Age, 2: Skill, 3: Focus, 4: Result
  const [finderAge, setFinderAge] = useState("");
  const [finderSkill, setFinderSkill] = useState("");
  const [finderFocus, setFinderFocus] = useState("");

  const detailsSectionRef = useRef<HTMLDivElement>(null);

  const activeModule = modulesData.find((m) => m.id === activeTab) || modulesData[0];

  useEffect(() => {
    // Check for hash parameters in URL to set initial module
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const found = modulesData.find((m) => m.id === hash || m.id.replace("-", "") === hash.replace("-", ""));
      if (found) {
        const timer = setTimeout(() => {
          setActiveTab(found.id);
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const scrollToDetails = () => {
    if (detailsSectionRef.current) {
      detailsSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.2 };

  const finderVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : -8 },
  };

  return (
    <div className="relative w-full overflow-hidden py-16 md:py-20 space-y-16">
      <STEMVisuals />

      {/* Header Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Syllabus Details</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Academy STEM Modules
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Explore the lessons, syllabi, and sample student builds for our 7 foundational modules. Kids progress at their own speed with zero exam stress.
        </p>
      </div>

      {/* Curriculum Finder Wizard */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="glass p-6 sm:p-8 rounded-3xl border border-border/80 shadow-md space-y-6 relative overflow-hidden">
          {/* Background glow decorations */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <AnimatePresence mode="wait">
            {finderStep === 0 && (
              <motion.div
                key="step-0"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={finderVariants}
                transition={transition}
                className="text-center space-y-4 py-4 relative z-10"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-2xl border border-primary/20 text-primary mb-2">
                  <Compass className="h-6 w-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  Curriculum Finder Wizard
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Not sure which module is the right starting point for your child? Answer 3 quick questions about their age, experience, and interest, and our system will recommend the perfect class.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFinderStep(1)}
                    className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-1.5 mx-auto cursor-pointer"
                  >
                    <Sparkles className="h-4.5 w-4.5" />
                    Find the Perfect Module
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {finderStep === 1 && (
              <motion.div
                key="step-1"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={finderVariants}
                transition={transition}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    Step 1 of 3
                  </span>
                  <button 
                    onClick={() => setFinderStep(0)} 
                    className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
                <h2 className="text-base sm:text-lg font-extrabold text-foreground text-center">
                  Select your child&apos;s age group:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "8-10", title: "Ages 8-10", desc: "Early Explorers", details: "Best for tactile crafts, motor basics, and fun science tricks." },
                    { id: "9-12", title: "Ages 9-12", desc: "Maker Creators", details: "Great for breadboard hardware, block coding, and physics kits." },
                    { id: "13-18", title: "Ages 13-18+", desc: "Teen Engineers", details: "Ready for advanced logic gates, C++/Python, and microcontrollers." }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setFinderAge(opt.id);
                        setFinderStep(2);
                      }}
                      className="p-4 border border-border/80 bg-background hover:bg-muted/40 hover:border-primary/50 rounded-2xl text-left transition-all duration-200 cursor-pointer active:scale-98 flex flex-col justify-between h-32 hover:shadow-xs group"
                    >
                      <div>
                        <p className="font-extrabold text-sm text-foreground group-hover:text-primary transition-colors">{opt.title}</p>
                        <p className="font-bold text-[10px] text-muted-foreground mt-0.5">{opt.desc}</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground/80 leading-relaxed border-t border-border/40 pt-2 mt-2">{opt.details}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {finderStep === 2 && (
              <motion.div
                key="step-2"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={finderVariants}
                transition={transition}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    Step 2 of 3
                  </span>
                  <button 
                    onClick={() => setFinderStep(1)} 
                    className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <RotateCcw className="h-3 w-3" /> Back
                  </button>
                </div>
                <h2 className="text-base sm:text-lg font-extrabold text-foreground text-center">
                  What is their coding or tech experience?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "beginner", title: "Beginner", desc: "No prior experience", details: "Perfect starting block. We teach concepts from absolute ground up." },
                    { id: "blocks", title: "Intermediate", desc: "Block Coding / Basic Kits", details: "Familiar with loops, variables, Scratch, or simple battery wiring." },
                    { id: "written", title: "Advanced", desc: "Syntax Coding / Hardware", details: "Ready for text-based languages, circuit schematics, and sensors." }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setFinderSkill(opt.id);
                        setFinderStep(3);
                      }}
                      className="p-4 border border-border/80 bg-background hover:bg-muted/40 hover:border-primary/50 rounded-2xl text-left transition-all duration-200 cursor-pointer active:scale-98 flex flex-col justify-between h-32 hover:shadow-xs group"
                    >
                      <div>
                        <p className="font-extrabold text-sm text-foreground group-hover:text-primary transition-colors">{opt.title}</p>
                        <p className="font-bold text-[10px] text-muted-foreground mt-0.5">{opt.desc}</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground/80 leading-relaxed border-t border-border/40 pt-2 mt-2">{opt.details}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {finderStep === 3 && (
              <motion.div
                key="step-3"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={finderVariants}
                transition={transition}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    Step 3 of 3
                  </span>
                  <button 
                    onClick={() => setFinderStep(2)} 
                    className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <RotateCcw className="h-3 w-3" /> Back
                  </button>
                </div>
                <h2 className="text-base sm:text-lg font-extrabold text-foreground text-center">
                  What is their primary area of interest?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "hands-on", title: "Hands-on Building", desc: "Mechanical & Physics Models", details: "LOVES using their hands, constructing wooden gears, motors, and toys." },
                    { id: "electronics", title: "Electronics & Hardware", desc: "Sensors, Switches, IC Chips", details: "Fascinated by lights, soldering, how computers and buttons operate." },
                    { id: "coding", title: "Microcontroller Coding", desc: "Arduino & Sensor Logic", details: "Excited by writing code to control real-world lights, motors, and sensors." }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setFinderFocus(opt.id);
                        setFinderStep(4);
                      }}
                      className="p-4 border border-border/80 bg-background hover:bg-muted/40 hover:border-primary/50 rounded-2xl text-left transition-all duration-200 cursor-pointer active:scale-98 flex flex-col justify-between h-32 hover:shadow-xs group"
                    >
                      <div>
                        <p className="font-extrabold text-sm text-foreground group-hover:text-primary transition-colors">{opt.title}</p>
                        <p className="font-bold text-[10px] text-muted-foreground mt-0.5">{opt.desc}</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground/80 leading-relaxed border-t border-border/40 pt-2 mt-2">{opt.details}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {finderStep === 4 && (() => {
              const recId = getRecommendationId(finderAge, finderSkill, finderFocus);
              const recommendedModule = modulesData.find((m) => m.id === recId) || modulesData[0];
              const RecIcon = recommendedModule.icon;

              return (
                <motion.div
                  key="step-4"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={finderVariants}
                  transition={transition}
                  className="space-y-6 relative z-10 text-center"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-secondary animate-pulse" /> Result Recommendation
                    </span>
                    <button 
                      onClick={() => {
                        setFinderStep(0);
                        setFinderAge("");
                        setFinderSkill("");
                        setFinderFocus("");
                      }} 
                      className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="h-3 w-3" /> Start Over
                    </button>
                  </div>

                  <div className="space-y-2 max-w-xl mx-auto">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Based on your selections, we recommend:</span>
                    
                    {/* Recommended Card display */}
                    <div className="border border-border/80 bg-background/50 p-6 rounded-2xl flex flex-col items-center gap-4 text-center mt-2 shadow-xs">
                      <div className={`p-3 rounded-2xl border ${recommendedModule.color} flex items-center justify-center shrink-0`}>
                        <RecIcon className="h-7 w-7" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-extrabold text-foreground">{recommendedModule.title}</h3>
                        <div className="flex items-center gap-2 justify-center text-[10px] font-semibold text-muted-foreground">
                          <span>{recommendedModule.age}</span>
                          <span>•</span>
                          <span>{recommendedModule.level}</span>
                          <span>•</span>
                          <span>{recommendedModule.duration}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
                        {recommendedModule.summary}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <button
                      onClick={() => {
                        setActiveTab(recommendedModule.id);
                        setTimeout(scrollToDetails, 100);
                      }}
                      className="flex-1 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-md hover:scale-[1.02] transition-transform cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      View Full Syllabus & Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <Link
                      href={`/contacts#enquiry`}
                      className="flex-1 text-center px-5 py-3 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground border border-border"
                    >
                      Book Trial Class
                    </Link>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive Tabs Layout */}
      <section ref={detailsSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Column */}
          <div className="lg:col-span-4 flex flex-col gap-2 bg-muted/40 p-3 rounded-2xl border border-border/40">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 py-1.5 block">
              STEM Laboratories
            </span>
            {modulesData.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl text-left text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === m.id
                      ? "bg-primary text-white shadow-md shadow-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{m.title}</span>
                </button>
              );
            })}
          </div>

          {/* Details Dashboard Column */}
          <div className="lg:col-span-8">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-border/80 shadow-md space-y-6">
              
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-border/50 pb-5">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded-xl border ${activeModule.color}`}>
                      <activeModule.icon className="h-6 w-6" />
                    </div>
                    <h2 className="font-extrabold text-xl sm:text-2xl text-foreground">
                      {activeModule.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-lg leading-relaxed">
                    {activeModule.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end shrink-0">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary/15 text-primary">
                    {activeModule.age}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-secondary/15 text-secondary">
                    {activeModule.level}
                  </span>
                </div>
              </div>

              {/* Module Metadata Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-muted/40 rounded-xl">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-muted-foreground uppercase text-[9px] tracking-wider">Duration</p>
                    <p className="font-semibold text-foreground">{activeModule.duration}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-muted/40 rounded-xl">
                  <Layers className="h-5 w-5 text-secondary shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-muted-foreground uppercase text-[9px] tracking-wider">Modular Kits</p>
                    <p className="font-semibold text-foreground">{activeModule.kits}</p>
                  </div>
                </div>
              </div>

              {/* Module Media Showcase: Single image showcase; Basic Electronics also gets a toggle for the live circuit simulator */}
              {activeModule.id === "basic-electronics" ? (
                <div className="space-y-3">
                  {/* Glassmorphic tab toggle */}
                  <div className="flex items-center gap-2 p-1 bg-muted/60 rounded-xl border border-border/60 backdrop-blur-sm w-fit">
                    <button
                      onClick={() => setElectronicsView("simulation")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                        electronicsView === "simulation"
                          ? "bg-primary text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      ⚡ Live Simulation
                    </button>
                    <button
                      onClick={() => setElectronicsView("image")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-200 cursor-pointer ${
                        electronicsView === "image"
                          ? "bg-primary text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      🛠️ Project Build
                    </button>
                  </div>
                  {/* Conditional view */}
                  {electronicsView === "simulation" ? (
                    <InteractiveCircuit />
                  ) : (
                    <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-2xl overflow-hidden bg-muted border border-border shadow-inner group">
                      <Image
                        src={activeModule.image}
                        alt="Completed and wired breadboard circuit"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-2xl overflow-hidden bg-muted border border-border shadow-inner group">
                  <Image
                    src={activeModule.image}
                    alt={activeModule.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}

              {/* Syllabus Timeline */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                  <BookOpen className="h-4.5 w-4.5 text-primary" />
                  Lesson Flow & Graded Experiments
                </h3>
                <div className="space-y-3.5 pl-2 mt-2">
                  {activeModule.syllabus.map((milestone, idx) => (
                    <div key={idx} className="flex gap-3 text-xs leading-relaxed text-muted-foreground">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Prototypes Built */}
              <div className="space-y-3 pt-2">
                <h3 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
                  <Award className="h-4.5 w-4.5 text-secondary" />
                  Core Student Builds & Experiments
                </h3>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {activeModule.projects.map((proj, idx) => (
                    <div key={idx} className="p-3 border border-border bg-background rounded-xl text-xs font-semibold text-foreground text-center">
                      🛠️ {proj}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <p className="text-[11px] text-muted-foreground italic text-center sm:text-left">
                  Each module has a minimum of 10 graded experiments.
                </p>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Link
                    href={`/contacts#enquiry`}
                    className="flex-1 sm:flex-none text-center px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-md hover:scale-[1.02] transition-transform"
                  >
                    Book Trial Class
                  </Link>
                  <Link
                    href={`https://wa.me/918110066113?text=${encodeURIComponent(`Hi Falling Apple! I'm interested in the ${activeModule.title} module.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center px-6 py-2.5 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground border border-border"
                  >
                    Inquire on WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
