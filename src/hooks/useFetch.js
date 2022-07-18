import { useEffect, useState } from "react";
import { API_URL } from '../config'

function useFecth (url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/${url}`)
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Something went wrong (${response.status})`);
        }
      )
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    error,
    loading,
  }
}


export default useFecth;