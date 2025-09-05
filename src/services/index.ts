import axios, { AxiosError } from "axios";

const BASE_API_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://simran-dangol.vercel.app/api"
    : "http://localhost:3000/api");

if (!BASE_API_URL) {
  throw new Error("BASE_URL is not defined");
}

export const api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

export const handleApiError = (error: AxiosError | Error): Error => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message || "An error occurred on the server";
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
