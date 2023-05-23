import React, { useState } from "react";
import OneRecipe from "./OneRecipe";
import Loading from "./Loading";

function AllRecipe({
  loading,
  inFavoritePage,
  recipe,
  favoritesArray,
  setFavoritesArray,
}) {
  function addOrRemoveFavorites(oneRecipe) {
    if (
      favoritesArray.some(
        (element) => element.recipe.label == oneRecipe.recipe.label
      )
    ) {
      setFavoritesArray((prev) =>
        prev.filter((element) => oneRecipe != element)
      );
    } else {
      setFavoritesArray((prev) => [...prev, oneRecipe]);
    }
  }

  return (
    <div className="flex w-full flex-wrap justify-center">
      {loading ? (
        <Loading />
      ) : (
        !recipe?.length &&
        !inFavoritePage && (
          <h1 className="my-20 text-white">Not Found Any Recipe</h1>
        )
      )}

      {recipe?.map((item, i) => {
        return (
          <OneRecipe
            key={i}
            index={i}
            addOrRemoveFavorites={addOrRemoveFavorites}
            isRecipeInFavorite={favoritesArray.some(
              (element) => element.recipe.label == item.recipe.label
            )}
            oneRecipe={item}
          />
        );
      })}
    </div>
  );
}

export default AllRecipe;
