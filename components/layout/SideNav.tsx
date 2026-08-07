"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/upload", label: "New Scan", icon: "add_circle" },
  { href: "/results", label: "Analysis", icon: "analytics" },
  { href: "/review", label: "Clinical Review", icon: "fact_check" },
  { href: "/archive", label: "Archive", icon: "inventory_2" },
  { href: "/admin", label: "User Management", icon: "manage_accounts" },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-[#f8f9fa] flex flex-col p-4 gap-2 border-r border-[#f1f4f6]">
      {/* Unit Header */}
      <div className="mb-6 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#005db6] flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm">medical_services</span>
          </div>
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest text-[#005db6]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Screening Unit
            </div>
            <div className="text-[10px] text-[#586064]">Pulmonary Dept</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                isActive
                  ? "bg-white text-[#005db6] shadow-sm"
                  : "text-[#586064] hover:bg-[#f1f4f6] hover:pl-4"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Area */}
      <div className="mt-auto pt-4 border-t border-[#f1f4f6] space-y-1">
        <button className="w-full bg-[#005db6] text-white py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4 hover:bg-[#0051a1] transition-colors">
          Emergency Review
        </button>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-[#586064] hover:text-[#005db6] text-[10px] font-semibold uppercase tracking-widest transition-colors"
        >
          <span className="material-symbols-outlined text-lg">help</span>
          <span>Help Center</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-[#586064] hover:text-[#005db6] text-[10px] font-semibold uppercase tracking-widest transition-colors"
        >
          <span className="material-symbols-outlined text-lg">description</span>
          <span>Documentation</span>
        </Link>
      </div>
    </aside>
  );
}
