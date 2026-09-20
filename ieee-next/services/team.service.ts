import { API_URL } from "@/lib/api";

export async function getTeam() {
    try {
        const response = await fetch(`${API_URL}/team`);
        if (!response.ok) {
            throw new Error('Team detail not Found');
        }

        const data = await response.json();

        // ✅ Add base URL to image paths
        return data.map((member: any) => ({
            ...member,
            _id: String(member._id),
            image: `${API_URL}/${member.image}` // ← This fixes it!
        }));

    } catch (error) {
        console.error('Error fetching team:', error);
        throw error;
    }
}

export async function createMember(memberFormData: FormData){
    try{
        const response = await fetch(`${API_URL}/team`,{
            method: 'POST',
            body: memberFormData,
        });

        if(!response.ok){
            const error = await response.json();
            throw new Error('Error creating new member');
        }
        return await response.json();
    }
    catch(error){
        console.error('Error fetching team:', error);
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

export async function deleteMember(id: string) {
    try {
        const response = await fetch(`${API_URL}/team/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("Backend error:", error);
            throw new Error("Error deleting Team");
        }

        return await response.json();
    } catch (error) {
        console.error("Error deleting Team:", error);
        throw error;
    }
}