import { API_URL } from '@/lib/api';

export async function getGallery() {
  const response = await fetch(`${API_URL}/gallery`);

  if (!response.ok) {
    throw new Error('Failed to fetch Gallery data');
  }
  return response.json();
}