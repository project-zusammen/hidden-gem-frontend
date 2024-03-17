import axios from "axios";

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/login`,
      {
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
    console.error("Error posting login data:", error);
    throw error;
  }
};