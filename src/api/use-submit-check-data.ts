import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CheckDataMap } from "../checklists/NewCheck";
import { apiBaseUrl, apiHeader } from "./urls";

const url = (checkId: string) =>
  `${apiBaseUrl}/checklist/checks/${checkId}/data`;

export const useSubmitCheck = (checkId: string) => {
  return useMutation<CheckDataMap, Error, CheckDataMap>({
    mutationFn: async (data: CheckDataMap) => {
      return (await axios.post(url(checkId), data, apiHeader())).data;
    },
  });
};
