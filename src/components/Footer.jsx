import { useEffect } from "react";
import { contactLinks } from "../constants";
import AOS from "aos"
import "aos/dist/aos.css"




export default function Footer(){
    useEffect(()=>{
        AOS.init({duration:900, anchorPlacement:"top-center"}),[]
    })
    return(
        <div data-aos="zoom-in" className={`flex flex-col justify-center items-center w-full min-h-[200px]`}>
            <h1  className={`text-xl md:text-3xl font-bold text-txt`}> <span className={`decorate-text`}>Tavaheed Tariq</span></h1>
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
    )
}