import "./App.css";
import {useEffect, useState} from "react";
import HomePage from "./Pages/HomePage";
import Favorites from "./Pages/Favorites";
import {Route, Routes} from "react-router-dom";
import DefualtPage from "./Pages/DefualtPage";
import Ingredients from "./Pages/Ingredients";
import {colors, ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffffff",
    },
  },
});

const LOCAL_STORAGE = "l";

function App() {
  const [favorite, setFavorite] = useState([]);
  const [favoriteUpdate, setFavoriteUpdate] = useState(false);

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    setFavoriteUpdate(true);
    if (temp) setFavorite(temp);
  }, []);

  useEffect(() => {
    if (favoriteUpdate)
      localStorage.setItem(LOCAL_STORAGE, JSON.stringify(favorite));
  }, [favorite]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                favorite={favorite}
                setFavorite={setFavorite}
              ></HomePage>
            }
          ></Route>
          <Route
            path="/favorites"
            element={
              <Favorites
                favorite={favorite}
                setFavorite={setFavorite}
              ></Favorites>
            }
          ></Route>
          <Route
            path="/ingredients/:product"
            element={<Ingredients></Ingredients>}
          ></Route>
          <Route path="*" element={<DefualtPage></DefualtPage>}>
            {" "}
          </Route>
        </Routes>

        <div className="bottom-bar">
          <p className="copyRight"> Ⓒ Ravid Rosenzweig </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
