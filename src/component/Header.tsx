"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // Import icon menu

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 md:w-full mt-[-2] w-[430px] z-50 transition-all duration-500 
        ${isScrolled ? "bg-white shadow-md" : "bg-[#3d4246] md:bg-transparent"} 
        px-6 py-4 md:px-20`}
    >
      <div className="md:max-w-[1400px] md:mx-auto flex justify-between items-center ">
        {/* ✅ Logo nằm bên trái */}
        <div>
          <img src="/Image/logo.jpg" alt="logo" width={127} height={79} />
        </div>

        {/* ✅ Menu icon nằm bên phải trên mobile */}
        <button
          className="text-white text-4xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </button>

        {/* Navigation */}
        <nav
          className={`absolute top-full left-0 w-full mt-[-2px] bg-[#3d4246] transition-all duration-300 
            ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"} 
            md:opacity-100 md:visible md:block md:relative md:top-0 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:justify-end gap-10 p-10 md:p-0 md:gap-12 text-orange-500 font-bold text-lg md:!text-sm">
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Dịch vụ</a>
            </li>
            <li>
              <a href="#">Khách hàng</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
