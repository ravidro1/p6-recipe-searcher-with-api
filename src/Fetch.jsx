import React, { useEffect } from "react";

function Fetch(props) {
  // console.log(props.search);

  let name = `${props.name}`;
  let type = props.type == "" ? "" :`&mealType=${props.type}`;
  let diet = props.diet == "" ? "" :`&diet=${props.diet}`;
  let cal = props.cal == "" ? "" : `&calories=0-${props.cal}`;
  let cuisineType = props.cuisineType == "" ? "" : `&cuisineType=${props.cuisineType}`;
//   let timeToMake = props.timeToMake == "" ? "" : `&time=${props.timeToMake}`


  useEffect(() => {
    console.log("load...");
    // console.log(cal);
    fetch(
    //   `https://api.edamam.com/search?q=${props.name}&to=${props.cal}&diet=${props.diet}&mealType=${props.type}&app_id=ef8d01e7&app_key=1896f9e60211d1127bf80068d7b2418d`
      `https://api.edamam.com/search?q=${name}${cuisineType}${type}${diet}&app_id=ef8d01e7&app_key=1896f9e60211d1127bf80068d7b2418d`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.hits.length > 0);
        props.setRecipe(data.hits);
      });
  }, [ name , type , diet , cal, cuisineType ]);

  return <div></div>;
}

export default Fetch;
