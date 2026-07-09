import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Blog | My Learning Journey",
  description: "Explore mobile development ideas and lessons from building for small screens.",
};

export default function MobileBlogPage() {
  return (
    <article className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">Mobile</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Mobile experiences demand thoughtful simplicity.</h1>
      </div>
      <p className="text-base leading-8 text-slate-600">
        Mobile development has taught me to focus on speed, clarity, and the value of designing for touch interactions. It is a great reminder that less can be more.
      </p>
      <div className="border-l-4 border-amber-600 bg-amber-50 p-4 rounded-r-lg">
        <p className="text-slate-700 italic">
          "Mobile first means thinking about every decision with the smallest screen in mind. Constraints breed creativity."
        </p>
      </div>
    </article>
  );
}
