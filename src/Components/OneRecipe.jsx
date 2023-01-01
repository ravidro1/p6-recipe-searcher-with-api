import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";
import "./oneRecipe.css";

function OneRecipe({
  addToFavorites,
  removeFromFavorites,
  InFavorite,
  oneRecipe,
  index,
  setAddFavoriteClick,
}) {
  const isInFavorite = InFavorite;
  const id = index;
  const recipesData = oneRecipe.recipe;
  const image = recipesData.image;
  const calories =
    recipesData.calories < 3
      ? recipesData.calories
      : Math.round(recipesData.calories);
  const label = recipesData.label;
  const cuisineType = recipesData.cuisineType;

  const card = (
    <div className="card">
      <div className="front-side-of-card card-faces">
        <Typography id="head-line-of-card" gutterBottom>
          <strong id="head-line-of-card"> {label} </strong>
        </Typography>
        <hr />
        <img id="image" src={image} alt="pic" />
      </div>

      <div className="back-side-of-card card-faces">
        {!isInFavorite ? (
          <Button
            color="secondary"
            className="favorite-buttons"
            onClick={() => {
              addToFavorites(oneRecipe);
            }}
          >
            {" "}
            Add To Favorites{" "}
          </Button>
        ) : (
          <Button
            color="secondary"
            className="favorite-buttons"
            onClick={() => removeFromFavorites(oneRecipe)}
          >
            {" "}
            Remove From Favorites{" "}
          </Button>
        )}
        <Typography className="theTextInTheHiddenCard" component="div">
          <strong> Calories: </strong> {calories}
        </Typography>

        <Typography className="theTextInTheHiddenCard" sx={{mb: 1.5}}>
          <strong> Country: </strong> {cuisineType}
        </Typography>

        <NavLink
          className="ingredients-link"
          to={`/ingredients/${label}`}
          state={oneRecipe}
        >
          <Button color="secondary" className="ingredients-button">
            {" "}
            To The Ingredients{" "}
          </Button>
        </NavLink>
      </div>
    </div>
  );

  return (
    <div id="card-container" variant="elevation">
      {" "}
      {card}{" "}
    </div>
  );
}

export default OneRecipe;
