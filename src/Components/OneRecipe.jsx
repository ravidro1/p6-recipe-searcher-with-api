import React from "react";
import "./oneRecipe.css";

function OneRecipe({ addToFavorites, removeFromFavorites, InFavorite, oneRecipe, index}) {
  //destructering
  let isInFavorite = InFavorite;
  const id = index;
  const recipesData = oneRecipe.recipe;
  const image = recipesData.image;
  const calories = recipesData.calories < 3 ? recipesData.calories : Math.round(recipesData.calories);
  const label = recipesData.label;
  const cuisineType = recipesData.cuisineType;
  const ingredients = recipesData.ingredients.map((item, i) => (
    <li key={i}> {item.text} </li>
  ));

  return (
    <div className="all">
      {/* {console.log(label)} */}

      {!isInFavorite ? 
        <button onClick={() => addToFavorites(oneRecipe)}> Add To Favorites </button> :
         <button onClick={() => removeFromFavorites(oneRecipe)}> Remove From Favorites </button>}

      <p>
        <strong> {label} </strong>
      </p>
      <hr />
      <img src={image} alt="pic" />
      <p>
        <strong> Calories: </strong> {calories}
      </p>
      <p>
        <strong> Country: </strong> {cuisineType}
      </p>
      <ul>
        <strong> ingredients </strong> {ingredients}
      </ul>
    </div>
  );
}

export default OneRecipe;
