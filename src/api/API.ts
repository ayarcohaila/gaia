import { Axios } from 'axios';
import ApiClient from './ApiClient';
import {
  GetFirebaseAuthTokenRequest,
  GetFirebaseAuthTokenResponse
} from '~/api/schema/getFirebaseAuthToken';

// const apiGet = async <T>(apiClient: Axios, url: string): Promise<T> => {
//   return (await apiClient.get(url)).data;
// };

// const apiPost = async <T>(apiClient: Axios, url: string): Promise<T> => {
//   return (await apiClient.post(url)).data;
// };

const apiPostRequest = async <T, U>(apiClient: Axios, url: string, request: U): Promise<T> => {
  return (await apiClient.post(url, request)).data;
};

export const API = (authToken?: string, baseUrl?: string) => {
  const apiClient = ApiClient.getInstance(authToken, baseUrl);

  return {
    firebase: {
      getFirebaseAuthToken: (address: string) =>
        apiPostRequest<GetFirebaseAuthTokenResponse, GetFirebaseAuthTokenRequest>(
          apiClient,
          '/firebase/authToken',
          { address }
        )
    }
  };
};
