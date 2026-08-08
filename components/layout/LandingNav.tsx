"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const navItems = [
  { id: "platform", label: "Platform" },
  { id: "features", label: "Features" },
  { id: "workflow", label: "Workflow" },
  { id: "security", label: "Security" },
];

type Indicator = {
  left: number;
  width: number;
};

export default function LandingNav() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [activeId, setActiveId] = useState("platform");
  const [indicator, setIndicator] = useState<Indicator>({ left: 0, width: 0 });

  const activeIndex = useMemo(
    () => navItems.findIndex((item) => item.id === activeId),
    [activeId],
  );

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (navItems.some((item) => item.id === hash)) {
        setActiveId(hash);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-15% 0px -55% 0px",
      },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  useEffect(() => {
    const activeItem = navItems[activeIndex >= 0 ? activeIndex : 0];
    const activeLink = activeItem ? itemRefs.current[activeItem.id] : null;
    const navBox = navRef.current?.getBoundingClientRect();

    if (!activeLink || !navBox) {
      return;
    }

    const linkBox = activeLink.getBoundingClientRect();
    setIndicator({
      left: linkBox.left - navBox.left,
      width: linkBox.width,
    });
  }, [activeId, activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      const activeItem = navItems[activeIndex >= 0 ? activeIndex : 0];
      const activeLink = activeItem ? itemRefs.current[activeItem.id] : null;
      const navBox = navRef.current?.getBoundingClientRect();

      if (!activeLink || !navBox) {
        return;
      }

      const linkBox = activeLink.getBoundingClientRect();
      setIndicator({
        left: linkBox.left - navBox.left,
        width: linkBox.width,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <div className="hidden md:flex gap-10 relative items-end" ref={navRef}>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          ref={(element) => {
            itemRefs.current[item.id] = element;
          }}
          className={`font-bold text-sm tracking-tight transition-colors pb-1 ${
            activeId === item.id ? "text-[#005db6]" : "text-[#586064] hover:text-[#005db6]"
          }`}
          style={{ fontFamily: "Manrope, sans-serif" }}
          onClick={() => setActiveId(item.id)}
        >
          {item.label}
        </a>
      ))}
      <span
        aria-hidden="true"
        className="absolute -bottom-1 h-0.5 rounded-full bg-[#005db6] transition-all duration-300 ease-out"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: indicator.width ? 1 : 0,
        }}
      />
      <Link
        href="/login"
        className="ml-6 text-sm font-bold tracking-tight text-[#586064] hover:text-[#2b3437] transition-colors"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Login
      </Link>
    </div>
  );
}