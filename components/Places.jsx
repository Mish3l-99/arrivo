import Image from "next/image";
import React, { useRef, useState } from "react";

const Places = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();
    const x = event.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="py-[80px] bg-[#F5F8FB] ">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[20px]">
          <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-[20px] lg:max-w-[387px]">
            <div className="relative sm:w-fit">
              <p className="text-orange font-bold-500 text-[16px] ">
                وجهات سياحية
              </p>
              <h2 className="font-bold-600 text-[28px] md:text-[36px]">
                وجهات سياحية مميزة في الشمال التركي
              </h2>
            </div>
            <p className="text-grey text-[16px]">
              أكثر الأماكن المميزة والخلابة في الشمال التركي مع{" "}
              <span className="font-bold-600 text-orange">
                إطلالات طبيعية ساحرة
              </span>{" "}
              تخطف الألباب.
            </p>
          </div>
          {/* actuall places here */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="overflow-x-scroll scroll-smooth py-[10px] scrollbar-hide"
          >
            <div className="min-w-fit flex flex-row gap-x-[20px]">
              <div className="rounded-[20px] p-[16px] bg-white shadow-md">
                <div className="h-[246.17px] w-[203.56px] sm:h-[468px] sm:w-[387px] relative">
                  <Image alt="" src="/images/places/tra.png" fill />
                  <div className="absolute bottom-[20px] md:bottom-[64px] w-full text-center font-bold-600 text-[14px] md:text-[28px] text-white">
                    TRABZON
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] p-[16px] bg-white shadow-md">
                <div className="h-[246.17px] w-[203.56px] sm:h-[468px] sm:w-[387px] relative">
                  <Image alt="" src="/images/places/istanbu.png" fill />
                  <div className="absolute bottom-[20px] md:bottom-[64px] font-bold-600 text-[14px] md:text-[28px] w-full text-center text-white">
                    ISTANBUL
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] p-[16px] bg-white shadow-md">
                <div className="h-[246.17px] w-[203.56px] sm:h-[468px] sm:w-[387px] relative">
                  <Image alt="" src="/images/places/cloud.png" fill />
                  <div className="absolute bottom-[20px] md:bottom-[64px] w-full text-center font-bold-600 text-[14px] md:text-[28px] text-white">
                    PLACE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
