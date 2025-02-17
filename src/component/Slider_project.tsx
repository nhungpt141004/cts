"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";

export default function CardSlider() {
  return (
    <Swiper
      slidesPerView={2} // Hiển thị 2 thẻ trên màn hình
      spaceBetween={16} // Khoảng cách giữa các thẻ
      loop={true} // Vòng lặp vô hạn
      autoplay={{
        delay: 3000, // Tự động cuộn sau 3 giây
        disableOnInteraction: false, // Không dừng khi người dùng tương tác
      }}
      modules={[FreeMode, Autoplay]} // Thêm module Pagination
      className="w-full flex justify-between"
    >
      <SwiperSlide>
        <div className="w-[556px] h-[317px] p-4">
          <div className="relative w-[556px] h-[317px] bg-white overflow-hidden">
            {/* Header */}
            <div>
              <div className="relative bg-gradient-to-r from-orange-500 to-purple-400 p-4 flex items-center">
                <h2 className="text-white text-2xl ml-5 font-bold w-3/4 leading-normal">
                  Triển khai giải pháp trục <br /> tích hợp ESB
                </h2>
                {/* Thẻ màu nằm dưới ảnh và bên phải */}
                <div className="absolute mt-[140px] left-[330px] w-[250px] h-[35px] bg-gradient-to-r from-[#D77D9C] to-purple-400 p-4">
                  {/*Tam giác*/}
                  <div className="absolute top-[1px] -left-[1px] w-0 h-0 border-t-[35px] border-t-transparent border-l-[35px] border-l-white"></div>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="relative">
                    <img
                      src="/Image/ESB.jpg"
                      alt="ESB"
                      className="w-28 h-28 mt-24 mr-5 rounded-full border-4 border-white shadow-md"
                    />
                    <div className="absolute inset-0 rounded-full border-2 -m-2 mr-3 border-purple-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-5 ml-10 w-[300px] text-gray-700 leading-loose">
              Cung cấp khả năng gọi dịch vụ đồng bộ và không đồng bộ: Các dịch
              vụ có thể được triển khai bởi hàng loạt các công nghệ khác nhau.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[556px] h-[317px] p-4">
          <div className="relative w-[556px] h-[317px] bg-white overflow-hidden">
            {/* Header */}
            <div>
              <div className="relative bg-gradient-to-r from-orange-500 to-purple-400 p-4 flex items-center">
                <h2 className="text-white text-2xl ml-5 font-bold w-3/4 leading-normal">
                  Tham gia thực hiện <br /> chuyển đổi số
                </h2>
                {/* Thẻ màu nằm dưới ảnh và bên phải */}
                <div className="absolute mt-[140px] left-[330px] w-[250px] h-[35px] bg-gradient-to-r from-[#D77D9C] to-purple-400 p-4">
                  {/*Tam giác*/}
                  <div className="absolute top-[1px] -left-[1px] w-0 h-0 border-t-[35px] border-t-transparent border-l-[35px] border-l-white"></div>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="relative">
                    <img
                      src="/Image/corebanking.jpg"
                      alt=""
                      className="w-28 h-28 mt-24 mr-5 rounded-full border-4 border-white shadow-md"
                    />
                    <div className="absolute inset-0 rounded-full border-2 -m-2 mr-3 border-purple-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-7 ml-9 w-[290px] text-gray-700 leading-loose">
              Chuyển đổi số đang là &ldquo;hot trend&rdquo; những năm gần đây,
              CTS đã thực hiện chuyển đổi số cho các lĩnh vực như: Tài chính
              ngân hàng, giáo dục, đa khoa...
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[556px] h-[317px] p-4">
          <div className="relative w-[556px] h-[317px] bg-white overflow-hidden">
            {/* Header */}
            <div>
              <div className="relative bg-gradient-to-r from-orange-500 to-purple-400 p-4 flex items-center">
                <h2 className="text-white text-2xl ml-5 font-bold w-3/4 leading-normal">
                  Triển khai giải pháp <br /> cổng thanh toán
                </h2>
                {/* Thẻ màu nằm dưới ảnh và bên phải */}
                <div className="absolute mt-[140px] left-[330px] w-[250px] h-[35px] bg-gradient-to-r from-[#D77D9C] to-purple-400 p-4">
                  {/*Tam giác*/}
                  <div className="absolute top-[1px] -left-[1px] w-0 h-0 border-t-[35px] border-t-transparent border-l-[35px] border-l-white"></div>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="relative">
                    <img
                      src="/Image/trienkhaithanhtoan.jpg"
                      alt=""
                      className="w-28 h-28 mt-24 mr-5 rounded-full border-4 border-white shadow-md"
                    />
                    <div className="absolute inset-0 rounded-full border-2 -m-2 mr-3 border-purple-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-7 ml-9 w-[290px] text-gray-700 leading-loose">
              Giải pháp cổng thanh toán trực tuyến do CTS phát triển là giải
              pháp có tính an toàn cao, hạn chế các rủi ro trong quá trình thanh
              toán.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[556px] h-[317px] p-4">
          <div className="relative w-[556px] h-[317px] bg-white overflow-hidden">
            {/* Header */}
            <div>
              <div className="relative bg-gradient-to-r from-orange-500 to-purple-400 p-4 flex items-center">
                <h2 className="text-white text-2xl ml-5 font-bold w-3/4 leading-normal">
                  Triển khai nền tảng <br />
                  Backbase cho ngân hàng
                </h2>
                {/* Thẻ màu nằm dưới ảnh và bên phải */}
                <div className="absolute mt-[140px] left-[330px] w-[250px] h-[35px] bg-gradient-to-r from-[#D77D9C] to-purple-400 p-4">
                  {/*Tam giác*/}
                  <div className="absolute top-[1px] -left-[1px] w-0 h-0 border-t-[35px] border-t-transparent border-l-[35px] border-l-white"></div>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="relative">
                    <img
                      src="/Image/backbase.jpg"
                      alt=""
                      className="w-28 h-28 mt-24 mr-5 rounded-full border-4 border-white shadow-md"
                    />
                    <div className="absolute inset-0 rounded-full border-2 -m-2 mr-3 border-purple-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-7 ml-9 w-[290px] text-gray-700 leading-loose">
              Giải pháp Backbase Việt Nam đầy đủ và toàn diện nhằm cung cấp cho
              ngân hàng và các tổ chức tài chính một ngân hàng tương tác trên
              nền tảng số.
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
