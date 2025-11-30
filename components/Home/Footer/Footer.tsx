import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className='py-16 bg-[#0f0715]'>
            <div>
                <Image src='/images/logo.png' alt='logo' width={180} height={180} className='mx-auto'/>
            </div>
            <div className='flex items-center flex-wrap justify-center text-center gap-10 px-4 text-white font-bold'>
                <div>
                    Home
                </div>
                <div>
                    Services
                </div>
                <div>
                    Projects
                </div>
                <div>
                    Reviews
                </div>
                <div>
                    Contact
                </div>
            </div>
            <p className='text-white opacity-75 mt-6 text-center text-sm'>
                Icons sourced from <Link href='https://github.com/devicons/devicon' className='text-blue-600 visited:text-purple-600 underline'>devicons</Link>
            </p>
        </div>
    )
}


export default Footer;