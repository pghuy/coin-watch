import classes from "./CanNotFindItems.module.css";
const CanNotFindItems = (props) => {
  return (
    <div className={classes.container}>
      <img
        alt="icon"
        className={classes.img}
        src={
          "https://lh3.googleusercontent.com/uIioSr6RMpiY7lTDbHIIAbsq61haAnTHkLJeOy55v9tSifsjqZNnbWVnFHuDqDejBUhD6zptJBWWPSToZacOCUv9Qj3mVyTAGlAp=w600"
        }
        size={50}
      />
      <h1>
        Your search did not match any documents. <br></br> Make sure that all
        words are spelled correctly.
      </h1>
    </div>
  );
};

export default CanNotFindItems;
