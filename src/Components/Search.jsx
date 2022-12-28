import React, { useState } from 'react';

function Search({ setData }) {


    const [temp, setTemp] = useState({name: "", type: "", diet: "", cuisineType: ""});

    function submit(){


        const newData = {};
        newData.name = temp.name;
        newData.type = temp.type;
        newData.diet = temp.diet;
        newData.cuisineType = temp.cuisineType;
        
        setData(newData);
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>

                
            <input placeholder='Name' onChange={(e) => setTemp({...temp ,name: e.target.value})}/>

            <select name="CuisineType" id="" onChange={(e) => setTemp({...temp ,cuisineType: e.target.value})}>
                <option value=""> select CuisineType </option>
                <option value="Indian"> Indian </option>
                <option value="French"> French </option>
                <option value="Chinese"> Chinese </option>
                <option value="Asian"> Asian </option>
                <option value="British"> British </option>
                <option value="Italian"> Italian </option>
            </select>

            <select name="type" id="" onChange={(e) => setTemp({...temp ,type: e.target.value})}>
                <option value=""> select type </option>
                <option value="lunch"> lunch </option>
                <option value="dinner"> dinner </option>
                <option value="breakfast"> breakfast </option>
                <option value="snack"> snack </option>
            </select>
            <select name="diet" id="" onChange={(e) => setTemp({...temp ,diet: e.target.value})}>
                <option value=""> select diet </option>
                <option value="balanced"> balanced </option>
                <option value="high-protein"> high-protein </option>
                <option value="high-fiber"> high-fiber </option>
                <option value="low-fat"> low-fat </option>
                <option value="low-carb"> low-carb </option>
                <option value="low-sodium"> low-sodium </option>
            </select>

            <button onClick={submit}> search </button>
            
           
            </form>
        </div>
    );
}

export default Search;