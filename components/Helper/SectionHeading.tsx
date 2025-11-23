import React, { ReactNode } from "react";

//Define Props Type
type Props = {
    children: ReactNode
}

const SectionHeading = ({children}:Props) => {
    return <div>
        <h1 className='bg-blue-600 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
            {children}
        </h1>
    </div>
}

export default SectionHeading;