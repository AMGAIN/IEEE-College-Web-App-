import { API_URL } from "@/lib/api";

export async function getNews() {
    const response = await fetch(`${API_URL}/news`);

    if (!response.ok) {
        throw new Error("Error fetching the NEWS");
    }
    return response.json();
}