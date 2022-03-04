import React from "react";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import { BsBookmarkHeartFill } from "react-icons/bs";
import CanNotFindItems from "./CanNotFindItems";
const Header = (props) => {
  console.log("Header");
  console.log(props.searchItems);
  return (
    <div>
      <div className={classes.header}>
        <form
          className={classes.searchForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className={classes.title}>Search your coins</h1>
          <input
            type="text"
            className={classes.searchInput}
            ref={props.enteredSearchTermsRef}
            onChange={props.searchFormHandler}
          />
        </form>
        <Link to="/favcoins" className={classes.BsBookmarkHeartFill}>
          <BsBookmarkHeartFill size={80} />
        </Link>
      </div>
      {props.isSearching && props.searchedItems.length === 0 && (
        <CanNotFindItems />
      )}
    </div>
  );
};

export default React.memo(Header);
