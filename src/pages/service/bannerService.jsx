import bannersvmobile from '@/assets/bannersvmobile.png';
import bannersv from '@/assets/svbanner.png';
import { CgMenuGridO } from "react-icons/cg";
import SectionBanner from '../../components/SectionBanner';
import SectionHeader from '../../components/SectionHeader';
const BannerService = () => {
  return (
  <>
    <SectionBanner item={bannersv} itemMobile={bannersvmobile} title={'KDH Solution'} description={'cung cấp giải pháp phần mềm tùy chỉnh tích hợp AI, tối ưu hóa quy trình kinh doanh và nâng cao hiệu suất vận hành cho doanh nghiệp ở mọi quy mô.'}/>
    <SectionHeader item={<CgMenuGridO fontSize={24} color="#2165CC" className='mt-4'/> } title={'Dịch vụ của chúng tôi'}/>
   </> 
  )
}

export default BannerService