import { useEffect, useState, useCallback } from "react";
import fetchData from "./fetch";

const FetchFavData = (setOfIds, favCtxItems) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initial, setInitial] = useState(true);
  const string = setOfIds.join("%2C");
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${string}`;
  const processData = async () => {
    const receivedData = await fetchData(url);
    setData(receivedData);
    setLoading(false);
    
  };
  useEffect(() => {
    if (setOfIds.length > 0) {
      processData();
    }
    if (setOfIds.length === 0) {
      return setData([]);
    }
    const interval = setInterval(() => {
      if (setOfIds.length > 0) {
        processData();
      }
      if (setOfIds.length === 0) {
        return;
      }
    }, 5000);
    return () => {
      clearInterval(interval);
      // };
    };
  }, [favCtxItems]);
  return { data, initial, loading };
};

export default FetchFavData;
