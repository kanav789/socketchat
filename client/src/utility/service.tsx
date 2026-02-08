import axios from "axios";

// ===== CONFIG =====
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // or process.env.REACT_APP_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY;

const LOGIN_ROUTE = "/login";

// ===== AXIOS INSTANCE =====
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// ===== HELPER =====
const redirectToLogin = () => {
  localStorage.removeItem("token");
  window.location.href = LOGIN_ROUTE;
};

// ===== REQUEST INTERCEPTOR =====
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // attach api key
    if (API_KEY) {
      config.headers["x-api-key"] = API_KEY;
    }

    // attach token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // no token → redirect
      redirectToLogin();
      return Promise.reject(new Error("No auth token"));
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ===== RESPONSE INTERCEPTOR =====
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // network error (no response)
    if (!error.response) {
      console.error("Network error or server down");
    }
    const status = error?.response?.status;
    // token invalid / expired
    if (status === 401 || status === 403) {
      redirectToLogin();
    }

    return Promise.reject(error);
  }
);

export default api;
