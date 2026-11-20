import axios, { AxiosError } from "axios";

// Using relative '/api' allows seamless API calls across local dev, preview branches, and production deployments
const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_URL || "/api";

export const api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

export const handleApiError = (error: AxiosError | Error): Error => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "An error occurred on the server";
    return new Error(message);
  }

  return new Error(error.message || "An unknown error occurred");
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw handleApiError(error);
  }
);
