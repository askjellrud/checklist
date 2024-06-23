import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse, CancelTokenSource } from "axios";
import { Check } from "../checklists/NewCheck";
import { GET } from "./axios";
import { queryKeysChecks } from "./query-keys";
import { apiBaseUrl } from "./urls";

const url = (checkId: string) => apiBaseUrl + "/checklist/checks/" + checkId;
const axios = (
  checkId: string,
  cancelToken?: CancelTokenSource
): Promise<AxiosResponse<Check>> =>
  GET(url(checkId), undefined, { cancelToken });

export const useGetCheck = (checkId: string): UseQueryResult<Check> =>
  useQuery<Check>({
    queryKey: queryKeysChecks.single(checkId),
    queryFn: () => axios(checkId).then((response) => response.data),
    refetchOnWindowFocus: false,
  });
