import React from 'react'
import message from '../../assets/message.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import './Footer.scss'

const Footer = () => {

    return (
        <div className='footer'>
            <main>
                <a href="https://www.linkedin.com/in/jsunga16/" target="_blank" rel="noopener noreferrer"><img className='linkedin' src={linkedin} alt='icon' /></a>
                <a href="mailto:jptsunga@gmail.com" target="_top"><img className='message' src={message} alt='icon' /></a>
                <a href="https://github.com/jsunga" target="_blank" rel="noopener noreferrer"><img className='github' src={github} alt='icon' /></a>
            </main>
        </div>
    )

}

export default Footer