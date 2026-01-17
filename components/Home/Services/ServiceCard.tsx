'use client'
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
import Tilt from 'react-parallax-tilt'

type Props = {
    service: {
        _id: any; name: string; description: any; image: SanityImageSource;
    }
}

const ServiceCard = ({ service }: Props) => {
    return <Tilt className='shadow-2xl p-6 rounded-lg bg-[#814ced] h-[14rem]'>
        <Image src={urlFor(service.image).quality(100).url()} alt={service.name} width={50} height={50} />
        <h1 className='mt-4 text-lg font-bold text-gray-100'>{service.name}</h1>
        {service?.description ? (
            <div className='prose mt-3 text-sm text-white text-opacity-80'>
                <PortableText value={service.description} />
            </div>
        ) : null}
    </Tilt>
}

export default ServiceCard;