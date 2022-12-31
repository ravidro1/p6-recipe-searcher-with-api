import React, {useState} from "react";
import OneRecipe from "./OneRecipe";
import "./allRecipe.css";
import { Typography } from "@mui/material";

function AllRecipe({recipe, setFavorite, InFavorite, favorite, loading}) {
  function removeFromFavorites(oneRecipe) {
    setFavorite((prev) => prev.filter((item, index) => oneRecipe != item));
    console.log("remove");
  }

  function addToFavorites(itemToAdd) {
    let isFound = false;

    favorite.map((item) => {
      if (item.recipe.label == itemToAdd.recipe.label) return (isFound = true);
    });

    if (!isFound) {
      setFavorite((prev) => [...prev, itemToAdd]);
      console.log("add");
    } else {
      console.log("the item already in favorites!!!");
    }
  }

  const [isStart, setIsStart] = useState(false);
  if(loading && !isStart) setIsStart(true);

  return (
    <div>
      <div className="main">
        {loading && (
            <div id="load">
              <div>G</div>
              <div>N</div>
              <div>I</div>
              <div>D</div>
              <div>A</div>
              <div>O</div>
              <div>L</div>
            </div>
            
        )}

        {(!recipe.length && !loading && isStart)  && <Typography id="notFound"> Not Found Any Recipe </Typography>}
        {recipe &&
          recipe.map((item, i) => {
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
          })}
      </div>
    </div>
  );
}

export default AllRecipe;
