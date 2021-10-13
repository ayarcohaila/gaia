import axios from 'axios';
import swr from 'swr';
import { toast } from 'react-toastify';

const useSWR = (url, errorMessage = 'Something went wrong!') => {
  const handleRequest = async requestUrl => {
    const response = await axios.get(requestUrl);
    return response.data;
  };

  const { data, error } = swr(url, requestUrl => handleRequest(requestUrl), {
    refreshInterval: 60000,
    errorRetryCount: 5,
    errorRetryInterval: 60000,
    onError: () => {
      toast.error(errorMessage);
    }
  });

  const loading = !data && !error;

  return { data, loading, error };
};

export default useSWR;
