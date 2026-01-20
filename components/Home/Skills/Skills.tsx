import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import SkillCard from "./SkillCard";
import { getSkills } from "@/sanity/sanity-utils";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default async function Skills() {

    const skills = await getSkills();

    return <div className='pt-16 pb-16 bg-[#0f0715]'>
        <SectionHeading>Skills</SectionHeading>
        <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
            {skills?.data?.map((skill: { _id: string; name: string; image: SanityImageSource; }) => {
                return <div key={skill._id}>
                    {/* Skill Card */}
                    <SkillCard skill={skill}/>
                </div>
            })}
        </div>
    </div>
}
