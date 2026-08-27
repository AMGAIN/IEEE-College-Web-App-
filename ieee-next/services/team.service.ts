import { API_URL } from "@/lib/api";

export async function getTeam(){
    const response = await fetch(`${API_URL}/team`)

    if(!response.ok){
        throw new Error('Team detail not Found');
    }
    return response.json();
}