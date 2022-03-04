import React from "react";

const FavContext = React.createContext({
  items: [],
  idFavButtonTrigger: null,
  addItem: (item) => {},
  removeItem: (id) => {},
  setFavButtonState: (id)=>{},
  clearItem: () => {},
});

export default FavContext;
