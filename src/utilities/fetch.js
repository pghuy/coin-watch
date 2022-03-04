const fetchData = async (url = null) => {
  const response = await fetch(url);
  const receivedData = await response.json();
  return receivedData;
};

export default fetchData;
