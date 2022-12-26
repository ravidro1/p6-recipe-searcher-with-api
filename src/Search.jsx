import React, { useState } from 'react';

function Search(props) {


    const [tempName, setTempName] = useState("");
    const [tempType, setTempType] = useState("");
    const [tempDiet, setTempDiet] = useState("");
    const [tempCal, setTempCal] = useState("");
    const [tempCuisineType, setTempCuisineType] = useState("");

    // const [tempTimeToMake, setTempTimeToMake] = useState("");

    // const [tempType, setTempType] = useState();

    function submit(){
        props.setName(tempName);
        props.setCal(tempCal);
        props.setDiet(tempDiet);
        props.setType(tempType);
        props.setCuisineType(tempCuisineType);
        
        // props.setTimeToMake(tempTimeToMake);
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>

                
            <input placeholder='Name' onChange={(e) => setTempName(e.target.value)}/>
            <input type='number' placeholder='Max Cal' onChange={(e) => setTempCal(e.target.value)}/>
            {/* <input placeholder='Max Time To Make' onChange={(e) => setTempTimeToMake(e.target.value)}/> */}

            <select name="CuisineType" id="" onChange={(e) => setTempCuisineType(e.target.value)}>
                <option value=""> select CuisineType </option>
                <option value="Indian"> Indian </option>
                <option value="French"> French </option>
                <option value="Chinese"> Chinese </option>
                <option value="Asian"> Asian </option>
                <option value="British"> British </option>
                <option value="Italian"> Italian </option>
            </select>

            <select name="type" id="" onChange={(e) => setTempType(e.target.value)}>
                <option value=""> select type </option>
                <option value="lunch"> lunch </option>
                <option value="dinner"> dinner </option>
                <option value="breakfast"> breakfast </option>
                <option value="snack"> snack </option>
            </select>
            <select name="diet" id="" onChange={(e) => setTempDiet(e.target.value)}>
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