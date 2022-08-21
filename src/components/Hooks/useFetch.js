import { useEffect, useState } from "react";

export default function useFetch(url, method, headers) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = await response.json();
        setLoading(false);
        setResult(data);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    }
    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    error,
    result,
  };
}
