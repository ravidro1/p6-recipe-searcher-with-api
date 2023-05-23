import React, { useState } from "react";
import Search from "./../Components/Search";
import Fetch from "../Components/Fetch";
import AllRecipe from "./../Components/AllRecipe";
import { useNavigate } from "react-router-dom";

function HomePage({ favoritesArray, setFavoritesArray }) {
  const [recipe, setRecipe] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="h-full w-full overflow-auto bg-[#2D033B]">
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <button
          onClick={() => {
            navigate("/favorites");
          }}
          className="m-3 rounded-lg  bg-[#810CA8] p-3 px-5 text-white sm:w-fit"
        >
          Go To Favorites: Number Of Item: {favoritesArray.length}
        </button>

        <button
          disabled
          className="m-3 rounded-lg bg-[#810CA8] p-3 text-white sm:w-fit"
        >
          {" "}
          Number Of Item: {recipe && recipe.length}{" "}
        </button>

        {/* {favorite && <h1> Number Of Item: {favorite.length} </h1>} */}
      </div>

      <h1 className="w-full text-center text-7xl text-[#E5B8F4]"> Home </h1>
      <Search
        data={data}
        setData={setData}
        setLoading={setLoading}
        setRecipe={setRecipe}
      />

      {(data.name || data.type || data.diet || data.cuisineType) && (
        <Fetch data={data} setRecipe={setRecipe} setLoading={setLoading} />
      )}

      <AllRecipe
        loading={loading}
        inFavoritePage={false}
        favoritesArray={favoritesArray}
        recipe={recipe}
        setFavoritesArray={setFavoritesArray}
      />
    </div>
  );
}

export default HomePage;
