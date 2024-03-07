const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getReview = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/review`);
    const data = await response.json();
    const reviewData = data.data;
    return reviewData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
