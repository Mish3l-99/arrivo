import Image from "next/image";
import React from "react";
import SlickSlider from "./sub/SlickSlider";
import { motion } from "framer-motion";

const posts = [
  {
    img: "/1.png",
    title: "دير سوميلا، اكتشف أكثر الأماكن إثارة للدهشة في طرابزون",
    description:
      "ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من حجوزات الإقامة المنتوعة بلإضل الأماكن والأسعار بأجمل الأماكن الساحية. ",
    author: "أشرف ماهر",
    createdAt: 1683999494,
  },
  {
    img: "/2.png",
    title: "دير سوميلا، اكتشف أكثر الأماكن إثارة للدهشة في طرابزون",
    description:
      "ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من حجوزات الإقامة المنتوعة بلإضل الأماكن والأسعار بأجمل الأماكن الساحية. ",
    author: "أشرف ماهر",
    createdAt: 1683999494,
  },
  {
    img: "/3.png",
    title: "دير سوميلا، اكتشف أكثر الأماكن إثارة للدهشة في طرابزون",
    description:
      "ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من حجوزات الإقامة المنتوعة بلإضل الأماكن والأسعار بأجمل الأماكن الساحية. ",
    author: "أشرف ماهر",
    createdAt: 1683999494,
  },
];

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -20,
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

const animateVariants = {
  hidden: {
    opacity: 0,
    translateY: -30,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.7,
      duration: 0.8,
    },
  },
};

const BlogShort = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    // swipeToSlide: false,

    // fade: true,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: "linear",

    // centerPadding: 30,

    pauseOnHover: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    rtl: true,
  };
  return (
    <div className="py-[80px] bg-[#F5F8FB]">
      <div className="wrapper">
        <div className="flex flex-col gap-y-[16px] md:items-center md:justify-center">
          <div className="flex flex-col md:items-center gap-[6px]">
            <p className="text-orange font-bold-500 text-[16px]">المقالات</p>
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="show"
              className="text-[28px] md:text-[36px] font-bold-600"
            >
              أبرز المقالات
            </motion.h2>
          </div>
        </div>
        <motion.div
          variants={animateVariants}
          initial="hidden"
          whileInView="show"
          className="mt-[48px]"
          dir="rtl"
        >
          <SlickSlider settings={settings}>
            {posts.reverse().map((post, i) => (
              <div key={i} className="mb-4 ">
                <div
                  dir="rtl"
                  className="relative border shadow-md flex flex-col gap-[20px] bg-white rounded-[12px] mx-[5px] p-[16px]"
                >
                  <div className="relative h-[276px] w-full">
                    <Image
                      alt=""
                      src={`/images/blog${post.img}`}
                      fill
                      className="rounded-t-[12px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h6 className="font-bold-600 text-[18px]">{post.title}</h6>
                    <p className="text-[12px] text-grey">
                      <span className="">{post.author}.</span> قبل{" "}
                      <span className="">12</span> ساعة.
                    </p>
                    <p className="text-[14px] text-grey">{post.description}</p>
                  </div>
                  <button className="flex items-center gap-x-[4px] py-[8px] px-[20px] border border-orange w-fit rounded-[8px] border-solid text-orange">
                    أكمل القراءة
                    <Image
                      alt=""
                      src="/icons/arrow-orange.svg"
                      height={24}
                      width={24}
                    />
                  </button>
                </div>
              </div>
            ))}
          </SlickSlider>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogShort;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  // console.log(className);
  return (
    <div
      onClick={onClick}
      className="absolute top-[-100px] left-0 z-[999] bg-white"
    >
      <div className="w-[40px] h-[40px]  cursor-pointer hover:scale-[0.95] duration-300 ease-in relative">
        <Image alt="" src="/icons/slick/arrow.png" fill />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[-100px] left-[48px] z-[999] bg-white"
      onClick={onClick}
    >
      <div className="w-[40px] h-[40px] cursor-pointer hover:scale-[0.95] duration-300 ease-in relative">
        <Image
          alt=""
          src="/icons/slick/arrow.png"
          className="rotate-[180deg]"
          fill
        />
      </div>
    </div>
  );
}
