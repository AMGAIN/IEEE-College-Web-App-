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
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || "Invalid email or password");
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error Login:', error);
        throw error;
    }
}

export async function register(registerData: {
    name: string,
    email: string;
    password: string;
}) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(registerData),
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || "Error registering that email");
        }
        return await response.json();
    }
    catch (error) {
        console.error('Error Registering:', error);
        throw error;
    }
}