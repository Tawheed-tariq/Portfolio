export default function Project({title, desc, img, skillArr}){
    return(
        <div className={` shadow  max-w-[500px] p-[15px] mx-[20px] my-[10px] rounded-2xl flex gap-[15px] `}>
            <div className="w-[40px]">
                <img src={img} className={`w-[35px] h-[35px] mt-[10px]`} />
            </div>


            <div className={`w-[95%]`}>
                <h1 className={`text-xl md:text-2xl font-semibold text-txt mb-[10px]`}>{title}</h1>
                <p className={`text-xs md:text-sm text-txt`}>
                    {desc}
                </p>
                <h1 className={`text-sm md:text-md font-semibold text-txt my-[10px]`}>Skills Used :</h1>


                <div className={`flex flex-wrap gap-[15px] my-[15px] md:mx-[20px]`}>
                    {
                        skillArr.map((skill) => (
                            <Icon skill={skill}/>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

const Icon = ({skill}) => {
    return (
        <div className={`flex h-[25px]  shadow md:h-[35px] rounded-[20px] md:rounded-[23px] items-center justify-between px-[15px] gap-[7px]`}>
            <p className="text-txt text-[10px] sm:text-sm md:text-md">
                {skill}
            </p>
        </div>
    )
}