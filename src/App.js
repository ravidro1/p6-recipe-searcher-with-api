import './App.css';
import { useState } from 'react';
import Search from './Search';
import Fetch from './Fetch';
import AllRecipe from './AllRecipe';

function App() {

  const [name, setName] = useState();
  const [type, setType] = useState();
  const [cal, setCal] = useState();
  const [diet, setDiet] = useState();
  const [cuisineType, setCuisineType] = useState();

  const [recipeFound, setRecipeFound] = useState();
  
  const [recipe, setRecipe] = useState();


  // const [timeToMake, setTimeToMake] = useState();






  return (
    <div className="App">
      <Search setName={setName} setType={setType} setCal={setCal} setDiet={setDiet} setCuisineType={setCuisineType}/>
      {/* <p> {name} </p>
      <p> {type} </p>
      <p> {cal} </p>
      <p> {diet} </p> */}

      {(name || type || cal || diet || cuisineType)  && <Fetch name={name} cuisineType={cuisineType} type={type} cal={cal} diet={diet} setRecipe={setRecipe}/>}
      {/* {<Fetch name={name} type={type} cal={cal} diet={diet} setRecipe={setRecipe}/>} */}
      {recipe && <AllRecipe recipe={recipe}/>}

    </div>
  );
}

export default App;
