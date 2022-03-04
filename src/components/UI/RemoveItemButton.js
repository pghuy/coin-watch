import { useContext } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import FavContext from "../../store/fav-context";
import classes from "./RemoveItemButton.module.css";

const RemoveItemButton = (props) => {
  const favCtx = useContext(FavContext);
  const removeHandler = () => {
    favCtx.removeItem(props.id);
    favCtx.setFavButtonState(props.id);
  };
  return (
    <div className={`${classes.removeButton} ${props.className}`}>
      <IoIosRemoveCircle
        size={50}
        className={classes.icon}
        onClick={removeHandler}
      />
    </div>
  );
};

export default RemoveItemButton;
