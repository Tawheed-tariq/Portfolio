import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"



export default function Card({title, Desc, from, to, img_url, grade, index}){
    useEffect(()=>{
        AOS.init({
            duration:900, 
            anchorPlacement:"top-center"
        }),[]
    })
    return(
        <div data-aos={index%2 == 0? 'zoom-in-right': 'zoom-in-left'} className={` shadow max-w-[800px] p-[15px] mx-[20px] my-[10px] rounded-xl flex gap-[15px] `}>
            <div className="w-[40px]">
                <img src={img_url} className={`w-[35px] h-[35px] mt-[10px]`} />
            </div>


            <div className={`w-[95%]`}>
                <h1 className={`text-xl md:text-2xl font-semibold text-txt mb-[10px]`}>{title}</h1>
                <p className={`text-xs md:text-sm text-txt`}>{Desc}</p>
                <div className="mt-[10px]">
                    {grade && <p className={`text-[10px] md:text-xs text-txtDim text-end `} ><span className="font-medium">Grade</span> : {grade}</p>}
                    <p className={`text-[10px] md:text-xs text-txtDim text-end `} >{from} - {to}</p>
                </div>
            </div>
        </div>

    )
}