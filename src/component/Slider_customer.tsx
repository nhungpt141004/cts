"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";

export default function CardSlider() {
  return (
    <Swiper
      slidesPerView={4} // Hiển thị 4 thẻ trên màn hình
      spaceBetween={16} // Khoảng cách giữa các thẻ
      loop={true} // Vòng lặp vô hạn
      autoplay={{
        delay: 3000, // Tự động cuộn sau 3 giây
        disableOnInteraction: false, // Không dừng khi người dùng tương tác
      }}
      modules={[FreeMode, Autoplay]} // Thêm module Pagination
      className="w-full "
    >
      <SwiperSlide>
        <div className="bg-white p-8 opacity-50">
          <img src="/Image/CMC.jpg" alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white p-8 opacity-50">
          <img src="/Image/FIS.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-8 flex justify-center opacity-50">
          <img src="/Image/CMC.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-8 flex justify-center opacity-50">
          <img src="/Image/FIS.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-8  flex justify-center opacity-50">
          <img src="/Image/CMC.jpg" alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white p-8 flex justify-center opacity-50">
          <img src="/Image/FIS.jpg" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
