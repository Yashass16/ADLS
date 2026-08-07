import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diagnostic Analysis Results – ALDS",
  description: "AI-powered diagnostic inference for patient chest X-ray screenings.",
};

const confidenceBars = [
  { label: "Pneumonia", value: 82, color: "from-[#005db6] to-[#0051a1]", textColor: "text-[#005db6]" },
  { label: "Lung Infection", value: 48, color: "bg-[#c0d5ff]", textColor: "text-[#005db6]", flat: true },
  { label: "Pleural Effusion", value: 14, color: "bg-[#abb3b7]/30", textColor: "text-[#586064]", flat: true },
];

const metadata_rows = [
  { label: "Capture Source", value: "DICOM Station 02" },
  { label: "Exposure Time", value: "12ms" },
  { label: "Radiation Dose", value: "0.02 mSv" },
];

export default function ResultsPage() {
  return (
    <div className="p-8 min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-[#586064] mb-2 block font-bold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Patient ID: ALDS-4492-BX
            </span>
            <h1
              className="text-3xl font-extrabold text-[#2b3437] tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Diagnostic Analysis Results
            </h1>
          </div>
          <div className="flex items-center gap-2 text-[#586064] text-sm bg-[#f1f4f6] px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-[#005db6] text-base">verified_user</span>
            AI Model v2.4.1 (Clinical Beta)
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-10">
          {/* Left: X-ray + Controls */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {/* X-ray Viewer */}
            <div className="relative aspect-[4/5] bg-[#0c0f10] rounded-xl overflow-hidden shadow-2xl group">
              {/* Simulated X-ray */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] via-[#0c1820] to-[#0c0f10]" />
                <div className="absolute inset-0 opacity-25">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[480px] rounded-full bg-[#586064] blur-3xl" />
                  <div className="absolute top-1/3 left-1/4 w-40 h-64 rounded-full bg-[#9b9d9e] blur-2xl" />
                  <div className="absolute top-1/3 right-1/4 w-40 h-64 rounded-full bg-[#9b9d9e] blur-2xl" />
                </div>
                <span className="material-symbols-outlined text-[#586064] opacity-30 relative z-10" style={{ fontSize: "160px" }}>
                  radiology
                </span>
              </div>

              {/* Heatmap overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 60% 55%, rgba(239,68,68,0.3) 0%, rgba(234,179,8,0.15) 40%, transparent 70%)",
                  mixBlendMode: "color-burn",
                  opacity: 0.65,
                }}
              />

              {/* HUD badges */}
              <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded text-[10px] font-bold tracking-widest uppercase border border-white/20">
                Lateral-PA View
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="glass-panel p-2 rounded-lg hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-[#2b3437] text-lg">zoom_in</span>
                </button>
                <button className="glass-panel p-2 rounded-lg hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-[#2b3437] text-lg">contrast</span>
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label
                    className="text-xs font-bold uppercase tracking-widest text-[#586064]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Heatmap Visualization
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-[#abb3b7]">Off</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#005db6] transition-colors">
                      <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition-transform" />
                    </button>
                    <span className="text-xs font-bold text-[#005db6]">On</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className="text-xs font-bold uppercase tracking-widest text-[#586064]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Overlay Opacity
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      className="w-full h-1.5 bg-[#e3e9ec] rounded-lg appearance-none cursor-pointer accent-[#005db6]"
                      type="range"
                      defaultValue={65}
                    />
                    <span className="text-xs font-bold text-[#2b3437] font-mono">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Inference */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* Diagnostic Inference */}
            <section className="bg-[#f1f4f6] p-8 rounded-xl space-y-8">
              <div>
                <h2
                  className="text-lg font-bold text-[#2b3437] mb-1"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Diagnostic Inference
                </h2>
                <p className="text-[#586064] text-sm">
                  Automated classification based on visual biomarkers.
                </p>
              </div>

              <div className="space-y-6">
                {confidenceBars.map((bar) => (
                  <div key={bar.label} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-semibold text-[#2b3437]">{bar.label}</span>
                      <span className={`text-lg font-bold ${bar.textColor}`}>{bar.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#e3e9ec] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${bar.flat ? bar.color : `bg-gradient-to-r ${bar.color}`}`}
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Recommendation */}
              <div className="bg-white border-l-4 border-[#005db6] p-6 rounded-r-lg space-y-3">
                <div className="flex items-center gap-2 text-[#005db6]">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lightbulb
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest">AI Recommendation</span>
                </div>
                <p className="text-sm text-[#2b3437] leading-relaxed italic">
                  &ldquo;Visual artifacts in the lower right lobe suggest focal consolidation consistent
                  with bacterial pneumonia. Immediate clinical correlation and potential antibiotic
                  intervention recommended. Secondary signs of mild lung congestion observed.&rdquo;
                </p>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Link
                href="/review"
                className="w-full clinical-gradient text-[#f6f7ff] py-4 rounded-lg font-bold text-sm tracking-wide shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all text-center"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Verify Analysis
              </Link>
              <button
                className="w-full border border-[#005db6]/30 bg-transparent text-[#005db6] py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-[#005db6]/5 transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Add Clinical Note
              </button>
            </div>

            {/* Metadata Table */}
            <div className="rounded-lg overflow-hidden border-t border-[#f1f4f6]">
              <div className="bg-[#f1f4f6] px-4 py-2 flex justify-between">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest text-[#586064]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Metadata Attribute
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest text-[#586064]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Value
                </span>
              </div>
              {metadata_rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`px-4 py-3 flex justify-between border-b border-[#eaeff1] ${i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}`}
                >
                  <span className="text-xs font-medium text-[#586064]">{row.label}</span>
                  <span className="text-xs font-semibold text-[#2b3437]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
