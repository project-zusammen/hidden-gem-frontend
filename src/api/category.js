import axios from "axios";

export const getCategory = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};