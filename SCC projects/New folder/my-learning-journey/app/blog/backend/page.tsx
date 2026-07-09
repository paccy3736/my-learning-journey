import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Blog | My Learning Journey",
  description: "Read about backend concepts, APIs, and reliable application architecture.",
};

export default function BackendBlogPage() {
  return (
    <article className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Backend</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">A strong backend quietly powers great products.</h1>
      </div>
      <p className="text-base leading-8 text-slate-600">
        Learning backend development has shown me how important structure, testing, and secure data handling are. These pieces make applications dependable at scale.
      </p>
      <div className="border-l-4 border-emerald-600 bg-emerald-50 p-4 rounded-r-lg">
        <p className="text-slate-700 italic">
          "A great backend is invisible to users but essential to everything. It's the foundation of trust."
        </p>
      </div>
    </article>
  );
}
