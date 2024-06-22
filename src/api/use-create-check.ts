import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Template } from "../builder/template/template";
import { Check } from "../checklists/NewCheck";
import { apiBaseUrl, apiHeader } from "./urls";

const url = `${apiBaseUrl}/checklist/checks`;

export const useCreateCheck = () => {
  return useMutation<Template, Error, Check>({
    mutationFn: async (check: Check) => {
      return (await axios.post(url, check, apiHeader())).data;
    },
  });
};
