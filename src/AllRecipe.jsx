import React from 'react';
import OneRecipe from './OneRecipe';
import './oneRecipe.css';


function AllRecipe({recipe}) {
    
    const printOneRecipe = recipe.map((item, i) => <OneRecipe key={i} oneRecipe={item}/>);
    
    return (
        <div className='main'>
            {console.log(recipe[0])}
            {printOneRecipe}
        </div>
    );
}

export default AllRecipe;