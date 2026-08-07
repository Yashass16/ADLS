import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration Dashboard – ALDS",
  description: "System health monitoring, user management, and audit logging for ALDS administrators.",
};

const users = [
  { name: "Dr. Sarah Chen", role: "Lead Radiologist", email: "s.chen@hospital.org", status: "Active", last: "Today, 09:22" },
  { name: "Dr. Marcus Reed", role: "Clinical Radiologist", email: "m.reed@hospital.org", status: "Active", last: "Today, 08:41" },
  { name: "Dr. Lisa Adams", role: "Clinical Radiologist", email: "l.adams@hospital.org", status: "Inactive", last: "Oct 20, 2023" },
  { name: "Admin User", role: "System Administrator", email: "admin@hospital.org", status: "Active", last: "Today, 10:00" },
];

const auditLog = [
  { event: "LOGIN SUCCESS", user: "Dr. Sarah Chen", timestamp: "Oct 24, 09:22:01", ip: "192.168.1.45" },
  { event: "REPORT GENERATED", user: "Dr. Marcus Reed", timestamp: "Oct 24, 08:55:13", ip: "192.168.1.30" },
  { event: "SCAN UPLOADED", user: "Dr. Sarah Chen", timestamp: "Oct 24, 08:41:02", ip: "192.168.1.45" },
  { event: "LOGIN FAILED", user: "unknown@test.com", timestamp: "Oct 23, 23:11:22", ip: "203.0.113.0" },
];

export default function AdminPage() {
  return (
    <div className="p-10 min-h-[calc(100vh-64px)] bg-[#f8f9fa]">
      {/* Header */}
      <header className="mb-10">
        <h1
          className="text-4xl font-extrabold tracking-tight text-[#2b3437]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Administration
        </h1>
        <p className="text-[#586064] text-sm mt-1">
          System health, user management, and audit logging.
        </p>
      </header>

      {/* System Health Metrics */}
      <section className="mb-10">
        <h2
          className="text-[10px] font-bold uppercase tracking-widest text-[#586064] mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          System Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Active Sessions", value: "14", sub: "4 radiologists, 10 admin", icon: "people", accent: "#005db6" },
            { label: "System Health", value: "99.98%", sub: "All services operational", icon: "check_circle", accent: "#16a34a" },
            { label: "Database Latency", value: "12ms", sub: "Well within threshold", icon: "bolt", accent: "#d97706" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="bg-white rounded-xl p-6 flex items-start gap-5 shadow-sm border-l-4"
              style={{ borderLeftColor: metric.accent }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${metric.accent}15` }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: metric.accent, fontVariationSettings: "'FILL' 1" }}
                >
                  {metric.icon}
                </span>
              </div>
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest text-[#586064] mb-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {metric.label}
                </p>
                <p
                  className="text-3xl font-extrabold text-[#2b3437] tracking-tighter"
                  style={{ fontFamily: "Manrope, sans-serif", color: metric.accent }}
                >
                  {metric.value}
                </p>
                <p className="text-xs text-[#586064] mt-1">{metric.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* User Management */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-[10px] font-bold uppercase tracking-widest text-[#586064]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            User Management
          </h2>
          <button className="flex items-center gap-2 clinical-gradient text-[#f6f7ff] px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">person_add</span>
            Create User
          </button>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden editorial-shadow">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f1f4f6]">
                {["Clinician", "Role", "Email", "Status", "Last Login", "Actions"].map((h, i) => (
                  <th
                    key={h}
                    className={`px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#586064] ${i === 5 ? "text-right" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eaeff1]">
              {users.map((user) => (
                <tr key={user.email} className="hover:bg-[#f8f9fa] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#d6e3ff] flex items-center justify-center text-xs font-bold text-[#005db6]">
                        {user.name.split(" ").slice(-1)[0][0]}{user.name[0]}
                      </div>
                      <span className="text-sm font-semibold text-[#2b3437]">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-[#586064]">{user.role}</td>
                  <td className="px-6 py-4 text-xs text-[#586064] font-mono">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-[#e3e9ec] text-[#586064]"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-[#586064]">{user.last}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1.5 hover:bg-[#d6e3ff] text-[#005db6] rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="p-1.5 hover:bg-[#fe8983]/20 text-[#9f403d] rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">person_off</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Audit Log */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-[10px] font-bold uppercase tracking-widest text-[#586064]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Audit Log
          </h2>
          <button className="flex items-center gap-2 border border-[#abb3b7]/30 text-[#586064] px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider hover:bg-[#f1f4f6] transition-colors">
            <span className="material-symbols-outlined text-sm">download</span>
            Download CSV
          </button>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden editorial-shadow">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f1f4f6]">
                {["Event", "User", "Timestamp", "IP Address"].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#586064]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eaeff1]">
              {auditLog.map((log, i) => (
                <tr key={i} className={`hover:bg-[#f8f9fa] transition-colors ${log.event === "LOGIN FAILED" ? "bg-[#fe8983]/5" : ""}`}>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                        log.event === "LOGIN FAILED"
                          ? "bg-[#fe8983]/20 text-[#9f403d]"
                          : log.event === "REPORT GENERATED"
                          ? "bg-[#d6e3ff] text-[#005db6]"
                          : "bg-[#e3e9ec] text-[#586064]"
                      }`}
                    >
                      {log.event}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#2b3437]">{log.user}</td>
                  <td className="px-6 py-4 text-xs text-[#586064] font-mono">{log.timestamp}</td>
                  <td className="px-6 py-4 text-xs text-[#586064] font-mono">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
