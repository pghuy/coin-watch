import classes from "./NoCoinsShown.module.css";
const NoCoinsShown = (props) => {
  return (
    <div className={classes.container}>
      <img
        alt="icon"
        className={classes.img}
        src={
          "https://lh3.googleusercontent.com/jNoc-eXIHHFnHRExlOiStsXV0xuvjPEhyb2bBedx8FP0464i1xTtilRLR6eTX7KciOhX7zD0DnZak7-85bysFNk4ZnM3aKLUzTdORw=w600"
        }
        size={50}
      />
      <h1>
        You do not have any favorite coins yet. <br></br>Add a new coin to get
        started!{" "}
      </h1>
    </div>
  );
};

export default NoCoinsShown;
