import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Projects = () => {
    return <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading >Projects</SectionHeading>
        <div className='w-[80%] mx-auto mt-20 grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
            {projectData.map((project => {
                return <div key={project.id} className='bg-blue-950 p-g rounded-lg hover:scale-105 transition-all duration-300'>
                    <Link href={project.url} target='_blank'>
                        <Image src={project.image} alt="project" className='w-full' width={300} height={300}/>
                    </Link>
                </div>
            }))}
        </div>
    </div>
}


export default Projects;