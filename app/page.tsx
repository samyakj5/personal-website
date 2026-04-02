import { ShapeLinks } from "@/components/shape-links";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-4 sm:px-6 md:px-8">
      <div className="relative flex min-h-screen items-end pb-3 sm:pb-4">
        <h1 className="[font-family:var(--font-display)] relative z-10 w-full text-left text-[clamp(4.75rem,14vw,14rem)] leading-[0.78] tracking-[-0.08em] text-[#a3a3a3]">
          <span className="block md:inline">Samyak</span>{" "}
          <span className="block md:inline">Jain</span>
        </h1>
      </div>
      <ShapeLinks />
    </main>
  );
}
