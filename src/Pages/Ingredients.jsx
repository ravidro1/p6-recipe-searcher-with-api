import { Button } from "@mui/material";
import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import "./ingredients.css";

function Ingredients(props) {
  const loc = useLocation();

  const ingredients = loc.state.recipe.ingredients.map((item, i) => (
    <li key={i}> {item.text} </li>
  ));
  const label = loc.state.recipe.label;

  return (
    <div id="main-ingredients-page">
      <div className="main-ingredients">
        <h1 className="main-ingredients"> label {label} </h1>
        <ul className="main-ingredients"> {loc.state && ingredients} </ul>
      </div>

      <NavLink to={"/"} style={{textDecoration: "none"}}>
        <Button variant="contained"> Go Back To Home Page </Button>
      </NavLink>
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
