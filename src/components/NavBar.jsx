import {navLinks, contactLinks} from '../constants/index'
export default function NavBar(){
    return(
        <div className={`bg-background w-full h-[50px] border-b-2  border-black flex justify-between items-center px-[250px]`}>
            <div className={`text-txt text-[20px] font-semibold`}>
                Tavaheed Tariq
            </div>
            <div className={`flex w-[40%] justify-between`}>
                {
                    navLinks.map((link) => (
                        <a className={`text-[12px] cursor-pointer`} id={link.id}>
                            {link.title}
                        </a>
                    ))
                }
            </div>
            <div className={`flex justify-between gap-[12px] items-center`}>
                {
                    contactLinks.map((item) => (
                        <a href={item.url} id={item.id} className='cursor-pointer' >
                            <img src={item.icon} className={`w-[25px] h-[25px]`} />
                        </a>
                    ))
                }
                <button className={`w-[100px] text-txt cursor-pointer h-[35px] border-2 rounded-[20px] border-black`}>
                    Resume
                </button>
            </div>
        </div>
    )
}