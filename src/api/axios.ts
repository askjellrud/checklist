import axios, { CancelTokenSource, AxiosRequestConfig, AxiosResponse } from 'axios';
import forOwn from 'lodash/forOwn';

type RequestOptions = {
  cancelToken?: CancelTokenSource;
  singleInstance?: boolean;
  key?: string;
};

type QueryParamsMap = Record<string, string | string[]>;

enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
  HEAD = 'head'
}

const defaultRequestOptions: RequestOptions = {
  cancelToken: undefined,
  singleInstance: false
};

export const CANCELED_FROM_NETWORK = 'Canceled from network';

const getPathFromUrl = (url: string): string => url.split('?')[0];

export const paramsSerializer = (params: QueryParamsMap): string => {
  let options = '';

  forOwn(params, (value, param) => {
    if (Array.isArray(value)) {
      options += `${param}=`;
      let prefix = '';
      value.forEach((val: string) => {
        options += `${prefix}${val}`;
        prefix = ',';
      });
      options += '&';
    } else {
      options += `${param}=${value}&`;
    }
  });
  return options ? options.slice(0, -1) : options;
};

const cancelTokens: Record<string, CancelTokenSource> = {};

const cancelPrevious = (requestKey: string): void => {
  const cancelToken = cancelTokens[requestKey];
  if (cancelToken) {
    cancelToken.cancel(`${CANCELED_FROM_NETWORK}: ${requestKey}`);
  }
};

const handleCancellationAndGetNewCancelToken = (method: string, url: string, requestOptions: RequestOptions): CancelTokenSource | null => {
  if (!requestOptions.singleInstance && !requestOptions.cancelToken) {
    return null; // Do not create cancel token that is never used
  }
  const cancelToken = requestOptions.cancelToken || axios.CancelToken.source();
  if (requestOptions.singleInstance) {
    const requestKey = requestOptions.key || `${method}${getPathFromUrl(url)}`;
    cancelPrevious(requestKey);
    cancelTokens[requestKey] = cancelToken;
  }
  return cancelToken;
};

const getConfigWithCancelToken = (cancelToken: CancelTokenSource | null, config: AxiosRequestConfig): AxiosRequestConfig => (cancelToken ? { cancelToken: cancelToken.token, ...config } : config);
export function GET<ResponseType = unknown>(url: string, config: AxiosRequestConfig = {}, requestOptions: RequestOptions = defaultRequestOptions): Promise<AxiosResponse<ResponseType>> {
  const cancelToken = handleCancellationAndGetNewCancelToken(RequestMethod.GET, url, requestOptions);
  return axios.create({
    headers: {
      Authorization: "Bearer ",
    },
  }).get(url, {
    paramsSerializer: { serialize: paramsSerializer },
    ...getConfigWithCancelToken(cancelToken, config) });
}

export const createApi = () => {
  return axios
    .create({
      baseURL: '/checklist',
      headers: {
        Authorization: "Bearer TODO",
      },
    });
}
