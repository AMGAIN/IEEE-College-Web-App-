import { API_URL } from '@/lib/api';

export async function getEvent() {
  try {
    const response = await fetch(`${API_URL}/event`);

    if (!response.ok) {
      throw new Error('Failed to fetch Event data');
    }
    const data = await response.json();

    return data.map((event: any) => ({
      ...event,
      _id: String(event._id),
      image: `${API_URL}/${event.image}`
    }));
  }
  catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }

}