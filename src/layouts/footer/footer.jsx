import Diamonft from '@/assets/diamondft.png';
import LogoFooter from '@/assets/logofooter.png';
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#001B46] text-white py-6 px-6 md:px-40 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
      <div className="max-w-screen-2xl mx-auto flex flex-row flex-wrap md:flex-nowrap justify-between items-start md:items-center w-full">
        <div className="w-1/2 md:w-auto flex flex-col items-start">
          <img src={LogoFooter} alt="Logo" />
          <div className="mt-5 w-full">
            <svg width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#727272" strokeWidth="2" />
            </svg>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MdOutlineMailOutline className="text-lg min-w-[20px]"/>
              <p className="leading-none md:whitespace-nowrap">Email: admin@kdhsolution.com</p>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap ">
              <MdOutlinePhoneInTalk className="text-lg min-w-[20px]" />
              <p className="leading-none md:whitespace-nowrap">Phone number: +84 123456789</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-auto flex justify-end items-center mt-0">
          <img src={Diamonft} alt="Diamond" className="w-full h-auto hidden sm:block" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
