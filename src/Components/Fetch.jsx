import React, { useEffect } from "react";

function Fetch({ data, setRecipe, setLoading }) {
  let name = `${data.name}`;
  let type = data.type.length
    ? data.type.map((item) => `&mealType=${item}`).join("")
    : "";
  let diet = data.diet.length
    ? data.diet.map((item) => `&diet=${item}`).join("")
    : "";
  let cuisineType = data.cuisineType.length
    ? data.cuisineType.map((item) => `&cuisineType=${item}`).join("")
    : "";

  useEffect(() => {
    setLoading(true);
    setRecipe([]);
    console.log("load...");
    fetch(
      `https://api.edamam.com/search?q=${name}${cuisineType}${type}${diet}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    )
      .then((response) => response.json())
      .then((recipesData) => {
        setLoading(false);
        setRecipe(recipesData.hits);
      });
  }, [name, type, diet, cuisineType]);

  return <div></div>;
}

export default Fetch;
