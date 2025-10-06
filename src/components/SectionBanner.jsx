
const SectionBanner = ({item,title,description}) => {
  return (
    <>
    <div className=" relative flex items-center justify-center  bg-cover bg-center px-6 ">
      <div>
      <img src={item} alt="" className='rounded-lg' />
      </div>
      <div className='absolute text-white text-center bottom-10 w-[50%] border border-0 rounded-lg px-8 py-4 bg-[#081933]'>
        <h2 className='text-[32px] font-bold'>{title}</h2>
        <p className='text-[16px] font-normal text-base leading-[1.3]'> {description}</p>
      </div>
    </div>
    </>
  )
}

export default SectionBanner