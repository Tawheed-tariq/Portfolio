export default function SkillIcon({title, icon}){
    return(
        <div className={`flex h-[35px] shadow md:h-[45px] rounded-[20px] md:rounded-[23px] items-center justify-between px-[20px] gap-[7px]`}>
            <img src={icon} className={`w-[15px] h-[15px] md:w-[20px] md:h-[20px]`} alt="" />
            <p className="text-txt text-[10px] sm:text-sm md:text-md">
                {title}
            </p>
        </div>
    )
}