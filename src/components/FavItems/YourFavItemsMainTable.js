import { useContext, useState, useEffect } from "react";
import classes from "./YourFavItemsMainTable.module.css";
import Card from "../UI/Card";
import FavContext from "../../store/fav-context";
import useHttp from "../../hooks/use-http";
import { getFavContent } from "../../utilities/firebase-api";
import RemoveItemButton from "../UI/RemoveItemButton";
import FetchFavData from "../../utilities/fetchFavData";

const YourFavItemsMainTable = (props) => {
  const [Items, setItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const favCtx = useContext(FavContext);
  const setOfIds = favCtx.items.map((item) => item.id);
  const { data } = FetchFavData(setOfIds, favCtx.items);

  useEffect(() => {
    setItems(data);
  }, [data, favCtx.items]);

  console.log(setOfIds);
  console.log(favCtx.items);
  console.log(data);

  console.log(Items);
  // const {sendRequest, status}  = useHttp(getFavContent, true);
  // useEffect(()=>{
  //   const data = sendRequest();
  //   console.log(data)
  // },[])
  return (
    <div className={classes.mainTable}>
      {Items.map((item) => (
        <Card key={item.id}>
          <section>
            <div className={classes.coinNameCover}>
              <img
                src={item.image}
                className={classes.itemImage}
                alt="itemImage"
              ></img>
              <div className={classes.nameSymbol}>
                <div
                  className={classes.name}
                  onClick={(e) => {
                    e.preventDefault();
                    // window.location.href = `https://www.coingecko.com/en/coins/${item.id}`;
                    window.open(
                      `https://www.coingecko.com/en/coins/${item.id}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  {item.name}
                </div>
                <span className={classes.symbol}>{item.symbol}</span>
              </div>
              <RemoveItemButton
                className={classes.favButtonPosition}
                id={item.id}
              />
            </div>
            <h2 className={classes.price}>
              ${item.current_price}{" "}
              <span
                className={`${classes.PercentPriceChange} ${
                  item.price_change_percentage_24h > 0
                    ? `${classes.green}`
                    : `${classes.red}`
                }`}
              >
                {item.price_change_percentage_24h}%
              </span>
            </h2>
          </section>
        </Card>
      ))}
    </div>
  );
};

export default YourFavItemsMainTable;
