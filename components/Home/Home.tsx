import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About'
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

const Home = () => {
    return <div className="overflow-hidden scroll-smooth">
        <div id='Hero' className='scroll-mt-[12vh]'><Hero /></div>
        <div id='About' className='scroll-mt-[12vh]'><About /></div>
        <div id='Services' className='scroll-mt-[12vh]'><Services /></div>
        <div id='Projects' className='scroll-mt-[12vh]'><Projects /></div>
        <div id='Skills' className='scroll-mt-[12vh]'><Skills /></div>
        <div id='Contact' className='scroll-mt-[12vh]'><Contact /></div>

    </div>;
}

export default Home;