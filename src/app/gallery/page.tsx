"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Camera } from "lucide-react";

// Gallery Items
const galleryItems = [
  { id: 10, category: "workshops", emoji: "🎓", image: "/bootcamp-1.png", title: "Teacher Training: Interactive STEM Lab", desc: "Educators collaborating and experimenting with electronics modules at our Gandhi Nagar center during our teacher training bootcamp." },
  { id: 11, category: "workshops", emoji: "💡", image: "/bootcamp-2.jpg", title: "Teacher Training: Concept Lecture", desc: "Lead instructor presenting electronics and Arduino frameworks, with background clutter removed for the teacher training bootcamp." },
  { id: 12, category: "workshops", emoji: "🤖", image: "/bootcamp-3.jpg", title: "Teacher Training: Robotics & Coding", desc: "Educators programming sensors and basic motor control microcontrollers in the lab during the teacher training bootcamp." },
  { id: 17, category: "workshops", emoji: "💨", image: "/bootcamp-8.png", title: "Teacher Training: Practical STEM Demonstrations", desc: "Teachers observing mechanical and force experiments (such as airflow and pressure) conducted by the lead instructor during the teacher training bootcamp." },
  { id: 18, category: "workshops", emoji: "🏫", image: "/bootcamp-10.png", title: "Teacher Training: Classroom Instruction", desc: "Lead instructor explaining key physical mechanics and electronics concepts directly to school students as part of our teacher training bootcamp methods." },
  { id: 19, category: "workshops", emoji: "🎗️", image: "/bootcamp-9.png", title: "Teacher Training: Force & Tension Dynamics", desc: "Experiential physics outdoor demonstration of tension and mechanical forces during our teacher training bootcamp program." },
  { id: 13, category: "workshops", emoji: "🏆", image: "/bootcamp-4.png", title: "Teacher Training: Certificate Handover (STEM)", desc: "Presenting accomplishments and certificates of training completion to school teachers during the teacher training bootcamp." },
  { id: 14, category: "workshops", emoji: "🎖️", image: "/bootcamp-5.jpg", title: "Teacher Training: Bootcamp Graduation", desc: "Celebrating teachers who successfully completed our advanced STEM curriculum program during the teacher training bootcamp." },
  { id: 15, category: "workshops", emoji: "🏅", image: "/bootcamp-6.jpg", title: "Teacher Training: Certificate Award Ceremony", desc: "Educators receiving their certification for hands-on Arduino and electronics competency during the teacher training bootcamp." },
  { id: 16, category: "workshops", emoji: "🎗️", image: "/bootcamp-7.jpg", title: "Teacher Training: STEM Bootcamp Completion", desc: "Honoring teachers who achieved proficiency in experiential STEM teaching methods during the teacher training bootcamp." },
  { id: 20, category: "workshops", emoji: "🎓", image: "/bootcamp-11.png", title: "Teacher Training: Student Certification 1", desc: "Experiential student certificate presentation as part of our teacher training bootcamp curriculum demonstration." },
  { id: 21, category: "workshops", emoji: "🎖️", image: "/bootcamp-12.png", title: "Teacher Training: Student Certification 2", desc: "Nurturing student achievers in breadboard electronics during the teacher training bootcamp." },
  { id: 22, category: "workshops", emoji: "🏅", image: "/bootcamp-13.png", title: "Teacher Training: Student Certification 3", desc: "Awarding student completion certificates in microcontrollers and logic gates under our teacher training framework." },
  { id: 23, category: "workshops", emoji: "🏆", image: "/bootcamp-14.png", title: "Teacher Training: Student Certification 4", desc: "Celebrating young minds completing hands-on robotics modules at the teacher training bootcamp." },
  { id: 24, category: "workshops", emoji: "🎓", image: "/bootcamp-15.jpg", title: "Teacher Training: Student Certification 5", desc: "Celebrating excellence in robotics engineering during our teacher training and student bootcamp presentation." },
  { id: 25, category: "workshops", emoji: "🎖️", image: "/bootcamp-16.jpg", title: "Teacher Training: Student Certification 6", desc: "Empowering student achievers with Arduino microcontroller certificates under our teacher training bootcamp program." },
  { id: 26, category: "workshops", emoji: "🏅", image: "/bootcamp-17.jpg", title: "Teacher Training: Student Certification 7", desc: "Honoring science academy student graduates with certification during the teacher training bootcamp demonstration." },
  { id: 27, category: "workshops", emoji: "🏆", image: "/bootcamp-18.jpg", title: "Teacher Training: Student Certification 8", desc: "Nurturing the next generation of engineers with hands-on coding certificate awards during the teacher training bootcamp." },
  { id: 28, category: "workshops", emoji: "🎗️", image: "/bootcamp-19.jpg", title: "Teacher Training: Student Certification 9", desc: "Student certificate handover showing competency in breadboard electronics logic gates at the teacher training bootcamp." }
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const currentItem = galleryItems.find((i) => i.id === selectedItem);

  return (
    <div className="relative w-full overflow-hidden py-16 md:py-24 space-y-16">
      {/* Background blur glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 hero-glow rounded-full blur-3xl pointer-events-none opacity-30" />

      {/* Header Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Academy Portfolio</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Academy Gallery & Photo Album
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Explore visual snapshots of our hands-on classrooms, student engineering builds, and science bootcamps in Adyar.
        </p>
      </div>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                className="relative break-inside-avoid rounded-2xl overflow-hidden glass border border-border/70 group flex flex-col items-center justify-center p-8 min-h-[220px] shadow-sm hover:shadow-md cursor-pointer transition-all duration-200"
              >
                {/* Visual Representation */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Details Footer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-white text-xs font-bold mt-1 flex items-center gap-1">
                    {item.title}
                    <ZoomIn className="h-3.5 w-3.5" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedItem !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="glass max-w-xl w-full rounded-3xl border border-border/80 overflow-hidden shadow-2xl p-6 relative flex flex-col items-center text-center space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close Preview"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Large Image visual */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-border/80 shadow-md bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center p-1">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
                />
              </div>

              {/* Descriptions */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  {currentItem.category}
                </span>
                <h2 className="font-extrabold text-lg sm:text-xl text-foreground">
                  {currentItem.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {currentItem.desc}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="w-full flex items-center justify-center gap-2 pt-4 border-t border-border/50 text-[11px] text-muted-foreground font-semibold">
                <Camera className="h-4 w-4 text-primary" />
                Captured live at Adyar Academy Center
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
