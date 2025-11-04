import Diamonft from '@/assets/diamondft.png';
import Footermb from '@/assets/footermb.png';
import LogoFooter from '@/assets/logofooter.png';
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mt-6">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${Footermb})` }}
      ></div>
      <div className="absolute inset-0 bg-[#001B46] hidden md:block"></div>
      <div className="relative z-10 text-white py-6 px-6 md:px-40">
        <div className="max-w-screen-2xl mx-auto flex flex-row flex-wrap md:flex-nowrap justify-between items-start md:items-center w-full">
          <div className="w-1/2 md:w-auto flex flex-col items-start">
            <img src={LogoFooter} alt="Logo" />
            <div className="mt-5 w-full">
              <svg width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#727272" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 text-sm mt-2">
              <div className="flex items-center gap-2">
                <MdOutlineMailOutline className="text-lg min-w-[20px]" />
                <p className="leading-none md:whitespace-nowrap">
                  Email: admin@kdhsolution.com
                </p>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <MdOutlinePhoneInTalk className="text-lg min-w-[20px]" />
                <p className="leading-none md:whitespace-nowrap">
                  Phone number: +84 123456789
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 md:w-auto flex justify-end items-center mt-0">
            <img src={Diamonft} alt="Diamond" className="w-full h-auto hidden sm:block" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
