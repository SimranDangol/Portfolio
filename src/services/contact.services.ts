import { ContactFormInput } from "@/schemas/contact.schemas";
import { api, handleApiError } from ".";

export const createContact = async (data: ContactFormInput) => {
  try {
    const res = await api.post("/contact", data);
    return res.data;
  } catch (error) {
    throw handleApiError(error as Error);
  }
};
