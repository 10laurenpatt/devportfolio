import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import ContactForm from "./ContactForm";
import { getContact } from "@/sanity/sanity-utils";

export default async function Contact() {

    const contact = await getContact();

    return <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading>Contact Me</SectionHeading>
        <div className='grid grid-cols-1 w-[90%] sm:w-[80%] lg:w-[65%] xl:w-[50%] mx-auto items-center gap-10 mt-10 '>
            {/* Contact Form */}
            <div>
                <ContactForm contact={contact.data}/>
            </div>
        </div>


    </div>
}
