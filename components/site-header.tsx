import Link from "next/link";
import { resumePdfHref } from "@/lib/site-paths";

type NavId = "about" | "projects" | "thoughts" | "resume";

const navItems: Array<{ href: string; id: NavId; label: string }> = [
  { href: "/", id: "about", label: "about" },
  { href: "/projects", id: "projects", label: "projects" },
  { href: "/thoughts", id: "thoughts", label: "thoughts" },
  { href: resumePdfHref, id: "resume", label: "resume" },
];

type SiteHeaderProps = {
  active?: NavId;
};

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center bg-[#f7f3ea]/88 px-6 py-4 sm:py-5">
      <nav className="flex items-center gap-2">
        {navItems.map((item) => {
          const className = `rounded-full border px-3 py-1 text-[9.5pt] font-light tracking-[0.04em] transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none ${
            active === item.id
              ? "border-black/14 bg-black/5 text-black/72"
              : "border-black/10 text-[#67625b]"
          }`;

          if (item.id === "resume") {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {item.label}
              </a>
            );
          }

          return (
            <Link key={item.id} href={item.href} className={className}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
