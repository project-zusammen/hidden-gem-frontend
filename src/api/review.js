import axios from "axios";

const BASE_URL = import.meta.env.API_BASE_URL;

export const getReview = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/review`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
