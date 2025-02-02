const API_URL = "https://dummyjson.com/c/21a3-6bfd-44dc-b962"; // Replace with actual API endpoint

export const fetchMatches = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add Authorization header if required: 'Authorization': `Bearer YOUR_TOKEN_HERE`
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch matches: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || typeof data !== "object") {
      throw new Error("Invalid response format");
    }

    return Object.values(data); // Convert object response to array
  } catch (error) {
    console.error("Error fetching matches:", error.message);
    return []; // Return empty array on error to avoid crashes
  }
};
