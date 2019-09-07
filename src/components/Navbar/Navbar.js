import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.scss'

const Navbar = () => {

    return (
        <div className='navbar'>
            <ul>
                <Link
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><li>About</li></Link>  
                <Link
                    activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><li>Projects</li></Link> 
                <Link
                    activeClass='active'
                    to='why'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><li>Contact</li></Link> 
            </ul>
        </div>
    )

}

export default Navbar