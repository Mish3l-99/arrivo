import Image from "next/image";
import React from "react";
import { useG } from "../context/OurContext";

import { motion } from "framer-motion";

const imgVariants = {
  hidden: {
    opacity: 0,
    translateX: 40,
  },
  show: {
    opacity: 1,
    translateX: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0.8 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.5,
      duration: 0.2,
    },
  },
};

const serviceVariants = {
  hidden: { translateY: -20, opacity: 0 },
  show: {
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  const { screenWidth } = useG();
  return (
    <div className="py-[80px]">
      <div className="wrapper">
        <div className="flex gap-[20px] items-center">
          <motion.div
            variants={imgVariants}
            initial="hidden"
            whileInView="show"
            className="hidden md:block"
          >
            <div className="h-[396px] w-[386px] relative">
              <Image alt="" src="/images/services/illus.png" fill />
            </div>
          </motion.div>
          <div className="head flex flex-col gap-[20px] ">
            <div className="relative sm:w-fit">
              <p className="text-orange font-bold-500 text-[16px] ">
                أهم خدماتنا
              </p>
              <h2 className="font-bold-600 text-[28px] md:text-[36px]">
                نقدم لكم خدمات مميزة
              </h2>
              <div className="absolute left-0 top-[-24px] sm:left-[-125px] sm:top-[1px] lg:top-[-30px] lg:left-[-166px]">
                <div className="h-[45.37px] w-[93.22px] sm:h-[63.08px] sm:w-[129.62px] lg:h-[80.66px] lg:w-[165.74px] relative rotate-[60deg] sm:rotate-[16deg] lg:rotate-[20deg]">
                  <Image
                    alt=""
                    src={`/icons/designs/${
                      screenWidth > 640 ? "big-arr.svg" : "arr.svg"
                    }`}
                    fill
                  />
                </div>
              </div>
            </div>
            <p className="text-[16px] text-grey">
              ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
              الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف العالم.
            </p>

            {/* services grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-12 gap-y-[26px] gap-x-[31px]"
            >
              <motion.div
                variants={serviceVariants}
                className="col-span-12 md:col-span-6 flex flex-col"
              >
                <div className="group cursor-pointer transition-all flex items-center gap-x-[20px] mb-2">
                  <div className="p-[7px] bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                    <Image
                      alt=""
                      src="/icons/services/baloon.svg"
                      height={36}
                      width={36}
                    />
                  </div>
                  <h5 className="font-bold-600 text-[28px] group-hover:text-orange duration-300">
                    برامج سياحية
                  </h5>
                  <Image
                    alt=""
                    src="/icons/services/up.svg"
                    height={31}
                    width={31}
                    className="hidden group-hover:flex transition-all duration-300"
                  />
                </div>
                <p className="text-grey text-[14px]">
                  ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                  الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                  العالم.
                </p>
              </motion.div>
              <motion.div
                variants={serviceVariants}
                className="col-span-12 md:col-span-6 flex flex-col"
              >
                <div className="group cursor-pointer transition-all flex items-center gap-x-[20px] mb-2">
                  <div className="p-[7px] bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                    <Image
                      alt=""
                      src="/icons/services/baloon.svg"
                      height={36}
                      width={36}
                    />
                  </div>
                  <h5 className="font-bold-600 text-[28px] group-hover:text-orange duration-300">
                    رحلات جماعية
                  </h5>
                  <Image
                    alt=""
                    src="/icons/services/up.svg"
                    height={31}
                    width={31}
                    className="hidden group-hover:flex transition-all duration-300"
                  />
                </div>
                <p className="text-grey text-[14px]">
                  ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                  الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                  العالم.
                </p>
              </motion.div>
              <motion.div
                variants={serviceVariants}
                className="col-span-12 md:col-span-6 flex flex-col"
              >
                <div className="group cursor-pointer transition-all flex items-center gap-x-[20px] mb-2">
                  <div className="p-[7px] bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                    <Image
                      alt=""
                      src="/icons/services/baloon.svg"
                      height={36}
                      width={36}
                    />
                  </div>
                  <h5 className="font-bold-600 text-[28px] group-hover:text-orange duration-300">
                    رحلات جماعية
                  </h5>
                  <Image
                    alt=""
                    src="/icons/services/up.svg"
                    height={31}
                    width={31}
                    className="hidden group-hover:flex transition-all duration-300"
                  />
                </div>
                <p className="text-grey text-[14px]">
                  ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                  الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                  العالم.
                </p>
              </motion.div>
              <motion.div
                variants={serviceVariants}
                className="col-span-12 md:col-span-6 flex flex-col"
              >
                <div className="group cursor-pointer transition-all flex items-center gap-x-[20px] mb-2">
                  <div className="p-[7px] bg-white border-2 border-solid border-gray-700 service-shadow group-hover:border-orange group-hover:shadow-none rounded-md duration-300">
                    <Image
                      alt=""
                      src="/icons/services/baloon.svg"
                      height={36}
                      width={36}
                    />
                  </div>
                  <h5 className="font-bold-600 text-[28px] group-hover:text-orange duration-300">
                    رحلات جماعية
                  </h5>
                  <Image
                    alt=""
                    src="/icons/services/up.svg"
                    height={31}
                    width={31}
                    className="hidden group-hover:flex transition-all duration-300"
                  />
                </div>
                <p className="text-grey text-[14px]">
                  ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من
                  الخدمات المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف
                  العالم.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
