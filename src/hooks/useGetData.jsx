import { useEffect, useState } from "react";

const useGetData = ({ url }) => {
  const [data, setData] = useState([]);
  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}${url}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    getData();
  }, []);

  return { data };
};

export default useGetData;
