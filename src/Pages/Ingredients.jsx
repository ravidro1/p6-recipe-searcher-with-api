import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Ingredients() {
  const loc = useLocation();

  const ingredients = loc.state.recipe.ingredients.map((item, i) => (
    <li key={i}> {item.text} </li>
  ));
  const label = loc.state.recipe.label;

  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center justify-start  bg-[#2D033B] p-10 text-2xl text-white">
      <div className="h-[80%] overflow-auto">
        <h1> label {label} </h1>
        <ul> {loc.state && ingredients} </ul>
      </div>

      <button
        onClick={() => {
          navigate("/");
        }}
        className="m-3 h-[10%] w-fit rounded-lg bg-[#810CA8] p-3 px-5 text-white"
      >
        {" "}
        Go Back To Home Page
      </button>

      <div className="flex h-[10%] w-[100%] items-center">
        <p className="copyRight"> Ⓒ Ravid Rosenzweig </p>
      </div>
    </div>
  );
}

export default Ingredients;

{
  /* <Typography variant="body2">
            <strong> ingredients </strong> {ingredients}
          </Typography>
        */
  // {label: label, ingredients: ingredients}
}
