import React, { useState } from "react";
import SearchSelectButton from "./SearchSelectButton";

function Search({ data, setData, loading, setLoading, setRecipe }) {
  const [searchDataObj, setSearchDataObj] = useState({
    name: "",
    type: [],
    diet: [],
    cuisineType: [],
  });

  function submitSearch() {
    const newData = {};
    newData.name = searchDataObj.name;
    newData.type = searchDataObj.type;
    newData.diet = searchDataObj.diet;
    newData.cuisineType = searchDataObj.cuisineType;
    setData(newData);
  }

  return (
    <div className="flex justify-center">
      <form
        className="flex w-[80%] flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          placeholder="Search"
          className="h-[50px] w-[100%] rounded-md px-2"
          onChange={(e) =>
            setSearchDataObj({ ...searchDataObj, name: e.target.value })
          }
        />

        <div className="flex flex-col justify-between sm:flex-row">
          <SearchSelectButton
            data={data}
            searchDataObj={searchDataObj}
            setSearchDataObj={setSearchDataObj}
            category={"diet"}
            arrayOfOption={["snack", "dinner", "lunch", "breakfast"]}
          />
          <SearchSelectButton
            data={data}
            searchDataObj={searchDataObj}
            setSearchDataObj={setSearchDataObj}
            category={"cuisineType"}
            arrayOfOption={[
              "Indian",
              "French",
              "Chinese",
              "Asian",
              "British",
              "Italian",
            ]}
          />
          <SearchSelectButton
            data={data}
            searchDataObj={searchDataObj}
            setSearchDataObj={setSearchDataObj}
            category={"type"}
            arrayOfOption={[
              "low-sodium",
              "low-carb",
              "low-fat",
              "high-fiber",
              "high-protein",
              "balanced",
            ]}
          />
          <button
            className="w-[100%] rounded-lg bg-[#810CA8] p-2 text-xl text-white sm:w-[24%] my-4"
            onClick={submitSearch}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
