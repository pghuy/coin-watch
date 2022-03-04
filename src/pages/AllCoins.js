import React, { Fragment,useState, useEffect, useRef} from "react";
import FetchMainData from "../utilities/fetchMainData";
import MainTable from "../components/MainItems/MainTable";
import MainHeader from "../components/MainItems/MainHeader";
import Pagination from "../components/UI/Pagination";

const  AllCoins = () => {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const {
    initial,
    isSearching,
    setIsSearching,
    loading,
    paginatedData,
    nonPaginatedData,
  } = FetchMainData();
  console.log(paginatedData);

  const enteredSearchTermsRef = useRef();

  let searchItems;
  let enteredSearchTerms;
  const handleSearchChange = () => {
    enteredSearchTerms = enteredSearchTermsRef.current.value;
    if(enteredSearchTerms.length === 0){
      return;
    }
    searchItems = nonPaginatedData.filter((item) =>
      item.name.toLowerCase().includes(enteredSearchTerms)
    );
  };
  const searchFormHandler =() => {
    // const {} = FetchSearchData(searchItems);
    handleSearchChange();
    if (enteredSearchTerms.length === 0) {
      setIsSearching(false);
      return setItems(paginatedData[page]);
    }
    setItems(searchItems);
    setSearchedItems(searchItems);
    console.log(searchItems);
    setIsSearching(true);
  }

  useEffect(() => {
    if (!loading && !isSearching) {
      return setItems(paginatedData[page]);
    }
    if (!loading && searchedItems) {
      console.log("change");
      handleSearchChange();
      return setItems(searchItems);
    }
    // console.log(data);
    // console.log(items);
  }, [paginatedData, loading, page, searchedItems, searchItems]);

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      if (newPage > paginatedData.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;
      if (newPage < 0) {
        newPage = paginatedData.length - 1;
      }
      return newPage;
    });
  };
  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <Fragment > 
      <MainHeader
        searchFormHandler={searchFormHandler}
        enteredSearchTermsRef={enteredSearchTermsRef}
        isSearching={isSearching}
        searchedItems={searchedItems}
      />
      {!isSearching && (
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          paginatedData={paginatedData}
          page={page}
          handlePage={handlePage}
        />
      )}
     <MainTable items={items} /> 
    </Fragment>
  );
}
export default AllCoins;