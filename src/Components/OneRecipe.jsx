import React from "react";
import { useNavigate } from "react-router-dom";

function OneRecipe({ addOrRemoveFavorites, isRecipeInFavorite, oneRecipe }) {
  const recipesData = oneRecipe.recipe;
  const image = recipesData.image;
  const calories =
    recipesData.calories < 3
      ? recipesData.calories
      : Math.round(recipesData.calories);
  const label = recipesData.label;
  const cuisineType = recipesData.cuisineType;

  const navigate = useNavigate();
  return (
    <div className="card-container">
      <div className="card relative m-5 aspect-square w-[300px] max-w-[100vw] rounded-lg border bg-[#52057B] text-white">
        <section className="card-front-side absolute left-0 top-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-lg">
          <h1 className="h-[25%] w-[100%] p-2">
            <strong> {label} </strong>
          </h1>
          <img className="h-[75%] w-[100%]" id="image" src={image} alt="pic" />
        </section>

        <section className="card-back-side absolute left-0 top-0 flex h-full w-full  flex-col items-center justify-around overflow-hidden">
          <button
            className={"w-[50%] rounded-md bg-[#810CA8] p-2"}
            onClick={() => {
              addOrRemoveFavorites(oneRecipe);
            }}
          >
            {!isRecipeInFavorite ? "Add To Favorites" : "Remove From Favorites"}
          </button>

          <h1 className="">
            <strong> Calories: </strong> {calories}
          </h1>

          <h1 className="">
            <strong> Country: </strong> {cuisineType}
          </h1>

          <button
            onClick={() =>
              navigate(`/ingredients/${label}`, { state: oneRecipe })
            }
            className={"w-[50%] rounded-md bg-[#810CA8] p-2"}
          >
            {" "}
            To The Ingredients{" "}
          </button>
        </section>
      </div>
    </div>
  );
}

export default OneRecipe;
