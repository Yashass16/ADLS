import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALDS – Clinical Precision In Every Screening",
  description:
    "Empowering rural hospitals with AI-driven chest X-ray analysis for faster, more accurate diagnosis. Bridges the gap in radiologist availability.",
};

interface WorkflowStep {
  num: string;
  title: string;
  desc: string;
  badges?: string[];
  progress?: boolean;
  cta?: boolean;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-[Inter,sans-serif] text-[#2b3437]">
      {/* ─── Top Navigation ─── */}
      <header className="w-full top-0 sticky z-50 bg-[#f8f9fa]">
        <nav className="flex justify-between items-center px-12 py-6 max-w-[1440px] mx-auto">
          <div
            className="text-2xl font-bold tracking-tighter text-[#2b3437]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            ALDS
          </div>
          <div className="hidden md:flex gap-10">
            <a
              href="#platform"
              className="font-bold text-sm tracking-tight text-[#005db6] border-b-2 border-[#005db6] pb-1"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Platform
            </a>
            {["Features", "Workflow", "Security"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-bold text-sm tracking-tight text-[#586064] hover:text-[#005db6] transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="font-bold text-sm tracking-tight text-[#586064] hover:text-[#2b3437] transition-colors"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Login
            </Link>
            <Link
              href="/login"
              className="bg-[#005db6] hover:bg-[#0051a1] text-[#f6f7ff] px-6 py-3 rounded-md font-bold text-sm tracking-tight shadow-sm transition-all"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Request Demo
            </Link>
          </div>
        </nav>
        <div className="bg-[#f1f4f6] h-[1px] w-full" />
      </header>

      <main id="platform">
        {/* ─── Hero ─── */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden bg-[#f8f9fa]">
          <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 bg-[#d6e3ff] text-[#00519f] text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
                Next-Gen Diagnostics
              </span>
              <h1
                className="text-6xl md:text-7xl font-extrabold tracking-tighter text-[#2b3437] leading-[0.95] mb-8"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Clinical Precision{" "}
                <br />
                <span className="text-[#005db6]">In Every Screening</span>
              </h1>
              <p className="text-[#586064] text-xl leading-relaxed mb-10 max-w-lg">
                Empowering rural hospitals with AI-driven chest X-ray analysis
                for faster, more accurate diagnosis. Bridges the gap in
                radiologist availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/login"
                  className="clinical-gradient text-[#f6f7ff] px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all text-center"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Request a Demo
                </Link>
              </div>
            </div>

            {/* Hero image card */}
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#005db6]/5 rounded-full blur-[100px]" />
              <div className="relative bg-[#f1f4f6] p-4 rounded-2xl shadow-2xl overflow-hidden">
                <div className="rounded-xl w-full aspect-square bg-[#0c0f10] flex items-center justify-center overflow-hidden relative">
                  {/* Simulated X-ray image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] via-[#0c1820] to-[#0c0f10]" />
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-full bg-[#586064] blur-3xl" />
                    <div className="absolute top-1/3 left-1/3 w-32 h-48 rounded-full bg-[#737c7f] blur-2xl" />
                    <div className="absolute top-1/3 right-1/3 w-32 h-48 rounded-full bg-[#737c7f] blur-2xl" />
                  </div>
                  <span className="material-symbols-outlined text-[#586064] text-9xl relative z-10 opacity-40">
                    radiology
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b3437]/40 to-transparent" />
                {/* AI overlay card */}
                <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#005db6]/10 flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-[#005db6]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        analytics
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#005db6] tracking-widest uppercase">
                        AI Analysis Engine
                      </p>
                      <p className="text-sm font-bold text-[#2b3437]">
                        Processing DICOM-2384...
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-[#e3e9ec] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#005db6] h-full w-[88%]" />
                  </div>
                  <p className="text-right text-[10px] font-medium text-[#586064] mt-1">
                    88% Confidence Level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Trusted By ─── */}
        <section className="bg-[#f1f4f6] py-12 border-y border-[#abb3b7]/10">
          <div className="max-w-[1440px] mx-auto px-12">
            <p className="text-center text-[11px] font-bold tracking-widest text-[#586064]/60 uppercase mb-8">
              Trusted by Clinical Partnerships Worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              {["MED-CORE", "VITALIS", "H-SYSTEMS", "LUNGCARE", "RADIOLOGY+"].map((name) => (
                <div
                  key={name}
                  className="text-xl font-black text-[#586064]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Value Proposition ─── */}
        <section id="features" className="py-32 bg-[#f8f9fa]">
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="mb-20 text-center">
              <h2
                className="text-4xl font-extrabold tracking-tight mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Precision-First Infrastructure
              </h2>
              <p className="text-[#586064] text-lg max-w-2xl mx-auto">
                Our framework is built to provide clinical-grade reliability
                even in the most remote environments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "neurology",
                  title: "AI-Powered Accuracy",
                  desc: "Utilizing deep learning models trained on 1.2M clinical datasets to detect pulmonary abnormalities with 99.4% sensitivity.",
                },
                {
                  icon: "security",
                  title: "DICOM & HIPAA Compliant",
                  desc: "End-to-end encrypted medical data handling ensuring total patient privacy and regulatory adherence in every scan.",
                },
                {
                  icon: "hub",
                  title: "Zero Radiologist Needed",
                  desc: "Designed to function autonomously in triage scenarios, providing immediate screening results where specialists are unavailable.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-10 rounded-2xl group hover:bg-[#f1f4f6] transition-all duration-300"
                >
                  <div className="w-16 h-16 clinical-gradient rounded-xl flex items-center justify-center mb-8 shadow-md">
                    <span
                      className="material-symbols-outlined text-[#f6f7ff] text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {card.icon}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#586064] leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  <div className="h-1 w-0 group-hover:w-full bg-[#005db6] transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section id="workflow" className="py-32 bg-[#f1f4f6]">
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <h2
                  className="text-5xl font-extrabold tracking-tight mb-6"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Seamless Diagnostic Workflow
                </h2>
                <p className="text-[#586064] text-lg mb-8">
                  From data ingestion to clinical reporting in under 120
                  seconds. We&apos;ve eliminated the friction in lung disease
                  screening.
                </p>
                <div className="rounded-2xl bg-[#0c0f10] w-full aspect-[4/3] flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-[#586064] text-8xl opacity-40">
                    stethoscope
                  </span>
                </div>
              </div>

              <div className="md:w-2/3 space-y-12">
                {([
                  {
                    num: "01",
                    title: "Upload Scan",
                    desc: "Connect your PACS system or upload DICOM files directly to our secure portal. Automated metadata extraction begins instantly.",
                    badges: ["DICOM 3.0", "HL7 Ready"],
                  },
                  {
                    num: "02",
                    title: "AI Analysis",
                    desc: "Our neural networks process the image, identifying opacities, nodules, and other indicators of advanced lung disease with heatmap overlays.",
                    progress: true,
                  },
                  {
                    num: "03",
                    title: "Clinical Review & Report",
                    desc: "Receive a structured clinical report ready for sign-off. Integration with existing EMR/EHR systems ensures the patient record is updated automatically.",
                    cta: true,
                  },
                ] as WorkflowStep[]).map((step) => (
                  <div
                    key={step.num}
                    className="bg-white p-12 rounded-3xl flex flex-col md:flex-row gap-10 items-start shadow-sm"
                  >
                    <div
                      className="text-8xl font-black text-[#dbe4e7]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-2xl font-bold mb-4"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {step.title}
                      </h4>
                      <p className="text-[#586064] text-lg leading-relaxed mb-6">
                        {step.desc}
                      </p>
                      {step.badges && (
                        <div className="flex gap-4">
                          {step.badges.map((b) => (
                            <div
                              key={b}
                              className="px-4 py-2 bg-[#e3e9ec] rounded-full text-[10px] font-bold uppercase tracking-widest"
                            >
                              {b}
                            </div>
                          ))}
                        </div>
                      )}
                      {step.progress && (
                        <div className="p-4 bg-[#f1f4f6] rounded-xl">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold uppercase tracking-tighter">
                              Diagnostic Confidence
                            </span>
                            <span className="text-xs font-bold text-[#005db6]">98.2%</span>
                          </div>
                          <div className="w-full bg-[#dbe4e7] h-1.5 rounded-full">
                            <div className="bg-[#005db6] w-[98.2%] h-full rounded-full" />
                          </div>
                        </div>
                      )}
                      {step.cta && (
                        <Link
                          href="/reports"
                          className="text-[#005db6] font-bold flex items-center gap-2 hover:underline"
                        >
                          Download Sample Report
                          <span className="material-symbols-outlined text-sm">download</span>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 clinical-gradient opacity-95" />
          <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
          <div className="max-w-[1440px] mx-auto px-12 relative z-10 text-center">
            <h2
              className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#f6f7ff] mb-8"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Ready to enhance your hospital&apos;s
              <br />
              screening capabilities?
            </h2>
            <p className="text-[#d6e3ff] text-xl mb-12 max-w-2xl mx-auto font-light">
              Join over 40 medical centers leveraging ALDS to provide
              life-saving diagnostics in underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/login"
                className="bg-white text-[#005db6] px-10 py-5 rounded-xl font-extrabold text-xl shadow-2xl hover:scale-[1.02] transition-all"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Get Started
              </Link>
              <button
                className="bg-transparent border-2 border-[#f6f7ff]/30 text-[#f6f7ff] px-10 py-5 rounded-xl font-extrabold text-xl hover:bg-white/10 transition-all"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Speak with a Specialist
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="w-full py-16 px-12 border-t border-[#abb3b7]/15 bg-[#f1f4f6]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1440px] mx-auto">
          <div>
            <div
              className="font-black text-lg text-[#2b3437] mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ALDS
            </div>
            <p className="text-xs tracking-widest uppercase text-[#586064]">
              © 2024 ALDS Advanced Lung Disease Screening. Clinical Precision Framework.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4">
            {["Privacy Policy", "Terms of Service", "DICOM Compliance", "Regulatory"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs tracking-widest uppercase text-[#586064] hover:text-[#2b3437] transition-all duration-300"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="text-xs tracking-widest uppercase text-[#005db6] underline transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
