import React, { Component } from 'react'
import styled from 'styled-components'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import email from './images/email.png'

const Body = styled.div`
  height: 330px;
  background-color: white;
`

const Container = styled.div`
  @media (min-width: 1080px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding-top: 120px;
  }
  @media (max-width: 1080px) {
    padding-top: 70px;
  }
`

const LeftContainer = styled.div`
  color: #373a3c;

  @media (min-width: 1080px) {
    width: 50%;
  }
`

const RightContainer = styled.div`
  @media (min-width: 1080px) {
    width: 50%;
  }
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 29px;

  @media (min-width: 1080px) {
    width: 50%;
    border-bottom: 1px solid #d4d4d4;
    margin: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: 1080px) {
    text-align: center;
    padding: 10px;
    width: 50%;
    margin: 0 auto;
    border-bottom: 1px solid #d4d4d4;
    margin-bottom: 15px;
  }
`

const Description = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  padding-bottom: 10px;

  @media (min-width: 1080px) {
    padding-left: 10px;
  }

  @media (max-width: 1080px) {
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }
`

const Links = styled.div`
  width: 300px;
  margin: 0 auto;
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  padding: 10px;
`

export default class Contact extends Component {

  render() {
    return (
      <Body id='contact'>
        <Container>
          <LeftContainer className='wow bounceInUp'>
            <Header>Connect with me</Header>
            <Description>Want to get in touch? I share my passion for development anywhere I can.</Description>
          </LeftContainer>
          <RightContainer>
            <Links className='wow heartBeat'>
              <a href="mailto:jawynsunga@yahoo.com" target="_top"><Image src={email} alt="socialmedia" /></a>
              <a href="https://github.com/jsunga" target="_blank" rel="noopener noreferrer"><Image src={github} alt="socialmedia" /></a>
              <a href="https://www.linkedin.com/in/jsunga16/" target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt="socialmedia" /></a>
            </Links>
          </RightContainer>
        </Container>
      </Body>
    )
  }
  
}
