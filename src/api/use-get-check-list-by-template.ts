import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse, CancelTokenSource } from "axios";
import { Check } from "../checklists/NewCheck";
import { GET } from "./axios";
import { queryKeysChecks } from "./query-keys";
import { apiBaseUrl } from "./urls";

const url = (templateId: string) =>
  apiBaseUrl + "/checklist/checks?checklistId=" + templateId;
const axios = (
  templateId: string,
  cancelToken?: CancelTokenSource
): Promise<AxiosResponse<Check[]>> =>
  GET(url(templateId), undefined, { cancelToken });

export const useGetCheckListByTemplate = (
  templateId: string
): UseQueryResult<Check[]> =>
  useQuery<Check[]>({
    queryKey: queryKeysChecks.listByChecklist(templateId),
    queryFn: () => axios(templateId).then((response) => response.data),
    refetchOnWindowFocus: false,
  });
