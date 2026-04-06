import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { thoughts } from "@/lib/thoughts";

export default function ThoughtsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-black [--page-bg:#f7f3ea] [font-family:var(--font-display)]">
      <SiteHeader active="thoughts" />

      <section className="px-6 pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[14pt] font-light tracking-[-0.02em] text-black/78">
            thoughts
          </h1>
          <div className="mt-6 space-y-8">
            {thoughts.map((thought) => (
              <article key={thought.slug}>
                <h2 className="text-[13pt] font-light tracking-[-0.02em] text-black/78">
                  <Link
                    href={`/thoughts/${thought.slug}`}
                    className="inline-block border-b border-transparent pb-px transition-[border-color,opacity] duration-200 hover:border-black/30 hover:opacity-65 focus-visible:border-black/30 focus-visible:opacity-65 focus-visible:outline-none"
                  >
                    {thought.title}
                  </Link>
                </h2>
                <p className="mt-2 text-[9.5pt] font-light tracking-[0.02em] text-black/38">
                  {thought.dateLabel}
                </p>
                <p className="mt-3 max-w-2xl text-[10pt] font-light leading-[1.7] tracking-[0.02em] text-black/48">
                  {thought.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
