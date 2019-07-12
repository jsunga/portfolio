import React, { Component } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import img from './images/web.png'

const Body = styled.div`
  background-color: #f6f6f6;

  @media (min-width: 768px) {
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
  }
`

const Container = styled.div`
  @media (min-width: 768px) {
    max-width: 1200px;
    display: flex;
  }

  @media (max-width: 768px) {
    padding-bottom: 65px;
  }
`

const Who = styled.div`
  color: #373a3c;

  @media (min-width: 768px) {
    width: 50%;
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    padding-top: 65px;
  }
`

const ImageContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Image = styled.img`
  @media (min-width: 768px) {
    border: 2px solid #e05e5e;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 352px;
    height: 220px;
  }
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 29px;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 50%;
    padding-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 10px;
  }
`

const Intro = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 19px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Description = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;

  @media (max-width: 768px) {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Button = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #be2835;
  border: 1px solid #be2835;
  border-radius: 3px;
  width: 215px;
  font-size: 15px;
  text-align: center;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: .8s;

  &:hover {
    background-color: white;
    cursor: pointer;
    color: #be2835;
  }

  @media (min-width: 768px) {
    margin-top: 15px;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`

export default class About extends Component {

  render() {
    return (
      <Body id='about'>
        <Container>
          <Who className="wow fadeInLeft">
            <Header>Who am I...</Header>
            <Intro>Hi there! My name is Jawyn Sunga and I am a Full Stack Developer</Intro>
            <Description>
              I enjoy spending my free time increasing my knowledge of 
              Web Development and building new and challenging projects
              with frameworks and libraries like React and Django.
            </Description>
            <Link
              activeClass='active'
              to='footer'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            ><Button>Find out more</Button></Link>
          </Who>
          <ImageContainer className="wow fadeInRight">
            <Image src={img} />
          </ImageContainer>
        </Container>
      </Body>
    )
  }

}
