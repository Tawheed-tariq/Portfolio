import { contactLinks } from "../constants"
export default function About(){
    return(
        <div className={`w-full h-full`}>

            <div className={` gap-[25px] w-full h-[50%] flex flex-col justify-center items-center pt-[90px] px-[20px] md:px-[250px]`}>
                <h1 className={`text-2xl font-bold text-txt`}> <span className={`decorate-text`}>Hello</span>, I am Tavaheed Tariq</h1>
                <h2 className={`text-xl font-medium text-txt`}>I'm a <span className={`decorate-text`}>Full-Stack Developer</span></h2>
                <p className={`text-md text-txt w-[80%]`}>I am an Information Technology undergrad at NIT Srinagar with a passion of technology and creativity. I have a deep interest in Web-development, Web-scraping, AI/ML and Cyber security. Experienced in HTML, CSS, JS, Reactjs, Nodejs, Expressjs, TailwindCSS, Python .....</p>
            </div>

            <div className={`px-[20px] md:px-[250px] pt-[50px]`}>
                <h1 className={`text-2xl font-semibold text-txt`}>Connect with me</h1>
                <div className={`flex justify-between items-center w-[200px] py-[20px] px-[15px]`}>
                    {
                        contactLinks.map((item) => (
                            <a href={item.url} id={item.id} className='cursor-pointer' >
                                <img src={item.icon} className={`w-[35px] h-[35px]`} />
                            </a>
                        ))
                    }
                </div>
            </div>

            <div className={`px-[20px] md:px-[250px] w-full flex justify-center`}>
                <button className={`w-[200px] mt-[20px] decorate-text text-xl cursor-pointer h-[55px] border-[1px] rounded-[30px] border-black`}>
                    Check Resume
                </button>
            </div>
            <hr className={` border-black mt-[80px]`} />
        </div>
    )
}