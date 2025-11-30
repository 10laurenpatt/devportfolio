import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About'
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

const Home = () => {
    return <div className="overflow-hidden">
        <div id='Hero'><Hero /></div>
        <div id='About'><About /></div>
        <div id='Services'><Services /></div>
        <div id='Projects'><Projects /></div>
        <div id='Skills'><Skills /></div>
        <div id='Contact'><Contact /></div>

    </div>;
}

export default Home;