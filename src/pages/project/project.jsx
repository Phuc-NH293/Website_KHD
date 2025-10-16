import bannerproject from '@/assets/bannerproject.png';
import bannerptmobile from '@/assets/bannerptmobile.png';
import productpj from '@/assets/productpj.png';
import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import SectionBanner from "../../components/SectionBanner";
import SectionHeader from '../../components/SectionHeader';
import Paginations from './pagination';
const data = [
  {
    id: 1,
    tag: "LandingPage",
    tagColor: "bg-yellow-100 text-yellow-800",
    title: "Website Dieptra",
    company: "Công ty cổ phần ABC",
  },
  {
    id: 2,
    tag: "Phần mềm quản lý",
    tagColor: "bg-blue-100 text-blue-800",
    title: "Website Dieptra",
    company: "Công ty cổ phần ABC",
  },
  {
    id: 3,
    tag: "Website",
    tagColor: "bg-red-100 text-red-800",
    title: "Website Dieptra",
    company: "Công ty cổ phần ABC",
  },
  {
    id: 4,
    tag: "Website",
    tagColor: "bg-red-100 text-red-800",
    title: "Website Dieptra",
    company: "Công ty cổ phần ABC",
  },
  {
    id: 5,
    tag: "Website",
    tagColor: "bg-red-100 text-red-800",
    title: "Website Dieptra",
    company: "Công ty cổ phần ABC",
  },
  {
    id: 6,
    tag: "Website",
    tagColor: "bg-red-100 text-red-800",
    title: "Website Dieptra",
    company: "Công ty cổ phần ABC",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>    
    <SectionBanner item={bannerproject} itemMobile={bannerptmobile} title={'20+ Dự án'} description={'Đã được thực hiện bao gồm đa dạng các hình thức Website, LandingPage, ERP, CRM, HRM,... với nhiều lĩnh vực khác nhau như: Bán lẻ, Giáo dục - Đào tạo, Công nghệ, Xây dựng,...'} />
     <SectionHeader item={<CgMenuGridO fontSize={24} color="#2165CC" className='mt-4'/> } title={'Dự án của chúng tôi'}/>
      <div className="w-full flex flex-col items-center gap-6 mt-4">
      <div className="flex flex-col w-full sm:flex-row sm:flex-wrap justify-center gap-6 sm:w-full relative">
        {data.map((item) => (
          <div
            key={item.id}
            className="basis-[32%] relative bg-white rounded-xl p-5 shadow-sm border  hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"       
            onClick={()=> navigate(`/project/${item.id}`)}
          >
            <div className='absolute top-0 right-0'>
              <img src={productpj} alt="" className='w-full h-full'/>
            </div>          
            <span
              className={`text-xs font-medium px-3 py-1 rounded-md inline-block w-fit mb-3 ${item.tagColor}`}
            >
              {item.tag}
            </span>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>      
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <HiOutlineBuildingOffice2 size={16}/>
              <span>{item.company}</span>
            </div>
         <div className="h-[3px] bg-[#D4E5FF] mt-3 mb-3 w-full relative overflow-hidden rounded-full">
  <div className="absolute top-0 left-0 h-full w-[20%] bg-[#2165CC] shadow-[0_0_10px_#2165CC]"></div>
  </div>
            <div className="flex justify-end text-blue-500 font-medium text-sm items-center gap-1 cursor-pointer">
              <span>Xem chi tiết</span>
              <IoIosArrowRoundForward />
            </div>
          </div>
        ))}
         <Paginations />
                     
      </div>
 <div className='flex py-6 px-6 justify-center items-center '>
  <button className='flex items-center justify-center border border-[#393939] rounded-lg gap-2 p-2 text-[16px] w-[150px] cursor-pointer'>Xem chi tiết 
     <IoIosArrowRoundForward size={24}/>
</button>
  </div>
      
    </div>
    </div>
  )
}

export default Projects