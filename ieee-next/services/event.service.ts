import {API_URL} from '@/lib/api';

export async function getEvent() {
  const response = await fetch(`${API_URL}/event`);

  if (!response.ok) {
    throw new Error('Failed to fetch Event data');
  }

  return response.json();
}