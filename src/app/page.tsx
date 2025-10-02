"use client";

import { motion, type Variants } from "framer-motion";

const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Page() {
  return (
    <section className="relative">
      {/* HERO */}
      <div
        className="relative mb-10 w-full overflow-hidden rounded-2xl border border-white/10 
             bg-[url('/banner.jpg')] bg-cover bg-center"
      >
        <div className="bg-gradient-to-t from-black/70 to-black/20">
          <div className="px-4 py-10 md:px-10 md:py-10">
            <motion.h1
              variants={heroItem}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.0 }}
              className="text-4xl font-bold md:text-6xl"
            >
              Portfolio
            </motion.h1>

            <motion.p
              variants={heroItem}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
              className="mt-3 max-w-xl text-sm text-neutral-200 md:text-base"
            >
              Frontend • JavaScript • React
            </motion.p>

            <motion.div
              variants={heroItem}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="/resume.pdf"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
              >
                Download Resume
              </a>
              <a
                href="/contact"
                className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ABOUT + INFO */}
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-3 leading-relaxed text-neutral-200">
            BS Computer Science (Software Technology), De La Salle University.
            Dean’s Lister with strong coding and leadership experience through
            Microsoft Student Community and COMET Lab.
            <br></br>
            <br></br>Skilled in C, Python, JavaScript, and focused on frontend
            using React, Next.js, and Tailwind. Experienced in agile framework
            with Scrum and passionate in UI/UX. Completed South Korean military
            service in 2023, enhancing adaptability and leadership.
            <br></br>
            <br></br>Fluent in English, proven by a perfect TOEIC score of 990.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-white/10 p-4"
        >
          <h3 className="text-sm font-medium text-neutral-300">Quick info</h3>
          <ul className="mt-2 space-y-2 text-sm text-neutral-300">
            <li>Location: Changwon, South Korea</li>
            <li>Email: jpsehyun@gmail.com</li>
            <li>GitHub: github.com/jpsehyun</li>
            <li>LinkedIn: https://www.linkedin.com/in/park-se-hyun</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
