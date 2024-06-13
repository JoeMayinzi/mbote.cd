import axios from "axios";

export const fetchWithBasicAuth = async (url, username, password) => {
  try {
    const response = await axios.get(url, {
      auth: {
        username,
        password,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Rethrow the error to handle it in your code
  }
};

// Exemple d'utilisation
