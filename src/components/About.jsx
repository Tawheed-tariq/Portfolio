import { contactLinks } from "../constants"
import ParticlesBg from 'particles-bg' //using particles-bg because react-particles-js is not working
import Typewriter from "./Typewriter";
export default function About(){
    const texts = ["Full-stack Developer", "Web Scraper"];
    return(
        <>
            <div id="about" className={`w-full min-h-[90vh] px-[20px] xl:px-[250px]`}>
                {/* About me */}
                <div className={` gap-[25px] w-full h-[50%] flex flex-col justify-center items-center pt-[100px] md:pt-[150px]`}>
                    <h1 className={`text-xl md:text-3xl font-bold text-txt`}> <span className={`decorate-text`}>Hello</span>, I am Tavaheed Tariq</h1>
                    <Typewriter texts={texts}/>

                    <p className={`text-md md:text-lg text-txt md:w-[80%]`}>
                        Dedicated and innovative B.Tech student majoring in Information Technology
                         at NIT Srinagar, deeply passionate about exploring the intersections of 
                         technology and human experience. With a solid foundation in web development 
                         and web scraping, I am committed to leveraging my skills to drive impactful 
                         solutions in the ever-evolving landscape of IT. Eager to contribute my expertise 
                         to collaborative teams, tackle complex challenges, and continually learn and grow 
                         in the dynamic field of technology.                        
                    </p>
                </div>

                {/* connect with me */}
                <div className={`md:w-[80%] my-[20px] mx-auto pt-[50px]`}>
                    <h1 className={`text-xl md:text-2xl font-semibold text-txt`}>Connect with me</h1>
                    <div className={`flex justify-between items-center w-[150px] md:w-[200px] py-[20px] px-[15px]`}>
                        {
                            contactLinks.map((item) => (
                                <a href={item.url} key={item.id} className='cursor-pointer' >
                                    <img src={item.icon} className={`md:w-[35px] md:h-[35px] w-[25px] h-[25px]`} />
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/* resume button */}
                <div className={`w-full flex justify-center`}>
                    <button className={`w-[200px] shadow bg-transparent backdrop-blur-sm mt-[20px] font-medium decorate-text text-xl cursor-pointer h-[55px] rounded-full `}>
                        Check Resume
                    </button>
                </div>
            </div>
            <hr className={`w-full border-black mt-[40px]`} />
            <ParticlesBg
                type="cobweb"
                num={100}
                bg={true} 
                size={10} 
                speed={3}
            />
        </>
    )
    }
