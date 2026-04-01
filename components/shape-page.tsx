import Link from "next/link";

type ShapePageProps = {
  title: string;
  shapeClassName: string;
};

export function ShapePage({ title, shapeClassName }: ShapePageProps) {
  return (
    <main className="min-h-screen bg-white px-6 py-8 sm:px-8">
      <div className="flex min-h-screen flex-col justify-between">
        <Link
          href="/"
          className="w-fit text-sm uppercase tracking-[0.22em] text-black/55 transition-colors duration-200 hover:text-black"
        >
          Back
        </Link>
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <div
            aria-hidden="true"
            className={`h-28 w-28 bg-black sm:h-32 sm:w-32 ${shapeClassName}`}
          />
          <h1 className="[font-family:var(--font-display)] text-center text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.08em] text-black">
            {title}
          </h1>
        </div>
      </div>
    </main>
  );
}
