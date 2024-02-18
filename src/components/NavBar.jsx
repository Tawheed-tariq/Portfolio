import { useState } from 'react';
import {navLinks, contactLinks} from '../constants/index'
export default function NavBar(){
    const [toggle, setToggle] = useState(false);
    return(
        <nav>
            {/* navbar for devices of width greater than 768px */}
            <div className={`bg-transparent backdrop-blur-sm w-full h-[70px] border-b-[1px]  border-black hidden sm:flex justify-between items-center px-[40px] md:px-[80px] lg:px-[170px] xl:px-[250px] fixed z-10`}>
                <div className={`text-txt text-lg md:text-[20px] font-semibold`}>
                    Tavaheed Tariq
                </div>


                <div className={`flex w-[50%] md:w-[40%] justify-between`}>
                    {
                        navLinks.map((link) => (
                            <a className={`text-[12px] cursor-pointer link`} href={`#${link.id}`} key={link.id}>
                                {link.title}
                            </a>
                        ))
                    }
                </div>


                <div className={`hidden md:flex w-[25%] lg:w-[20%] justify-between gap-[12px] items-center`}>
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



            {/* navbar for devices of width less than 768px */}
            <div className={`bg-transparent backdrop-blur-sm fixed z-10 w-full h-[70px] border-b-[1px]  border-black flex sm:hidden justify-between items-center px-[40px]`}>
                <div className={`text-txt text-lg font-semibold`}>
                    Tavaheed Tariq
                </div>


                <img
                    src={toggle ? 'close.svg' : 'menu.svg'}
                    alt="menu"
                    className="w-[35px] h-[35px] object-contain cursor-pointer"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle? 'flex' : 'hidden'} gap-[15px] z-[999] shadow backdrop-blur-sm p-6 slide-up absolute top-20 right-0 flex-col mx-4 my-2 min-w-[100px] rounded-xl justify-between`}>
                    {
                        navLinks.map((link) => (
                            <a className={`text-[16px] font-medium text-txt cursor-pointer link`} href={`#${link.id}`} key={link.id}>
                                {link.title}
                            </a>
                        ))
                    }
                </div>


            </div>

        </nav>



        
    )
}