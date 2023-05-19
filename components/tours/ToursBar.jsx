import React from "react";
import TourButton from "./helpers/TourButton";

const ToursBar = () => {
  return (
    <div className="mt-[32px] px-2 md:w-fit md:mx-auto">
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="w-[489px] flex bg-orange p-[4px] rounded-[40px]">
          <TourButton name="trabzon" text="طرابزون" />
          <TourButton name="istanbul" text="اسطنبول" />
          <TourButton name="antalya" text="انطاليا" />
          <TourButton name="groups" text="رحلات جماعية" />
          <TourButton name="kbodkia" text="كبودكيا" />
        </div>
      </div>
    </div>
  );
};

export default ToursBar;
