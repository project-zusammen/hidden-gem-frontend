export const getRegion = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/region`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
