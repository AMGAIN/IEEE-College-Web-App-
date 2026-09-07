// services/news.service.ts
import { API_URL } from "@/lib/api";

export async function getNews() {
  try {
    const response = await fetch(`${API_URL}/news`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();

    // ✅ Add base URL to image paths
    return data.map((news: any) => ({
      ...news,
      _id: String(news._id),
      image: `${API_URL}/${news.image}` // ← This fixes it!
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}