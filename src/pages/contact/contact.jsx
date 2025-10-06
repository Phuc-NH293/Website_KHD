import contactimg from '@/assets/contact.png'
import FormContact from './Form.contact'
const Contact = () => {
  return (
    <>
  <div className='h-[600px]'>
    <div className="flex justify-center items-center w-full border border-none rounded-lg bg-[#081933] mt-10 pb-6">
      <div className='w-1/2'>
        <img src={contactimg} alt="" className='rounded-lg object-cover' />
      </div>
      <div className='w-1/2 px-4'>
        <FormContact/>
      </div>
    </div>
      </div>
     </> )
}

export default Contact