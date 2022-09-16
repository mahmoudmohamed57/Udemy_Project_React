import { useState, useEffect } from 'react';

export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const useFetchData = (type) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      let cur = await fetchData(`http://localhost:3001/${type}`);
      setData(cur);
      setLoading(false);
    })();
  }, []);
  return [data, setData, loading];
};

export default useFetchData;
