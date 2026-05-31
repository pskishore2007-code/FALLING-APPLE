"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, X, BookOpen, Tag, User } from "lucide-react";
import Image from "next/image";

// Real Blog articles data from the live site fallingapple.in
const articles = [
  {
    id: 5,
    title: "Empowering Educators: Our 2-Day Hands-on STEM & Robotics Teacher Training Program",
    category: "Inspiration",
    date: "May 27, 2026",
    readTime: "3 min read",
    image: "https://fallingapple.in/wp-content/uploads/2025/10/more-you-explore-more-you-grow-shot-adorable-little-boy-girl-conducting-scientific-experiment-with-their-teacher-school-1-951x438.jpg",
    summary: "Discover how we empowered school educators in our intensive 2-day training program, equipping them with hands-on electronics, robotics, and coding skills to transform classroom learning.",
    emoji: "🎓",
    content: [
      { type: "paragraph", text: "Education is evolving rapidly, and the demand for practical, experiential learning in science and technology has never been higher. However, to inspire students, we must first empower our educators. Recognizing this need, Falling Apple STEM Academy recently conducted an intensive 2-day STEM & Robotics Teacher Training Program at our center in Adyar, Chennai." },
      { type: "heading", text: "Bridging the Gap Between Theory and Practice" },
      { type: "paragraph", text: "For two full days, school teachers from various institutions stepped out of their traditional lecturing roles and became students themselves. The workshop focused on demystifying complex concepts in physics, electronics, and robotics through direct, hands-on construction. Educators worked with microcontrollers, built real-world circuit prototypes, and debugged lines of code." },
      { type: "heading", text: "Key Focus Areas of the Workshop" },
      { type: "list_item", text: "Hands-on Microcontrollers: Working with Arduino Uno, learning basic sensor integrations, and writing code to react to environmental variables." },
      { type: "list_item", text: "Interactive Physics & Electronics: Demystifying voltage, current, resistance, and semiconductors through breadboard prototypes rather than formulas." },
      { type: "list_item", text: "Robotics Pedagogy: Strategies for introducing automation and motor control in a fun, accessible way to students of varying ages." },
      { type: "heading", text: "Why Teacher Training Matters" },
      { type: "paragraph", text: "Our IIT mentors believe that true innovation in education starts when teachers feel confident using tools in the classroom. By equipping educators with simple, affordable DIY science projects and robust debugging frameworks, we ensure that thousands of school students will benefit from a more engaging STEM environment." },
      { type: "heading", text: "Inspiring the Next Generation of Thinkers" },
      { type: "paragraph", text: "As the training program concluded, the participating teachers expressed immense excitement about bringing these interactive projects to their school labs. We are proud to play a role in training the educators who will nurture the next wave of engineers, scientists, and problem solvers." }
    ]
  },
  {
    id: 1,
    title: "Engaging Alternatives to reduce screen time for kids",
    category: "Parenting",
    date: "February 10, 2026",
    readTime: "4 min read",
    image: "https://fallingapple.in/wp-content/uploads/2026/02/2147782828-768x513.jpg",
    summary: "Screens have quietly woven themselves into every part of a child's day. Discover how involving kids in everyday routines, creative play, storytelling, and outdoor exploration can replace screen-based entertainment with real-world engagement.",
    emoji: "📱",
    content: [
      { type: "paragraph", text: "Screens have quietly woven themselves into every part of a child's day, study time or even meal time. While technology offers learning and convenience, parents often worry about its growing presence. Too much screen exposure can make children more restless, reduce social interaction, and limit their ability to think creatively. But reducing screen time doesn't have to feel like punishment. The best approach is to replace screen-based activities with real-world experiences that are fun, meaningful, and easy to set up." },
      { type: "heading", text: "Invite kids into everyday life" },
      { type: "paragraph", text: "One of the simplest ways to reduce screen time is by involving children in ordinary routines. Kids love feeling like they're part of \"grown-up\" work. Helping in the kitchen, watering plants, organising their books, or packing their school bags gives them a sense of ownership and keeps their minds engaged. These seemingly routine activities build independence and help children learn through participation rather than instruction." },
      { type: "heading", text: "Encourage creative expression" },
      { type: "paragraph", text: "Creative play is another gentle way to shift attention away from screens. Cutting colourful paper, painting freely, moulding clay, or stitching simple shapes allows children to explore colours, textures, and ideas. The goal is never to create something perfect; it's about the joy of expressing themselves." },
      { type: "heading", text: "Rediscover the joy of stories" },
      { type: "paragraph", text: "Reading, in any way, can be a powerful screen-free activity. Storybooks, picture books, comics, riddles, and magazines all offer mental stimulation. Children who find reading difficult may enjoy audiobooks or family storytelling sessions. When children are transported into another world through words, imagination takes charge, helping their mind grow in ways that visual screens cannot." },
      { type: "heading", text: "Let the outdoors do its magic" },
      { type: "paragraph", text: "Outdoor play remains unmatched in helping children unwind and reset. Running, cycling, or simply wandering in the park helps them connect with nature. Hearing birds, feeling the wind, stepping on grass, these sensory experiences reduce restlessness. Whether it's playing with neighbourhood friends or simply exploring their surroundings, the outdoors offers stimulation that refreshes body and mind." },
      { type: "heading", text: "How does Falling Apple help?" },
      { type: "paragraph", text: "Not every parent can constantly design new activities, and that's okay. Children don't need elaborate setups; they simply need opportunities to explore, try, fail, and try again. What they truly seek is engagement, not entertainment. This is where structured programs can play a powerful role. Hands-on learning environments give children space to experiment, create, and understand how things work in the real world. They build resilience, curiosity, confidence, and problem-solving skills, qualities that screen alone cannot nurture" }
    ]
  },
  {
    id: 2,
    title: "The Accidental Experiments of Scientists",
    category: "Science History",
    date: "October 7, 2025",
    readTime: "5 min read",
    image: "https://fallingapple.in/wp-content/uploads/2025/10/more-you-explore-more-you-grow-shot-adorable-little-boy-girl-conducting-scientific-experiment-with-their-teacher-school-1-951x438.jpg",
    summary: "From Newton's apple to the discovery of penicillin, Play-Doh, and Post-it Notes, many of the greatest scientific breakthroughs happened by mistake. Learn how embracing failure drives real discovery.",
    emoji: "🧪",
    content: [
      { type: "paragraph", text: "Do you know that not all discoveries happen in a lab?" },
      { type: "paragraph", text: "Sometimes, the greatest scientific breakthroughs come from mistakes, accidents, or even a quick glance of our surroundings. These \"happy accidents\" remind us that science isn't always about finding what you expect, it's about being open to the unexpected." },
      { type: "paragraph", text: "Here are some fascinating stories of scientists who stumbled upon discoveries that changed the world." },
      { type: "heading", text: "Newton's Falling Apple" },
      { type: "paragraph", text: "Sometimes asking \"WHY\" helps you find the right answer!" },
      { type: "paragraph", text: "The story goes that Isaac Newton was sitting under an apple tree when he saw an apple fall to the ground. Millions of people had seen apples fall before but Newton asked a different question: Why does it always fall and not sideways or upwards?" },
      { type: "paragraph", text: "That simple moment sparked his thoughts on gravity, one of the most important scientific ideas ever. It wasn't just the apple; it was Newton's curiosity that turned an everyday event into a scientific breakthrough." },
      { type: "heading", text: "Fleming's forgotten Petri Dish" },
      { type: "paragraph", text: "Sometimes making a mess can help in creating extraordinary events!" },
      { type: "paragraph", text: "In 1928, Alexander Fleming discovered a mould growing in one of his Petri dishes after leaving it there the night before in his messy laboratory. Surprisingly, the mould had killed the bacteria around it." },
      { type: "paragraph", text: "Rather than discarding it, Fleming investigated it and found the first real antibiotic, penicillin. Millions of lives around the world have been saved by this accident." },
      { type: "heading", text: "Percy's melted chocolate and the discovery of microwave" },
      { type: "paragraph", text: "Sometimes paying attention to little things around you can save your day!" },
      { type: "paragraph", text: "Percy Spencer, an engineer, was working on radar technology during World War II. One day, while standing near a magnetron (a type of vacuum tube), he noticed that a chocolate bar in his pocket had melted." },
      { type: "paragraph", text: "Instead of being annoyed, he tested it with popcorn kernels and an egg. The result? The invention of the microwave oven – a kitchen essential today!" },
      { type: "heading", text: "Spencer's weak glue and Post-it notes" },
      { type: "paragraph", text: "Sometimes even your failed ideas can lead to a new perspective" },
      { type: "paragraph", text: "Dr. Spencer Silver, a chemist at 3M, was trying to make a super-strong adhesive. What he got instead was a weak glue that could stick paper lightly without leaving marks." },
      { type: "paragraph", text: "At first, it seemed useless. But years later, a colleague used it to mark pages in his choir book and Post-it Notes were born. Today, they're used in schools, offices, and homes around the world." },
      { type: "heading", text: "An invention that became a child's play" },
      { type: "paragraph", text: "In the 1950s, Kutol Products made a non-toxic paste to clean soot from wallpaper. But as coal heating faded, demand for the cleaner dropped." },
      { type: "paragraph", text: "Just when the company risked losing its main product, a family member suggested a playful twist: let kids shape and mould with it instead. That simple idea turned a fading business tool into one of the most beloved children's toys – Play-Doh." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "These moments could have been ignored. But because these scientists were ready to explore, accidents turned into world-changing discoveries." },
      { type: "paragraph", text: "At Falling Apple, we believe every child has the potential to be a little Newton, Fleming, or Spencer. Our hands-on science activities are designed to let kids experiment, fail, and try again, because that's how real discoveries happen." },
      { type: "paragraph", text: "Every mistake is a step towards discovery. Visit Falling Apple, Adyar, Chennai or call +91 81100 66113 to book a session." }
    ]
  },
  {
    id: 3,
    title: "Inspiring Stories of India's Scientific Giants",
    category: "Inspiration",
    date: "August 19, 2025",
    readTime: "6 min read",
    image: "https://fallingapple.in/wp-content/uploads/2025/08/Blog-Thumbnail-1.png",
    summary: "From Sir C.V. Raman's Nobel-winning work to the incredible cytogenetics of E.K. Janaki Ammal and the Mars Mission architects, celebrate the legendary minds who shaped India's scientific history.",
    emoji: "🚀",
    content: [
      { type: "paragraph", text: "When we ponder on the journey of India as a nation, we often celebrate its freedom fighters, artists, and leaders. But there's another set of heroes who've quietly shaped our future, our scientists. From sending rockets to space on a shoestring budget to inventing the secrets of the atom, India's scientific minds have not only broken glass ceilings but have inspired generations. Their stories aren't just about discoveries and recognition, they're about imagination, and the power of asking \"What if there is another way?\" This 79th Independence Day, let's celebrate the minds who not only changed the course of scientific discovery but also inspired generations through their curiosity and innovation." },
      { type: "heading", text: "Here are five Indian scientific legends whose stories can spark real learning." },
      { type: "heading", text: "1. C. V. Raman - Master of Light" },
      { type: "paragraph", text: "Sir Chandrasekhara Venkata Raman, the first Asian Nobel laureate in Physics (1930), discovered the Raman Effect--the change in light wavelength when it scatters. Armed with just a prism, spectroscope, and diffraction grating, Raman deduced that the sea's blue hue was due to light scattering--not just reflection of the sky, then founded the Raman Research Institute, shaping scientific education in India." },
      { type: "heading", text: "2. E.K. Janaki Ammal - The Flower Scientist" },
      { type: "paragraph", text: "E.K. Janaki Ammal was a botanist and geneticist who became the first Indian woman to earn a PhD in cytogenetics (from University of Michigan) She hybridized sugarcane to develop high-yield varieties and co-authored the Chromosome Atlas of Cultivated Plants. Her legacy includes the preservation of rare plant species and inspired equity in science." },
      { type: "heading", text: "3. Kamala Sohonie - Pioneering Biochemist" },
      { type: "paragraph", text: "In 1939, Kamala Sohonie broke barriers as the first Indian woman to earn a PhD in a science discipline, despite initial rejections even from the famed C.V. Raman. A strong advocate for women in science, she researched nutrients in local foodstuffs and merited the Rashtrapati Award for her work on the nutritive value of \"Neera\"" },
      { type: "heading", text: "4. Kamal Ranadive - Cancer Researcher" },
      { type: "paragraph", text: "Dr. Kamal Jayasing Ranadive founded India's first tissue culture lab at the Indian Cancer Research Centre, leading pioneering work in the relationship between viruses and cancers. Her research focused on leukaemia, oesophageal cancer, and leprosy vaccine development, earning her the Padma Bhushan, India's third-highest civilian honor" },
      { type: "heading", text: "5. Ritu Karidhal & Team - Mars Mission Architects" },
      { type: "paragraph", text: "Often called the \"Rocket Woman of India,\" Dr. Ritu Karidhal served as the Deputy Operations Director of India's Mars Orbiter Mission (Mangalyaan) The success of Mangalyaan was a technological triumph, achieved at a fraction of typical mission costs. Women scientists like Ritu, Minal Rohit, and Moumita Dutta played pivotal roles in this audacious mission." },
      { type: "heading", text: "What these stories teach us?" },
      { type: "list_item", text: "Curiosity is universal: Raman used simple materials to study light fundamentally." },
      { type: "list_item", text: "Barriers are meant to be broken: Sohonie and Ammal showed that determination outshines bias." },
      { type: "list_item", text: "Science saves lives: Research by Ranadive embodies impactful learning." },
      { type: "list_item", text: "Innovation need not be expensive: Mangalyaan's success reflects creative problem-solving." },
      { type: "heading", text: "Why such histories matter at Falling Apple?" },
      { type: "paragraph", text: "Being an interactive science course in Chennai, Falling Apple believes that spark of science should strike early, through curiosity, creativity, and DIY science projects. Inspired by inventors like these, our programs for children aged 8+ nurture:" },
      { type: "list_item", text: "Confidence in action, not just academics." },
      { type: "list_item", text: "Real-world skills, through experiments and projects." },
      { type: "list_item", text: "Inclusive learning, where anyone can be a thinker." },
      { type: "heading", text: "Why not join the journey forward?" },
      { type: "paragraph", text: "Let's honour scientific legacies, while inspiring tomorrow's minds. Visit Falling Apple, Chennai, or call 81100 66113 to see how your child can explore, build, and lead like these pioneers." }
    ]
  },
  {
    id: 4,
    title: "The Future of Science: How Today's Discoveries Are Shaping Tomorrow's World",
    category: "Future Tech",
    date: "August 8, 2025",
    readTime: "4 min read",
    image: "https://fallingapple.in/wp-content/uploads/2024/11/98166-951x438.jpg",
    summary: "From machine learning in drug design and Martian colonization to ethical genetic editing and fusion energy, explore how cutting-edge research is building tomorrow.",
    emoji: "🌐",
    content: [
      { type: "paragraph", text: "Science isn't just about white coats, microscopes, and formulas on chalkboards -- it's the driving force shaping the future of humanity. From AI that can design drugs in weeks, to telescopes spotting galaxies billions of light-years away, the pace of discovery has never been this fast. But with this rapid progress comes a big question: Are we ready for the future we're creating?" },
      { type: "heading", text: "1. Medicine That Learns" },
      { type: "paragraph", text: "Artificial Intelligence is no longer science fiction. Machine learning algorithms can analyze millions of medical records and identify disease risks faster than human doctors. Recently, AI helped researchers design a potential antibiotic in record time, targeting bacteria that were previously resistant to treatment. This could mean a future where cancer, Alzheimer's, and even some genetic disorders are diagnosed and treated before symptoms ever appear." },
      { type: "heading", text: "2. Space -- Humanity's Next Neighborhood" },
      { type: "paragraph", text: "NASA, SpaceX, and other agencies are racing toward Mars, while the James Webb Space Telescope is feeding us mind-bending images of the universe's early days. Why does this matter? Because understanding other worlds could help us protect our own -- and maybe, someday, give us a backup home." },
      { type: "heading", text: "3. Climate Solutions from Science" },
      { type: "paragraph", text: "We're in the middle of a climate crisis, but science is stepping up. Lab-grown meat, carbon-capturing cement, and fusion energy are no longer crazy ideas -- they're prototypes being tested right now. If scaled correctly, these technologies could drastically cut global emissions." },
      { type: "heading", text: "4. Ethical Dilemmas We Can't Ignore" },
      { type: "paragraph", text: "For all its promise, science brings ethical challenges. Should we edit human genes to make people resistant to disease? Should AI be allowed to make life-and-death medical decisions? The tools are here, but the rules aren't." }
    ]
  }
];

