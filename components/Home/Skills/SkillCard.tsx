import Image from "next/image";
import React from "react";

type Props = {
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}

const SkillCard = ({ skill }: Props) => {

    const { title, image } = skill

    return <div className='p-6 bg-gray-900 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg'>
        {image.toString().includes('nextjs') ?
            <div>
                <div className='bg-gray-100 rounded-full w-[80px] h-[80px] p-1 flex justify-self-center'>
                    <Image src={image} alt={title} width={80} height={80} className="object-cover mx-auto" />
                </div>
                <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
            </div>
            : <div>
                <Image src={image} alt={title} width={80} height={80} className="object-cover mx-auto" />
                <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
            </div>}

    </div>

}

export default SkillCard;