const BASE_URL = "https://api.tvmaze.com";

export const fetchSchedule = async () => {
    const response = await fetch(`${BASE_URL}/schedule?country=US`);
    if (!response.ok) {
        throw new Error("Failed to fetch schedule");
    }
    return response.json();
};

export const fetchShowDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/shows/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch show details");
    }
    return response.json();
};
