"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const passwordRules = useMemo(
    () => [
      { label: "At least 8 characters", passed: password.length >= 8 },
      { label: "One uppercase letter", passed: /[A-Z]/.test(password) },
      { label: "One lowercase letter", passed: /[a-z]/.test(password) },
      { label: "One number", passed: /\d/.test(password) },
      { label: "One special character", passed: /[^A-Za-z0-9]/.test(password) },
    ],
    [password],
  );

  const isEmailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
  const isPasswordValid = passwordRules.every((rule) => rule.passed);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    router.push("/upload");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center p-6 relative">
      {/* Dot Grid Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8f9fa] opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#abb3b7 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <main className="w-full max-w-[420px] flex flex-col gap-10">
        {/* Brand */}
        <header className="text-center space-y-2">
          <h1
            className="text-3xl font-extrabold tracking-tighter text-[#005db6]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            ALDS
          </h1>
          <p
            className="text-[#586064] text-[0.6875rem] uppercase tracking-widest font-semibold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            City General Pulmonary Dept
          </p>
        </header>

        {/* Login Card */}
        <section className="tonal-lift p-10 rounded-xl space-y-8">
          <div className="space-y-1">
            <h2
              className="text-xl font-bold text-[#2b3437] tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Clinical Access
            </h2>
            <p className="text-[#586064] text-sm">
              Secure biometric-ready workstation
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="space-y-1.5">
              <label
                className="block text-[0.6875rem] font-semibold text-[#586064] uppercase tracking-widest"
                htmlFor="email"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Institutional Email
              </label>
              <input
                className={`w-full px-0 py-3 bg-white border-0 border-b focus:outline-none text-[#2b3437] text-sm transition-all placeholder:text-[#737c7f]/40 ${showErrors && !isEmailValid ? "border-red-400 focus:border-red-500" : "border-[#abb3b7]/20 focus:border-[#005db6]"}`}
                id="email"
                placeholder="clinician@citygeneral.hosp"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              {showErrors && !isEmailValid && (
                <p className="text-xs text-red-600">Enter a valid institutional email address.</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label
                className="block text-[0.6875rem] font-semibold text-[#586064] uppercase tracking-widest"
                htmlFor="password"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Secure Password
              </label>
              <input
                className={`w-full px-0 py-3 bg-white border-0 border-b focus:outline-none text-[#2b3437] text-sm transition-all placeholder:text-[#737c7f]/40 ${showErrors && !isPasswordValid ? "border-red-400 focus:border-red-500" : "border-[#abb3b7]/20 focus:border-[#005db6]"}`}
                id="password"
                placeholder="••••••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <div className="pt-2 space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#586064]">
                  Password requirements
                </p>
                <div className="grid gap-1.5">
                  {passwordRules.map((rule) => (
                    <div key={rule.label} className="flex items-center gap-2 text-xs">
                      <span
                        className={`w-2 h-2 rounded-full ${rule.passed ? "bg-green-500" : "bg-[#abb3b7]"}`}
                      />
                      <span className={rule.passed ? "text-[#2b3437]" : "text-[#586064]"}>
                        {rule.label}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#586064] leading-relaxed">
                  Use a mix of uppercase, lowercase, numbers, and special characters. That keeps the login demo realistic and stronger.
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full py-4 clinical-gradient text-[#f6f7ff] font-semibold text-sm rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={!isEmailValid || !isPasswordValid}
            >
              Sign In
              <span className="material-symbols-outlined text-lg">lock_open</span>
            </button>
          </form>

          {/* Help */}
          <div className="pt-2 flex justify-center">
            <div className="text-center space-y-2">
              <button className="text-[0.6875rem] font-semibold text-[#586064] uppercase tracking-widest hover:text-[#005db6] transition-colors">
                Not registered? Request account creation
              </button>
              <div className="text-[0.625rem] text-[#737c7f]">
                Sign in with your institutional account to continue.
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 text-[#abb3b7]/40">
            <div className="h-px w-8 bg-current" />
            <span
              className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#586064]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Secure Medical Terminal
            </span>
            <div className="h-px w-8 bg-current" />
          </div>
          <div className="flex justify-center gap-6">
            <span className="flex items-center gap-1 text-[0.625rem] text-[#586064] font-medium">
              <span className="material-symbols-outlined text-[10px]">verified_user</span>
              HIPAA COMPLIANT
            </span>
            <span className="flex items-center gap-1 text-[0.625rem] text-[#586064] font-medium">
              <span className="material-symbols-outlined text-[10px]">security</span>
              AES-256 ENCRYPTED
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
