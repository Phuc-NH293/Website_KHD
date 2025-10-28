import contactimg from "@/assets/contact.png";
import FormContact from "./Form.contact";

const Contact = () => {
  return (
    <>
      <div className="min-h-[600px] mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-full border border-none rounded-lg bg-[#081933] overflow-hidden">
          <div className="w-full md:w-1/2">
            <img
              src={contactimg}
              alt="contact"
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="w-full md:w-1/2 px-6 py-6 md:px-10">
            <FormContact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
