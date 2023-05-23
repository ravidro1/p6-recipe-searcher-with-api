import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function SearchSelectButton({
  data,
  searchDataObj,
  setSearchDataObj,
  category,
  arrayOfOption,
}) {
  const [searchValue, setSearchValue] = useState();
  const [showSelectText, setShowSelectText] = useState("");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const selectRef = useRef();

  const addValue = (item) => {
    if (searchDataObj[category].includes(item))
      setSearchDataObj({
        ...searchDataObj,
        [category]: searchDataObj[category].filter(
          (element) => element != item
        ),
      });
    else
      setSearchDataObj({
        ...searchDataObj,
        [category]: [...searchDataObj[category], item],
      });
  };

  const getSizeFromRef = (ref, attribute) => {
    if (ref && ref.current) return ref.current[attribute];
    return -1;
  };

  const getShowSelectText = () => {
    let text = "";
    searchDataObj[category].forEach(
      (element, index) =>
        (text +=
          element + (index < searchDataObj[category].length - 1 ? "," : ""))
    );

    if (text) setShowSelectText(text);
    else setShowSelectText("SELECT " + category.toUpperCase());
  };

  useEffect(() => {
    getShowSelectText();
  }, [searchDataObj]);

  useEffect(() => {
    setIsSelectorOpen(false);
  }, [data]);

  console.log(searchDataObj[category].length);
  return (
    <div className="relative my-4 w-[100%] text-2xl text-white sm:w-[24%]">
      <div
        ref={selectRef}
        className="flex h-[100%] w-[100%] overflow-hidden rounded-md"
      >
        <div style={{}} className="flex h-full w-[80%] bg-[#810CA8]">
          <p
            style={{
              color: searchDataObj[category].length ? "#fff" : "#ffffff7a",
              width: getSizeFromRef(selectRef, "offsetWidth") * 0.8,
            }}
            className="m-auto inline-block items-center overflow-hidden text-ellipsis whitespace-nowrap px-2"
          >
            {showSelectText}
          </p>
        </div>

        <div className="flex h-[100%] w-[20%] items-center justify-center bg-[#810CA8]">
          <button
            style={{
              transition: "transform 0.3s",
              transform: isSelectorOpen ? "rotateX(180deg)" : "rotateX(0deg)",
            }}
            onClick={() => setIsSelectorOpen(!isSelectorOpen)}
            className="flex h-full w-full items-center justify-center"
          >
            <svg
              className="h-[40%] w-[40%]"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </button>{" "}
        </div>
      </div>

      <div
        style={{
          transition: "height 0.4s",
          height: isSelectorOpen ? getSizeFromRef(selectRef, "offsetWidth") : 0,
        }}
        className="absolute z-40 flex w-full flex-col items-start overflow-hidden rounded-md bg-[#810ca83d] backdrop-blur-md"
      >
        <input
          placeholder="Search"
          className="aspect-[6/1] w-[100%] bg-transparent px-2"
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <ol className="max-h-[80%] w-[100%] overflow-auto py-3">
          {arrayOfOption.map((item, index) => {
            if (
              !searchValue ||
              item.toLowerCase().includes(searchValue.toLowerCase())
            )
              return (
                <li className="flex justify-between px-2" key={index}>
                  {item}
                  <input
                    onChange={() => addValue(item)}
                    checked={searchDataObj[category].includes(item)}
                    type="checkbox"
                  />
                </li>
              );
          })}
        </ol>
      </div>
    </div>
  );
}
