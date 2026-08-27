import { API_URL } from '@/lib/api';

export async function getMembershipBenifits() {
    const response = await fetch(`${API_URL}/membership`);

    if (!response.ok) {
        throw new Error('Failed to fetch membership benifits');
    }
    return response.json();
}