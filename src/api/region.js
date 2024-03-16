import axios from "axios";

export const getRegion = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/region`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
