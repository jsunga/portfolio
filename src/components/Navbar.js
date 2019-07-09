import React, { Component } from 'react'
import { Link } from 'react-scroll'
import WOW from 'wowjs'
import styled from 'styled-components'

const Body = styled.div`
  height: 55px;
  width: 100%;
  background-color: rgba(21,31,33,0.5);
  border-bottom: 1px solid #dedede;
  position: fixed;
  top: 0;
  z-index: 1000;
`

const Nav = styled.ul`
  text-align: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const Item = styled.li`
  color: white;
  display: inline;
  font-size: 16px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Roboto', sans-serif;
  &:hover {
    color: #cfcfcf;
    cursor: pointer;
  }
`

export default class Navbar extends Component {

  componentDidMount() {
    const wow = new WOW.WOW()
    wow.init()
  }

  render() {
    return (
      <Body>
        <Nav>
          <Link
            activeClass='active'
            to='main'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item className="wow bounceInRight">HOME</Item></Link>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item className="wow bounceInRight" data-wow-delay=".1s">ABOUT ME</Item></Link>
          <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item className="wow bounceInRight" data-wow-delay=".2s">SKILLS</Item></Link>
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item className="wow bounceInRight" data-wow-delay=".3s">PROJECTS</Item></Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item className="wow bounceInRight" data-wow-delay=".4s">CONTACT ME</Item></Link>
          <Item className="wow bounceInRight" data-wow-delay=".5s">RESUME</Item>
        </Nav>
      </Body>
    )
  }

}
