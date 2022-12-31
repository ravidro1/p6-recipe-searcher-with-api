import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, {useState} from "react";
import "./search.css";

function Search({setData, loading, setLoading, setRecipe}) {
  const [temp, setTemp] = useState({
    name: "",
    type: [],
    diet: [],
    cuisineType: []
  });

  function submit() {
    const newData = {};
    newData.name = temp.name;
    newData.type = temp.type;
    newData.diet = temp.diet;
    newData.cuisineType = temp.cuisineType;
    setData(newData);


  }

  function seleteHandel(item, tempCat) {
    if (tempCat.indexOf(item) > -1) {
      tempCat = tempCat.filter((type, index) => index != tempCat.indexOf(item));
    } else {
      tempCat = [...tempCat, item];
    }
  }

  return (
    <div>
      <form id="formDiv" onSubmit={(e) => e.preventDefault()}>
        <div id="inputDiv">
          <TextField
            className="inputs"
            variant="outlined"
            label="Name"
            onChange={(e) => setTemp({...temp, name: e.target.value})}
          />

          <FormControl className="inputs">
            <InputLabel id="select-CuisineType">Cuisine Type</InputLabel>
            <Select 
              multiple
              label="CuisineType"
              value={temp.cuisineType}
              onChange={(e) => setTemp({...temp, cuisineType: e.target.value})}
              renderValue={(selected) => selected.join(", ")}
            >
              {[
                "Indian",
                "French",
                "Chinese",
                "Asian",
                "British",
                "Italian",
              ].map((item) => (
                <MenuItem key={item} value={item}>
                  <Checkbox
                    onClick={() => seleteHandel(item, temp.cuisineType)}
                    checked={temp.cuisineType.indexOf(item) > -1}
                  />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="inputs">
            <InputLabel id="select-MealType">Meal Type</InputLabel>
            <Select
              multiple
              label="MealType"
              value={temp.type}
              onChange={(e) => setTemp({...temp, type: e.target.value})}
              renderValue={(selected) => selected.join(", ")}
            >
              {["snack", "dinner", "lunch", "breakfast"].map((item) => (
                <MenuItem key={item} value={item}>
                  <Checkbox
                    onClick={() => seleteHandel(item, temp.type)}
                    checked={temp.type.indexOf(item) > -1}
                  />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="inputs">
            <InputLabel id="select-Diet">Diet Type</InputLabel>
            <Select
              multiple
              label="Diet"
              value={temp.diet}
              onChange={(e) => setTemp({...temp, diet: e.target.value})}
              renderValue={(selected) => selected.join(", ")}
            >
              {[
                "low-sodium",
                "low-carb",
                "low-fat",
                "high-fiber",
                "high-protein",
                "balanced",
              ].map((item) => (
                <MenuItem key={item} value={item}>
                  <Checkbox
                    onClick={() => seleteHandel(item, temp.diet)}
                    checked={temp.diet.indexOf(item) > -1}
                  />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button onClick={submit} variant="contained">
          {" "}
          search{" "}
        </Button>
      </form>
    </div>
  );
}

export default Search;
