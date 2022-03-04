import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import NoCoinsShown from "./NoCoinsShown";
import FavContext from "../../store/fav-context";
import classes from "./YourFavHeader.module.css";
const YourFavHeader = (props) => {
  const favCtx = useContext(FavContext);
  return (
    <div className={classes.header}>
      <div className={classes.titleAndIcons}>
        <h1 className={classes.title}>Your Favorite Coins</h1>
        <Link to="/allcoins" className={classes.AiFillHome}>
          <AiFillHome size={70} />
        </Link>
      </div>
      {favCtx.items.length === 0 && <NoCoinsShown />}
    </div>
  );
};

export default YourFavHeader;
