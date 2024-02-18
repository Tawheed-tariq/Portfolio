import {skills} from '../constants/index'
import SkillCard from './skillCard'
export default function Skils(){
    

    return(
        <>
            <div className={`w-full py-[40px] px-[20px] md:px-[250px]`}>
                <h1 className={`text-2xl font-bold text-txt`}>Skills</h1>
                {
                    skills.map((skill) => (
                        <div key={skill.id} className={`flex gap-[15px] my-[15px] mx-[20px]`}>
                            <SkillCard skillName={skill.name} skillArray={skill.arrName}/>
                        </div>
                    ))
                }
            </div>
            {/* <hr className={`w-full border-black mb-[10px]`} /> */}
        </>
    )
}