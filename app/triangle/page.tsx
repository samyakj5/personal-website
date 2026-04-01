import { ShapePage } from "@/components/shape-page";

export default function TrianglePage() {
  return (
    <ShapePage
      title="Triangle"
      shapeClassName="[clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
    />
  );
}
