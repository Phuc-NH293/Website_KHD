import Bannerov from '@/assets/bannerov.png';
import Keybroad from '@/assets/keyboard-open.png';
import { IoIosArrowRoundUp } from "react-icons/io";
import SectionHeader from '../../components/SectionHeader';
const overviewStats=[
  {
    values:'12+',
    title :'Doanh nghiệp',
    descriptions: 'Đã áp dụng thành công giải pháp công nghệ vào vận hành hoạt động kinh doanh, đem lại kết quả rõ rệt',
    bg : '#103266'
  },
    {
    values:'20+ ',
    title :'Dự án được phát triển',
    descriptions: 'Bao gồm các phần mềm quản lý, Website, Landing Page,... với đa dạng lĩnh vực: Bán lẻ, Giáo dục, Công nghệ, Xây dựng,...',
     bg : '#194C99'
  },
    {
    values:'32%' ,
    arrow:true,
    title :'Tăng trưởng danh nghiệp trung bình',
    descriptions: 'Sau khi áp dụng giải pháp công nghệ vào vận hành kinh doanh/doanh nghiệp',
    bg : '#2165CC'
  },  
]
const Overview = () => {
  return (
    <>
    <SectionHeader icon={Keybroad} title={'Tổng quan'} />
<div className="flex flex-wrap sm:flex-nowrap w-full gap-4">
  {overviewStats.map((item, index) => (
    <div
      key={index}
      className={`text-white rounded-lg p-4 min-h-[160px] relative ${
        index < 2
          ? "w-[47%] sm:w-1/3" 
          : "w-full sm:w-1/3"  
      }`}
      style={{ backgroundColor: item.bg }}
    >
      <div className="absolute top-0 right-0">
        <img src={Bannerov} />
      </div>
      <div className="flex items-center gap-1">
        <h2 className="text-4xl font-bold">{item.values}</h2>
        {item.arrow && (
          <IoIosArrowRoundUp className="text-2xl relative -top-1 right-2" />
        )}
      </div>
      <h3 className="font-semibold mt-2">{item.title}</h3>
      <p className="text-sm mt-1">{item.descriptions}</p>
    </div>
  ))}
</div>


    </>

  )
}

export default Overview