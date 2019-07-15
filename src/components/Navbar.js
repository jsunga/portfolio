import React, { Component } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import download from './images/download.png'
import resume from './resume/Jawyn_Sunga_Resume.pdf'
import menu from './images/menu.png'

const Body = styled.div`
  height: 55px;
  width: 100%;
  background-color: rgba(21,31,33,0.5);
  border-bottom: 1px solid #dedede;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
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

const Image = styled.img`
  width: 18px;
  height: 18px;
  padding-left: 5px;
`

const MenuIcon = styled.img`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const List = styled.div`
  z-index: 1000;
  position: fixed;
  background-color: rgba(21,31,33,0.5);
  margin-top: 55px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`

const ListItem = styled.div`
  font-family: 'Roboto', sans-serif;
  color: white;
  text-align: right;
  padding: 5px;
  padding-right: 20px;

  &:hover {
    cursor: pointer;
    color: #e8e8e8;
  }
`

export default class Navbar extends Component {

  state = {
    menu: false
  }

  render() {
    return (
      <>
      <Body>
        <MenuIcon src={menu} alt='icon' onClick={() => this.setState({menu: !this.state.menu})} />
        <Nav>
          <Link
            activeClass='active'
            to='main'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item >HOME</Item></Link>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item>ABOUT ME</Item></Link>
          <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item>SKILLS</Item></Link>
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item>PROJECTS</Item></Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><Item>CONTACT ME</Item></Link>
          <a href={resume} style={{textDecoration: 'none'}} download='Jawyn_Sunga_Resume'>
            <Item>
              RESUME 
              <Image src={download} alt="icon" />
            </Item>
          </a>
        </Nav>
      </Body>
      {this.state.menu ? (
        <List>
          <Link
            activeClass='active'
            to='main'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => this.setState({menu: false})}
          ><ListItem>HOME</ListItem></Link>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => this.setState({menu: false})}
          ><ListItem>ABOUT ME</ListItem></Link>
          <Link
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => this.setState({menu: false})}
          ><ListItem>SKILLS</ListItem></Link>
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => this.setState({menu: false})}
          ><ListItem>PROJECTS</ListItem></Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => this.setState({menu: false})}
          ><ListItem>CONTACT ME</ListItem></Link>
          <a href={resume} style={{textDecoration: 'none'}} download='Jawyn_Sunga_Resume'>
            <ListItem>RESUME <Image src={download} alt="icon" /></ListItem>
          </a>
        </List>
      ) : (
        null
      )}
      </>
    )
  }

}
