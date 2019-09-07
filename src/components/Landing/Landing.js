import React from 'react'
import Particles from 'react-particles-js'
import { Link } from 'react-scroll'
import './Landing.scss'

const Landing = () => {

    return (
        <div className='landing'>
            <Particles className='particles'
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
                width='1900px'
                height='880px'
            />
            <h1>Hi, I'm <strong>Jawyn Sunga.</strong></h1>
            <h1>I'm a full stack web developer.</h1>
            <Link
                className='link'
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            ><span>View my work</span></Link>
        </div>
    )

}

export default Landing