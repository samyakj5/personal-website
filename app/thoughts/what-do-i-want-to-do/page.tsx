import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { firstThought } from "@/lib/thoughts";

export default function FirstThoughtPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-black [--page-bg:#f7f3ea] [font-family:var(--font-display)]">
      <SiteHeader active="thoughts" />

      <section className="px-6 pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-[9.5pt] font-light tracking-[0.02em] text-black/38">
            {firstThought.dateLabel}
          </p>
          <h1 className="mt-2 text-[14pt] font-light tracking-[-0.02em] text-black/78">
            {firstThought.title}
          </h1>

          <div className="max-w-2xl">
            <div className="mt-6 space-y-5">
              {firstThought.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[11pt] font-light leading-[1.75] tracking-[0.02em] text-black/56"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-10 text-right text-[9.5pt] font-light tracking-[0.02em] text-black/40">
              <Link
                href="/thoughts"
                className="inline-block border-b border-transparent pb-px transition-[border-color,opacity] duration-200 hover:border-black/25 hover:opacity-65 focus-visible:border-black/25 focus-visible:opacity-65 focus-visible:outline-none"
              >
                back to thoughts
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
