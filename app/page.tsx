import Image from "next/image";
import katex from "katex";
import entanglementPng from "@/components/entanglement.png";
import "katex/dist/katex.min.css";
import psetPng from "@/components/pset.png";

const githubHref = "https://github.com/samyakj5";
const linkedinHref = "https://www.linkedin.com/in/samyak-jain-uiuc/";
const projects = [
  {
    description:
      "A clean proof-based writeup for MATH 347H, focused on presenting arguments clearly and compactly.",
    image: psetPng,
    imageAlt: "Preview of a MATH 347H homework writeup.",
    title: "MATH 347H writeup",
  },
  {
    description:
      "An entanglement-focused PDF rendered into a project preview image for the site.",
    image: entanglementPng,
    imageAlt: "Preview image generated from the entanglement PDF.",
    title: "Entanglement",
  },
] as const;
const coursework = [
  "quantum information",
  "particle physics",
  "measurement systems",
  "hardware + controls",
] as const;

export default function Home() {
  return (
    <main className="bg-[#f7f3ea] text-black [--page-bg:#f7f3ea] [font-family:var(--font-display)]">
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center bg-[#f7f3ea]/88 px-6 py-4 sm:py-5">
        <div className="flex items-center gap-3 text-[#67625b]">
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center p-1 transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none"
          >
            <GitHubIcon />
          </a>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center p-1 transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none"
          >
            <LinkedInIcon />
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="z-10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1 text-[14pt] font-light tracking-[-0.02em]">
            <IdentityFormula
              symbolClassName="text-black/28"
              curiousClassName="text-black/45"
            />
          </div>

          <p className="max-w-xl px-4 text-center text-[10pt] font-light leading-[1.5] tracking-[0.02em] text-black/45">
            quantum hardware · prev. quantum info, particle physics
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-16 border-t border-black/8 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-[10pt] font-light tracking-[0.22em] text-black/38">
            projects
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-4 rounded-[1rem] border border-black/8 bg-white/40 p-4"
              >
                <div className="rounded-[0.85rem] border border-black/10 bg-[#efe9dc] p-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[0.65rem] bg-white/80">
                    <Image
                      fill
                      src={project.image}
                      alt={project.imageAlt}
                      className="object-contain object-top"
                      sizes="(min-width: 768px) 15rem, 100vw"
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

      <section
        id="coursework"
        className="scroll-mt-16 border-t border-black/8 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-[10pt] font-light tracking-[0.22em] text-black/38">
            coursework
          </p>
          <ul className="mt-8 flex flex-wrap gap-3 text-[10pt] font-light tracking-[0.02em] text-black/52">
            {coursework.map((item) => (
              <li
                key={item}
                className="rounded-full border border-black/10 px-4 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

type MathSymbolProps = {
  className?: string;
  latex: string;
};

type IdentityFormulaProps = {
  curiousClassName?: string;
  symbolClassName?: string;
};

function MathSymbol({ className, latex }: MathSymbolProps) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(latex, {
          displayMode: false,
          throwOnError: false,
        }),
      }}
    />
  );
}

function IdentityFormula({
  curiousClassName,
  symbolClassName,
}: IdentityFormulaProps) {
  return (
    <>
      <MathSymbol latex={String.raw`\langle`} className={symbolClassName} />
      <span className="mx-1">samyak jain</span>
      <MathSymbol latex={String.raw`\mid`} className={symbolClassName} />
      <span className={`mx-1 ${curiousClassName ?? ""}`.trim()}>
        curious
      </span>
      <MathSymbol latex={String.raw`\rangle`} className={symbolClassName} />
    </>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 382 382"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056V329.844zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654c0 5.106-4.14 9.246-9.246 9.246H286.73c-5.106 0-9.246-4.14-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079c0 5.106-4.139 9.246-9.246 9.246h-44.426c-5.106 0-9.246-4.14-9.246-9.246V149.593c0-5.106 4.14-9.246 9.246-9.246h44.426c5.106 0 9.246 4.14 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
      />
    </svg>
  );
}
