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

export async function createNews(newsFormData: FormData){
    try{
        const response = await fetch(`${API_URL}/news`,{
            method: 'POST',
            body: newsFormData,
        });

        if(!response.ok){
            const error = await response.json();
            throw new Error('Error creating new member');
        }
        return await response.json();
    }
    catch(error){
        console.error('Error fetching News:', error);
        throw error;
    }

}

export async function deleteNews(id: string) {
    try {
        const response = await fetch(`${API_URL}/news/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("Backend error:", error);
            throw new Error("Error deleting News");
        }

        return await response.json();
    } catch (error) {
        console.error("Error deleting News:", error);
        throw error;
    }
}