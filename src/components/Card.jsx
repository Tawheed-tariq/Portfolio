export default function Card({title, Desc, from, to, img_url, grade}){
    return(
        <div className={`border-[1px] border-black w-[550px] p-[15px] m-[20px] rounded-xl flex gap-[15px] `}>
            <div className="w-[40px]">
                <img src={img_url} className={`w-[35px] h-[35px]`} />
            </div>
            <div className={`w-[500px]`}>
                <h1 className={`text-2xl font-semibold text-txt`}>{title}</h1>
                <p className={`text-sm text-txt`}>{Desc}</p>
                <div>
                    {grade && <p className={`text-xs text-txt text-end`} ><span className="font-medium">Grade</span> : {grade}</p>}
                    <p className={`text-xs text-txt text-end`} >{from} - {to}</p>
                </div>
            </div>
        </div>

    )
}