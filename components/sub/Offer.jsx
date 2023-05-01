import React from "react";

const Offer = () => {
  return (
    <div className="bg-deep py-[8px] md:py-[12px] text-white flex justify-center items-center gap-[12px] md:gap-[32px] px-2">
      <h1 className="text-[20px] md:text-[28px]">عروض الاسبوع</h1>
      <div className="flex flex-col gap-y-[12px]">
        <h4>خصم يصل الى 50%</h4>
        <div className="bg-orange flex justify-center items-center md:h-[40px] px-[10px] md:px-[20px] py-[10px] rounded-[8px] text-[16px]">
          العرض ساري لغاية 7 يوليو -2023
        </div>
      </div>
    </div>
  );
};

export default Offer;
