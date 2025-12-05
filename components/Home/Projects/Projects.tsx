import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getProjects } from "@/sanity/sanity-utils";



 export default async function Projects() {

    const projects = await getProjects();

    return <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading >Projects</SectionHeading>
        <div className='w-[80%] mx-auto mt-20 grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
            {projects.map((project)=> {
                return <div key={project._id} className='bg-blue-950 p-g rounded-lg hover:scale-105 transition-all duration-300'>
                    <Link href={`/projects/${project._id}`} target='_blank'>
                        <Image src={project.image} alt="project" className='w-full rounded-sm' width={300} height={300}/>
                    </Link>
                </div>
            })}
        </div>
    </div>
}

