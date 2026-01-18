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
            <div className='flex flex-row justify-center items-center '>
                <div className='flex items-center flex-wrap justify-center text-center gap-10 px-4 text-white font-bold'>
                    {navLinks.map((navlink) => {
                        return (<Link key={navlink.id} href={navlink.url}>
                            <p className="nav__link">{navlink.label}</p>
                        </Link>
                        );
                    })}
                </div>
            </div>
            {/* LinkedIn icon */}
            <div className='flex justify-center mt-4'>
                <Link
                    href="www.linkedin.com/in/lauren-patterson-5a8719250"
                    aria-label="LinkedIn"
                    className="flex items-center"
                >
                    <Image
                        src="/images/linkedin-original.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className="opacity-90 hover:opacity-100 transition"
                    />
                </Link>
            </div>
            <p className='text-white opacity-75 mt-6 text-center text-sm mx-4 sm:mx-0'>
                Logo icons sourced from <Link href='https://github.com/devicons/devicon' className='text-blue-600 visited:text-purple-600 underline'>devicons</Link>  •  Hero photo by <Link className='text-blue-600 visited:text-purple-600 underline' href="https://unsplash.com/@flowforfrank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ferenc Almasi</Link> on <Link className='text-blue-600 visited:text-purple-600 underline' href="https://unsplash.com/photos/black-flat-screen-computer-monitor-eYpcLDXHVb0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</Link>
            </p>
        </div>
    )
}


export default Footer;