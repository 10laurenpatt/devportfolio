'use client'
import Image from "next/image"

export default function ProjectView({ project }: any) {
    return (
        <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
            <h1>{project.name}</h1>

            {project.image && (
                <Image
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={600}
                />
            )} {/* <-- Don't render at all if missing */}
        </div>
    )
}