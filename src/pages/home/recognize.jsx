import recognize from '@/assets/recognize.png'
import Star from '@/assets/star.png'
import MobileSlider from '../../components/MobileSlide'
import SectionHeader from "../../components/SectionHeader"
const Recognize = () => {
  return (
    <>
    <SectionHeader icon={Star}  title={'Được tin tưởng bởi'}/>
     <div className="block sm:hidden flex mt-4">
  <MobileSlider />
</div>

<div className="hidden sm:block mt-4">
  <img src={recognize} alt="" className="w-full h-auto rounded-2xl" />
</div>
    </>
  )
}

export default Recognize