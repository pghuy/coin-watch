import { useContext, useEffect } from "react";
import classes from "./MainTable.module.css";
import Card from "../UI/Card";
import FavButton from "../UI/FavButton";
import FavContext from "../../store/fav-context";

const MainTable = (props) => {
  const favCtx = useContext(FavContext);
  const { items } = props;
  for (let i = 0; i < favCtx.items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (favCtx.items[i].id === items[j].id) {
        items[j].favState = true;
      }
    }
  }
  console.log(items);
  console.log(favCtx.items);
  return (
    <div className={classes.mainTable}>
      {items.map((item) => (
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
              <FavButton
                key={item.id}
                item={item}
                isSelected={item.favState ? item.favState : false}
                className={classes.favButtonPosition}
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

export default MainTable;
