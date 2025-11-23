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

const SkillCard = ({skill} : Props) => {

    const {title, image} = skill
    return <div className='p-6 bg-gray-900 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg'>
        <Image src={image} alt={title} width={80} height={80} className="object-cover mx-auto"/>
        <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
    </div>

}

export default SkillCard;