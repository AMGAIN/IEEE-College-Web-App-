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

export async function createEvent(EventFormData: FormData) {
  try {
    const response = await fetch(`${API_URL}/event`, {
      method: 'POST',
      body: EventFormData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error('Error creating Event ');
    }
    return await response.json();
  }
  catch (error) {
    console.error('Error fetching Event:', error);
    throw error;
  }
}

export async function updateEvent(
  id: string,
  EventFormData: FormData
) {
  try {
    const response = await fetch(`${API_URL}/event/${id}`, {
      method: "PUT",
      body: EventFormData,
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Backend error:", error);
      throw new Error("Error updating Event");
    }
    return await response.json();
  } catch (error) {
    console.error(" Error Updating Event: ", error);
    throw error;
  }
}

export async function deleteEvent(id: string) {
    try {
        const response = await fetch(`${API_URL}/event/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("Backend error:", error);
            throw new Error("Error deleting Event");
        }

        return await response.json();
    } catch (error) {
        console.error("Error deleting Event:", error);
        throw error;
    }
}