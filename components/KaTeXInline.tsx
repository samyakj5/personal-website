import katex from "katex";
import "katex/dist/katex.min.css";

export default function KaTeXInline({
  latex,
  className,
}: {
  latex: string;
  className?: string;
}) {
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
