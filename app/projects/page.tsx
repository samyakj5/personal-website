import Image from "next/image";
import entanglementPng from "@/components/entanglement.png";
import psetPng from "@/components/pset.png";
import { SiteHeader } from "@/components/site-header";

const projects = [
  {
    description: "problem set template written in Typst, published to Typst Universe",
    image: psetPng,
    imageAlt: "preview of a nova-pset.",
    title: "nova-pset",
  },
  {
    description:
      "simulation of the sudden death of entanglement written in Python, Qiskit, and matplotlib.",
    image: entanglementPng,
    imageAlt: "preview of sudden death writeup.",
    title: "entanglement sudden death simulation",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-black [--page-bg:#f7f3ea] [font-family:var(--font-display)]">
      <SiteHeader active="projects" />

      <section className="px-6 pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-[14pt] font-light tracking-[-0.02em] text-black/78">
            projects
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-5 rounded-[1.15rem] border border-black/8 bg-white/40 p-5 lg:p-6"
              >
                <div className="rounded-[1rem] border border-black/10 bg-[#efe9dc] p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[0.8rem] bg-white/80">
                    <Image
                      fill
                      src={project.image}
                      alt={project.imageAlt}
                      className="object-contain object-top"
                      sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 44vw, 100vw"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-[13pt] font-light tracking-[-0.02em] text-black/78">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[10pt] font-light leading-[1.65] tracking-[0.02em] text-black/48">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
