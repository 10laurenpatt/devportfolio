import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";

type Props = {
    skill: {
        _id: any; name: string; image: SanityImageSource;
    }
}

const SkillCard = ({ skill }: Props) => {


    return <div className='p-6 bg-gray-900 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg'>
        {skill?.name.includes('Next.js') ?
            <div>
                <div className='bg-gray-100 rounded-full w-[80px] h-[80px] p-1 flex justify-self-center'>
                    <Image src={urlFor(skill.image).quality(100).url()} alt={skill.name} width={80} height={80} className="object-cover mx-auto" />
                </div>
                <h1 className='text-[18px] mt-4 text-white font-[600]'>{skill.name}</h1>
            </div>
            : <div>
                <Image src={urlFor(skill.image).quality(100).url()} alt={skill.name} width={80} height={80} className="object-cover mx-auto" />
                <h1 className='text-[18px] mt-4 text-white font-[600]'>{skill.name}</h1>
            </div>}

    </div>

}

export default SkillCard;