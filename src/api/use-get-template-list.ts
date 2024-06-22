import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse, CancelTokenSource } from "axios";
import { Template } from "../builder/template/template";
import { GET } from "./axios";
import { queryKeysTemplates } from "./query-keys";
import { apiBaseUrl } from "./urls";

const url = apiBaseUrl + "/checklist/templates";
const axios = (
  cancelToken?: CancelTokenSource
): Promise<AxiosResponse<Template[]>> => GET(url, undefined, { cancelToken });

export const useGetTemplateList = (): UseQueryResult<Template[]> =>
  useQuery<Template[]>({
    queryKey: queryKeysTemplates.list(),
    queryFn: () => axios().then((response) => response.data),
    refetchOnWindowFocus: false,
  });
