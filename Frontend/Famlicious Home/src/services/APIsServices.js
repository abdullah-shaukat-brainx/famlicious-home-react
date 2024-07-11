import axios from "axios";

export const postCall = async (url, data) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_BACKEND_URL + url,
      data
    );
    const result = {
      ...response.data,
    };
    if (response.headers.access_token) {
      result.access_token = response.headers.access_token;
    }
    return result;
  } catch (error) {
    throw error;
  }
};
