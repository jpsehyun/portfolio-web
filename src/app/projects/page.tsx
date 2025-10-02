import { Card } from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    title: "Lottery 6/45 Generator",
    desc: "Allows the users to play unofficial South Korean 6/45 lottery mock-up game.",
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://lotto-picker-seven.vercel.app/lotto",
  },
  {
    title: "Trivia Game Show",
    desc: "Allows the users to play a trivia game. Powered by Open Trivia DB API.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Halls of De La Salle",
    desc: "Undergraduate Thesis, A recreation of the hollowing events which happened in 1945 at De La Salle University. Evokes empathy and rational compassion through AR experience.",
    tags: ["Unity", "OpenCV", "AR Foundation"],
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="border-white/10 bg-neutral-900/70 p-4
                       transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neutral-500/20"
          >
            <div className="text-sm text-neutral-400">{p.title}</div>
            <p className="mt-2 text-sm text-neutral-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
              {p.tags.map((t) => (
                <span key={t} className="rounded bg-white/10 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
