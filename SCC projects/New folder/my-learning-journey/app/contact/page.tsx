import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to connect, ask questions, or share feedback about my learning journey.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-sm sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Contact
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s connect and grow together.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you want to collaborate, ask for advice, or simply share your own learning story, I would love to hear from you.
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>📧 hello@learningjourney.dev</li>
            <li>📍 Online from anywhere</li>
            <li>🕒 Open for new ideas and conversations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
