"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollY, setSrcollY] = useState(0);
  const [lastValue, setLastValue] = useState(0);

  useEffect(() => {
    const lastValueScrolledY = document.body.offsetHeight - window.innerHeight;

    setLastValue(lastValueScrolledY);
    document.addEventListener("scroll", () => {
      const scrollValue = window.scrollY;
      setSrcollY(scrollValue);
    });
  }, [scrollY]);
  return (
    <div className="relative">
      <progress
        max={lastValue}
        value={scrollY}
        className="w-full h-[6px] mb-3 fixed top-0 z-20"
      >
        50%
      </progress>
    </div>
  );
}
