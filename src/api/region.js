import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getRegion = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/region`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You may handle errors differently based on your application needs
  }
};
