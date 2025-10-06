import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  { title: "Phần mềm quản lý doanh nghiệp", content: "Nội dung chi tiết..." },
  { title: "Website doanh nghiệp chuẩn SEO", content: "Nội dung chi tiết..." },
  { title: "Tư vấn giải pháp hệ thống hoá quản lý", content: "Nội dung chi tiết..." },
  { title: "Tích hợp AI nâng cao hiệu suất công việc", content: "Nội dung chi tiết..." },
  { title: "Landing Page chuyên nghiệp", content: "Nội dung chi tiết..." },
  { title: "UI/UX – Thiết kế trải nghiệm người dùng", content: "Nội dung chi tiết..." },
];

const OptionsService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleBox = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (

    <section className="py-4 px-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-4">
        {data.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="relative bg-gradient-to-r from-[#194C99] to-[#2165CC] rounded-lg p-4 cursor-pointer gap-4"
              onClick={() => toggleBox(index)}
            >
              <div className="flex justify-between items-center px-4">
                <span className="text-white font-medium">{item.title}</span>
                <IoIosArrowDown
                  className={`!text-white text-lg transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isActive && (
                <div className="absolute left-0 top-full mt-4 w-full z-10">
                  <div className="bg-white text-black p-2 rounded shadow-lg">
                    {item.content}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <button className="border border-gray-400 rounded-full px-6 py-2 text-sm hover:bg-gray-100 transition cursor-pointer">
          Các dự án của chúng tôi →
        </button>
      </div>
    </section>

  );
};

export default OptionsService;
