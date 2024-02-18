import {navLinks, contactLinks} from '../constants/index'
export default function NavBar(){
    return(
        <div className={`bg-backgroundBlur w-full h-[70px] border-b-[1px]  border-black flex justify-between items-center px-[20px] md:px-[250px]`}>
            <div className={`text-txt text-[20px] font-semibold`}>
                Tavaheed Tariq
            </div>
            <div className={`flex w-[40%] justify-between`}>
                {
                    navLinks.map((link) => (
                        <a className={`text-[12px] cursor-pointer link`} key={link.id}>
                            {link.title}
                        </a>
                    ))
                }
            </div>
            <div className={`flex w-[20%] justify-between gap-[12px] items-center`}>
                {
                    contactLinks.map((item) => (
                        <a href={item.url} key={item.id} className='cursor-pointer' >
                            <img src={item.icon} className={`w-[20px] h-[20px]`} />
                        </a>
                    ))
                }
                <button className={`w-[100px] text-txt cursor-pointer h-[35px] border-[1px] rounded-[20px] border-black`}>
                    Resume
                </button>
            </div>
        </div>
    )
}