const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getReview = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/review`);
    const data = await response.json();
    const reviewData = data.data;
    const newData = reviewData.map((review) => {
      return {
        title: review.title + " (new)",
        content: review.content + " (new)",
        upvotes: review.upvotes + 1,
        public_id: review.public_id + " (new)",
      };
    });
    return newData;
    // setReviews([...reviewData, ...newData, ...reviewData, ...newData]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
