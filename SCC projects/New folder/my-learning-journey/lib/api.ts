const BASE_URL = "https://sms-express-app-1-production-a843.up.railway.app/api/stories";

export interface Story {
  id: string;
  authorName: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStoryDTO {
  authorName: string;
  content: string;
}

// GET ALL — response is { value: Story[], Count: number }
export const getAllStories = async (): Promise<Story[]> => {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch stories");
  const data = await res.json();
  // API returns { value: [...], Count: n }
  return Array.isArray(data) ? data : (data.value ?? []);
};

// GET ONE
export const getStory = async (id: string): Promise<Story | null> => {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
};

// CREATE
export const createStory = async (data: CreateStoryDTO): Promise<Story> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create story");
  return res.json();
};

// UPDATE
export const updateStory = async (
  id: string,
  data: Partial<CreateStoryDTO>
): Promise<Story> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update story");
  return res.json();
};

// DELETE
export const deleteStory = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete story");
};
