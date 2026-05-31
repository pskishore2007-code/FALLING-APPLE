"use client";

import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  const whatsappUrl = "https://wa.me/918110066113?text=Hi%20Falling%20Apple%20STEM%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20your%20STEM%20and%20Robotics%20programs.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Contact Button */}
      <div className="group relative flex items-center">
        <span className="absolute right-14 scale-0 rounded-lg bg-slate-900 dark:bg-slate-800 px-3 py-1.5 text-xs text-white group-hover:scale-100 origin-right transition-all duration-200 shadow-md font-semibold whitespace-nowrap border border-white/10">
          Contact Us
        </span>
        <motion.a
          href="/contacts"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
          aria-label="Go to Contact Us page"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="h-5 w-5" />
        </motion.a>
      </div>

      {/* WhatsApp Button */}
      <div className="group relative flex items-center">
        <span className="absolute right-14 scale-0 rounded-lg bg-slate-900 dark:bg-slate-800 px-3 py-1.5 text-xs text-white group-hover:scale-100 origin-right transition-all duration-200 shadow-md font-semibold whitespace-nowrap border border-white/10">
          WhatsApp Chat
        </span>
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
          aria-label="Contact us on WhatsApp"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.51 5.28 3.505 8.484-.017 6.66-5.354 11.998-11.962 11.998-2.005-.002-3.978-.502-5.733-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.875-9.742.007-2.602-1.005-5.05-2.855-6.903C16.64 2.106 14.187.9 11.595.9 6.162.9 1.74 5.267 1.725 10.637c-.001 1.702.453 3.36 1.314 4.814L2.003 21.05l5.808-1.521c-1.4.83-2.39 1.3-1.16 2.62z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
