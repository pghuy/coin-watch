import classes from "./YourFavItemsPage.module.css";
import YourFavItemsMainTable from "../components/FavItems/YourFavItemsMainTable";
import YourFavHeader from "../components/FavItems/YourFavHeader";

const YourFavItemsPage = (props) => {
  return (
    <div>
      <YourFavHeader />
      <YourFavItemsMainTable />
    </div>
  );
};

export default YourFavItemsPage;
