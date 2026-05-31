"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Wrench } from "lucide-react";

// Student achievements listing
const achievementsList = [
  {
    title: "2-Day STEM Teacher Training & Empowerment Program",
    student: "Conducted by Falling Apple Educators",
    modules: "Professional Development",
    awards: "Empowered 25+ Educators from Chennai Schools",
    components: "Robotics kits, IoT sensors, Arduino microcontrollers, custom lesson plans, STEM pedagogical tools.",
    summary: "Organized a comprehensive, hands-on 2-day teacher training program. Equipped local educators with the practical skills and teaching methodologies needed to successfully run robotics, basic electronics, and interactive DIY science experiments in their school classrooms."
  },
  {
    title: "Autonomous Line Follower & Obstacle Avoider",
    student: "Built by Aditya & Ryan (Ages 12)",
    modules: "Robotics Engineering Level 3",
    awards: "1st Place, Adyar Inter-School Science Fair",
    components: "Arduino Uno, Dual IR Sensors, L298N Motor Driver, Ultrasonic Sensor, Servo Motor, Geared DC Motors.",
    summary: "Designed a robot that navigates along complex black tape tracks. When an obstacle is encountered, it stops, rotates its ultrasonic sensor to map open paths, redirects, and reconnects with the path."
  },
  {
    title: "Smart Irrigation System with IoT Telemetry",
    student: "Built by Sneha K. (Age 14)",
    modules: "Arduino & Electronics Level 2",
    awards: "Eco-Tech Innovation Award",
    components: "ESP8266 Wi-Fi NodeMCU, Soil Moisture Sensor, 5V Water Pump, 128x64 I2C OLED Screen, Relay Board.",
    summary: "Monitors real-time moisture parameters of a potted plant. If moisture levels fall below 35%, it activates a pump and feeds sensor data over Wi-Fi to a web dashboard dashboard."
  },
  {
    title: "Dual-Axis Solar-Powered Light Tracker",
    student: "Built by Kabir & Ishaan (Ages 11)",
    modules: "DIY STEM Mechanical Level 3",
    awards: "Best Innovative Model Award",
    components: "Light Dependent Resistors (4x LDRs), SG90 Micro Servos (2x), Solar Panel, Custom Acrylic Mounts.",
    summary: "Constructed a solar tracker assembly that compares analog light values from 4 quadrants. It drives servo motors to orient the solar panel directly toward the brightest source."
  },
  {
    title: "Laser Intruder Security System",
    student: "Built by Pooja D. (Age 10)",
    modules: "Arduino & Electronics Level 1",
    awards: "Certificate of Outstanding Prototype",
    components: "Arduino Uno, 5V Laser Diode, Light Dependent Resistor (LDR), Active Piezo Buzzer, 16x2 I2C Character LCD.",
    summary: "A home security gate module that fires a constant laser onto a sensor. If the beam is broken, the LCD alerts 'INTRUDER DETECTED' and sounds a continuous piezo siren."
  },
  {
    title: "Mini Surveillance Quadcopter",
    student: "Built by Tarun & Vikram (Ages 15)",
    modules: "Robotics Engineering Level 4",
    awards: "Advanced Project Expo Showcase",
    components: "8520 Coreless Motors, 4-Channel Receiver, flight controller, Li-Po Battery, Lightweight carbon Frame.",
    summary: "A palm-sized drone constructed and soldered from discrete frames. Features gyro-stabilization and video streams over radio frequencies."
  },
  {
    title: "Density-Based Traffic Light Router",
    student: "Built by Neha & Rahul (Ages 13)",
    modules: "Coding & AI Basics Level 2",
    awards: "Featured Student Project",
    components: "Arduino Mega, Infrared Sensor Arrays (8x), Red/Yellow/Green LED signals.",
    summary: "A traffic junction model with IR sensors along roads. If lane A has 4 waiting cars and lane B has none, it dynamically changes lane A&apos;s signal to green to resolve congestion."
  }
];

export default function AchievementsPage() {
  return (
    <div className="relative w-full overflow-hidden py-16 md:py-24 space-y-16">
      {/* Background blur */}
      <div className="absolute top-1/3 left-0 w-96 h-96 hero-glow rounded-full blur-3xl pointer-events-none opacity-30" />

      {/* Header Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Student Showcase</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Student Achievements & Prototypes
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          At Falling Apple STEM Academy, we measure success by what our students can build and explain. Explore case studies of their actual models.
        </p>
      </div>

      {/* Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsList.map((item, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              key={idx}
              className="glass p-6 sm:p-8 rounded-3xl border border-border/80 flex flex-col justify-between hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-4">
                  <div>
                    <h3 className="font-extrabold text-lg text-foreground leading-tight hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-primary font-bold mt-1">
                      👤 {item.student}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-1 rounded-md bg-secondary/15 text-secondary w-fit">
                    {item.modules}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>

                {/* Specifications / Components */}
                <div className="p-3 bg-muted/40 rounded-xl space-y-1.5 border border-border/50">
                  <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider flex items-center gap-1">
                    <Wrench className="h-3.5 w-3.5 text-primary" />
                    Components Used:
                  </p>
                  <p className="text-xs text-foreground font-semibold leading-relaxed">
                    {item.components}
                  </p>
                </div>
              </div>

              {/* Award / Accolades Footer */}
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center space-x-2 text-xs font-bold text-foreground">
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase text-muted-foreground tracking-wider font-bold">Award / recognition</p>
                  <p className="text-foreground leading-tight">{item.awards}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
