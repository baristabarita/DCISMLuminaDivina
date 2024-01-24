import React from 'react';
import logo from '../../assets/full_logo2.png'

const Navbar = () => {
    const navigateTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black grid grid-cols-3 justify-between items-center h-[4rem]">
            {/* Logo column */}
            <div className="col-span-1 flex items-center">
                <img src={logo} alt="USC Cisco Logo" className="ml-[5%] w-[20%]" />
            </div>

            {/* Links Column */}
            <div className="col-span-1 flex items-center text-[1.4em] text-[#ffffff] space-x-10 justify-center">
                <nav className="xl:max-2xl:ml-[5%]">
                    <ul className='flex text-white xs:max-sm:text-[0.8em] xl:max-2xl:text-[0.8em]'>
                        <li className='mr-28 hover:text-[#2937ff] text-center cursor-pointer hover:animate-zoom-in-end xs:max-sm:mr-8 xl:max-2xl:mr-16
                    ' onClick={() => navigateTo('home')}>Home</li>
                        <li className='mr-28 hover:text-[#2937ff] text-center cursor-pointer hover:animate-zoom-in-end xs:max-sm:mr-8 xl:max-2xl:mr-16
                    ' onClick={() => navigateTo('about')}>About</li>
                    </ul>
                </nav>
            </div>

            {/* Registration button */}
            <div className=" flex items-center justify-end space-x-4">
                <div className="flex space-x-2 items-center">
                    <button
                        onClick={() => window.location.href = 'https://bit.ly/DCISMLuminaDivina'}
                        className="pl-5 pr-9 py-5 bg-[#C1A87E] text-black font-bold rounded-bl-xl hover:text-[#e2e2e2] transition-colors delay-250 duration-3000 ease-in"
                    >
                        Register Now
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
