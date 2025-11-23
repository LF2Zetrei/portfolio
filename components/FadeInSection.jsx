"use client"

import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children, direction = "left" }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? "show" : ""} ${direction === "right" ? "from-right" : "from-left"}`}
    >
      {children}
    </div>
  );
}
