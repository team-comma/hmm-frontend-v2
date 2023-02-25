import axios from 'axios';

import { API_SUFFIX } from '../constants';

export const instace = axios.create({
  baseURL: API_SUFFIX.BASE_URL,
  withCredentials: true,
});

export type APIResponseStatusType = 'SUCCESS' | 'FAILED';

export interface APIResponse<T = unknown> {
  status: APIResponseStatusType;
  message: string;
  result: T;
}

export interface APIErrorResponse<T = unknown> {
  status: 'FAILED';
  message: string;
  result?: T;
}

export const setAPIAccessToken = (token: string | null) => {
  if (token) {
    instace.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instace.defaults.headers.common.Authorization;
  }
};
