import React, { useState } from "react";
import SlideShow from "../../Components/Slideshow/SlideShow";
import Services from "../Services/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function LandingPage() {
  const [Data, setData] = useState([
    {
      img: "./tintuc/tintuc1.jpg",
      title: "TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      day: "24/06/2024",
      hour: "09:26",
    },
    {
      img: "./tintuc/tintuc1.jpg",
      title: "TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      day: "24/06/2024",
      hour: "09:26",
    },
    {
      img: "./tintuc/tintuc1.jpg",
      title: "TRONG PHINDI CASSIA CÓ GÌ MÀ SÁNG TẠO ĐẾN THẾ?",
      day: "24/06/2024",
      hour: "09:26",
    },
  ]);
  const [DataimgQuan, setDataimgQuan] = useState([
    "./hinhanhquan/ha1.jpg",
    "./hinhanhquan/ha2.jpg",
    "./hinhanhquan/ha3.jpg",
    "./hinhanhquan/ha4.jpg",
  ]);
  return (
    <div className="max-w-[1920px] m-[0_auto] overflow-hidden relative">
      <SlideShow />
      <Services />
      <div className="flex items-stretch flex-wrap">
        <div className="img_quan w-[50%]">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper w-full"
          >
            {DataimgQuan.map((itemhaq, index) => {
              return (
                <SwiperSlide className="w-full">
                  <img
                    src={itemhaq}
                    alt=""
                    className="h-[460px] w-full object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div
          className="tintuc w-[50%]"
          style={{
            backgroundImage:
              'url("https://www.highlandscoffee.com.vn/vnt_upload/weblink/BrandFresh/News_Banner.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" py-[55px] px-[15px] h-[auto]">
            <div className="pl-[100px] max-w-[585px] w-full float-left ">
              <div className="toptitle mb-[15px] flex items-center justify-between">
                <h2 className="block text-xl font-bold uppercase font-custom whitespace-nowrap">
                  TIN MỚI NHẤT
                </h2>
                <NavLink
                  className="nav-link block text-sm font-normal  underline whitespace-nowrap"
                  to="/news"
                >
                  <span className="pr-2.5 relative  whitespace-nowrap">
                    Xem toàn bộ
                  </span>
                </NavLink>
              </div>
              <div className="flex flex-col gap-2">
                {Data.map((item, index) => (
                  <div key={index} className="mb-[15px]">
                    <div className="">
                      <div className="img_tintuc w-[120px] float-left mr-[15px]">
                        <div className="relative pt-[66.6666666%] overflow-hidden">
                          <a href="">
                            <img
                              src="https://www.highlandscoffee.com.vn/vnt_upload/news/06_2024/_PhinDiCassia/HCO_7745_PHINDI_CASSIA_SOCIAL_WEBSITE_470X314.png"
                              alt=""
                              className="absolute top-0 left-0 w-full transition border-0 max-w-full"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="caption overflow-hidden">
                        <div className="title mb-[5px]">
                          <h3>
                            <a
                              href=""
                              className="text-base block max-h-[48px] font-bold"
                            >
                              PHINDI CASSIA - QUẾ ẤM PHIN ÊM, PHONG VỊ ĐỘC ĐÁO
                            </a>
                          </h3>
                        </div>
                        <div className="date text-[13px] leading-[21px]">
                          <span className="pl-5 relative">14/06/2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="form">
                <form>
                  <input
                    className="w-full bg-white pl-[10px] pr-[15px] border-none h-9 truncate text-[12px] leading-[22px]"
                    style={{ maxWidth: "calc(100% - 130px)" }}
                    type="email"
                    placeholder="Nhập email của bạn để nhận thông tin"
                  />

                  <button className="bg-[#53382c] w-32 h-9 bg-brown text-white uppercase border-none transition text-[14px] leading-[22px] duration-300 ease-linear">
                    GỬI
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
