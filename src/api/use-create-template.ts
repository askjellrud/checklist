import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { apiBaseUrl, apiHeader } from "./urls";
import { Template } from "../builder/template/template";

const url = `${apiBaseUrl}/checklist/templates`;

export const useCreateTemplate = () => {
  return useMutation<Template, Error, Template>({
    mutationFn: async (template: Template) => {
      return (await axios.post(url, template, apiHeader())).data;
    },
  });
};
