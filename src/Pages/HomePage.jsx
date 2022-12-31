import React, {useState} from "react";
import Search from "./../Components/Search";
import Fetch from "../Components/Fetch";
import AllRecipe from "./../Components/AllRecipe";
import {NavLink} from "react-router-dom";
import {Button, createTheme} from "@mui/material";
import "./homePage.css";

function HomePage({favorite, setFavorite}) {
  const [recipe, setRecipe] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  // const { palette } = createTheme();
  // const { augmentColor } = palette;
  // const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
  // const theme = createTheme({
  //   palette: {
  //     anger: createColor('#F40B27'),
  //     apple: createColor('#5DBA40'),
  //     steelBlue: createColor('#5C76B7'),
  //     violet: createColor('#BC00A3'),
  //   },
  // });

  return (
    <div className="home-page-main-div">
      <div className="header-favorite-count-recipe-count">
        <NavLink className="show-Favorite-Count-link" to={"/favorites"}>
          <Button lassName="show-Favorite-Count-button" variant="contained">
            {" "}
            Go To Favorites: Number Of Item: {favorite.length}{" "}
          </Button>{" "}
        </NavLink>

        <Button variant="contained" className="showRecipeCount">
          {" "}
          Number Of Item: {recipe && recipe.length}{" "}
        </Button>
      </div>

      <h1 className="head-line"> Home </h1>
      <Search setData={setData} setLoading={setLoading} setRecipe={setRecipe} />

      {(data.name || data.type || data.diet || data.cuisineType) && (
        <Fetch data={data} setRecipe={setRecipe} setLoading={setLoading} />
      )}

      <AllRecipe
        favorite={favorite}
        recipe={recipe}
        setFavorite={setFavorite}
        InFavorite={false}
        loading={loading}
      />
    </div>
  );
}

export default HomePage;
