import React, { useEffect } from "react";

function Fetch({data, setRecipe}) {

  let name = `${data.name}`;
  let type = data.type == "" ? "" :`&mealType=${data.type}`;
  let diet = data.diet == "" ? "" :`&diet=${data.diet}`;
  let cuisineType = data.cuisineType == "" ? "" : `&cuisineType=${data.cuisineType}`;


  useEffect(() => {
    console.log("load...");
    fetch(
      `https://api.edamam.com/search?q=${name}${cuisineType}${type}${diet}&app_id=ef8d01e7&app_key=1896f9e60211d1127bf80068d7b2418d`
    )
      .then((response) => response.json())
      .then((recipesData) => {
        setRecipe(recipesData.hits);
      });
  }, [ name , type , diet, cuisineType ]);

  return <div></div>;
}

export default Fetch;
