import { SiteHeader } from "@/components/site-header";

export default function ThoughtsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-black [--page-bg:#f7f3ea] [font-family:var(--font-display)]">
      <SiteHeader active="thoughts" />

      <section className="px-6 pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[14pt] font-light tracking-[-0.02em] text-black/78">
            thoughts
          </h1>
          <p className="mt-6 max-w-2xl text-[10pt] font-light leading-[1.7] tracking-[0.02em] text-black/48">
            to be added
          </p>
        </div>
      </section>
    </main>
  );
}
