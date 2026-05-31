"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Youtube, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="w-full bg-linear-to-b from-transparent to-muted/50 border-t border-border/40" aria-label="Footer Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <Image
                src="https://fallingapple.in/wp-content/uploads/2024/11/Falling-Apple-Logo.jpg"
                alt="Falling Apple STEM Academy Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-cover border border-border/40 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Falling Apple
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  STEM Academy
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering children with hands-on DIY projects, robotics, electronics, coding, and future tech. Guided by IIT mentors.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com/fallingapple_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-secondary hover:text-white transition-all duration-200"
                aria-label="Visit Instagram page"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://youtube.com/@fallingappl?si=XwA0Qpmrr33-QdTY"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-red-500 hover:text-white transition-all duration-200"
                aria-label="Visit YouTube channel"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="Visit LinkedIn page"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
                  About Our Academy
                </Link>
              </li>
              <li>
                <Link href="/modules" className="text-muted-foreground hover:text-primary transition-colors">
                  Explore Programs
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors">
                  Student Prototypes
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Academy Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  STEM Articles & Blog
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Programs</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/modules#diy" className="text-muted-foreground hover:text-primary transition-colors">
                  DIY STEM Projects
                </Link>
              </li>
              <li>
                <Link href="/modules#robotics" className="text-muted-foreground hover:text-primary transition-colors">
                  Robotics & Electronics
                </Link>
              </li>
              <li>
                <Link href="/modules#coding" className="text-muted-foreground hover:text-primary transition-colors">
                  Coding & App Development
                </Link>
              </li>
              <li>
                <Link href="/modules#science" className="text-muted-foreground hover:text-primary transition-colors">
                  Practical Science Experiments
                </Link>
              </li>
              <li>
                <Link href="/modules#ai" className="text-muted-foreground hover:text-primary transition-colors">
                  Artificial Intelligence Basics
                </Link>
              </li>
              <li>
                <Link href="/modules#workshops" className="text-muted-foreground hover:text-primary transition-colors">
                  STEM School Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Contact Us</h3>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Door no 3, 3rd Crescent Park Road,
                  <br />
                  Gandhinagar, Adyar,
                  <br />
                  Chennai - 600020
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918110066113" className="hover:text-primary transition-colors">
                    (+91) 81100 66113
                  </a>
                  <a href="tel:04446036240" className="hover:text-primary transition-colors">
                    044 - 4603 6240
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                <a href="mailto:info@fallingapple.in" className="hover:text-primary transition-colors break-all">
                  info@fallingapple.in
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Mon-Fri: 4 pm - 8 pm</span>
                  <span>Weekends: 10 am - 6 pm</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Falling Apple STEM Academy. All rights reserved.</p>
          <p className="md:text-right">Guided by IIT Mentors | Developed for Future Innovators</p>
        </div>
      </div>
    </footer>
  );
}
