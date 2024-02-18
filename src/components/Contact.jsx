export default function Contact(){
    return(
        <div id="contact" className={`w-full py-[40px] px-[20px] md:px-[150px]`}>
            <h1 className={`text-2xl text-center font-bold text-txt`}>Contact</h1>
            <div className={`flex justify-center `}>
                <div className={` shadow w-full max-w-[600px] px-[20px] py-[10px] mt-[20px] rounded-2xl`}>
                    <h1 className={`text-2xl font-bold `}><span className="decorate-text">Email Me</span></h1>
                    <form className={`flex flex-col gap-[10px] mt-[20px]`} action="">
                        <input spellCheck={false} className={`w-full  focus:outline-none border-[1px] text-txt border-gray-400 px-[20px] py-[10px] rounded-full`} placeholder="Your Email" type="text" />
                        <input spellCheck={false} className={`w-full focus:outline-none  border-[1px] text-txt border-gray-400 px-[20px] py-[10px] rounded-full`} placeholder="Your Name" type="text" />
                        <input spellCheck={false} className={`w-full focus:outline-none  border-[1px] text-txt border-gray-400 px-[20px] py-[10px] rounded-full`} placeholder="Subject" type="text" />
                        <textarea className={`w-full focus:outline-none border-[1px] text-txt border-gray-400 px-[20px] py-[10px] rounded-2xl`} name="" placeholder="Your Message" id="" rows="5"></textarea>
                        <button className={`w-full shadow text-xl linearBG px-[20px] font-medium text-white py-[10px] rounded-full`} type="submit">Send</button>
                    </form>
                </div>

                <div className="w-full hidden md:block"></div>
            </div>
        </div>
    )
}