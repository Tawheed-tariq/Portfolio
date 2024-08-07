import { useEffect } from "react";
import SkillIcon from "./skillIcon";
import AOS from "aos"
import "aos/dist/aos.css"




export default function SkillCard({skillName, skillArray}){
    // useEffect(()=>{
    //     AOS.init({duration:600, anchorPlacement:"top-center"}),[]
    // })
    return(
        <div 
{/*             data-aos="zoom-in-up"  */}
            className={`border-[1px] sm:w-[700px] md:w-[900px] border-gray-400 px-[25px] py-[10px] my-[20px] rounded-3xl`}>
            <h1 className={`text-xl md:text-2xl font-bold mb-[10px]`}><span className="decorate-text">{skillName}</span></h1>
            <div className={`flex flex-wrap gap-[15px] my-[15px] md:mx-[20px]`}>
                    {
                        skillArray.map((skill) => (
                            <SkillIcon key={skill.id} title={skill.title} icon={skill.icon}/>
                        ))
                    }
            </div>
        </div>
    )
}
