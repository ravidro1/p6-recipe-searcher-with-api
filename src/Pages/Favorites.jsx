import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import AllRecipe from "../Components/AllRecipe";
// import OneRecipe from "./../Components/OneRecipe";
import "./favorites.css";

function Favorites({favorite, setFavorite}) {
  //   const loc = useLocation();
  // const [favorites, setFavorites] = useState([]);

  function reset(){
    setFavorite([])
  }

  return (
    <div>
      <h1> Favorites </h1>
      {favorite && <h1> Number Of Item: {favorite.length} </h1>}

      <NavLink to={"/"}>
        {/* <NavLink to={"/favorites"} state={{favoriteData: favorite}}> */}{" "}
        <button> To HomePage </button>{" "}
      </NavLink>

      <button onClick={reset}> Clear List </button>
      {/* {console.log(favorite)} */}
      {/* {console.log(loc.state.favoriteData)} */}
      {/* {loc.state && loc.state} */}
      {/* {favorites && favorites} */}

      <div className="main">
        <AllRecipe
          recipe={favorite}
          setFavorite={setFavorite}
          InFavorite={true}
        />

        {/* {favorite.map((item, i) => (
          <OneRecipe
            key={i}
            InFavorite={true}
            oneRecipe={item}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Favorites;
