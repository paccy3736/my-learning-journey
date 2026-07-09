import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Blog | My Learning Journey",
  description: "Read about frontend development fundamentals and modern UI practices.",
};

export default function FrontendBlogPage() {
  return (
    <article className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Frontend</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Frontend is where design meets function.</h1>
      </div>
      <p className="text-base leading-8 text-slate-600">
        Building polished frontend interfaces requires a balance between layout, performance, and clarity. Each project teaches me how small decisions can greatly improve the experience for users.
      </p>
      <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-r-lg">
        <p className="text-slate-700 italic">
          "Great UI is not just beautiful—it's intuitive, responsive, and accessible to everyone."
        </p>
      </div>
    </article>
  );
}
