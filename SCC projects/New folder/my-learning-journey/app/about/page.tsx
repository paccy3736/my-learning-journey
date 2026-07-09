import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my development path, goals, and the skills I am building.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          About me
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          I am building a future in modern web development.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          My journey started with curiosity about how websites work, and it grew into a passion for creating thoughtful digital experiences. I enjoy learning new technologies, practicing every day, and turning ideas into polished products.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold text-slate-900">What I am learning</h2>
          <p className="mt-3 leading-7 text-slate-600">
            I am strengthening my skills in React, Next.js, responsive design, and accessible user interfaces.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold text-slate-900">My goals</h2>
          <p className="mt-3 leading-7 text-slate-600">
            My goal is to become a confident full-stack developer who can build useful products and share knowledge clearly.
          </p>
        </div>
      </div>
    </section>
  );
}
