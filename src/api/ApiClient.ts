import axios from 'axios';
import { apiUrl } from '~/config/config';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

class ApiClient {
  getInstance = (authToken?: string, baseUrl?: string) => {
    let params = {
      maxContentLength: 100000,
      timeout: 60000
    };

    const headers: any = {};

    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    return axios.create({
      ...params,
      baseURL: baseUrl ?? apiUrl,
      headers: headers
    });
  };
}

export default new ApiClient();
