import { API_URL } from '@/lib/api';

export async function getGallery() {
  try {
    const response = await fetch(`${API_URL}/gallery`);

    if (!response.ok) {
      throw new Error('Failed to fetch Gallery data');
    }
    const data = await response.json();

    return data.map((photo: any) => ({
      ...photo,
      _id: String(photo._id),
      image: `${API_URL}/${photo.image}` // ← This fixes it!
    }));
  }
  catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }

}

export async function createImage(GalleryFormData: FormData) {
  try {
    const response = await fetch(`${API_URL}/gallery`, {
      method: 'POST',
      body: GalleryFormData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error('Error creating Image in Gallery ');
    }
    return await response.json();
  }
  catch (error) {
    console.error('Error fetching Image:', error);
    throw error;
  }
}

export async function deletePhoto(id: string) {
  try {
    const response = await fetch(`${API_URL}/gallery/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Backend error:", error);
      throw new Error("Error deleting News");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting News:", error);
    throw error;
  }

}