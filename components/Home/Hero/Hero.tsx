import { BaseInfo } from '@/data/data';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { getHero } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';

export default async function Hero() {

    const hero = await getHero();
    console.log(hero)

    return (
        <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
            <div className='flex justify-center flex-col w-1/2 h-full mx-auto'>
                <div className='grid items-center text-center gap-12'>
                    {/* Text Content */}
                    <div className='align'>
                        {/* <h1 className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>
                            {BaseInfo.name}
                        </h1> */}
                        {/* Title */}
                        <h1 className='text-bg bg-linear-to-r from-[#8750f7] to-white text-transparent bg-clip-text inline-block mb-3 text-3xl sm:text-4xl md:text-5xl mg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem]'>
                            {hero[0].title1}
                        </h1>
                        <h1 className='text-bg bg-linear-to-r from-[#8750f7] to-white text-transparent bg-clip-text inline-block text-3xl sm:text-4xl md:text-5xl mg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem]'>
                            {hero[0].title2}
                        </h1>
                        {/* Description */}
                        {hero[0]?.description ? (
                            <div className='prose mt-6 text-sm sm:text-md md:text-xl text-white opacity-80'>
                                <PortableText value={hero[0].description} />
                            </div>
                        ) : null}

                        {/* Resume Download Button */}
                        <a 
                        href='files/Lauren_Patterson_Resume_Sept_2025.pdf'
                        target="_blank"
                        
                        className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex justify-self-center space-x-2'>
                            <span>Download Resume</span>
                            <FaDownload />
                        </a>
                    </div>
                    {/* Image Content
                    <div className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden'>
                        <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={700} height={700}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
