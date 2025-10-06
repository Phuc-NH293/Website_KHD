import productpj from '@/assets/productpj.png';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
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
const ProjectDetail = () => {
  const { id } = useParams();
  const project = data.find((item) => item.id === Number(id));

  const navigate = useNavigate();
  if (!project) {
    return <div className="text-center text-gray-500 py-10">Không có dữ liệu dự án</div>;
  }
  return (
    <>
       <div className="p-6 max-w-5xl mx-auto">

      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 mb-4 cursor-pointer" 
      >
        <IoIosArrowRoundBack size={20}/> Quay lại
      </button>
      </div>
    <div className=" relative items-center bg-white rounded-xl p-5 shadow-sm border border-none  transition-shadow duration-300 flex flex-col justify-between " >
                <div className='absolute top-0 right-0'>
                  <img src={productpj} alt="" className='w-full h-full'/>
                </div>          
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-md inline-block w-fit mb-3 ${project.tagColor}`}
                >
                  {project.tag}
                </span>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>      
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <HiOutlineBuildingOffice2 size={16}/>
                  <span>{project.company}</span>
                </div>
              </div>
     <div className="bg-gray-200 w-full h-[300px] flex items-center justify-center text-gray-500">
        Hình ảnh minh hoạ
      </div>
        </>
  );
};

export default ProjectDetail;
