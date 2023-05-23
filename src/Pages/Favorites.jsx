import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AllRecipe from "../Components/AllRecipe";
// import OneRecipe from "./../Components/OneRecipe";

function Favorites({ favoritesArray, setFavoritesArray }) {
  function reset() {
    setFavoritesArray([]);
  }

  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center overflow-auto bg-[#2D033B]">
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="m-3 rounded-lg  bg-[#810CA8] p-3 px-5 text-white sm:w-fit"
        >
          {" "}
          Go To Home: Number Of Item: {favoritesArray.length}
        </button>

        <button
          onClick={reset}
          className="m-3 rounded-lg bg-[#810CA8] p-3 text-white sm:w-fit"
        >
          {" "}
          Clear List
        </button>

        {/* {favorite && <h1> Number Of Item: {favorite.length} </h1>} */}
      </div>
      <h1 className="w-full text-center text-4xl text-[#E5B8F4] sm:text-7xl">
        {" "}
        Favorites{" "}
      </h1>

      <AllRecipe
        inFavoritePage={true}
        recipe={favoritesArray}
        favoritesArray={favoritesArray}
        setFavoritesArray={setFavoritesArray}
      />

      {!favoritesArray.length && (
        <p className="my-20 text-base text-white sm:text-xl">
          {" "}
          The Favorite List Is Empty{" "}
        </p>
      )}
    </div>
  );
}

export default Favorites;
