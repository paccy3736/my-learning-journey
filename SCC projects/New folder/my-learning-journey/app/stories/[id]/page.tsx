"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getStory, deleteStory, type Story } from "@/lib/api";

export default function StoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    getStory(id).then((s) => {
      setStory(s);
      setLoading(false);
    });
  }, [id]);

  const handleDelete = async () => {
    if (!confirm("Delete this story? This cannot be undone.")) return;
    setDeleting(true);
    try {
      await deleteStory(id);
      router.push("/stories");
    } catch {
      alert("Failed to delete story.");
      setDeleting(false);
    }
  };

  if (loading) {
    return <div className="mx-auto max-w-2xl px-4 py-10 text-slate-500">Loading...</div>;
  }

  if (!story) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10">
        <p className="text-slate-500">Story not found.</p>
        <Link href="/stories" className="mt-3 inline-block text-sm text-blue-600 hover:underline">
          ← Back to stories
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Link
        href="/stories"
        className="mb-6 inline-block text-sm text-slate-500 hover:text-blue-600 transition-colors"
      >
        ← All stories
      </Link>

      <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">{story.title}</h1>
        <p className="mt-2 text-sm text-slate-500">
          By {story.authorName} · {new Date(story.createdAt).toLocaleDateString()}
          {story.updatedAt !== story.createdAt && (
            <> · Edited {new Date(story.updatedAt).toLocaleDateString()}</>
          )}
        </p>
        <div className="mt-6 border-t border-slate-100 pt-6">
          <p className="whitespace-pre-wrap text-base leading-8 text-slate-700">
            {story.content}
          </p>
        </div>
      </article>

      <div className="mt-4 flex gap-3">
        <Link
          href={`/stories/${story._id}/edit`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 disabled:opacity-50"
        >
          {deleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
