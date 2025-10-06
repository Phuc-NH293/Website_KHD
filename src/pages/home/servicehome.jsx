import Servicecard1 from '@/assets/servicecard.png';
import Servicecard2 from '@/assets/servicecard1.png';
import Servicecard3 from '@/assets/servicecard2.png';
import Servicecard4 from '@/assets/servicecard3.png';
import Servicecard5 from '@/assets/servicecard4.png';
import Servicecard6 from '@/assets/servicecard5.png';
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
import SectionHeader from '../../components/SectionHeader';
const index = [
  {
    img :Servicecard1,
    title :'Phần mềm quản lý doanh nghiệp' 
  },
  {
    img :Servicecard2,
    title :'Website doanh nghiệp chuẩn SEO' 
  },
  {
    img :Servicecard3,
    title :'Tư vấn giải pháp hệ thống hóa quản lý' 
  },
  {
    img :Servicecard4,
    title :'Tích hợp AI nâng cao hiệu suất công việc' 
  },
  {
    img :Servicecard5,
    title :'Landing Page chuyên  nghiệp' 
  },
  {
    img :Servicecard6,
    title :'UI/UX - Thiết kế trải nghiệm người dùng' 
  }

]
const ServiceHome = () => {
  return (
   <>
   <SectionHeader item={<CgMenuGridO fontSize={24} color="#2165CC" className='mt-4'/> } title={'Dịch vụ của chúng tôi'}/>
 <div className="grid grid-cols-6 gap-4 w-full mt-8">
  {index.map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center justify-center text-center rounded-lg bg-[#F9FAFB] shadow-sm"
    >
      <img src={item.img} alt={item.title} className="object-contain" />
      <span className="mt-2 text-[16px]text-[#1D1D1D] ">
        {item.title}
      </span>
    </div>
  ))}
</div>
  <div className='flex py-6 px-6 justify-center items-center '>
  <button className='flex items-center justify-center border border-[#393939] rounded-lg gap-2 p-2 text-[16px] w-[150px] cursor-pointer'>Xem chi tiết 
     <IoIosArrowRoundForward size={24}/>
</button>
  </div>
   </>
  )
}

export default ServiceHome;