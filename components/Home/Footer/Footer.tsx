import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";

const Footer = () => {
    return (
        <div className='py-16 bg-[#0f0715] space-y-10'>
            <div className='flex flex-row justify-center items-center gap-2'>
                <p className='text-white exo-2-logo text-3xl tracking-tight text-center mb-4'>Lauren Patterson</p>
            </div>
            <div className='flex items-center flex-wrap justify-center text-center gap-10 px-4 text-white font-bold'>
                {navLinks.map((navlink) => {
                    return (<Link key={navlink.id} href={navlink.url}>
                        <p className="nav__link">{navlink.label}</p>
                    </Link>
                    );
                })}
            </div>
            <p className='text-white opacity-75 mt-6 text-center text-sm'>
                Logo icons sourced from <Link href='https://github.com/devicons/devicon' className='text-blue-600 visited:text-purple-600 underline'>devicons</Link>
            </p>
        </div>
    )
}


export default Footer;