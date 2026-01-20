import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import { urlFor } from '../../../lib/sanityClient';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";



export default async function Projects() {

    const projects = await getProjects();

    return <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading >Projects</SectionHeading>
        <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
            {projects.data.map((project: { _id: React.Key | null | undefined; image: SanityImageSource; name: string; url:string }) => {
                return <div key={project._id} className='bg-blue-950 p-g rounded-lg hover:scale-105 transition-all duration-300'>
                    <Link href={project.url} target='_blank'>
                        <Image
                            src={urlFor(project.image).quality(100).url()}
                            alt={project.name || 'Image of website'}
                            width={1000}
                            height={700}
                            sizes="100vw"
                            className="object-contain"
                        />
                    </Link>
                </div>
            })}
        </div>
    </div>
}

