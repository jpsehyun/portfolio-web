"use client";

import { motion, type Variants } from "framer-motion";

const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Page() {
  return (
    <section className="relative">
      

      {/* HERO */}
      <div className="relative mb-10 w-full overflow-hidden rounded-2xl border border-white/10 
             bg-[url('/banner.jpg')] bg-cover bg-center">
        <div className="bg-gradient-to-t from-black/70 to-black/20">
          <div className="px-4 py-16 md:p-16">
            <motion.h1
              variants={heroItem}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.00 }}
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
              Developer • Security • AR/Unity
            </motion.p>

            <motion.div
              variants={heroItem}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.30 }}
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
            I build web apps, AR experiences in Unity, and I do application security testing.
            I like clean UI, fast loads, and simple flows.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-neutral-300">
            <li>Web: Next.js, React, Tailwind</li>
            <li>Security: Burp Suite, ZAP, test targets</li>
            <li>AR/Unity: AR Foundation, OpenCV, video scenes</li>
          </ul>
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
            <li>Location: Seoul</li>
            <li>Email: you@example.com</li>
            <li>GitHub: github.com/yourname</li>
            <li>LinkedIn: linkedin.com/in/yourname</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
