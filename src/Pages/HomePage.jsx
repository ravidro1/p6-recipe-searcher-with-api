import React, { useEffect, useState } from "react";
import Search from "./../Components/Search"
import Fetch from "../Components/Fetch";
import AllRecipe from "./../Components/AllRecipe"
import { NavLink } from "react-router-dom";

function HomePage({favorite, setFavorite}) {
    const [recipe, setRecipe] = useState([]);
    const [data, setData] = useState({});



// state={{favorite: favorite, setFavorite: setFavorite}}
  return (
    <div>
    <h1> Home </h1>
    <h1> Number Of Item: {recipe.length} </h1>

      <NavLink to={"/favorites"}>
      {/* <NavLink to={"/favorites"} state={{favoriteData: favorite}}> */}
        {" "}
        <button> to favorites </button>{" "}
      </NavLink>

      {/* {console.log(favorite)} */}

      <Search setData={setData} />
      {(data.name ||
        data.type ||
        data.diet ||
        data.cuisineType) && (
        <Fetch data={data} setRecipe={setRecipe} />
      )}
      {recipe && (
        <AllRecipe favorite={favorite} recipe={recipe} setFavorite={setFavorite} InFavorite={false} />
      )}

      {/* {console.log(recipe)} */}
    </div>
  );
}

export default HomePage;
