import React from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <div className={classes["btn-container"]}>
      <button className={classes.btnPage} onClick={props.prevPage}>
        Prev
      </button>
      <p>
        {props.page + 1} of {props.paginatedData.length}
      </p>
      <button className={classes.btnPage} onClick={props.nextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
