import React from "react";
import { useNavigate } from "react-router-dom";

function DefaultPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center justify-around bg-[#2D033B] text-9xl text-white">
      <strong> 404 </strong>
      <p>page not found</p>
      <button
        onClick={navigate("/")}
        className="m-3 w-fit rounded-lg bg-[#810CA8] p-5 text-2xl text-white"
      >
        Go Back To Home Page
      </button>
    </div>
  );
}

export default DefaultPage;
