import { contactLinks } from "../constants"
import ParticlesBg from 'particles-bg' //using particles-bg because react-particles-js is not working
export default function About(){
    return(
        <>
            <div className={`w-full h-[80vh]`}>
                {/* About me */}
                <div className={` gap-[25px] w-full h-[50%] flex flex-col justify-center items-center pt-[90px] px-[20px] md:px-[250px]`}>
                    <h1 className={`text-3xl font-bold text-txt`}> <span className={`decorate-text`}>Hello</span>, I am Tavaheed Tariq</h1>
                    <h2 className={`text-2xl font-medium text-txt`}>I'm a <span className={`decorate-text`}>Full-Stack Developer</span></h2>
                    <p className={`text-lg text-txt w-[80%]`}>
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
                <div className={`px-[20px] md:px-[250px] pt-[50px]`}>
                    <h1 className={`text-2xl font-semibold text-txt`}>Connect with me</h1>
                    <div className={`flex justify-between items-center w-[200px] py-[20px] px-[15px]`}>
                        {
                            contactLinks.map((item) => (
                                <a href={item.url} key={item.id} className='cursor-pointer' >
                                    <img src={item.icon} className={`w-[35px] h-[35px]`} />
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/* resume button */}
                <div className={`px-[20px] md:px-[250px] w-full flex justify-center`}>
                    <button className={`w-[200px] mt-[20px] decorate-text text-xl cursor-pointer h-[55px] border-[1px] rounded-[30px] border-black`}>
                        Check Resume
                    </button>
                </div>
            </div>
            <ParticlesBg
                type="cobweb"
                num={200} 
                density={5000} 
                bg={true} 
                size={10} 
                speed={3}
                hoverEffect={true} 
                hoverMode="repulse"
            />
            <hr className={`w-full border-black mt-[80px]`} />
        </>
    )
    }
