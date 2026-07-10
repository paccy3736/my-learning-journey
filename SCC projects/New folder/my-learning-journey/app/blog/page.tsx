import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore my blog posts on frontend, backend, and mobile development.",
};

const posts = [
  {
    title: "Frontend Foundations",
    href: "/blog/frontend",
    description: "A look at the building blocks that make modern interfaces feel intuitive.",
  },
  {
    title: "Backend Basics",
    href: "/blog/backend",
    description: "How reliable systems and APIs support great user experiences.",
  },
  {
    title: "Mobile Development Insights",
    href: "/blog/mobile",
    description: "Why mobile-first thinking matters when shaping digital products.",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Blog hub
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Notes from my learning journey.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          I share reflections and lessons from frontend, backend, and mobile development as I keep building my skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-blue-300 hover:-translate-y-1"
          >
            <h2 className="text-xl font-bold text-slate-900 hover:text-blue-600">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
            <div className="mt-4 inline-flex text-sm font-semibold text-blue-600">
              Read more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
