import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Summary Report – ALDS",
  description: "Review and generate the final diagnostic report for clinical sign-off.",
};

export default function ReportsPage() {
  return (
    <div className="p-10 min-h-[calc(100vh-64px)]">
      {/* Header */}
      <header className="flex justify-between items-end mb-12">
        <div>
          <nav className="flex items-center gap-2 text-[#586064] text-xs mb-2 tracking-wide uppercase font-semibold">
            <span>Archive</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span>Patient Reports</span>
          </nav>
          <h1
            className="text-4xl font-extrabold tracking-tight text-[#2b3437]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Diagnostic Summary Report
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#005db6] text-[#005db6] font-semibold text-sm hover:bg-[#d6e3ff] transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            Download PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg clinical-gradient text-[#f6f7ff] font-semibold text-sm shadow-md hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg">verified</span>
            Generate Final Report
          </button>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left: Patient Info + X-Ray */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* X-ray Thumbnail */}
          <div className="bg-[#0c0f10] rounded-xl p-1 overflow-hidden group relative">
            <div className="w-full aspect-square rounded-lg overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-[#1a2a3a] via-[#0c1820] to-[#0c0f10]">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-full bg-[#586064] blur-3xl" />
              </div>
              <span className="material-symbols-outlined text-[#586064] opacity-30 relative z-10" style={{ fontSize: "100px" }}>
                radiology
              </span>
              <div className="absolute bottom-4 left-4 glass-panel px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#2b3437]">
                LATERAL VIEW • SCAN ID: 88291
              </div>
            </div>
          </div>

          {/* Patient Info */}
          <section className="bg-white rounded-xl p-8 border-b-2 border-[#f1f4f6]">
            <h3
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#586064] mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Patient Identification
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase font-bold text-[#737c7f] tracking-wider mb-1">Full Name</p>
                <p
                  className="text-lg font-bold text-[#2b3437] tracking-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Elias Thorne-Vance
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#737c7f] tracking-wider mb-1">Date of Birth</p>
                  <p className="text-sm font-semibold text-[#2b3437]">14 Oct 1978 (45Y)</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#737c7f] tracking-wider mb-1">Gender</p>
                  <p className="text-sm font-semibold text-[#2b3437]">Male</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#737c7f] tracking-wider mb-1">Referring Physician</p>
                <p className="text-sm font-semibold text-[#2b3437]">Dr. Sarah Jenkins, MD</p>
              </div>
              <div className="pt-4 border-t border-[#eaeff1] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] uppercase font-bold text-[#586064] tracking-widest">Records Verified</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Findings + Impression */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Confirmed Findings */}
          <section className="bg-[#f1f4f6] rounded-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#586064]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Confirmed Clinical Findings
              </h3>
              <span className="material-symbols-outlined text-[#005db6]">analytics</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Mild Bronchiectasis", "Right Upper Lobe Density", "Pleural Thickening", "Hilar Lymphadenopathy"].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 px-4 py-2 bg-[#d6e3ff] text-[#00519f] rounded-lg"
                >
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span className="text-xs font-bold uppercase tracking-wider">{f}</span>
                </div>
              ))}
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#005db6] rounded-lg border border-[#abb3b7]/20 hover:bg-[#e3e9ec] transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>
                <span className="text-xs font-bold uppercase tracking-wider">Add Finding</span>
              </button>
            </div>
          </section>

          {/* Clinician's Impression */}
          <section className="bg-white rounded-xl p-8 border border-[#e3e9ec]">
            <div className="flex items-center justify-between mb-6">
              <h3
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#586064]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Clinician&apos;s Impression &amp; Notes
              </h3>
              <div className="flex gap-2">
                {["format_bold", "format_italic", "list"].map((icon) => (
                  <button key={icon} className="p-1.5 rounded bg-[#eaeff1] hover:bg-[#e3e9ec]">
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
            <textarea
              className="w-full h-80 bg-transparent border-none focus:outline-none text-[#2b3437] leading-relaxed text-sm resize-none"
              defaultValue={`LUNGS: The lungs are clear. There is no focal consolidation, pleural effusion, or pneumothorax. A 4mm nodular density is noted in the right upper lobe, consistent with previous scans, appearing stable. No suspicious pulmonary masses are identified.

HEART AND MEDIASTINUM: The cardiomediastinal silhouette is within normal limits. The thoracic aorta is non-dilated and shows minimal calcification.

IMPRESSION:
1. Stable 4mm nodule in the right upper lobe. Recommend follow-up scan in 12 months.
2. Otherwise unremarkable chest X-ray. No acute cardiopulmonary process.`}
            />
            <div className="mt-8 pt-6 border-t border-[#f1f4f6] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c0d5ff] flex items-center justify-center text-[#003e7e]">
                  <span className="material-symbols-outlined text-base">person</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#2b3437] uppercase tracking-wider">Signed By</p>
                  <p className="text-xs font-semibold text-[#586064]">Dr. Aris V. Miller, Lead Radiologist</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-[#2b3437] uppercase tracking-wider">Last Edited</p>
                <p className="text-xs font-semibold text-[#586064]">Oct 24, 2023 • 14:32 GMT</p>
              </div>
            </div>
          </section>

          {/* Comparison Bento */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#f1f4f6] rounded-xl p-6 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] font-bold text-[#586064] uppercase tracking-widest mb-2">
                Stability Index
              </p>
              <p
                className="text-3xl font-extrabold text-[#005db6] tracking-tighter"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                94.2%
              </p>
              <p className="text-[10px] text-[#737c7f] font-medium mt-1">Relative to 2022 Archive</p>
            </div>
            <div className="bg-[#f1f4f6] rounded-xl p-6 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] font-bold text-[#586064] uppercase tracking-widest mb-2">
                AI Confidence
              </p>
              <p
                className="text-3xl font-extrabold text-[#005db6] tracking-tighter"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                High
              </p>
              <div className="flex gap-1 mt-2">
                {[1, 1, 1, 0].map((fill, i) => (
                  <span
                    key={i}
                    className={`w-4 h-1 rounded-full ${fill ? "bg-[#005db6]" : "bg-[#005db6]/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
