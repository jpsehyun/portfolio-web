import { Card } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Lottery 6/45 Generator",
    desc: "Allows the users to play unofficial South Korean 6/45 lottery mock-up game.",
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://lotto-picker-seven.vercel.app/lotto",
    img: "/images/lotto-thumb.png",
  },
  {
    title: "Trivia Game Show",
    desc: "Allows the users to play a trivia game. Powered by Open Trivia DB API.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "trivia-gameshow.vercel.app",
    img: "/images/trivia-thumb.png",
  },
  {
    title: "Halls of De La Salle",
    desc: "Undergraduate Thesis, a recreation of the events of 1945 at De La Salle University. Evokes empathy and rational compassion through AR experience.",
    tags: ["Unity", "OpenCV", "AR Foundation"],
    link: "https://youtu.be/nEmbOi5Q-jc",
    img: "/images/thesis-thumb.png",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              className="flex h-full flex-col border-white/10 bg-neutral-900/70 
             transform transition duration-300 hover:scale-105 
             hover:shadow-lg hover:shadow-neutral-500/20 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-40 w-full">
                <Image
                  src={p.img}
                  alt={`${p.title} thumbnail`}
                  fill
                  className="rounded-t-md object-cover"
                  sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
                />
              </div>

              {/* Content with padding */}
              <div className="flex flex-col flex-1 p-4">
                <div className="text-sm font-semibold text-neutral-200">
                  {p.title}
                </div>
                <p className="mt-2 text-sm text-neutral-300 flex-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded bg-white/10 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
