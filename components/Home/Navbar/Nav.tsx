"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constant/constant';
import { HiBars3BottomRight } from 'react-icons/hi2';


//Define Props Type -- Props get passed as params to component
type Props = {
    openNav: () => void   //openNav type is a function that returns void
}



const Nav = ({ openNav }: Props) => {

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true)
            }
            if (window.scrollY < 90) {
                setNavBg(false);
            }
        }

        window.addEventListener("scroll", handler)

        return () => {
            window.removeEventListener("scroll", handler)
        }

    }, [])

    return <div className={`fixed ${navBg ? 'bg-[#240b39]' : 'fixed'} h-[12vh] z-[10] w-full transition-all duration-200`}>
        <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
            {/* Logo */}
            <p className='text-white exo-2-logo text-3xl tracking-tight'>Lauren Patterson</p>

            {/* Nav Links */}
            <div className="flex items-center space-x-10">
                <div className='hidden lg:flex items-center space-x-8'>
                    {navLinks.map((navlink) => {
                        if (navlink.label != 'Contact') {
                            return (<Link key={navlink.id} href={navlink.url}>
                                <p className="nav__link">{navlink.label}</p>
                            </Link>
                            );
                        }
                    })}
                </div>
                {/* {Button} */}
                <div className='flex items-center space-x-4'>
                    <Link
                        href='#Contact'
                        className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                        Contact Me
                    </Link>
                    {/* Burger Menu for Mobile */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    </div>;
}

export default Nav;