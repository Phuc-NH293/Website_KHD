import bannerimg from '@/assets/banner.png';
import bannermobile from '@/assets/bannermobile.png';
import LogoBanner from '@/assets/logobanner.png';
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex items-center justify-center w-full px-0 sm:px-6">
        <img
          src={bannerimg}
          alt=""
          className="hidden sm:block w-full h-auto rounded-3xl"
        />
        <img
          src={bannermobile}
          alt=""
          className="block sm:hidden h-auto rounded-lg "
        />
        <div
          className="absolute text-white flex flex-col items-center justify-center text-center top-[25%] left-1/2 -translate-x-1/2 sm:top-1/2 sm:left-24 sm:translate-x-0 sm:-translate-y-1/2 sm:items-start sm:text-left 
          "
        >
          <img
            src={LogoBanner}
            alt=""
            className="w-[80%] sm:w-[150px]  "
          />
          <p className="mt-3 max-w-[260px] sm:max-w-[350px] text-[12px] sm:text-base leading-[16px] sm:leading-[22px] font-medium text-white">
            Tối ưu hiệu quả kinh doanh với các giải pháp chuyển đổi số tích hợp AI
          </p>
          <button
            className="mt-4 border px-3 py-[5px] sm:px-6 sm:py-2 text-[12px] sm:text-[14px] font-medium rounded-md flex items-center gap-1 sm:gap-2 hover:bg-white/10 transition cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            Liên hệ tư vấn
            <IoIosArrowRoundForward fontSize={18} className="sm:text-[22px]" />
          </button>
        </div>
        <div className="flex flex-col items-center text-white absolute bottom-0 py-3 cursor-pointer">
          <span className="text-[12px]">Tìm hiểu thêm</span>
          <IoIosArrowRoundDown fontSize={22} />
        </div>
      </div>
    </>
  );
};

export default Banner;
