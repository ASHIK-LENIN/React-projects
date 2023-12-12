import React from 'react'
import './Hero.css'
import '/avatar.png'

const Hero = () => {
    return (
        <>
            <section className='container'>
                <div className='content'>
                    <h1 className='title'>MERN Full Stack Developer</h1>
                    <p className='description'>Hi, i am Ashik. Passionate about building end-to-end web applications, eager to learn and grow.</p>
                    <a href="mailto:ashikleninn@gmail.com" className='ContactBtn'>Contact Me</a>
                </div>
                <img src="/avatar.png" alt="img" className='profile-pic' />
            </section>


        </>
    )
}

export default Hero