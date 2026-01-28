import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import ServiceCard from './ServiceCard';
import { getServices } from '@/sanity/sanity-utils';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'next-sanity';

export default async function Services() {

    const services = await getServices();

    return <div className='pt-16 pb-16 bg-[#0f0715]'>
            <SectionHeading>Services</SectionHeading>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'>
                {services?.data?.map((service: { _id: string; name: string; description: PortableTextBlock; image: SanityImageSource; }) => {
                    return <div key={service._id}>
                        {/* Service Card */}
                        <ServiceCard service={service} />
                    </div>
                })}
            </div>
    </div>;
}

