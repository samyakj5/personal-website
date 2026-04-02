"use client";

import { useEffect, useState, type ReactNode } from "react";

type Section = {
  id: "triangle" | "square" | "circle";
  label: string;
  preview: string;
  shapeClassName: string;
  icon: ReactNode;
};

const iconClassName = "h-8 w-8 fill-current";
const panelTransitionMs = 980;

const homeIcon = (
  <svg
    aria-hidden="true"
    className={iconClassName}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M112 32H54.627L128 105.373L201.373 32H144V0H256V112H224V54.627L150.627 128L224 201.373V144H256V256H144V224H201.373L128 150.627L54.627 224H112V256H0V144H32V201.373L105.373 128L32 54.627V112H0V0H112V32Z" />
  </svg>
);

const sections: Section[] = [
  {
    id: "triangle",
    label: "Triangle",
    preview: "About",
    shapeClassName: "[clip-path:polygon(50%_0%,0%_100%,100%_100%)]",
    icon: (
      <svg
        aria-hidden="true"
        className={iconClassName}
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M144 256H27.598L144 139.598V256ZM256 207.5L200 256V56H0L48 0H256V207.5ZM0 204.402V112H92.402L0 204.402Z" />
      </svg>
    ),
  },
  {
    id: "square",
    label: "Square",
    preview: "Projects",
    shapeClassName: "rounded-[1rem]",
    icon: (
      <svg
        aria-hidden="true"
        className={iconClassName}
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M128.005 191.173C128.448 156.208 156.93 128 192 128V64H128C128 99.346 99.346 128 64 128V192H128V191.173ZM192 256H64C28.654 256 0 227.346 0 192V64H64V0H192C227.346 0 256 28.654 256 64V192H192V256Z" />
      </svg>
    ),
  },
  {
    id: "circle",
    label: "Circle",
    preview: "Resume",
    shapeClassName: "rounded-full",
    icon: (
      <svg
        aria-hidden="true"
        className={iconClassName}
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M92 72C142.81 72 184 113.19 184 164C184 214.81 142.81 256 92 256C41.19 256 0 214.81 0 164C0 113.19 41.19 72 92 72ZM256 0V256H184V72H0V0H256Z" />
      </svg>
    ),
  },
];

type ShapeLinksProps = {
  children: ReactNode;
};

function scrollToTop() {
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

  window.scrollTo({ top: 0, behavior });
}

export function ShapeLinks({ children }: ShapeLinksProps) {
  const [activeSectionId, setActiveSectionId] = useState<Section["id"] | null>(
    null,
  );
  const [renderedSectionId, setRenderedSectionId] = useState<
    Section["id"] | null
  >(null);
  const activeSection = sections.find(({ id }) => id === activeSectionId) ?? null;
  const renderedSection =
    sections.find(({ id }) => id === renderedSectionId) ?? null;
  const hasActiveSection = activeSection !== null;

  useEffect(() => {
    if (activeSectionId || renderedSectionId === null) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setRenderedSectionId(null);
    }, panelTransitionMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeSectionId, renderedSectionId]);

  const handleSelect = (sectionId: Section["id"]) => {
    setRenderedSectionId(sectionId);
    setActiveSectionId(sectionId);
    scrollToTop();
  };

  const handleReset = () => {
    setActiveSectionId(null);
    scrollToTop();
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white px-4 sm:px-6 md:px-8">
      <nav
        aria-label="Site sections"
        className="fixed right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4 sm:right-8 sm:gap-5"
      >
        <button
          type="button"
          onClick={handleReset}
          aria-label="Go to Home"
          aria-pressed={!hasActiveSection}
          className={`group relative flex h-12 w-12 items-center justify-center transition-colors duration-200 ease-out focus-visible:outline-none ${
            hasActiveSection
              ? "text-[#a3a3a3] hover:text-[#7d7d7d] focus-visible:text-[#7d7d7d]"
              : "text-black"
          }`}
        >
          <span
            className={`pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#7d7d7d] transition-opacity duration-200 ease-out ${
              hasActiveSection
                ? "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                : "opacity-100"
            }`}
          >
            Home
          </span>
          {homeIcon}
        </button>

        {sections.map((section) => {
          const isActive = activeSectionId === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSelect(section.id)}
              aria-label={`Show ${section.preview}`}
              aria-pressed={isActive}
              className={`group relative flex h-12 w-12 items-center justify-center transition-colors duration-200 ease-out focus-visible:outline-none ${
                isActive
                  ? "text-black"
                  : "text-[#a3a3a3] hover:text-[#7d7d7d] focus-visible:text-[#7d7d7d]"
              }`}
            >
              <span
                className={`pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#7d7d7d] transition-opacity duration-200 ease-out ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                }`}
              >
                {section.preview}
              </span>
              {section.icon}
            </button>
          );
        })}
      </nav>

      <div
        aria-hidden={!hasActiveSection}
        className={`overflow-hidden transform-gpu will-change-[max-height,opacity] transition-[max-height,opacity] duration-[980ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          hasActiveSection
            ? "max-h-[100svh] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <section
          aria-labelledby={
            activeSection ? `${activeSection.id}-title` : undefined
          }
          className="box-border flex h-[100svh] items-center justify-center py-8 pr-16 sm:pr-20"
        >
          {renderedSection ? (
            <div
              className={`flex flex-1 transform-gpu flex-col items-center justify-center gap-4 will-change-[transform,opacity,filter] transition-[transform,opacity,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none sm:gap-6 ${
                hasActiveSection
                  ? "translate-y-0 scale-100 opacity-100 blur-0"
                  : "translate-y-8 scale-[0.985] opacity-0 blur-[3px]"
              }`}
            >
              <p className="text-center text-[0.68rem] font-medium uppercase tracking-[0.32em] text-black/55">
                {renderedSection.label}
              </p>
              <div
                aria-hidden="true"
                className={`h-28 w-28 bg-black sm:h-32 sm:w-32 ${renderedSection.shapeClassName}`}
              />
              <h2
                id={`${renderedSection.id}-title`}
                className="[font-family:var(--font-display)] text-center text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.08em] text-black"
              >
                {renderedSection.preview}
              </h2>
            </div>
          ) : null}
        </section>
      </div>

      <div
        className={`transform-gpu will-change-[transform,opacity,filter] transition-[transform,opacity,filter] delay-75 duration-[980ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          hasActiveSection
            ? "translate-y-16 opacity-0 blur-[3px] sm:translate-y-24"
            : "translate-y-0 opacity-100 blur-0"
        }`}
      >
        {children}
      </div>
    </main>
  );
}
