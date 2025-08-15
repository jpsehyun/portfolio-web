import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "AR Tour",
    desc: "Station-based AR tour with video, subtitles, and branching.",
    tags: ["Unity", "AR Foundation"],
  },
  {
    title: "Security Lab",
    desc: "Practice environment for XSS and SQL injection on demo targets.",
    tags: ["Burp", "ZAP"],
  },
  {
    title: "React Dashboard",
    desc: "Fast dashboard with charts and a clean layout.",
    tags: ["React", "Tailwind"],
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
