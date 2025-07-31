import { skills } from '../constants/index'
import SkillCard from './skillCard'
export default function Skils() {


    return (
        <>
            <div id='skill' className="w-full flex justify-center items-center flex-col py-10 px-5 md:px-36 overflow-x-hidden">
                <h1 className="text-2xl text-center font-bold md:text-3xl">
                    <span className="heading">Skills</span>
                </h1>
                {
                    skills.map((skill) => (
                        <div key={skill.id} className="flex flex-wrap gap-4 my-4 over">
                            <SkillCard skillName={skill.name} skillArray={skill.arrName} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}