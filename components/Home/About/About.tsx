import React from 'react';
import SectionHeading from '../../Helper/SectionHeading'
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { getAbout } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';


export default async function About() {

    const about = await getAbout()

    return (
        <div className='pt-16 pb-16 bg-[#050709]'>
            <SectionHeading>About Me</SectionHeading>
            <div className=' mx-auto grid grid-cols-1 gap-8 mt-20'>
                {/* About Text Content */}
                <div className='w-[80%] lg:w-[70%] xl:w-[55%] x mx-auto'>
                    <h1 className='text-bg bg-linear-to-r from-[#8750f7] to-white text-transparent bg-clip-text inline-block text-3xl sm:text-4xl md:text-5xl mg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem]'>
                        {about[0].name}
                    </h1>
                    {/* Description */}
                    {about[0]?.description ? (
                        <div className='prose mt-6 text-sm sm:text-md lg:text-lg text-white opacity-90'>
                            <PortableText value={about[0].description} />
                        </div>
                    ) : null}
                    {about[0].list ? (
                        about[0].list.map((item: string, index: number) => {
                            return <div className='mt-8' key={index}>
                                <div className='flex items-center space-x-2 mb-6'>
                                    <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                                        <FaCheck className='text-white' />
                                    </div>
                                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>{item}</p>
                                </div>
                            </div>
                        })
                    ) : null} 
                </div>
                {/* Stats Content */}
                <div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
                    {/* 4 Stats w/ Icon */}
                    {/* <div>
                        <Image src='/images/customer.png' alt='image' width={80} height={80} className='mx-auto' />
                        <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.client}</p>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>Satisfied Customers</p>
                    </div>
                    <div>
                        <Image src='/images/experience.png' alt='image' width={80} height={80} className='mx-auto' />
                        <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.experience}</p>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>Years Experience</p>
                    </div>
                    <div>
                        <Image src='/images/completed.png' alt='image' width={80} height={80} className='mx-auto' />
                        <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.project}</p>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>Completed Projects</p>
                    </div>
                    <div>
                        <Image src='/images/rocket.png' alt='image' width={80} height={80} className='mx-auto' />
                        <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.website}</p>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>Websites Launched</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
