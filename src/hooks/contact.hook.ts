import { QUERY_KEYS } from "@/constants";
import { createContact } from "@/services/contact.services";
import { useMutation } from "@tanstack/react-query";

export const useCreateContact = () => {
  return useMutation({
    mutationFn: createContact,
    mutationKey: [QUERY_KEYS.CONTACT],
  });
};
