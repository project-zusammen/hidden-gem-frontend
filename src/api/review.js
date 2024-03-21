import axios from "axios";

export const getReview = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/review`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
