// src/app/experience/page.tsx
import { Card } from "@/components/ui/card";

const experiences = [
  {
    role: "Project Intern",
    company: "Apollo Technologies Inc.",
    period: "May 2024 – Aug 2024",
    location: "Metro Manila, Philippines",
    details: [
      "Contributed to backend systems handling financial transaction workflows.",
      "Planned, designed, and implemented various API endpoints and dashboard features for the backend API.",
    ],
  },
  {
    role: "Data Annotator (Korean Language)",
    company: "OneForma",
    period: "Remote",
    location: "",
    details: [
      "Executed comprehensive labeling and classification of Korean language datasets to advance AI-driven search platforms.",
      "Improved accuracy of AI models on Korean text search queries.",
    ],
  },
  {
    role: "Data Transcriber (Korean Audio)",
    company: "OpenTrainAI",
    period: "Remote",
    location: "",
    details: [
      "Transcribed Korean audio clips with strict adherence to formatting and quality guidelines.",
      "Ensured high-quality outputs by applying linguistic rules and verifying segmented audio data.",
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center">Experience</h1>
      <div className="mt-6 flex flex-col items-center gap-6">
        {experiences.map((exp) => (
          <Card
            key={exp.role + exp.company}
            className="w-full max-w-2xl border-white/10 bg-neutral-900/70 
              p-6 transform transition duration-300 hover:scale-105 
              hover:shadow-lg hover:shadow-neutral-500/20"
          >
            <h2 className="text-lg font-semibold text-neutral-200">
              {exp.role}
            </h2>
            <p className="text-sm text-neutral-300">{exp.company}</p>
            <p className="text-xs text-neutral-400 mt-1">
              {exp.period} {exp.location && `• ${exp.location}`}
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-neutral-300 space-y-2">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
