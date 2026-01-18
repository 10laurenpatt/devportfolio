import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { getHero } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';

export default async function Hero() {

    const hero = await getHero();

    return (
        <div className='relative w-full min-h-screen pt-[4vh] md:pt-[12vh] overflow-hidden'>
            <div className="absolute inset-0 -z-10">
                <Image
                    src={urlFor(hero[0].image).quality(100).url()}
                    alt="An image of code"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0715] to-[#0f0715]/55" />
            </div>
            <div className='relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl flex-col justify-center px-6 text-center'>
                <div className='grid items-center text-center gap-12'>
                    {/* Text Content */}
                    <div className='align'>
                        {/* Title */}
                        <h1 className='text-bg bg-linear-to-r from-[#8750f7] to-white text-transparent bg-clip-text inline-block mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem]'>
                            {hero[0].title1}
                        </h1>
                        <h1 className='text-bg bg-linear-to-r from-[#8750f7] to-white text-transparent bg-clip-text inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem]'>
                            {hero[0].title2}
                        </h1>
                        {/* Description */}
                        {hero[0]?.description ? (
                            <div className='prose mt-6 text-sm sm:text-md md:text-xl text-white opacity-80'>
                                <PortableText value={hero[0].description} />
                            </div>
                        ) : null}
                        <div className="flex gap-4 justify-center mt-8">
                            <a className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold flex items-center gap-2" href='files/Lauren_Patterson_Resume_Sept_2025.pdf'
                                target="_blank">
                                Resume <FaDownload />
                            </a>

                            <a className="px-6 py-3 rounded-lg border border-white/30 text-white/90 hover:bg-white/10 transition flex items-center gap-2" href='files/Lauren_Patterson_Letter_of_Recommendation.pdf'
                                target="_blank">
                                Letter of Recommendation <FaDownload />
                            </a>
                        </div>
                    </div>
                    {/* Image Content */}

                </div>
            </div>
        </div>
    )
}
