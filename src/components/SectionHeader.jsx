
const SectionHeader = ({icon,title, item}) => {
  return (
    <>
     <div className="flex flex-col items-center mt-8">
      {
        item ?( <span>{item}</span>) :(<img src={icon} alt={title} />)
      }
      <span className="font-bold text-[24px]">{title}</span>
    </div></>
  )
}

export default SectionHeader