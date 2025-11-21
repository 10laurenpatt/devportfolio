import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react"
import { CgClose } from "react-icons/cg";


//Define Props Type -- Props get passed as params to component
type Props = {
    showNav: boolean;
    closeNav: ()=>void;
}

const MobileNav = ({closeNav, showNav}: Props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

    return <div>
        {/* Overlay - adds a tint to de-focus all background elements */}
        <div className={`fixed ${navOpen} tranform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
        {/*  Nav Links */}
        <div className={`bg-[#0f0715] text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%]  space-y-6 z-[1006]`}>
            {navLinks.map((navlink) => {
                return (<Link key={navlink.id} href={navlink.url}>
                    <p className="nav__link text-[20px] ml-12 border-white border-b-[1.5px] pb-2 sm:text-[30px]">{navlink.label}</p>
                </Link>
                );
            })}
            {/* Close Button */}
            <CgClose onClick={closeNav} className='absolute top-[1.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white'/>
        </div>
    </div>
}

export default MobileNav;