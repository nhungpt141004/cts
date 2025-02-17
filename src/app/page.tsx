"use client";
import { useState, useEffect } from "react";
import Header from "@/component/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import clsx from "clsx";
import Slider_project from "@/component/Slider_project";
import Slider_project_repon from "@/component/Slider_project_repon";
import Slider_customer from "@/component/Slider_customer";
import Slider_customer_repon from "@/component/Slider_customer_repon";

export default function Home() {
  // Khai báo mảng slides chứa thông tin slider
  const slides = [
    {
      title: "Phát triển\nứng dụng web",
      description: "",
      image: "/Image/slider1.png",
    },
    {
      title: "Phân tích\nxử lý dữ liệu",
      description: "",
      image: "/Image/slider2.png",
    },
    {
      title: "Dịch vụ\nlưu trữ đám\nmây",
      description: "",
      image: "/Image/slider3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Cập nhật ngay khi component được mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Landing Page Section */}
      <div
        className={clsx(
          "Landing_page relative h-[700px] md:w-full flex items-center justify-center",
          { "mt-28": isSmallScreen } // ✅ Kiểm tra màn hình an toàn
        )}
        style={{
          background: "linear-gradient(135deg, #ffad86 0%, #e5a268 100%)",
        }}
      >
        <div className="absolute top-0 left-0 w-full">
          <Header />
        </div>

        {/* Hình tròn mờ */}
        <div className="absolute top-[-10px] left-5 md:left-[88px] w-[100px] h-[100px] bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-8 w-44 h-44 bg-white opacity-10 rounded-full"></div>
        <div className="hidden md:block absolute top-1/2 left-96 w-52 h-52 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-[120px] right-1/3 w-[130px] h-[130px] bg-white opacity-10 rounded-full"></div>

        {/* Nội dung chính */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:pl-32 absolute bottom-3">
          {/* Text & Button */}
          <div className=" text-white w-[350px] text-center pb-3 md:text-left md:mt-[-270px] ">
            <h1 className="text-5xl font-bold leading-tight">
              {slides[activeIndex].title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="mt-2 text-lg">{slides[activeIndex].description}</p>
            <button className="mt-6 px-6 py-3 bg-white text-orange-500 rounded-full shadow-lg">
              Liên hệ chúng tôi
            </button>
          </div>

          {/* Swiper Carousel */}
          <div className="relative w-[380px] h-[400px] md:w-[700px] md:h-[500px] ">
            <Swiper
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              modules={[EffectFade, Autoplay]}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain rounded-xl md:h-[500px] h-[250px] max-w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F2F9] py-24 md:px-14 px-5">
        <div>
          <img src="/Image/thanh vien.jpg" alt="" className="rounded-2xl" />
          <h1 className="text-[#6C6A72] text-3xl md:text-5xl font-bold py-2">
            “Chúng tôi là một đội ngũ năng động”
          </h1>
          <div className="hidden md:block w-full h-[5px] mb-1 bg-gradient-to-l from-[#ae8fff] to-[#f37125] inline-block"></div>
          <div className="text-[#6c6a72] pt-2">
            <p className="indent-4">
              Công ty Cổ phần Dịch vụ và Công Nghệ CTS được ra đời vào năm 2023
              nhằm cung cấp dịch vụ lưu trữ và vận dụng các nền tảng công nghệ
              4.0 tiên tiến.
            </p>
            <p className="indent-4">
              Nhận thức được tiềm năng và cả thách thức trên hành trình đổi mới
              của thế giới tương lai. Chúng tôi - những con người giàu nhiệt
              huyết và có niềm đam mê lớn đối với công nghệ luôn không ngừng tìm
              kiếm những cách thức mới, cải tiến công nghệ để đưa đến cho khách
              hàng giá trị cách tân và những dịch vụ tuyệt hảo nhất.
            </p>
            <p className="indent-4">
              CTS luôn tự hào là đơn vị hàng đầu trong lĩnh vực kinh doanh công
              nghệ và tiên phong trong quá trình phát triển.
            </p>
          </div>
        </div>
        <div className="mt-60 ">
          <div className="px-54 flex flex-col justify-center items-center">
            <div className="flex">
              <img src="/Image/star-icon.png" alt="" />
              <p className="text-orange-500 font-bold text-lg">
                Tại sao chọn CTS
              </p>
            </div>
            <p className="text-[#6C6A72] text-3xl md:text-5xl font-bold py-2 text-center">
              Làm hài lòng khách hàng là niềm <br className="hidden md:block" />{" "}
              hạnh phúc của chúng tôi!
            </p>
          </div>
          <div className="py-10">
            <div className="flex flex-col md:justify-between md:flex-row pl-1 md:gap-5 gap-5">
              <div className="relative flex flex-col items-center text-center w-full md:w-[376px] h-[298px] bg-white overflow-hidden group transition-all duration-500 border-[1px] border-orange-500 md:border-none">
                {/* Lớp phủ nền cam trượt từ dưới lên */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#eb7f26] transition-all duration-500 ease-in-out group-hover:h-full"></div>

                {/* Tiêu đề nằm trên cùng */}
                <h2 className="text-2xl font-bold text-[#6C6A72] pt-8 relative z-20 group-hover:text-white transition-all duration-500">
                  Sản phẩm
                </h2>

                {/* Vòng tròn chứa logo */}
                <div className="relative z-10 flex items-center justify-center -mt-5">
                  <div className="w-24 h-24 bg-[#F4F2F9] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-[#ed9751]">
                    {/* Logo sản phẩm */}
                    <img
                      src="/Image/icon-product-50.png"
                      alt="Logo sản phẩm"
                      className="w-12 h-12 mt-10 object-contain transition-all duration-500 ease-in-out group-hover:scale-110 "
                    />
                  </div>
                </div>

                {/* Nội dung mô tả */}
                <p className="text-[#6c6a72] mt-6 px-4 relative z-20 transition-all duration-500 group-hover:text-white">
                  Chất lượng cao, thiết kế trau chuốt, đảm bảo tính thẩm mỹ, phù
                  hợp thị hiếu và nhu cầu sử dụng.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center w-full md:w-[376px] h-[298px] bg-white overflow-hidden group transition-all duration-500 border-[1px] border-orange-500 md:border-none">
                {/* Lớp phủ nền cam trượt từ dưới lên */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#eb7f26] transition-all duration-500 ease-in-out group-hover:h-full"></div>

                {/* Tiêu đề nằm trên cùng */}
                <h2 className="text-2xl font-bold text-[#6C6A72] pt-8 relative z-20 group-hover:text-white transition-all duration-500">
                  Giải pháp
                </h2>

                {/* Vòng tròn chứa logo */}
                <div className="relative z-10 flex items-center justify-center -mt-5">
                  <div className="w-24 h-24 bg-[#F4F2F9] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-[#ed9751]">
                    {/* Logo sản phẩm */}
                    <img
                      src="/Image/icons-solution-60.png"
                      alt="Logo sản phẩm"
                      className="w-12 h-12 mt-10 object-contain transition-all duration-500 ease-in-out group-hover:scale-110 "
                    />
                  </div>
                </div>

                {/* Nội dung mô tả */}
                <p className="text-[#6c6a72] mt-6 px-4 relative z-20 transition-all duration-500 group-hover:text-white">
                  Enterprise resource planning(ERP), Enterprise Service
                  Bus(ESP), Enterprise content management(ECM), Business Process
                  Management(BPM)
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center w-full md:w-[376px] h-[298px] bg-white overflow-hidden group transition-all duration-500 border-[1px] border-orange-500 md:border-none">
                {/* Lớp phủ nền cam trượt từ dưới lên */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#eb7f26] transition-all duration-500 ease-in-out group-hover:h-full"></div>

                {/* Tiêu đề nằm trên cùng */}
                <h2 className="text-2xl font-bold text-[#6C6A72] pt-8 relative z-20 group-hover:text-white transition-all duration-500">
                  Dịch vụ
                </h2>

                {/* Vòng tròn chứa logo */}
                <div className="relative z-10 flex items-center justify-center -mt-5">
                  <div
                    className="w-24 h-24 bg-[#F4F2F9] rounded-full flex items-center justify-center 
      transition-all duration-500 ease-in-out group-hover:bg-[#ed9751]"
                  >
                    {/* Logo sản phẩm */}
                    <img
                      src="/Image/icon-service-call-48.png"
                      alt="Logo sản phẩm"
                      className="w-12 h-12 mt-10 object-contain transition-all duration-500 ease-in-out group-hover:scale-110 "
                    />
                  </div>
                </div>

                {/* Nội dung mô tả */}
                <p className="text-[#6c6a72] mt-6 px-4 relative z-20 transition-all duration-500 group-hover:text-white">
                  Tiến độ xây dựng nhanh chóng và quản lý vận hành chặt chẽ.
                  Khâu chăm sóc khách hàng sau dịch vụ luôn để lại dấu ấn tốt.
                  Khẳng định sự uy tín của công ty trên thị trường cung cấp dịch
                  vụ phần mềm.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:justify-between md:flex-row pl-2 pt-5 md:gap-5 gap-5">
              <div className="relative flex flex-col items-center text-center w-full md:w-[376px] h-[298px] bg-white overflow-hidden group transition-all duration-500 border-[1px] border-orange-500 md:border-none">
                {/* Lớp phủ nền cam trượt từ dưới lên */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#eb7f26] transition-all duration-500 ease-in-out group-hover:h-full"></div>

                {/* Tiêu đề nằm trên cùng */}
                <h2 className="text-2xl font-bold text-[#6C6A72] pt-8 relative z-20 group-hover:text-white transition-all duration-500">
                  Nhân sự
                </h2>

                {/* Vòng tròn chứa logo */}
                <div className="relative z-10 flex items-center justify-center -mt-5">
                  <div className="w-24 h-24 bg-[#F4F2F9] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-[#ed9751]">
                    {/* Logo sản phẩm */}
                    <img
                      src="/Image/icon-staff.png"
                      alt="Logo sản phẩm"
                      className="w-12 h-12 mt-14 object-contain transition-all duration-500 ease-in-out group-hover:scale-110 "
                    />
                  </div>
                </div>

                {/* Nội dung mô tả */}
                <p className="text-[#6c6a72] mt-6 px-4 relative z-20 transition-all duration-500 group-hover:text-white">
                  Đội ngũ chuyên gia CNTT được đào tạo bài bản, thường xuyên tự
                  trau dồi những kiến thức mới nhất về quản lý, cải tiến công
                  nghệ.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center w-full md:w-[376px] h-[298px] bg-white overflow-hidden group transition-all duration-500 border-[1px] border-orange-500 md:border-none">
                {/* Lớp phủ nền cam trượt từ dưới lên */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#eb7f26] transition-all duration-500 ease-in-out group-hover:h-full"></div>

                {/* Tiêu đề nằm trên cùng */}
                <h2 className="text-2xl font-bold text-[#6C6A72] pt-8 relative z-20 group-hover:text-white transition-all duration-500">
                  Công nghệ
                </h2>

                {/* Vòng tròn chứa logo */}
                <div className="relative z-10 flex items-center justify-center -mt-5">
                  <div className="w-24 h-24 bg-[#F4F2F9] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-[#ed9751]">
                    {/* Logo sản phẩm */}
                    <img
                      src="/Image/icon-technology.png"
                      alt="Logo sản phẩm"
                      className="w-11 h-11 mt-10 object-contain transition-all duration-500 ease-in-out group-hover:scale-110 "
                    />
                  </div>
                </div>

                {/* Nội dung mô tả */}
                <p className="text-[#6c6a72] mt-6 px-4 relative z-20 transition-all duration-500 group-hover:text-white">
                  Chúng tôi luôn mang đến những công nghệ mới nhất cho bạn như
                  AI, Machine Learning, IoT, Container, Docker, Kubernetes...
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center w-full md:w-[376px] h-[298px] bg-white overflow-hidden group transition-all duration-500 border-[1px] border-orange-500 md:border-none">
                {/* Lớp phủ nền cam trượt từ dưới lên */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#eb7f26] transition-all duration-500 ease-in-out group-hover:h-full"></div>

                {/* Tiêu đề nằm trên cùng */}
                <h2 className="text-2xl font-bold text-[#6C6A72] pt-8 relative z-20 group-hover:text-white transition-all duration-500">
                  Phương châm
                </h2>

                {/* Vòng tròn chứa logo */}
                <div className="relative z-10 flex items-center justify-center -mt-5">
                  <div
                    className="w-24 h-24 bg-[#F4F2F9] rounded-full flex items-center justify-center 
      transition-all duration-500 ease-in-out group-hover:bg-[#ed9751]"
                  >
                    {/* Logo sản phẩm */}
                    <img
                      src="/Image/icon-hand-planting.png"
                      alt="Logo sản phẩm"
                      className="w-12 h-12 mt-10 object-contain transition-all duration-500 ease-in-out group-hover:scale-110 "
                    />
                  </div>
                </div>

                {/* Nội dung mô tả */}
                <p className="text-[#6c6a72] mt-6 px-4 relative z-20 transition-all duration-500 group-hover:text-white">
                  &ldquo;Luôn lấy cái tâm làm gốc&rdquo;, tối ưu hóa lợi ích hóa
                  của khách hàng và đối tác.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-52">
          <div className="px-54 flex flex-col justify-center items-center">
            <div className="flex">
              <img src="/Image/star-icon.png" alt="" />
              <p className="text-orange-500 font-bold text-lg">Về chúng tôi</p>
            </div>
            <p className="text-[#6C6A72] text-3xl md:text-5xl font-bold py-2 text-center">
              Hướng tới tương lai!
            </p>
          </div>
          <div className="mt-10 ml-3 gap-6 flex flex-col md:justify-between md:flex-row ">
            <div className="bg-[#F0FFFF] w-[366px] h-[326px] flex flex-col items-center text-center p-6 rounded-2xl">
              <div className="mb-4 -mt-3">
                <img
                  src="/Image/icon-guarantee.png"
                  alt="100% Guarantee"
                  className="w-24 h-20"
                />
              </div>
              <h1 className="text-xl mt-2 font-bold text-gray-800">Tầm nhìn</h1>
              <p className="text-gray-600 text-base mt-4 leading-relaxed">
                CTS sẽ trở thành một doanh nghiệp dẫn đầu ở Việt Nam và khu vực
                về kinh doanh các sản phẩm, giải pháp và dịch vụ trên nền tảng
                công nghệ ICT và kỹ thuật số.
              </p>
            </div>
            <div className="bg-[#F0FFFF] w-[366px] h-[326px] flex flex-col items-center text-center p-6 rounded-2xl">
              <div className="mb-4 -mt-3">
                <img
                  src="/Image/icon-sumenh.png"
                  alt=""
                  className="w-24 h-20"
                />
              </div>
              <h1 className="text-xl mt-2 font-bold text-gray-800">Sứ mệnh</h1>
              <p className="text-gray-600 text-base mt-4 leading-relaxed">
                CTS đem tới khách hàng những sản phẩm và giải pháp công nghệ tối
                ưu với chất lượng cao, dịch vụ vượt trội cho các hệ thống quản
                lý sản xuất và vận hành của các doanh nghiệp, các tổ chức.
              </p>
            </div>
            <div className="bg-[#F0FFFF] w-[366px] h-[326px] flex flex-col items-center text-center p-6 rounded-2xl">
              <div className="mb-4 -mt-3">
                <img src="/Image/icon-human.png" alt="" className="w-24 h-20" />
              </div>
              <h1 className="text-xl mt-2 font-bold text-gray-800">
                Giá trị cốt lõi
              </h1>
              <p className="text-gray-600 text-base mt-4 leading-relaxed">
                Luôn coi “Lợi ích của Khách hàng” là lợi thế cạnh tranh, là
                thành công và sự tồn tại của chính mình.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-52">
          <div className="px-54 flex flex-col justify-center items-center">
            <div className="flex">
              <img src="/Image/star-icon.png" alt="" />
              <p className="text-orange-500 font-bold text-lg">
                Lĩnh vực hoạt động
              </p>
            </div>
            <p className="text-[#6C6A72] text-3xl md:text-5xl font-bold py-2 text-center">
              Chỉ cần bạn cần , chúng tôi có!
            </p>
          </div>
          <div className="mt-10 ml-3 gap-6 flex flex-col md:justify-between md:flex-row ">
            <div className="bg-[#F0FFFF] w-[366px] h-[476px] flex flex-col items-center text-center p-6 rounded-2xl">
              <div className="mb-2 -mt-3">
                <img
                  src="/Image/icon-develop-require.png"
                  alt="100% Guarantee"
                  className="w-24 h-20"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                Phát triển phần mềm theo yêu cầu
              </h1>
              <p className="text-gray-600 text-base mt-3 leading-loose">
                Phát triển trong thời kỳ công nghệ số, kỷ nguyên số là 1 động
                lực cũng như áp lực tới các doanh nghiệp cần đẩy mạnh công tác
                chuyển đổi số, chủ động bắt kịp với sự phát triển của công nghệ.
                CTS phối hợp các đơn vị, tổ chức phát triển các phần mềm theo
                yêu cầu giúp doanh nghiệp bắt kịp với các yêu cầu về cơ sở hạ
                tầng và CNTT mà không cần bên thứ ba nào.
              </p>
            </div>
            <div className="bg-[#F0FFFF] w-[366px] h-[476px] flex flex-col items-center text-center p-6 rounded-2xl">
              <div className="mb-2 -mt-3">
                <img src="/Image/icon-human.png" alt="" className="w-24 h-20" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                Tư vấn và triển khai giải pháp
              </h1>
              <p className="text-gray-600 text-base mt-4 leading-loose">
                Trước thời điểm thành lập, các thành viên cốt lõi của CTS đã có
                nhiều năm kinh nghiệm trong lĩnh vực Tài chính – Ngân hàng.
                Lamcloudmis có kinh nghiệm triển khai giải pháp lõi và tổng thể,
                bao gồm giải pháp tự xây dựng cũng như tích hợp với các hãng
                công nghệ hàng đầu thế giới.
              </p>
            </div>
            <div className="bg-[#F0FFFF] w-[366px] h-[476px] flex flex-col items-center text-center p-6 rounded-2xl">
              <div className="mb-2 -mt-3">
                <img
                  src="/Image/icon-outsourcing.png"
                  alt=""
                  className="w-24 h-20"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Outsourcing</h1>
              <p className="text-gray-600 text-base mt-4 leading-loose">
                CTS cung cấp nguồn nhân sự outsourcing đảm bảo chất lượng và đáp
                ứng yêu cầu của Doanh nghiệp với mức giá hợp lý.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-52">
          <div className="px-54 flex flex-col justify-center items-center">
            <div className="flex">
              <img src="/Image/star-icon.png" alt="" />
              <p className="text-orange-500 font-bold text-lg">Dự án</p>
            </div>
            <p className="text-[#6C6A72] text-3xl md:text-5xl font-bold py-2 text-center">
              Các dự án chúng tôi triển khai!
            </p>
          </div>
          <div className="hidden relative md:block mt-8">
            <Slider_project />
          </div>
          <div className="md:hidden block mt-8">
            <Slider_project_repon />
          </div>
        </div>
        <div className="mt-52">
          <div className="px-54 flex flex-col justify-center items-center">
            <div className="flex">
              <img src="/Image/star-icon.png" alt="" />
              <p className="text-orange-500 font-bold text-lg">Khách hàng</p>
            </div>
            <p className="text-[#6C6A72] text-3xl md:text-3xl font-bold py-2 text-center">
              Khách hàng đang làm việc với chúng tôi!
            </p>
          </div>
          <div className="pt-10 hidden md:block">
            <Slider_customer />
          </div>
          <div className="md:hidden block pt-8">
            <Slider_customer_repon />
          </div>
        </div>
      </div>
    </div>
  );
}
