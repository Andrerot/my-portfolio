import React, { useState } from "react";

export interface Project {
  id: string;
  title: string;
  category: "all" | "enterprise" | "ai" | "indie";
  categoryLabel: string;
  badge?: string;
  stack: string[];
  description: string;
  link?: string;
  isPrivateOrToy?: boolean;
}

const ALL_PROJECTS: Project[] = [
  {
    id: "agentic-portfolio",
    title: "Autonomous Portfolio & Agentic Engine",
    category: "ai",
    categoryLabel: "AI & Modern Web",
    badge: "Built Live with Agents",
    stack: ["Astro", "TypeScript", "Tailwind v4", "GSAP", "Lenis", "GitHub Pages"],
    description:
      "Engineered via autonomous AI agent pair programming. Celestial deep-space architecture, kinetic variable typography, fluid inertial scrolling, and edge deployment with 100/100 Lighthouse performance.",
    link: "https://github.com/Andrerot/my-portfolio",
  },
  {
    id: "cloud-microservices",
    title: "Cloud-Native Microservices Architecture",
    category: "enterprise",
    categoryLabel: "Enterprise & Cloud",
    badge: "Enterprise Scale",
    stack: ["Python", "SpringBoot", "Docker", "Kubernetes", "Helm", "AWS"],
    description:
      "High-throughput, containerized microservices platform designed for horizontal scalability, automated CI/CD deployments, and fault-tolerant service communication across distributed environments.",
    link: "https://github.com/Andrerot",
  },
  {
    id: "enterprise-analytics",
    title: "Enterprise Analytics & Financial Platform",
    category: "enterprise",
    categoryLabel: "Enterprise & Cloud",
    badge: "Mission Critical",
    stack: ["Angular", "SpringBoot", "JPA / Hibernate", "MySQL", "MongoDB"],
    description:
      "Enterprise solution powering high-volume financial data processing, robust transaction management, and secure multi-tenant role-based access control.",
    link: "https://github.com/Andrerot",
  },
  {
    id: "agent-tooling",
    title: "Autonomous Agent Tooling & LLM Systems",
    category: "ai",
    categoryLabel: "AI & Modern Web",
    badge: "Research & Prototyping",
    stack: ["Python", "LLM APIs", "Function Calling", "Vector DBs", "REST"],
    description:
      "Exploratory systems leveraging intelligent autonomous agents, multi-step problem solving, and contextual tool usage to automate complex engineering tasks and data workflows.",
    link: "https://github.com/Andrerot",
  },
  {
    id: "sabotatore",
    title: "Sabotatore — Social Deduction Mobile Game",
    category: "indie",
    categoryLabel: "Indie Lab & Games",
    badge: "Godot 4 Party Game",
    stack: ["Godot Engine", "GDScript", "Mobile Android (APK)", "Game Design"],
    description:
      "A fast-paced impostor/saboteur party game compiled for Android. Features custom state machines, hidden role mechanics, and real-time player elimination dynamics crafted for social gatherings.",
    isPrivateOrToy: true,
  },
  {
    id: "my-bot",
    title: "My-Bot — Procedural Party Game",
    category: "indie",
    categoryLabel: "Indie Lab & Games",
    badge: "Procedural Generation",
    stack: ["Godot 4", "GDScript", "PowerShell Tooling", "Procedural Tiles"],
    description:
      "An experimental party game exploring procedural world building, dynamic terrain generation, and automated asset generation scripts for seamless tilemaps.",
    isPrivateOrToy: true,
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker & Analytics",
    category: "indie",
    categoryLabel: "Indie Lab & Games",
    badge: "Full-Stack Utility",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Architecture Specs", "Automated Tests"],
    description:
      "A personal finance manager designed from scratch with clear software architecture specifications, modular components, and automated test coverage.",
    isPrivateOrToy: true,
  },
];

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "enterprise", label: "Enterprise & Cloud" },
  { key: "ai", label: "AI & Modern Web" },
  { key: "indie", label: "Indie Lab & Games 🧪" },
] as const;

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#3B82F6] text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                  : "bg-[#0F172A] hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E293B]"
              }`}
            >
              {f.label}
              {f.key !== "all" && (
                <span className="ml-2 text-xs opacity-75 font-normal">
                  ({ALL_PROJECTS.filter((p) => p.category === f.key).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Bento Grid */}
      <div className="bento-grid">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            onMouseMove={handleMouseMove}
            className="card group spotlight-card relative flex flex-col justify-between"
          >
            <div>
              {/* Header: Category + Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
                  {p.categoryLabel}
                </span>
                {p.badge && (
                  <span className="inline-flex items-center text-[0.72rem] font-semibold px-2 py-0.5 rounded-full bg-[#3B82F6]/15 text-[#93C5FD] border border-[#3B82F6]/30">
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Title & Link */}
              <h3 className="text-xl font-bold mb-2 text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <span>{p.title}</span>
                    <svg
                      className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                ) : (
                  <span>{p.title}</span>
                )}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] text-[0.95rem] leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            {/* Bottom: Tech Stack Tags & Notice */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {p.stack.map((tech) => (
                  <span key={tech} className="tag text-[0.75rem]">
                    {tech}
                  </span>
                ))}
              </div>

              {p.isPrivateOrToy && (
                <div className="text-[0.75rem] text-[#FACC15]/80 italic mt-3 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
                  <span>Personal exploration & indie prototype</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
