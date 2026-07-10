"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllStories, deleteStory, type Story } from "@/lib/api";

export default function StoriesPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchStories = async () => {
    setLoading(true);
    const data = await getAllStories();
    setStories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this story? This cannot be undone.")) return;
    setDeletingId(id);
    await deleteStory(id);
    await fetchStories();
    setDeletingId(null);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">All Stories</h1>
        <Link
          href="/stories/create"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          + New Story
        </Link>
      </div>

      {loading && (
        <p className="text-slate-500">Loading stories...</p>
      )}

      {!loading && stories.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 px-6 py-14 text-center">
          <p className="text-slate-500">No stories yet.</p>
          <Link
            href="/stories/create"
            className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline"
          >
            Write the first one →
          </Link>
        </div>
      )}

      <ul className="flex flex-col gap-4">
        {stories.map((story) => (
          <li
            key={story.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <Link
                  href={`/stories/${story.id}`}
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1"
                >
                  {story.title}
                </Link>
                <p className="mt-1 text-xs text-slate-500">
                  By {story.author} ·{" "}
                  {new Date(story.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {story.content}
                </p>
              </div>

              <div className="flex shrink-0 gap-2">
                <Link
                  href={`/stories/${story.id}/edit`}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(story.id)}
                  disabled={deletingId === story.id}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-red-500 transition hover:border-red-300 hover:bg-red-50 disabled:opacity-50"
                >
                  {deletingId === story.id ? "..." : "Delete"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
