import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"


export default function Contact() {
  useEffect(()=>{
    Aos.init({duration:900, anchorPlacement:"top-center"})
},[])
  return (
    <div id="contact" className={`w-full py-[40px] px-[20px] md:px-[150px]`}>
      <h1 className={`text-2xl md:text-3xl text-center font-bold`}>
        {" "}
        <span className="heading">Contact</span>{" "}
      </h1>
      <div className={`flex justify-center `}>
        <div
          data-aos="fade-up"
          className={` shadow w-full max-w-[600px] px-[20px] py-[10px] mt-[20px] rounded-2xl`}
        >
          <h1 className={`text-2xl font-bold `}>
            <span className="decorate-text">Email Me</span>
          </h1>
          <form
            className={`flex flex-col gap-[10px] mt-[20px]`}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="8e4c16d9-1973-47d8-8536-95284d4bfa7e"
            />
            <input
              spellCheck={false}
              name="email"
              className={`w-full  focus:outline-none border-[1px] text-txt border-gray-400 px-[20px] py-[10px] rounded-full`}
              placeholder="Your Email"
              type="text"
            />
            <input
              spellCheck={false}
              name="name"
              className={`w-full focus:outline-none  border-[1px] text-txt border-gray-400 px-[20px] py-[10px] rounded-full`}
              placeholder="Your Name"
              type="text"
            />
            <input
              spellCheck={false}
              name="subject"
              className={`w-full focus:outline-none  border-[1px] text-txt border-gray-400 px-[20px] py-[10px] rounded-full`}
              placeholder="Subject"
              type="text"
            />
            <textarea
              name={`message`}
              className={`w-full focus:outline-none border-[1px] text-txt border-gray-400 px-[20px] py-[10px] rounded-2xl`}
              placeholder="Your Message"
              id=""
              rows="5"
            ></textarea>
            <button
              className={`w-full shadow text-xl linearBG px-[20px] font-medium text-white py-[10px] rounded-full`}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
