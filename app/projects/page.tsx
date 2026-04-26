import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";

const projects = [
  {
    description:
      "entanglement decay in noisy quantum circuits under depolarizing noise. identified evidence for sudden death in few-qubit systems",
    href: "https://github.com/samyakj5/entanglement-sudden-death",
    stack: "Qiskit, NumPy, Matplotlib",
    title: "entanglement sudden death simulation",
  },
  {
    description:
      "customizable problem set template with reusable components for proofwriting and layouts. published to Typst Universe",
    href: "https://typst.app/universe/package/nova-pset/",
    stack: "Typst",
    title: "nova-pset",
  },
] as const;

const nextCoursework: Array<{ note?: ReactNode; title: string }> = [
  {
    title: "PHYS 325: Classical Mechanics I",
  },
  {
    title: "PHYS 446: Modern Computational Physics",
  },
  {
    title: "ECE 404: Quantum Information Theory",
  },
  {
    title: "MATH 427: Honors Abstract Algebra",
  },
  {
    title: "MATH 558: Methods of Applied Mathematics",
  },
  {
    title: "(hopefully) CS 450: Numerical Analysis", 
  },
];

const coursework: Array<{ note?: ReactNode; title: string }> = [
  {
    title: "PHYS 225: Relativity & Math Applications",
    note: "γ",
  },
  {
    title: "MATH 347H: Fundamental Mathematics",
    note: "genuinely changed the way i think",
  },
  {
    title: "MATH 416H: Abstract Linear Algebra",
    note: "almost no matrices",
  },
  {
    title: "MATH 441: Differential Equations",
    note: (
      <>
        guess e<sup className="relative -top-[0.52em] text-[0.72em]">x</sup>
      </>
    ),
  },
  {
    title: "MATH 442: Partial Differential Equations",
    note: "dirishlay, robahn, noiman",
  },
  {
    title: "MATH 550: Dynamical Systems I",
    note: "441 + analysis",
  },
  {
    title: "CS 124: Computer Science I",
    note: "claude did",
  },
  {
    title: "CS 128: Computer Science II",
    note: "🤠",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-black [--page-bg:#f7f3ea] [font-family:var(--font-display)]">
      <SiteHeader active="projects" />

      <section className="px-6 pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[14pt] font-light tracking-[-0.02em] text-black/78">
            projects
          </h1>
          <div className="mt-6 space-y-8">
            {projects.map((project) => (
              <article key={project.title}>
                <h2 className="text-[13pt] font-light tracking-[-0.02em] text-black/78">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block border-b border-transparent pb-px transition-[border-color,opacity] duration-200 hover:border-black/30 hover:opacity-65 focus-visible:border-black/30 focus-visible:opacity-65 focus-visible:outline-none"
                  >
                    {project.title}
                  </a>
                  <span className="text-[0.92em] text-black/40">
                    {" · "}{project.stack}
                  </span>
                </h2>
                <p className="mt-2 max-w-2xl text-[10pt] font-light leading-[1.7] tracking-[0.02em] text-black/48">
                  {project.description}
                </p>
              </article>
            ))}
          </div>

          <h2 className="mt-14 text-[14pt] font-light tracking-[-0.02em] text-black/78">
            coursework
          </h2>
          <div className="mt-6 space-y-3">
            {coursework.map((course) => (
              <p
                key={course.title}
                className="max-w-3xl text-[10pt] font-light leading-[1.7] tracking-[0.02em] text-black/68"
              >
                <span>{course.title}</span>
                {course.note ? (
                  <span className="text-black/40"> {" · "}{course.note}</span>
                ) : null}
              </p>
            ))}
          </div>
          <h2 className="mt-14 text-[14pt] font-light tracking-[-0.02em] text-black/78">
            next semester!
          </h2>
          <div className="mt-6 space-y-3">
            {nextCoursework.map((course) => (
              <p
                key={course.title}
                className="max-w-3xl text-[10pt] font-light leading-[1.7] tracking-[0.02em] text-black/68"
              >
                <span>{course.title}</span>
                {course.note ? (
                  <span className="text-black/40"> {" · "}{course.note}</span>
                ) : null}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
