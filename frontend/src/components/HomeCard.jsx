import React from "react";
import rightarrow from "../assets/rightarrow.svg";
import { useNavigate } from "react-router-dom";
const HomeCard = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto my-6  flex height-auto justify-center items-center ">
      <div className="text-center ">
        <div class="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-xl p-10">
          <h1 className="text-auto p-8 text-white font-semibold md:p-40 md:text-4xl ">
            Dreamy destinations at dreamy prices!
          </h1>
        </div>
        <div className="justify-center mx-auto my-12 ">
          <span className=" text-2xl md:text-4xl">Ready for an unforgettable trip?</span>
          <div className="flex justify-center my-4">
            <img
              src={rightarrow}
              className="md:w-[50px] w-auto h-auto hover:cursor-pointer"
              onClick={()=>navigate('/packages')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
