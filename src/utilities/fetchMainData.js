import { useEffect, useState, useCallback } from "react";
import pagination from "./pagination";
import fetchData from './fetch'
const FetchMainData = () => {
  let mainUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false";
  const [paginatedData, setPaginatedData] = useState([]);
  const [nonPaginatedData, setNonPaginatedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initial, setInitial] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const processData = useCallback(async () => {
    const receivedData = await fetchData(mainUrl);
    // console.log(receivedData);
    setNonPaginatedData(receivedData);
    const paginatedData = pagination(receivedData);
    // console.log(paginatedData);
    setPaginatedData(paginatedData);
    setLoading(false);
    console.log(receivedData);
  },[paginatedData]);

  //? Fetch the data for every 5 seconds
  useEffect(() => {
    if (initial) {
        processData();
        setInitial(false);
    }
    const interval = setInterval(() => {
      processData();
    }, 5000);
    return () => {
      clearInterval(interval);
    // };
  }
    
  }, [isSearching]);

  return { initial, isSearching, setIsSearching, loading, paginatedData, nonPaginatedData };
};

export default FetchMainData;
