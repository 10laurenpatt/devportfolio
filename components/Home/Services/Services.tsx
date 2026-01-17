import SectionHeading from '@/components/Helper/SectionHeading';
import { servicesData } from '@/data/data';
import React from 'react';
import ServiceCard from './ServiceCard';
import { getServices } from '@/sanity/sanity-utils';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export default async function Services() {

    const services = await getServices();
    console.log(services)

    return <div className='pt-16 pb-16 bg-[#0f0715]'>
            <SectionHeading>Services</SectionHeading>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'>
                {services?.map((service: { _id: any; name: string; description: any; image: SanityImageSource; }) => {
                    return <div key={service._id}>
                        {/* Service Card */}
                        <ServiceCard service={service} />
                    </div>
                })}
            </div>
    </div>;
}

