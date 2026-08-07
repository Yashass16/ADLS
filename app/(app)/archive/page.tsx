import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patient Archive – ALDS",
  description: "Browse and manage all past diagnostic reports and screening records.",
};

const archiveRows = [
  {
    id: "#PT-88219",
    date: "Oct 24, 2023",
    type: "High-Res CT",
    initials: "DS",
    clinician: "Dr. Sarah Chen",
    status: "Verified",
    statusStyle: "text-green-700",
    dotStyle: "bg-green-600",
  },
  {
    id: "#PT-88224",
    date: "Oct 24, 2023",
    type: "MRI Spine",
    initials: "MR",
    clinician: "Dr. Marcus Reed",
    status: "In Review",
    statusStyle: "text-[#005db6]",
    dotStyle: "bg-[#005db6]",
  },
  {
    id: "#PT-88102",
    date: "Oct 22, 2023",
    type: "X-Ray Chest",
    initials: "LA",
    clinician: "Dr. Lisa Adams",
    status: "Archived",
    statusStyle: "text-[#586064]",
    dotStyle: "bg-[#737c7f]",
  },
  {
    id: "#PT-87995",
    date: "Oct 21, 2023",
    type: "Ultrasound",
    initials: "SC",
    clinician: "Dr. Sarah Chen",
    status: "Verified",
    statusStyle: "text-green-700",
    dotStyle: "bg-green-600",
  },
];

export default function ArchivePage() {
  return (
    <div className="p-10 min-h-[calc(100vh-64px)] bg-[#f8f9fa]">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <nav className="flex items-center gap-2 mb-2 text-[#586064]">
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Archive</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#005db6]">Reports Registry</span>
          </nav>
          <h1
            className="font-extrabold text-4xl text-[#2b3437] tracking-tight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Past Reports
          </h1>
        </div>

        {/* Metric Cards */}
        <div className="flex gap-4">
          <div className="bg-white editorial-shadow px-6 py-4 rounded-xl flex flex-col min-w-[160px]">
            <span className="text-[#586064] text-[10px] font-bold uppercase tracking-widest mb-1">Total Scans</span>
            <span
              className="text-3xl font-bold text-[#2b3437]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              1,284
            </span>
            <div className="mt-2 flex items-center gap-1 text-green-600">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="text-[10px] font-bold">12% growth</span>
            </div>
          </div>
          <div className="bg-white editorial-shadow px-6 py-4 rounded-xl flex flex-col min-w-[160px]">
            <span className="text-[#586064] text-[10px] font-bold uppercase tracking-widest mb-1">Pending Review</span>
            <span
              className="text-3xl font-bold text-[#005db6]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              42
            </span>
            <div className="mt-2 flex items-center gap-1 text-[#4c5c78]">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span className="text-[10px] font-bold">Avg. 4h wait</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white editorial-shadow rounded-2xl p-4 mb-8 flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[300px]">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#586064]">search</span>
          <input
            className="w-full bg-[#f1f4f6] rounded-lg pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#c0d5ff] transition-all text-[#2b3437] placeholder:text-[#abb3b7]"
            placeholder="Search by Patient ID or Name..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#f1f4f6] px-4 py-3 rounded-lg text-sm font-medium text-[#586064] hover:bg-[#e3e9ec] transition-colors">
            <span className="material-symbols-outlined text-lg">calendar_today</span>
            Date Range
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button className="flex items-center gap-2 bg-[#f1f4f6] px-4 py-3 rounded-lg text-sm font-medium text-[#586064] hover:bg-[#e3e9ec] transition-colors">
            <span className="material-symbols-outlined text-lg">filter_list</span>
            Status
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button className="clinical-gradient text-[#f6f7ff] px-6 py-3 rounded-lg text-sm font-bold tracking-tight transition-all active:scale-95 shadow-sm">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Clinical Ledger Table */}
      <div className="bg-white editorial-shadow rounded-2xl overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#f1f4f6]">
              {["Patient ID", "Screening Date", "Scan Type", "Clinician", "Status", "Actions"].map((h, i) => (
                <th
                  key={h}
                  className={`px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#586064] ${i === 5 ? "text-right" : ""}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eaeff1]">
            {archiveRows.map((row) => (
              <tr key={row.id} className="hover:bg-[#f8f9fa]/50 transition-colors">
                <td className="px-6 py-5">
                  <span className="font-mono text-xs font-bold text-[#2b3437] tracking-tighter">
                    {row.id}
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-[#4c5c78]">{row.date}</td>
                <td className="px-6 py-5">
                  <span className="bg-[#d6e3ff] text-[#42526e] px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    {row.type}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#e3e9ec] flex items-center justify-center text-[10px] font-bold text-[#005db6]">
                      {row.initials}
                    </div>
                    <span className="text-sm font-medium text-[#2b3437]">{row.clinician}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className={`flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-widest ${row.statusStyle}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${row.dotStyle}`} />
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <Link
                      href="/reports"
                      className="p-2 hover:bg-[#d6e3ff] text-[#005db6] rounded-lg transition-colors"
                      title="View Report"
                    >
                      <span className="material-symbols-outlined text-lg">visibility</span>
                    </Link>
                    <button
                      className="p-2 hover:bg-[#d6e3ff] text-[#005db6] rounded-lg transition-colors"
                      title="Download PDF"
                    >
                      <span className="material-symbols-outlined text-lg">download</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-[#f1f4f6]/30 px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-[#586064] font-medium">
            Showing <span className="text-[#2b3437]">1-4</span> of 1,284 results
          </span>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#e3e9ec] text-[#586064] transition-colors">
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#005db6] text-white font-bold text-xs">
              1
            </button>
            {[2, 3].map((page) => (
              <button
                key={page}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#e3e9ec] text-[#586064] font-bold text-xs"
              >
                {page}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#e3e9ec] text-[#586064] transition-colors">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-8 right-8">
        <Link
          href="/upload"
          className="flex items-center gap-3 clinical-gradient text-[#f6f7ff] px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 group"
        >
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
          <span className="font-bold text-sm tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
            Generate New Report
          </span>
        </Link>
      </div>
    </div>
  );
}
