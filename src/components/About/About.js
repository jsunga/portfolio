import React from 'react'
import SkillBar from 'react-skillbars'
import './About.scss'

const skills = [
    {type: "React", level: 90},
    {type: "Angular", level: 55},
    {type: "HTML5", level: 90},
    {type: "CSS3", level: 85},
    {type: "JavaScript", level: 90},
    {type: "Node.js", level: 80},
    {type: "Python", level: 70},
    {type: "Django", level: 60},
    {type: "SQL", level: 80},
]

const colors = {
    "bar": "#549DA0",
    "title": {
      "text": "#fff",
      "background": "#74B18E"
    }
}

const About = () => {

    return (
        <div className='about' id='about'>
            <h1 className='about-title'>ABOUT</h1><span className='underline' />
            <main>
                <section>
                    <h1 className='about-title'>Who am I?</h1>
                    <p className='about-para'>
                        My name is Jawyn Sunga, and I'm a Software Developer.
                        I enjoy spending my free time increasing my knowledge 
                        of Web Development and building new and challenging
                        projects with my favorite technologies React, Node.js, 
                        and Express.js.
                    </p>
                </section>
                <section className='skills'>
                    <SkillBar skills={skills} colors={colors} animationDelay={1} animationDuration={1500}/>
                </section>
            </main>
        </div>
    )

}

export default About