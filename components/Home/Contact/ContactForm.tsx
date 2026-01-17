import { PortableText } from "next-sanity";
import React from "react";
import { TypedObject } from "sanity";

type Props = {
    contact: {
        _id: any; title: string; description: any;
    }
}

const ContactForm = ({ contact }: Props) => {


    return <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
        <h1 className='text-bg bg-linear-to-r from-[#8750f7] to-white text-transparent bg-clip-text inline-block pb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] xl:leading-[4rem]'>
            {contact.title}
        </h1>
        {contact?.description ? (
            <div className='prose text-gray-200 mt-3 text-xs md:text-lg'>
                <PortableText value={contact.description} />
            </div>
        ) : null}
        {/* Input Fields */}
        <form className='mt-8 block w-full overflow-hidden' action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="0ad89dff-aa1b-42f1-b6d6-6241af10b90b"></input>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <input
                    name='firstname'
                    type='text'
                    placeholder='First Name'
                    className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1px] 
                    border-gray-200/15 outline-none w-full' />
                <input
                    name='lastname'
                    type='text'
                    placeholder='Last Name'
                    className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1px] 
                    border-gray-200/15 outline-none w-full' />
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between mt-5 gap-4'>
                <input
                    name='email'
                    type='email'
                    placeholder='Email Address'
                    className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1px] 
                    border-gray-200/15 outline-none w-full' />
                <input
                    name='phone'
                    type='text'
                    placeholder='Phone Number'
                    className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1px] 
                    border-gray-200/15 outline-none w-full' />
            </div>
            <textarea
                name='message'
                rows={7}
                placeholder='Enter message here...'
                className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1px]
                border-gray-200/15 outline-none'></textarea>
            <div className='mt-4'>
                <button type='submit'
                    className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-300 cursor-pointer
                    rounded-full'>Send Message</button>
            </div>
        </form>
    </div>
}

export default ContactForm;