"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Calendar,
  User,
  GraduationCap,
  Bookmark
} from "lucide-react";

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    age: "",
    course: "Robotics",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Auto redirect to WhatsApp with filled details
    const text = `Hi Falling Apple STEM Academy!\nI'd like to book a trial class.\n\n*Student Name:* ${formData.studentName}\n*Age:* ${formData.age}\n*Parent Name:* ${formData.parentName}\n*Phone:* ${formData.phone}\n*Interested Course:* ${formData.course}\n*Message:* ${formData.message}`;
    const encoded = encodeURIComponent(text);
    setTimeout(() => {
      window.open(`https://wa.me/918110066113?text=${encoded}`, "_blank");
    }, 1200);
  };

  return (
    <div className="relative w-full overflow-hidden py-16 md:py-24 space-y-16 md:space-y-24">
      {/* Background radial glows */}
      <div className="absolute top-10 left-10 w-96 h-96 hero-glow rounded-full blur-3xl pointer-events-none opacity-40" />
      <div className="absolute bottom-20 right-10 w-80 h-80 hero-glow rounded-full blur-3xl pointer-events-none opacity-30" />

      {/* Header Block */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" /> Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Connect With Our{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Innovation Hub
          </span>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Have questions about our programs, modules, or fees? Ready to book a trial class? Reach out to us directly or fill out the enquiry form.
        </p>
      </header>

      {/* Info Cards & Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Card */}
              <div className="glass p-6 rounded-2xl border border-border/80 flex flex-col space-y-3 shadow-xs hover:border-primary/30 transition-colors duration-200">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Phone & Mobile</h3>
                  <div className="flex flex-col text-xs text-muted-foreground mt-1 space-y-1">
                    <a href="tel:+918110066113" className="hover:text-primary transition-colors font-semibold">
                      (+91) 81100 66113
                    </a>
                    <a href="tel:04446036240" className="hover:text-primary transition-colors font-semibold">
                      044 - 4603 6240
                    </a>
                    <div className="text-[10px] text-muted-foreground pt-1.5 border-t border-border/50 mt-1.5 flex flex-col space-y-0.5">
                      <span>Mon-Fri: 4:00 PM – 8:00 PM</span>
                      <span>Weekends: 10:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass p-6 rounded-2xl border border-border/80 flex flex-col space-y-3 shadow-xs hover:border-secondary/30 transition-colors duration-200">
                <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Email Address</h3>
                  <a href="mailto:info@fallingapple.in" className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 block break-all">
                    info@fallingapple.in
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Timings Full-width Card */}
            <div className="glass p-8 rounded-3xl border border-border/90 shadow-sm space-y-6">
              
              {/* Location details */}
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm sm:text-base text-foreground">Academy Location</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Door no 3, 3rd Crescent Park Road,<br />
                    Gandhinagar, Adyar,<br />
                    Chennai, Tamil Nadu - 600020
                  </p>
                </div>
              </div>

              <hr className="border-border/50" />

              {/* Timings */}
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1.5 w-full">
                  <h3 className="font-bold text-sm sm:text-base text-foreground">Hours of Operation</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Weekdays</p>
                      <p>4:00 PM – 8:00 PM</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Weekends</p>
                      <p>10:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-border/50" />

              {/* Direct Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918110066113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 rounded-xl text-xs font-bold text-white bg-green-500 hover:bg-green-600 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp Chat
                </a>
                <a
                  href="mailto:info@fallingapple.in"
                  className="flex-1 text-center py-3 rounded-xl text-xs font-bold bg-muted hover:bg-muted/80 text-foreground border border-border active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                >
                  <Mail className="h-4 w-4" /> Send Email
                </a>
              </div>
            </div>

            {/* Trial Class Info Alert */}
            <div className="glass p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span>1-Hour Trial Class</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Book a slot and bring your child to test components, code a prototype, and receive a customized concept assessment report. No commitment required.
              </p>
            </div>
            
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7" id="enquiry-form">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-border/90 shadow-lg space-y-6">
              <div className="space-y-1">
                <h2 className="font-extrabold text-xl text-foreground flex items-center gap-2">
                  <Calendar className="h-5.5 w-5.5 text-primary" /> Request a Trial Class
                </h2>
                <p className="text-xs text-muted-foreground">
                  Fill in your details below. We will immediately touch base to coordinate an interactive class slot.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <span className="text-5xl animate-bounce">🚀</span>
                  <h3 className="font-extrabold text-foreground text-lg sm:text-xl">Trial Slot Requested!</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
                    We have received your details! Redirecting you now to WhatsApp to connect directly with our chief IIT mentor for booking scheduling.
                  </p>
                  <a
                    href={`https://wa.me/918110066113?text=${encodeURIComponent(
                      `Hi Falling Apple STEM Academy! I'd like to book a trial class for *${formData.studentName}* (${formData.age}yo) for *${formData.course}*.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-green-500 hover:bg-green-600 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    Click if not redirected
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4" aria-label="Admissions & Class Trial Request">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Student Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="studentName" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <User className="h-3 w-3" /> Student Name
                      </label>
                      <input
                        id="studentName"
                        type="text"
                        required
                        placeholder="Enter student's name"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:bg-background focus:outline-hidden transition-all duration-200 text-foreground placeholder:text-muted-foreground/60"
                      />
                    </div>

                    {/* Student Age */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="studentAge" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <GraduationCap className="h-3 w-3" /> Student Age
                      </label>
                      <input
                        id="studentAge"
                        type="number"
                        required
                        min="8"
                        max="18"
                        placeholder="Age (8-18)"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:bg-background focus:outline-hidden transition-all duration-200 text-foreground placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Parent Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="parentName" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <User className="h-3 w-3" /> Parent Name
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        required
                        placeholder="Enter parent's name"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:bg-background focus:outline-hidden transition-all duration-200 text-foreground placeholder:text-muted-foreground/60"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <Phone className="h-3 w-3" /> Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Enter mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:bg-background focus:outline-hidden transition-all duration-200 text-foreground placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  {/* Course selection */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="course" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                      <Bookmark className="h-3 w-3" /> Course of Interest
                    </label>
                    <select
                      id="course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:bg-background focus:outline-hidden transition-all duration-200 text-foreground"
                    >
                      <option value="Robotics">Robotics & Motor Systems (Ages 10-18)</option>
                      <option value="Arduino">Arduino Microcontrollers & IoT (Ages 10-18)</option>
                      <option value="DIY Science">DIY STEM Science Experiments (Ages 8-15)</option>
                      <option value="AI Basics">Artificial Intelligence Basics (Ages 12-18)</option>
                      <option value="3D Printing">3D Design & Printing (Ages 10-18)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> Message / Notes
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Share your child's favorite hobby or any questions you have (Optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:bg-background focus:outline-hidden transition-all duration-200 text-foreground resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-primary to-secondary shadow-md hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Book Trial Class & Connect on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Interactive Directions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Find Us on Google Maps
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-md mx-auto">
            Located on 3rd Crescent Park Road in Gandhinagar, Adyar. Easy access from major arterial roads in Chennai.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-md h-[400px] w-full bg-muted">
          <iframe
            title="Falling Apple STEM Academy Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.48154131557!2d80.25265691482236!3d13.004944990833918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ed2a370e0f%3A0xe5c35b4369cfc68a!2s3rd%20Crescent%20Park%20Rd%2C%20Gandhi%20Nagar%2C%20Adyar%2C%20Chennai%2C%20Tamil%20Nadu%20600020!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}
