import Diamonft from '@/assets/diamondft.png';
import LogoFooter from '@/assets/logofooter.png';
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-[#001B46] text-white py-6 px-40 w-screen relative left-1/2 right-1/2 -mx-[50vw] ">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="max-w-md">
         <img src={LogoFooter} alt="" />
          <p className="mt-5 flex items-center gap-2 text-sm">     
            <svg width="100%" height="1" className="mb-6" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#727272" strokeWidth="2" />
             </svg>
          </p>
        <div className="flex items-center space-x-2">
      <MdOutlineMailOutline />
      <p>Email: admin@kdhsolution.com</p>
    </div>
       <div className="flex items-center space-x-2">
    <MdOutlinePhoneInTalk />
      <p> Phone number: +84 123456789</p>
    </div> 
        </div>
        <div className=''>
          <img src={Diamonft} alt=""className="max-w-full h-auto"  />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
