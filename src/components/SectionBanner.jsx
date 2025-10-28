const SectionBanner = ({ item, itemMobile,title, description }) => {
  return (
    <div className="relative w-full">
    <img
        src={itemMobile}
        alt=""
        className="block sm:hidden w-full h-[400px]  rounded-lg"
      />
      <img
        src={item}
        alt=""
        className="hidden sm:block w-full h-auto object-cover rounded-lg"
      />

      <div className="absolute text-white sm:text-center bottom-0 sm:bottom-10 left-1/2 -translate-x-1/2 w-[90%] sm:w-[50%] rounded-lg sm:px-8 py-3 sm:py-4 sm:bg-[#081933]">
        <h2 className="text-[32px] sm:text-[20px] font-bold">{title}</h2>
        <p className="text-[14px] sm:text-[16px] leading-[1.4] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionBanner;
