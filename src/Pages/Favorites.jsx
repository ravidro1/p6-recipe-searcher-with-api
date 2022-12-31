import {Button} from "@mui/material";
import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import AllRecipe from "../Components/AllRecipe";
// import OneRecipe from "./../Components/OneRecipe";
import "./favorites.css";

function Favorites({favorite, setFavorite}) {
  //   const loc = useLocation();
  // const [favorites, setFavorites] = useState([]);

  function reset() {
    setFavorite([]);
  }

  // const ani = animation: myAnim 2s ease 0s 1 normal forwards;

  return (
    <div>
      <div className="favorite-page-header-favorite-count-clear-button">
        <NavLink style={{textDecoration: "none"}} to={"/"}>
          <Button className="showFavoriteCount" variant="contained">
            {" "}
            Go To Home: Number Of Item: {favorite.length}{" "}
          </Button>{" "}
        </NavLink>

        {/* {favorite && <h1> Number Of Item: {favorite.length} </h1>} */}
        <Button
          className="favorite-page-clear-button"
          variant="contained"
          onClick={reset}
        >
          {" "}
          Clear List{" "}
        </Button>
      </div>

      <h1 className="favorite-page-head-line"> Favorites </h1>

      
        <AllRecipe
          recipe={favorite}
          setFavorite={setFavorite}
          InFavorite={true}
        />
      

        {!favorite.length && <p id="empty-notification"> The Favorite List Is Empty </p>}
    </div>
  );
}

export default Favorites;
