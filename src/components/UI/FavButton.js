import { useState, useContext, useEffect } from "react";
import FavContext from "../../store/fav-context";
import classes from "./FavButton.module.css";
import useHttp from '../../hooks/use-http';
import {pushFavContent} from '../../utilities/firebase-api';
import { AiFillHeart } from "react-icons/ai";

const FavButton = (props) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);
  const favCtx = useContext(FavContext);
  const {sendRequest,status } = useHttp (pushFavContent);
  const favHandler = () => {
    console.log(props.item);
    if (isSelected === false) {
      favCtx.addItem({
        key: props.item.id,
        id: props.item.id,
        favState: true,
        image: props.item.image,
        name: props.item.name,
        symbol: props.item.symbol,
        current_price: props.item.current_price,
        price_change_percentage_24h: props.item.price_change_percentage_24h,
      })
    } else {
      favCtx.removeItem(props.item.id);
    }
    setIsSelected(!isSelected);
  };
  useEffect(() => {
    if (favCtx.idFavButtonTrigger === props.item.id) {
      setIsSelected(false);
    }
  }, [favCtx.idFavButtonTrigger]);

  return (
    <div className={`${classes.FavButton} ${props.className}`}>
      <AiFillHeart
        size={40}
        className={
          isSelected === true ? `${classes.iconSelected}` : `${classes.icon}`
        }
        onClick={favHandler}
      />
    </div>
  );
};

export default FavButton;
