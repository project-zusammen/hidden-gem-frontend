import axios from "axios";

export const signUp = async ({ username, email, password }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/signup`,
      {
        username: username?.trim(),
        email: email?.trim(),
        password: password?.trim(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error posting sign up data:", error);
    throw error;
  }
};