// Available Categories for filtering
const categories = ["All", "Parenting", "Science History", "Inspiration", "Future Tech"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const currentArticle = articles.find((a) => a.id === selectedArticle);

  return (
    <div className="relative w-full overflow-hidden py-12 md:py-20 space-y-12">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] hero-glow rounded-full blur-3xl pointer-events-none opacity-45" />
      <div className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] hero-glow rounded-full blur-3xl pointer-events-none opacity-30" />

      {/* Header section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary">
          <BookOpen className="h-3.5 w-3.5" /> STEM Insights & Ideas
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Falling Apple <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">STEM Academy Blog</span>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Stay informed with expert insights on robotics education, science history, and DIY learning strategies from our IIT mentors.
        </p>
      </header>

      {/* Category Pills/Tabs selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" aria-label="Blog categories">
        <div className="flex flex-wrap items-center justify-center gap-2.5 pb-4 border-b border-border/40">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/25 scale-[1.03]"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles main listing container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 glass rounded-3xl border border-border/80 max-w-md mx-auto">
            <p className="text-muted-foreground">No articles found in this category.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Show Featured Article (first item in "All" view) */}
            {activeCategory === "All" && (
              <article className="glass rounded-3xl border border-border/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Featured Image */}
                  <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden">
                    <Image
                      src={articles[0].image}
                      alt={articles[0].title}
                      fill
                      sizes="(max-w-1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                      ★ Featured Post
                    </span>
                  </div>

                  {/* Featured Details */}
                  <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-xs">
                        <span className="font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                          <Tag className="h-3 w-3" /> {articles[0].category}
                        </span>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {articles[0].date}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {articles[0].title}
                      </h2>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {articles[0].summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                      <span className="text-2xl select-none" role="img" aria-label="icon">
                        {articles[0].emoji}
                      </span>
                      <button
                        onClick={() => setSelectedArticle(articles[0].id)}
                        className="text-xs sm:text-sm font-bold text-primary flex items-center gap-1.5 group/btn cursor-pointer"
                      >
                        Read Full Article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Grid of other articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles
                // If filtering by "All", skip the featured article since it is displayed above
                .filter(a => activeCategory !== "All" || a.id !== articles[0].id)
                .map((article) => (
                  <article
                    key={article.id}
                    className="glass rounded-3xl border border-border/80 overflow-hidden flex flex-col justify-between shadow-sm hover:scale-[1.01] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="space-y-5">
                      {/* Post Thumbnail */}
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                          {article.category}
                        </span>
                      </div>

                      {/* Content details */}
                      <div className="px-6 space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{article.date}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
                        </div>

                        <h3 className="font-extrabold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-6 px-6 pb-6 pt-4 border-t border-border/40 flex items-center justify-between">
                      <span className="text-xl select-none" role="img" aria-label="icon">
                        {article.emoji}
                      </span>
                      <button
                        onClick={() => setSelectedArticle(article.id)}
                        className="text-xs font-bold text-primary flex items-center gap-1 group/btn cursor-pointer"
                      >
                        Read Full Article
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        )}
      </section>

      {/* Full Article Lightbox Modal Reader */}
      <AnimatePresence>
        {selectedArticle !== null && currentArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            {/* Modal Body Container */}
            <motion.article
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              className="glass max-w-3xl w-full rounded-3xl border border-border/80 overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button floating top right */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all z-20 shadow-md border border-white/10"
                aria-label="Close article"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Scrollable Reader Section */}
              <div className="overflow-y-auto pr-1">
                {/* Hero Header Image */}
                <div className="relative h-48 sm:h-64 md:h-72 w-full">
                  <Image
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    fill
                    sizes="(max-w-1024px) 100vw, 768px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-black/35" />
                  <div className="absolute bottom-4 left-6 flex flex-wrap gap-2.5 items-center">
                    <span className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-sm">
                      {currentArticle.category}
                    </span>
                  </div>
                </div>

                {/* Article Content Core */}
                <div className="px-6 sm:px-8 md:px-10 pb-8 pt-6 space-y-6">
                  {/* Meta details */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground border-b border-border/40 pb-4">
                    <span className="flex items-center gap-1.5 font-semibold text-primary">
                      <User className="h-3.5 w-3.5" /> By Falling Apple Instructors
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {currentArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {currentArticle.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-extrabold text-2xl sm:text-3xl text-foreground leading-tight tracking-tight pt-2">
                    {currentArticle.title}
                  </h2>

                  {/* Paragraph blocks mapping */}
                  <div className="space-y-4 pt-2">
                    {currentArticle.content.map((item, idx) => {
                      if (item.type === "heading") {
                        return (
                          <h3
                            key={idx}
                            className="text-lg sm:text-xl font-bold text-foreground mt-8 mb-3 tracking-tight border-l-4 border-primary pl-3.5"
                          >
                            {item.text}
                          </h3>
                        );
                      }
                      if (item.type === "list_item") {
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-muted-foreground pl-3.5 py-1 font-normal leading-relaxed"
                          >
                            <span className="text-primary text-lg mt-0.5 select-none leading-none">•</span>
                            <span>{item.text}</span>
                          </div>
                        );
                      }
                      return (
                        <p
                          key={idx}
                          className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 font-normal"
                        >
                          {item.text}
                        </p>
                      );
                    })}
                  </div>

                  {/* Promotion/Direct Call To Action banner */}
                  <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 space-y-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-sm sm:text-base">Ready to spark your child&apos;s curiosity?</h4>
                      <p className="text-xs text-muted-foreground">Explore our hands-on DIY STEM & robotics modules at our Adyar center.</p>
                    </div>
                    <a
                      href="/modules"
                      onClick={() => setSelectedArticle(null)}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:scale-[1.02] flex-shrink-0 cursor-pointer"
                    >
                      View Modules
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

