"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

export default function CardSlider() {
  return (
    <Swiper
      slidesPerView={1} // Hiển thị 1 thẻ trên màn hình
      spaceBetween={16} // Khoảng cách giữa các thẻ
      loop={true} // Vòng lặp vô hạn
      autoplay={{
        delay: 3000, // Tự động cuộn sau 3 giây
        disableOnInteraction: false, // Không dừng khi người dùng tương tác
      }}
      pagination={{
        clickable: true, // Cho phép click vào dấu chấm để chuyển slide
      }}
      modules={[FreeMode, Autoplay, Pagination]}
      className="w-full px-4"
    >
      <SwiperSlide>
        <div >
          <div className="relative w-[420px] h-[400px] bg-white overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-500 to-purple-400 p-4 flex items-center">
              <h2 className="text-white text-2xl text-center ml-9 font-bold w-3/4 leading-normal">
                Triển khai giải pháp trục tích hợp ESB
              </h2>
            </div>

            {/* Content */}
            <div className="mt-7 ml-12 w-[290px] text-center text-gray-700 leading-loose">
              Cung cấp khả năng gọi dịch vụ đồng bộ và không đồng bộ: Các dịch
              vụ có thể được triển khai bởi hàng loạt các công nghệ khác nhau.
            </div>
            <div>
              <img
                src="/Image/ESB.jpg"
                alt="ESB"
                className="w-28 h-28 rounded-full border-4 border-white ml-32 shadow-md"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[420px] h-[500px]">
          <div className="relative w-[420px] h-[400px] bg-white overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-500 to-purple-400 p-4 flex items-center">
              <h2 className="text-white text-center text-2xl ml-9 font-bold w-3/4 leading-normal">
                Tham gia thực hiện chuyển đổi số
              </h2>
            </div>

            {/* Content */}
            <div className="mt-7 ml-12 w-[290px] text-center text-gray-700 leading-loose">
              Chuyển đổi số đang là &ldquo;hot trend&rdquo; những năm gần đây,
              CTS đã thực hiện chuyển đổi số cho các lĩnh vực như: Tài chính
              ngân hàng, giáo dục, đa khoa...
            </div>
            <div>
              <img
                src="/Image/corebanking.jpg"
                alt="core banking"
                className="w-28 h-28 rounded-full border-4 border-white ml-32 shadow-md"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[420px] h-[500px]">
          <div className="relative w-[420px] h-[400px] bg-white overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-500 to-purple-400 p-4 flex items-center">
              <h2 className="text-white text-center text-2xl ml-9 font-bold w-3/4 leading-normal">
                Triển khai giải pháp cổng thanh toán
              </h2>
            </div>

            {/* Content */}
            <div className="mt-7 ml-12 text-center w-[290px] text-gray-700 leading-loose">
              Giải pháp cổng thanh toán trực tuyến do CTS phát triển là giải
              pháp có tính an toàn cao, hạn chế các rủi ro trong quá trình thanh
              toán.
            </div>
            <div>
              <img
                src="/Image/trienkhaithanhtoan.jpg"
                alt="payment gateway"
                className="w-28 h-28 rounded-full border-4 border-white ml-32 shadow-md"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[420px] h-[500px]">
          <div className="relative w-[420px] h-[400px] bg-white overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-500 to-purple-400 p-4 flex items-center">
              <h2 className="text-white text-2xl text-center ml-9 font-bold w-3/4 leading-normal">
                Triển khai nền tảng Backbase cho ngân hàng
              </h2>
            </div>

            {/* Content */}
            <div className="mt-7 ml-12 w-[290px] text-center text-gray-700 leading-loose">
              Giải pháp Backbase Việt Nam đầy đủ và toàn diện nhằm cung cấp cho
              ngân hàng và các tổ chức tài chính một ngân hàng tương tác trên
              nền tảng số.
            </div>
            <div>
              <img
                src="/Image/backbase.jpg"
                alt="backbase"
                className="w-28 h-28 rounded-full border-4 border-white ml-32 shadow-md"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
