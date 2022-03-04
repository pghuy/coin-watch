import { useReducer } from "react";

import FavContext from "./fav-context";

const defaultFavState = {
  items: [],
  idFavButtonTrigger: null,
};

const favReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingFavItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingFavItem = state.items[existingFavItemIndex];
    let updatedItems;
    if (!existingFavItem) {
      updatedItems = state.items.concat(action.item);
    } else {
      return { items: state.items };
    }
    return { items: updatedItems };
  }
  if (action.type === "REMOVE") {
    const favNotRemoveItems = state.items.filter(
      (item) => item.id !== action.id
    );

    return { items: favNotRemoveItems };
  }
  if (action.type === "SET") {
    return { items: state.items, idFavButtonTrigger: action.id };
  }  
  if (action.type === "CLEAR") {
    return defaultFavState;
  }
  return defaultFavState;

};

const FavProvider = (props) => {
  const [favState, dispatchFavAction] = useReducer(favReducer, defaultFavState);
  const addItemToFavHandler = (item) => {
    dispatchFavAction({ type: "ADD", item: item });
  };

  const removeItemFromFavHandler = (id) => {
    dispatchFavAction({ type: "REMOVE", id: id });
  };
  const setStateFavButtonHandler = (id) => {
    dispatchFavAction({ type: "SET", id: id });
  };
  const clearItemFromFavHandler = (id) => {
    dispatchFavAction({ type: "CLEAR", id: id });
  };
  const favContext = {
    items: favState.items,
    idFavButtonTrigger: favState.idFavButtonTrigger,
    addItem: addItemToFavHandler,
    removeItem: removeItemFromFavHandler,
    setFavButtonState: setStateFavButtonHandler,
    clearItem: clearItemFromFavHandler,
  };

  return (
    <FavContext.Provider value={favContext}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavProvider;
