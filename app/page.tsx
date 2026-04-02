const githubHref = "https://github.com/samyakj5";
const linkedinHref = "https://www.linkedin.com/in/samyak-jain-uiuc/";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="-translate-y-8 flex flex-col items-center gap-5 text-black">
        <p className="[font-family:var(--font-display)] text-[14pt] tracking-[-0.02em]">
          samyak jain
        </p>
        <div className="flex items-center gap-4">
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-opacity duration-200 hover:opacity-60 focus-visible:opacity-60 focus-visible:outline-none"
          >
            <GitHubIcon />
          </a>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity duration-200 hover:opacity-60 focus-visible:opacity-60 focus-visible:outline-none"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </main>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18c-4 1.2-4-2-5.5-2.5M14.5 20v-3.2c0-1 .1-1.5-.5-2 .9-.1 1.8-.5 2.4-1.1.9-.9 1.3-2.3 1.3-4 0-.5-.1-1.1-.3-1.6.2-.6.2-1.4-.1-2.4 0 0-.8-.3-2.5.9A8.4 8.4 0 0 0 12 6a8.4 8.4 0 0 0-2.8.6c-1.7-1.2-2.5-.9-2.5-.9-.3 1-.3 1.8-.1 2.4-.2.5-.3 1.1-.3 1.6 0 1.7.4 3.1 1.3 4 .6.6 1.5 1 2.4 1.1-.6.5-.6 1-.6 2V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10v7M7 7.5v.05M11 10v7M11 12.5c0-1.7 1.1-2.5 2.4-2.5 1.7 0 2.6 1.1 2.6 3.1V17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
      <rect
        x="3.75"
        y="3.75"
        width="16.5"
        height="16.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.35"
      />
    </svg>
  );
}
