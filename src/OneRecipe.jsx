import React from "react";
import "./oneRecipe.css";

function OneRecipe({ oneRecipe }) {
  const recipe1 = oneRecipe.recipe;
  const image = recipe1.image;
  //   const digest = recipe1.digest;
  const calories = recipe1.calories < 3 ? recipe1.calories : Math.round(recipe1.calories);
  const label = recipe1.label;
  const cuisineType = recipe1.cuisineType;
//   const timeToMake = recipe1.timeToMake;
  const ingredients = recipe1.ingredients.map((item, i) => (
    <li key={i}> {item.text} </li>
  ));

  // {console.log(recipe1.digest)}

  return (
    <div className="all">
      {/* {console.log(label)} */}
      <p>
        {" "}
        <strong> {label} </strong>{" "}
      </p>
      <hr />
      <img src={image} alt="pic" />
      {/* <p> digest {digest} </p> */}
      <p> <strong> Calories: </strong> {calories} </p>
      <p> <strong> Country: </strong> {cuisineType} </p>
      <ul>
        {" "}
        <strong> ingredients </strong> {ingredients}{" "}
      </ul>
    </div>
  );
}

export default OneRecipe;
