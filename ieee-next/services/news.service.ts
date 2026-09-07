// services/news.service.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function getNews() {
  try {
    const response = await fetch(`${API_BASE_URL}/news`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    
    // ✅ Ensure image URLs are complete
    return data.map((item: any) => ({
      ...item,
      // If image doesn't start with http, add base URL
      image: item.image && !item.image.startsWith('http') 
        ? `${API_BASE_URL}${item.image}` 
        : item.image
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}