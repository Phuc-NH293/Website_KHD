  import Logo from "@/assets/logo.png";
import { Menu } from "antd";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

  const items = [
    { label: "Trang chủ", key: "/" },
    { label: "Dịch vụ", key: "/service" },
    { label: "Dự án", key: "/project" },
    { label: "Liên hệ", key: "/contact" },
  ];

  const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const current = location.pathname;
    const [open, setOpen] = useState(false);
    return (
      <header className="w-full bg-white fixed top-0 left-0 z-50">
        <div className="w-[82%] mx-auto px-6 flex justify-between items-center py-4">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="logo" className="h-10" />
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <Menu
              mode="horizontal"
              selectedKeys={[current]}
              items={items}
              onClick={(e) => {
                navigate(e.key);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "none",
                fontWeight: 500,
              }}
            />
          </div>
          <button
            className="text-3xl text-gray-800 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenu />}
          </button>
        </div>
        {open && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#081933] text-white flex flex-col items-start px-6 py-4 z-40">
            <div className="w-full flex justify-between items-center mb-6">
              <img
                src={Logo}
                alt="logo"
                className="h-10 cursor-pointer"
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
              />
              <IoClose
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <ul className="flex flex-col w-full gap-4 mt-2">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="py-3 border-b border-gray-500 cursor-pointer hover:text-gray-300 transition"
                  onClick={() => {
                    navigate(item.key);
                    setOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    );
  };

  export default Header;
