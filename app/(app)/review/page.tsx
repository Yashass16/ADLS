import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinical Review Canvas – ALDS",
  description: "Review AI-generated findings and add clinical annotations before generating the final report.",
};

const findings = [
  {
    name: "Pneumonia",
    risk: "High Risk",
    riskBg: "bg-[#fe8983] text-[#752121]",
    confidence: "94.2%",
    confidenceColor: "text-[#005db6]",
    desc: "Opacification detected in the right lower lobe consistent with focal consolidate. Air bronchograms present.",
  },
  {
    name: "Pleural Effusion",
    risk: "Secondary",
    riskBg: "bg-[#d6e3ff] text-[#42526e]",
    confidence: "78.5%",
    confidenceColor: "text-[#4f607c]",
    desc: "Blunting of the right costophrenic angle suggesting minor fluid accumulation. Lateral view confirms layering.",
  },
  {
    name: "Lung Infection",
    risk: "Systemic",
    riskBg: "bg-[#d9d7f8] text-[#4b4a65]",
    confidence: "62.1%",
    confidenceColor: "text-[#5d5c78]",
    desc: "Generalized interstitial thickening. Differential includes viral etiology or early-stage atypical infection.",
  },
];

export default function ReviewPage() {
  return (
    <div className="p-8 min-h-[calc(100vh-64px)] bg-[#f1f4f6] pb-32">
      {/* Header */}
      <header className="mb-10">
        <h1
          className="text-3xl font-extrabold tracking-tight text-[#2b3437]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Clinical Review Canvas
        </h1>
        <p className="text-[#586064] text-sm mt-1">
          Patient ID:{" "}
          <span className="font-semibold">ALDS-2024-0892</span> • Chest X-Ray
          PA/Lateral • Scan Time: 14:22:10 UTC
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Imaging */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[#0c0f10] rounded-xl overflow-hidden aspect-square relative flex items-center justify-center border border-[#abb3b7]/10 shadow-lg">
            {/* Simulated X-ray */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] via-[#0c1820] to-[#0c0f10]" />
            <div className="absolute inset-0 opacity-25">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-full bg-[#586064] blur-3xl" />
              <div className="absolute top-1/3 left-1/4 w-32 h-48 rounded-full bg-[#9b9d9e] blur-2xl" />
              <div className="absolute top-1/3 right-1/4 w-32 h-48 rounded-full bg-[#9b9d9e] blur-2xl" />
            </div>
            <span className="material-symbols-outlined text-[#586064] opacity-30 relative z-10" style={{ fontSize: "120px" }}>
              radiology
            </span>

            {/* Controls */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                <span className="material-symbols-outlined text-sm text-[#005db6]">zoom_in</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#2b3437]">150%</span>
              </div>
              <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                <span className="material-symbols-outlined text-sm text-[#005db6]">contrast</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#2b3437]">Auto-Levels</span>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-3 gap-3">
            {/* Lateral view */}
            <div className="h-24 bg-white rounded-lg border border-[#abb3b7]/10 overflow-hidden cursor-pointer hover:ring-2 ring-[#005db6] transition-all flex items-center justify-center bg-[#0c0f10]">
              <span className="material-symbols-outlined text-[#586064] opacity-40 text-4xl">radiology</span>
            </div>
            {/* Heatmap */}
            <div className="h-24 rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-[#005db6] transition-all flex items-center justify-center"
              style={{ background: "radial-gradient(ellipse at center, rgba(239,68,68,0.6) 0%, rgba(234,179,8,0.4) 40%, rgba(34,197,94,0.2) 80%)" }}
            >
              <span className="material-symbols-outlined text-white opacity-70 text-3xl">thermostat</span>
            </div>
            {/* Upload More */}
            <div className="h-24 bg-[#f1f4f6] flex flex-col items-center justify-center rounded-lg border border-dashed border-[#abb3b7]/40 text-[#586064] hover:bg-[#e3e9ec] transition-colors cursor-pointer">
              <span className="material-symbols-outlined">add</span>
              <span className="text-[10px] font-bold tracking-tighter uppercase mt-1">Upload More</span>
            </div>
          </div>
        </div>

        {/* Right: Findings Stack */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {findings.map((finding) => (
            <section
              key={finding.name}
              className="bg-white rounded-xl p-6 border border-[#abb3b7]/10 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className="text-lg font-bold text-[#2b3437]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {finding.name}
                    </h3>
                    <span
                      className={`${finding.riskBg} text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider`}
                    >
                      {finding.risk}
                    </span>
                  </div>
                  <p className="text-[#586064] text-xs leading-relaxed max-w-md">
                    {finding.desc}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className="text-[10px] text-[#586064] block uppercase tracking-widest mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Confidence Score
                  </span>
                  <span
                    className={`text-2xl font-extrabold ${finding.confidenceColor}`}
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {finding.confidence}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#586064] mb-2">
                  Clinical Notes
                </label>
                <textarea
                  className="w-full bg-[#f1f4f6] border-b-2 border-[#abb3b7]/20 focus:border-[#005db6] focus:outline-none text-sm py-3 px-4 rounded-t min-h-[80px] custom-scrollbar resize-none"
                  placeholder="Add diagnosis refinements..."
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="px-5 py-2 bg-[#4f607c] text-white text-xs font-bold rounded hover:bg-[#30405b] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">edit</span>
                    Edit
                  </button>
                  <button className="px-5 py-2 bg-[#e3e9ec] text-[#586064] text-xs font-bold rounded hover:bg-[#d1dce0] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">close</span>
                    Reject
                  </button>
                </div>
                <Link
                  href="/reports"
                  className="px-8 py-2.5 clinical-gradient text-white text-xs font-bold rounded-lg shadow-md hover:opacity-90 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Accept Finding
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-64 right-0 h-20 bg-white/90 backdrop-blur-md border-t border-[#f1f4f6] flex items-center justify-between px-12 z-40">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#005db6]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2b3437]">
              3 Findings Reviewed
            </span>
          </div>
          <div className="h-4 w-[1px] bg-[#e3e9ec]" />
          <div className="flex items-center gap-2 text-[#586064]">
            <span className="material-symbols-outlined text-sm">history</span>
            <span className="text-xs">Last auto-save: 2 min ago</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-[#005db6] text-[#005db6] text-xs font-bold rounded hover:bg-[#d6e3ff] transition-colors">
            Save Draft
          </button>
          <Link
            href="/reports"
            className="px-10 py-2.5 clinical-gradient text-white text-xs font-bold rounded shadow-lg transition-all flex items-center gap-2"
          >
            Generate Report
          </Link>
        </div>
      </footer>
    </div>
  );
}
