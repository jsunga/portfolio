import React from 'react'
import adapt from '../../assets/adapt.png'
import learn from '../../assets/learn.png'
import code from '../../assets/code.png'
import './Why.scss'

const Why = () => {

    return (
        <div className='why' id='why'>
            <h1 className='about-title wow fadeInLeft'>Why work with me?</h1><span className='underline wow fadeIn' data-wow-duration='2s' data-wow-delay='.5s'/>
            <main>
                <section className='wow fadeIn'>
                    <div className='image-container'><img src={code} alt='icon' /></div>
                    <h2>Passionate about development</h2>
                    <p>
                        Big believer in the fact that the greatest 
                        work is done by passionate people.
                    </p>
                </section>
                <section className='wow fadeIn' data-wow-delay='.2s'>
                    <div className='image-container'><img src={learn} alt='icon' /></div>
                    <h2>Quick Learner</h2>
                    <p>
                        Confident in my ability to learn something new and put 
                        it into production. Thrive in fast-paced and competitive 
                        environments.
                    </p>
                </section>
                <section className='wow fadeIn' data-wow-delay='.4s'>
                    <div className='image-container'><img src={adapt} alt='icon' /></div>
                    <h2>Adaptable</h2>
                    <p>
                        Always excited to learn new things. The most valuable thing 
                        I can provide to your company is the ability to be molded 
                        to your stack.
                    </p>
                </section>
            </main>
        </div>
    )

}

export default Why