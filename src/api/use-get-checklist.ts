import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse, CancelTokenSource } from "axios";
import { Template } from "../builder/template/template";
import { GET } from "./axios";
import { queryKeysTemplates } from "./query-keys";
import { apiBaseUrl } from "./urls";

const url = (id: string) => apiBaseUrl + "/checklist/templates/" + id;
const axios = (
  id: string,
  cancelToken?: CancelTokenSource
): Promise<AxiosResponse<Template>> => GET(url(id), undefined, { cancelToken });

export const useGetChecklist = (
  id: string,
  options = {}
): UseQueryResult<Template> =>
  useQuery<Template>({
    queryKey: queryKeysTemplates.single(id),
    queryFn: () => axios(id).then((response) => response.data),
    refetchOnWindowFocus: false,
    ...options,
  });
