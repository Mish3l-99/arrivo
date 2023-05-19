import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const opaciVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
};

const Enjoy = () => {
  return (
    <div className="">
      <div className="wrapper border-b">
        <div className="py-[80px]">
          <div className="flex flex-col gap-[48px]">
            <h1 className="font-bold-600 text-[28px] sm:text-[36px] text-center">
              استمتع بتجربة سياحية لا تُنسى تتضمن:
            </h1>
            <motion.div
              variants={opaciVariants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-12 gap-x-[25px] sm:gap-x-[20px] gap-y-[32px]"
            >
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center gap-[12px] p-1 md:p-2 hover:shadow-md hover:translate-y-[-8px] duration-500 rounded-md cursor-pointer">
                <Image
                  alt=""
                  src="/icons/enjoy/support.svg"
                  height={44}
                  width={44}
                />
                <h4 className="font-bold-600 text-[18px]">دعم 24/7</h4>
                <p className="text-[14px] text-grey text-center">
                  نحن بجانبك دائمًا! استمتع بمساعدتنا الودودة والمستمرة على مدار
                  الساعة لتجربة سفر لا مشاكل فيها.
                </p>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center gap-[12px] p-1 md:p-2 hover:shadow-md hover:translate-y-[-8px] duration-500 rounded-md cursor-pointer">
                <Image
                  alt=""
                  src="/icons/enjoy/cashy.svg"
                  height={44}
                  width={44}
                />
                <h4 className="font-bold-600 text-[18px]">إلغاء مرن</h4>
                <p className="text-[14px] text-grey text-center">
                  لا تقلق بشأن تغيير الخطط. سياسات الإلغاء المرنة لدينا تمنحك
                  حرية التعديل بكل يسر.
                </p>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center gap-[12px] p-1 md:p-2 hover:shadow-md hover:translate-y-[-8px] duration-500 rounded-md cursor-pointer">
                <Image
                  alt=""
                  src="/icons/enjoy/stars.svg"
                  height={44}
                  width={44}
                />
                <h4 className="font-bold-600 text-[18px]">خبرة طويلة</h4>
                <p className="text-[14px] text-grey text-center">
                  اترك الأمور علينا! استفد من خبرتنا الواسعة في مجال السياحة
                  لتنظيم رحلة ساحرة ومليئة بالمرح.
                </p>
              </div>
              {/* one item */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center gap-[12px] p-1 md:p-2 hover:shadow-md hover:translate-y-[-8px] duration-500 rounded-md cursor-pointer">
                <Image
                  alt=""
                  src="/icons/enjoy/check.svg"
                  height={44}
                  width={44}
                />
                <h4 className="font-bold-600 text-[18px]">أمان و ضمان</h4>
                <p className="text-[14px] text-grey text-center">
                  اطمئن واستمتع برحلتك ! نحرص على توفير تجربة سفر آمنة وموثوقة
                  مع ضمان جودة الخدمات المقدمة.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
