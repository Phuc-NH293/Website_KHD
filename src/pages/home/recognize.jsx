import recognize from '@/assets/recognize.png'
import Star from '@/assets/star.png'
import SectionHeader from "../../components/SectionHeader"
const Recognize = () => {
  return (
    <>
    <SectionHeader icon={Star}  title={'Được tin tưởng bởi'}/>
      <div className='flex mt-4'>
         <img src={recognize} alt="" className="" />
      </div>
    </>
  )
}

export default Recognize