export default function SkillCard({skillName, skillArray}){
    return(
        <div className={`border-[1px] w-[900px] border-black px-[25px] py-[10px] my-[20px] rounded-3xl`}>
            <h1 className={`text-2xl font-bold decorate-text`}>{skillName}</h1>
            <div className={`flex flex-wrap gap-[15px] my-[15px] mx-[20px]`}>
                    {
                        skillArray.map((skill) => (
                            <div id={skill.id} className={`flex h-[45px] rounded-[23px] items-center justify-between border-[1px] border-black px-[20px] gap-[7px]`}>
                                <img src={skill.icon} className={`w-[20px] h-[20px]`} alt="" />
                                <p>
                                    {skill.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}
