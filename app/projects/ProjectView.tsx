'use client'
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { FaArrowLeft } from "react-icons/fa";
import { redirect } from "next/navigation";

const onClick = () => {
    return redirect('/')
}


export default function ProjectView({ project }: any) {
    return (
        <div className='w-full pt-[4vh] md:pt-[16vh] h-screen bg-[#0f0715] overflow-hidden flex items-start justify-center '>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    {/* <button onClick={onClick()} className='text-white w-8 h-8'>
                        <FaArrowLeft />
                    </button> */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white/95 tracking-tight">
                        {project.name}
                    </h1>
                </div>
                <p className="mt-2 text-sm uppercase tracking-widest text-purple-400">
                    Client Project · Web Design & Development
                </p>

                <div className="h-1 w-24 bg-gradient-to-r 
                from-purple-400 to-pink-500 rounded-full mt-4" />
                <div className='relative max-w-6xl mx-auto mt-8 rounded-2xl 
                bg-[#140a1d] border border-white/10 
                shadow-[0_0_60px_rgba(160,90,255,0.15)] p-6'>
                    <div className="absolute inset-0 bg-gradient-to-t 
                from-purple-900/40 to-transparent rounded-2xl" />
                    {project.image && (
                        <Image
                            src={urlFor(project.image).quality(100).url()}
                            alt={project.name || 'Image of website'}
                            width={1000}
                            height={700}
                            sizes="100vw"
                            className="object-contain"
                        />
                    )} {/* <-- Don't render at all if missing */}
                    {/* <p className='text-white'>{project.description}</p> */}
                </div>
            </div>
        </div>
    )
}