import { Routes, Route, Navigate } from "react-router-dom";
import FavProvider from './store/FavProvider'
import AllCoins from "./pages/AllCoins";
import YourFavItemsPage from "./pages/YourFavItemsPage";
function App() {
  return (
    <FavProvider >
    <Routes>
      <Route path="/" element={<Navigate to="/allcoins" replace />} />
      <Route path="/allcoins" element={<AllCoins />} />
      <Route path="/favcoins" element={<YourFavItemsPage />} />
    </Routes>
    </FavProvider >
  );
}

export default App;
