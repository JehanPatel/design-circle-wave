import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { EasterEggs } from "./EasterEggs";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <EasterEggs />
    </div>
  );
}
