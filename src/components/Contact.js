import React, { Component } from 'react'
import styled from 'styled-components'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import email from './images/email.png'

const Body = styled.div`
  background-color: white;

  @media (min-width: 768px) {
    height: 330px; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 768px) {
    padding-bottom: 65px;
    padding-top: 65px;
  }
`

const Container = styled.div`
  @media (min-width: 768px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
  }
`

const LeftContainer = styled.div`
  color: #373a3c;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const RightContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 29px;
  width: 60%;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`

const Description = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Links = styled.div`
  width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    float: right;
  }
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  padding: 5px 10px 5px 10px;

  &:hover {
    opacity: 0.8;
  }
`

export default class Contact extends Component {

  render() {
    return (
      <Body id='contact'>
        <Container>
          <LeftContainer className='wow bounceInUp' data-wow-duration='1s'>
            <Header>Connect with me</Header>
            <Description>Want to get in touch? I share my passion for development anywhere I can.</Description>
          </LeftContainer>
          <RightContainer>
            <Links className='wow heartBeat' data-wow-duration='2s'>
              <a href="mailto:jptsunga@gmail.com" target="_top"><Image src={email} alt="socialmedia" /></a>
              <a href="https://github.com/jsunga" target="_blank" rel="noopener noreferrer"><Image src={github} alt="socialmedia" /></a>
              <a href="https://www.linkedin.com/in/jsunga16/" target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt="socialmedia" /></a>
            </Links>
          </RightContainer>
        </Container>
      </Body>
    )
  }
  
}
