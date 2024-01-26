import React, { useEffect, useState } from 'react';
import logo from '../../assets/full_logo2.png'
import { Link } from 'react-scroll'; // import Link from react-scroll

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home'); // define the state for the active link
    const links = ['home', 'overview', 'theme', 'attire', 'venue']; // define the links
    const sections = links.map(link => document.getElementById(link)); // get the sections by id

    const navigateTo = (id) => {
        scroll.scrollToTop(); // scroll to top when clicking on logo
    };

    useEffect(() => {
        const handleScroll = () => {
            // get the current scroll position
            const scrollPosition = window.scrollY + 80;
            // loop through the sections and check which one is in view
            sections.forEach((section, index) => {
                if (section.offsetTop <= scrollPosition && section.offsetTop + section.clientHeight > scrollPosition) {
                    // update the active link state
                    setActiveLink(links[index]);
                }
            });
        };
        // add an event listener for scroll
        window.addEventListener('scroll', handleScroll);
        // remove the event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections, links]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black grid grid-cols-3 justify-between items-center h-[4rem]">
            {/* Logo column */}
            <div className="col-span-1 flex items-center">
                <img src={logo} alt="USC Cisco Logo" className="ml-[5%] w-[20%]" onClick={() => navigateTo('home')} />
            </div>

            {/* Links Column */}
            <div className="col-span-1 flex items-center text-[1.4em] text-[#ffffff] space-x-10 justify-center">
                <nav className="xl:max-2xl:ml-[5%]">
                    <ul className='flex text-white xs:max-sm:text-[0.8em] xl:max-2xl:text-[0.8em]'>
                        {links.map(link => (
                            <li key={link} className={`mr-28 text-center cursor-pointer hover:animate-zoom-in-end xs:max-sm:mr-8 xl:max-2xl:mr-16 ${activeLink === link ? 'text-[#e6cf84]' : 'hover:text-[#e6cf84]'}`} >
                                {/* Use Link component with smooth and offset props */}
                                <Link to={link} smooth={true} offset={-80}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Registration button */}
            <div className=" flex items-center justify-end space-x-4">
                <div className="flex space-x-2 items-center">
                    <button
                        onClick={() => window.location.href = 'https://bit.ly/DCISMLuminaDivina'}
                        className="pl-5 pr-9 py-5 bg-[#dec057] text-black font-bold rounded-bl-xl hover:text-[#e2e2e2] transition-colors delay-250 duration-3000 ease-in"
                    >
                        Register Now
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
