import { API_URL } from "@/lib/api";

export async function login(loginData: {
    email: string;
    password: string;
}) {
    try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Invalid email or password");
    }
    return await response.json();
    }
    catch (error) {
        console.error('Error fetching Event:', error);
        throw error;
    }
}