// lib/api.ts
// In-memory + localStorage persistence for stories (no backend required)

export interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export type StoryInput = Pick<Story, "title" | "content" | "author">;

const STORAGE_KEY = "mlj_stories";

function loadStories(): Story[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Story[]) : [];
  } catch {
    return [];
  }
}

function saveStories(stories: Story[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
}

// CREATE
export async function createStory(input: StoryInput): Promise<Story> {
  const stories = loadStories();
  const newStory: Story = {
    id: crypto.randomUUID(),
    title: input.title.trim(),
    content: input.content.trim(),
    author: input.author.trim() || "Anonymous",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  stories.unshift(newStory);
  saveStories(stories);
  return newStory;
}

// READ ALL
export async function getAllStories(): Promise<Story[]> {
  return loadStories();
}

// READ ONE
export async function getStory(id: string): Promise<Story | null> {
  const stories = loadStories();
  return stories.find((s) => s.id === id) ?? null;
}

// UPDATE
export async function updateStory(
  id: string,
  input: Partial<StoryInput>
): Promise<Story | null> {
  const stories = loadStories();
  const idx = stories.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  stories[idx] = {
    ...stories[idx],
    ...input,
    updatedAt: new Date().toISOString(),
  };
  saveStories(stories);
  return stories[idx];
}

// DELETE
export async function deleteStory(id: string): Promise<boolean> {
  const stories = loadStories();
  const filtered = stories.filter((s) => s.id !== id);
  if (filtered.length === stories.length) return false;
  saveStories(filtered);
  return true;
}
