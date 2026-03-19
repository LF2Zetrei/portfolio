'use client';
import MetaballBackground from "@/components/MetaBallBackground";

export default function MetaBallSection() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <MetaballBackground
        speed={0.5}
        bgColor="0.93, 0.91, 0.90"
        gradientColor="0.78, 0.76, 0.80"
      />
    </div>
  );
}