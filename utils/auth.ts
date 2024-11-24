import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create an Axios instance
const api = axios.create({
  // baseURL: "https://your-backend.com/api", // Replace with your API base URL
});

// Request interceptor to add JWT token to headers
api.interceptors.request.use(
  async (config) => {
    // Retrieve the token from AsyncStorage
    const token = await AsyncStorage.getItem("token");

    // If token exists, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response, // Simply return the response if no error
  async (error) => {
    // Handle specific error status (like 401 for unauthorized)
    if (error.response && error.response.status === 401) {
      console.log("Token expired or unauthorized. Please log in again.");
      // Optionally, clear the token and navigate to login screen
      await AsyncStorage.removeItem("token");
    }

    return Promise.reject(error);
  }
);

export default api;
