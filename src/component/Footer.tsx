const Footer = () => {
  return (
    <footer>
      <div className="md:w-full w-430px">
        <div className="bg-slate-50 py-24 pl-5 md:flex">
          {/* Phần giới thiệu */}
          <div className="w-[400px] md:w-[315px]">
            <h1 className="text-4xl font-bold">CTS</h1>
            <p className="text-[#8d869d] pt-5 ">
              Chúng tôi tự hào là một công ty công nghệ hàng đầu trong lĩnh vực
              công nghệ thông tin, mang đến cho quý khách hàng những giải pháp
              hữu ích.
            </p>
          </div>

          {/* Giờ làm việc */}
          <div className="text-[#8d869d] md:pl-12 md:w-[285px]">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              Giờ làm việc
              <span className="relative">
                <span className="w-7 h-[2px] mb-1 bg-gradient-to-l from-[#ae8fff] to-[#f37125] inline-block"></span>
                <span className="w-2 h-2 mt-3.5 bg-gradient-to-l from-[#ae8fff] to-[#f37125] rounded-full absolute right-[-5px] top-[-2px]"></span>
              </span>
            </h2>

            <div className="mt-3 space-y-2 text-[#8d869d]">
              <p>
                <span>Thứ 2 đến thứ 6:</span>
                <br /> 8h00 - 17h00
              </p>
              <p>
                <span>Thứ 7:</span> 8h00 - 12h00
              </p>
              <p>
                <span>Chủ nhật:</span> NGHỈ
              </p>
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div className="md:pl-28 w-[400px] md:w-[500px]">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              Thông tin liên hệ
              <span className="relative">
                <span className="w-7 h-[2px] mb-1 bg-gradient-to-l from-[#ae8fff] to-[#f37125] inline-block"></span>
                <span className="w-2 h-2 mt-3.5 bg-gradient-to-l from-[#ae8fff] to-[#f37125] rounded-full absolute right-[-5px] top-[-2px]"></span>
              </span>
            </h2>

            <div className="mt-4 text-[#6c6a72]">
              <p className="font-semibold">
                CÔNG TY CỔ PHẦN DỊCH VỤ & CÔNG NGHỆ CTS
              </p>

              <ul className="mt-2 space-y-2">
                <li>
                  □{" "}
                  <a
                    href="mailto:contact@cts.com.vn"
                    className="hover:no-underline"
                  >
                    contact@cts.com.vn
                  </a>
                </li>
                <li>
                  □{" "}
                  <a href="tel:+84368216286" className="hover:no-underline">
                    +84 368 216 286
                  </a>
                </li>
                <li>
                  □{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Tầng+14,+toà+nhà+Hapro,+số+11B+Cát+Linh,+Hà+Nội"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:no-underline"
                  >
                    Tầng 14, toà nhà Hapro, số 11B Cát Linh, Phường Quốc Tử
                    Giám, Quận Đống Đa, Thành Phố Hà Nội.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" bg-[#F4F2F9] text-[#8f8f8f] flex justify-center items-center py-10 ">
          <p>
            ©2023, VietNam, CTS Service And Technology Joiny Stock Company | All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
