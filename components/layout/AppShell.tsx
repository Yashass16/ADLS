import TopNav from "./TopNav";
import SideNav from "./SideNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <TopNav />
      <SideNav />
      <main className="ml-64 pt-16 min-h-screen">{children}</main>
    </div>
  );
}
