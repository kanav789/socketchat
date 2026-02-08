import { useState } from "react";
import api from "./service";


type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

interface RequestOptions {
  body?: any;
  query?: Record<string, any>;
}

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (
    url: string,
    method: HttpMethod = "get",
    options?: RequestOptions
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api({
        url,
        method,
        data: options?.body,
        params: options?.query, // ✅ query params handled
      });

      return response.data;
    } catch (err: any) {
      // 🌍 GLOBAL ERROR HANDLING
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong";

      setError(message);
      console.error("API Error:", message);

      throw err; // allow component-level handling if needed
    } finally {
      setLoading(false);
    }
  };

  return {
    request,
    loading,
    error,
  };
};

export default useApi;
