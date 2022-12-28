import React, {useState} from "react";
import OneRecipe from "./OneRecipe";
import "./oneRecipe.css";

function AllRecipe({recipe, setFavorite, InFavorite, favorite}) {
  const printOneRecipe = recipe.map((item, i) => {
    // console.log(item);
    return (
      <OneRecipe
        key={i}
        index={i}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        InFavorite={InFavorite}
        oneRecipe={item}
      />
    );
  });

  function removeFromFavorites(oneRecipe) {
    setFavorite((prev) => prev.filter((item, index) => oneRecipe != item));
    console.log("remove");
  }

  function addToFavorites(itemToAdd) {
    let isFound = false;

    favorite.map((item) => {
      // console.log(item.recipe.label);
      // console.log(itemToAdd.recipe.label);
      if (item.recipe.label == itemToAdd.recipe.label) return (isFound = true);
    });

    if (!isFound) {
      setFavorite((prev) => [...prev, itemToAdd]);
      console.log("add");
    } else {console.log("the item already in favorites!!!")}
  }
  return <div className="main">{printOneRecipe}</div>;
}

export default AllRecipe;
