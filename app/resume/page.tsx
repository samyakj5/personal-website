import { SiteHeader } from "@/components/site-header";

const resumePdfHref = "/Samyak_Jain_Resume.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-black [--page-bg:#f7f3ea] [font-family:var(--font-display)]">
      <SiteHeader active="resume" />

      <section className="px-6 pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[14pt] font-light tracking-[-0.02em] text-black/78">
            resume
          </h1>
          <a
            href={resumePdfHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-black/10 px-3 py-1 text-[9.5pt] font-light tracking-[0.04em] text-[#67625b] transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none"
          >
            open pdf
          </a>
          <div className="mt-8 overflow-hidden rounded-[1rem] border border-black/10 bg-white/55">
            <iframe
              src={resumePdfHref}
              title="Samyak Jain resume"
              className="h-[75svh] w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
