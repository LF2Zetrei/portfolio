'use client';
import MetaballBackground from "@/components/MetaBallBackground";

export default function MetaballSection() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <MetaballBackground
        speed={0.5}
        bgColor="0.78, 0.76, 0.80"
        gradientColor="0.76, 0.71, 0.50"
      />
    </div>
  );
}