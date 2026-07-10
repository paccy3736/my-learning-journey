"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createStory } from "@/lib/api";

export default function CreateStoryPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", content: "", authorName: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createStory(form);
      router.push("/stories");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="mb-4 text-sm text-slate-500 hover:text-blue-600 transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-slate-900">Create a Story</h1>
      </div>

      {error && (
        <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm font-medium text-slate-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            placeholder="Give your story a title"
            value={form.title}
            onChange={handleChange}
            required
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="authorName" className="text-sm font-medium text-slate-700">
            Author
          </label>
          <input
            id="authorName"
            name="authorName"
            placeholder="Your name (optional)"
            value={form.authorName}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="content" className="text-sm font-medium text-slate-700">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Write your story here..."
            value={form.content}
            onChange={handleChange}
            required
            rows={8}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Create Story"}
        </button>
      </form>
    </div>
  );
}
