import React from "react";
import { useG } from "../../../context/OurContext";

const TourButton = ({ name, text }) => {
  const { toursBar, setToursBar } = useG();

  return (
    <button
      onClick={() => setToursBar(name)}
      className={`outline-none py-[8px] px-[16px] h-[40px] text-[16px] text-white rounded-[32px] flex items-center justify-center ${
        toursBar === name && "text-black bg-white"
      }`}
    >
      <span className={`${toursBar === name && "text-black"}`}>{text}</span>
    </button>
  );
};

export default TourButton;
