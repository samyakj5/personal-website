import type { ReactNode } from "react";
import Link from "next/link";

type Shape = {
  href: string;
  label: string;
  preview: string;
  icon: ReactNode;
};

const iconClassName = "h-8 w-8 fill-current";

const shapes: Shape[] = [
  {
    href: "/triangle",
    label: "Triangle",
    preview: "About",
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
    href: "/square",
    label: "Square",
    preview: "Projects",
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
    href: "/circle",
    label: "Circle",
    preview: "Resume",
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
  {
    href: "/star",
    label: "Star",
    preview: "Contact",
    icon: (
      <svg
        aria-hidden="true"
        className={iconClassName}
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M112 32H54.627L128 105.373L201.373 32H144V0H256V112H224V54.627L150.627 128L224 201.373V144H256V256H144V224H201.373L128 150.627L54.627 224H112V256H0V144H32V201.373L105.373 128L32 54.627V112H0V0H112V32Z" />
      </svg>
    ),
  },
];

export function ShapeLinks() {
  return (
    <nav
      aria-label="Shape pages"
      className="absolute right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4 text-[#a3a3a3] sm:right-8 sm:gap-5"
    >
      {shapes.map((shape) => (
        <Link
          key={shape.href}
          href={shape.href}
          className="group relative flex h-12 w-12 items-center justify-center transition-colors duration-200 ease-out hover:text-[#7d7d7d] focus-visible:text-[#7d7d7d] focus-visible:outline-none"
          aria-label={shape.label}
        >
          <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#7d7d7d] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
            {shape.preview}
          </span>
          {shape.icon}
        </Link>
      ))}
    </nav>
  );
}
