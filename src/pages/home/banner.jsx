import bannerimg from '@/assets/banner.png';
import LogoBanner from '@/assets/logobanner.png';
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  return (
    <>
         <div className="relative flex items-center justify-center bg-cover bg-center px-6 ">
      <div className=''>
        <img src={bannerimg} alt="" />
      </div>
      <div className="absolute text-white z-10 px-4 text-white z-10 left-24">
        <img src={LogoBanner}alt="" />
        <p className="mt-4 max-w-[350px] mx-auto text-base font-semibold text-white">
        Tối ưu hiệu quả kinh doanh với các giải pháp chuyển đổi số tích hợp AI
        </p>
       <button className="mt-6 border px-6 py-2 font-medium rounded-lg flex items-center gap-2 hover:bg-white/10 transition cursor-pointer"
       onClick={()=>navigate('/contact')}>
  Liên hệ tư vấn 
  <IoIosArrowRoundForward fontSize={22}/>
</button>
        </div>
        <div className='flex flex-col items-center text-white absolute bottom-0 py-3 cursor-pointer
        '>
          <span className='text-[12px]'>Tìm hiểu thêm</span>
          <IoIosArrowRoundDown fontSize={22} />
        </div>
    </div>
    </>
  )
}

export default Banner