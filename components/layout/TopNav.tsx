"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/upload", label: "Upload" },
  { href: "/results", label: "Results" },
  { href: "/review", label: "Review" },
  { href: "/reports", label: "Reports" },
  { href: "/admin", label: "Admin" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-white flex items-center justify-between px-8 h-16 border-b border-[#f1f4f6]">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-[#005db6]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          ALDS
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight transition-colors ${
                  isActive
                    ? "text-[#005db6] border-b-2 border-[#005db6] pb-[18px]"
                    : "text-[#586064] hover:text-[#005db6]"
                }`}
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-[#586064] hover:bg-[#f1f4f6] rounded-full transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-[#586064] hover:bg-[#f1f4f6] rounded-full transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-8 rounded-full bg-[#e3e9ec] overflow-hidden border border-[#abb3b7]/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#586064] text-base">person</span>
        </div>
      </div>
    </header>
  );
}
