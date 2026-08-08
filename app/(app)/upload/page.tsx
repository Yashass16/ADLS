import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Screening Upload – ALDS",
  description: "Initialize a new patient screening by providing identifiers and diagnostic imagery.",
};

export default function UploadPage() {
  return (
    <div className="p-12 min-h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1
            className="text-3xl font-bold tracking-tight text-[#2b3437] mb-2"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            New Screening Upload
          </h1>
          <p className="text-[#586064]">
            Initialize a new patient screening by providing identifiers and diagnostic imagery.
          </p>
        </header>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Patient Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-white rounded-xl editorial-shadow">
              <div className="space-y-6">
                {/* Patient ID */}
                <div className="space-y-2">
                  <label
                    className="text-[10px] font-semibold uppercase tracking-widest text-[#586064] block"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Patient Identifier
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-0 bottom-2 text-[#737c7f] text-lg">
                      fingerprint
                    </span>
                    <input
                      className="w-full pl-8 pb-2 pt-1 bg-transparent border-b border-[#abb3b7] focus:border-[#005db6] focus:outline-none transition-colors text-[#2b3437] placeholder:text-[#abb3b7]"
                      placeholder="e.g. PX-4492-B"
                      type="text"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label
                    className="text-[10px] font-semibold uppercase tracking-widest text-[#586064] block"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Diagnostic Scan Date
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-0 bottom-2 text-[#737c7f] text-lg">
                      calendar_today
                    </span>
                    <input
                      className="w-full pl-8 pb-2 pt-1 bg-transparent border-b border-[#abb3b7] focus:border-[#005db6] focus:outline-none transition-colors text-[#2b3437]"
                      type="date"
                    />
                  </div>
                </div>
              </div>

              {/* Info callout */}
              <div className="mt-12 p-4 bg-[#f1f4f6] rounded-lg">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#005db6] text-lg">info</span>
                  <p className="text-[11px] leading-relaxed text-[#42526e]">
                    Ensure patient identifiers match existing hospital records to maintain
                    data integrity across systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Upload Zone */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-[#f1f4f6] rounded-xl p-2 min-h-[420px] relative group overflow-hidden">
              {/* Decorative gradients */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#005db6]/5 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4f607c]/5 rounded-full blur-2xl -ml-16 -mb-16" />
              </div>

              <div className="relative h-full flex flex-col items-center justify-center border-2 border-dashed border-[#abb3b7]/30 rounded-lg bg-white/50 group-hover:bg-white/80 transition-all p-12 text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#d6e3ff] rounded-full flex items-center justify-center mb-6 text-[#005db6] shadow-sm">
                  <span className="material-symbols-outlined text-4xl">upload_file</span>
                </div>
                <h3
                  className="text-xl font-bold text-[#2b3437] mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Diagnostic Scan Upload
                </h3>
                <p className="text-[#586064] max-w-sm mb-8">
                  Drag and drop X-ray images here, or{" "}
                  <span className="text-[#005db6] cursor-pointer font-semibold underline underline-offset-4">
                    browse your device
                  </span>
                  . Supports JPEG and high-resolution DICOM formats.
                </p>

                {/* Upload Progress */}
                <div className="w-full max-w-md space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#586064] px-1">
                    <span>Uploading: chest_scan_01.dcm</span>
                    <span className="text-[#005db6]">68%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#eaeff1] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#005db6] to-[#0051a1] w-[68%] transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-green-600">verified_user</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#586064]">
                    HIPAA Compliant
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-green-600">lock</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#586064]">
                    AES-256 Encryption Active
                  </span>
                </div>
              </div>
              <Link
                href="/results"
                className="px-10 py-4 clinical-gradient text-[#f6f7ff] rounded-md font-bold text-sm tracking-tight shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Submit for Screening
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Queue */}
        <section className="mt-16 pt-16 border-t border-[#f1f4f6]">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <h2
                className="font-bold text-xl text-[#2b3437]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Recent Queue
              </h2>
              <p className="text-xs text-[#586064]">
                Manage recently uploaded scans awaiting processing.
              </p>
            </div>
            <Link href="/archive" className="text-xs font-semibold text-[#005db6] hover:underline">
              View Full Archive
            </Link>
          </header>

          <div className="overflow-hidden rounded-xl bg-white editorial-shadow">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#f1f4f6]">
                  {["Reference ID", "Modality", "Upload Date", "Status", "Action"].map((h, i) => (
                    <th
                      key={h}
                      className={`py-4 px-6 text-[10px] font-bold uppercase tracking-widest text-[#586064] ${i === 4 ? "text-right" : ""}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f8f9fa]">
                <tr className="hover:bg-[#f8f9fa] transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-[#2b3437]">PX-4401-A</td>
                  <td className="py-4 px-6 text-sm text-[#586064]">DICOM (X-Ray)</td>
                  <td className="py-4 px-6 text-sm text-[#586064]">Oct 24, 2023</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter bg-green-100 text-green-700">
                      Processed
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link href="/results" className="p-1 hover:text-[#005db6] transition-colors">
                      <span className="material-symbols-outlined text-lg">open_in_new</span>
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-[#f8f9fa] transition-colors bg-white">
                  <td className="py-4 px-6 text-sm font-medium text-[#2b3437]">PX-4402-B</td>
                  <td className="py-4 px-6 text-sm text-[#586064]">JPEG (Scan)</td>
                  <td className="py-4 px-6 text-sm text-[#586064]">Oct 24, 2023</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter bg-[#d6e3ff] text-[#42526e]">
                      In Queue
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1 hover:text-[#005db6] transition-colors">
                      <span className="material-symbols-outlined text-lg">more_horiz</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

    </div>
  );
}
