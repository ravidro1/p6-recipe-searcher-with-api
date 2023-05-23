import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
import Favorites from "./Pages/Favorites";
import { Route, Routes } from "react-router-dom";
import Ingredients from "./Pages/Ingredients";
import DefaultPage from "./Pages/DefaultPage";

const LOCAL_STORAGE = "recipes-data";

function App() {
  const [favoritesArray, setFavoritesArray] = useState([]);
  const [favoriteUpdate, setFavoriteUpdate] = useState(false);

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    setFavoriteUpdate(true);
    if (temp) setFavoritesArray(temp);
  }, []);

  useEffect(() => {
    if (favoriteUpdate)
      localStorage.setItem(LOCAL_STORAGE, JSON.stringify(favoritesArray));
  }, [favoritesArray]);

  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              favoritesArray={favoritesArray}
              setFavoritesArray={setFavoritesArray}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoritesArray={favoritesArray}
              setFavoritesArray={setFavoritesArray}
            />
          }
        />
        <Route path="/ingredients/:product" element={<Ingredients />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </div>
  );
}

export default App;
