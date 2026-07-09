import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "A welcoming introduction to my learning journey and goals in web development.",
};

export default function Home() {
  return (
    <div className="space-y-0">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Welcome
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            I am learning to build meaningful digital experiences.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This website reflects my growth as a developer, the topics I am exploring, and the goals I am working toward every day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 text-center font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/30"
            >
              Learn more about me
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-slate-300 px-8 py-3 text-center font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:min-w-[420px]">
          <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-blue-200">
            <h2 className="text-lg font-bold text-slate-900">Current focus</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Strengthening my Next.js and Tailwind skills while practicing responsive UI design.
            </p>
          </div>
          <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-blue-200">
            <h2 className="text-lg font-bold text-slate-900">Next milestone</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Building more polished projects and sharing what I learn with others.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
