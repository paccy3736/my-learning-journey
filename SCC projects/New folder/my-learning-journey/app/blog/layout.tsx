import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | My Learning Journey",
  description: "Browse blog articles and explore my learning notes.",
};

const blogLinks = [
  { href: "/blog", label: "Overview" },
  { href: "/blog/frontend", label: "Frontend" },
  { href: "/blog/backend", label: "Backend" },
  { href: "/blog/mobile", label: "Mobile" },
];

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm h-fit sticky top-24">
          <h2 className="text-lg font-bold text-slate-900">Topics</h2>
          <nav className="mt-4 flex flex-col gap-2 text-sm font-medium text-slate-600">
            {blogLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
