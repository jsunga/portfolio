import React, { Component } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import bg from './images/bg.jpg'

const Body = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  color: white;
  margin-left: 50px;
  margin-right: 50px;

  @media (min-width: 768px) {
    max-width: 1040px;
    display: flex;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`

const LeftContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding-right: 10px;
  }
`

const RightContainer = styled.div`
  max-height: 230px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Header = styled.div`
  text-shadow: 0px 1px 1px white;
  font-family: 'Raleway', sans-serif;
  font-size: 45px;
  font-weight: bold;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const Span = styled.span`
  text-shadow: 0px 1px 1px #BF2834;
  color: #BF2834;
`

const Intro = styled.div`
  text-shadow: 0px 1px 1px #C4C4C4;
  color: #C4C4C4;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Title = styled.div`
  text-shadow: 0px 1px 1px #BF2834;
  font-family: 'Roboto', sans-serif;
  color: #BF2834;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 5px;
`

const Quote = styled.div`
  text-shadow: 0px 1px 1px white;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  padding-bottom: 5px;
`

const Author = styled.div`
  color: #C4C4C4;
`

const Content = styled.div`
  text-align: center;
`

const Button = styled.div`
  border: 1px solid #BF2834;
  border-radius: 5px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 40px;
  transition: .8s;

  &:hover {
    background-color: #BF2834;
    cursor: pointer;
  }
`

const Box = styled.div`
  width: 80%;
`

export default class Main extends Component {

  render() {
    return (
      <Body id='main'>
        <Container>
          <LeftContainer>
            <Header className='wow fadeIn' data-wow-duration='2s'>Hello, I'm <Span>Jay Sunga</Span>.</Header>
            <Intro className='wow fadeIn' data-wow-duration='2s' data-wow-delay='.2s'>I'm a full-stack web developer.</Intro>
            <Title className='wow fadeIn' data-wow-duration='2s' data-wow-delay='.4s'>PEOPLE WORK BETTER TOGETHER</Title>
            <Quote className='wow fadeIn' data-wow-duration='2s' data-wow-delay='.6s'>
              The power of one, if fearless and focused, is formidable, 
              but the power of many working together is better.
            </Quote>
            <Author className='wow fadeIn' data-wow-duration='2s' data-wow-delay='.6s'>- Gloria Macapagal Arroyo</Author>
          </LeftContainer>
          <RightContainer className='wow fadeIn' data-wow-duration='2s'>
            <Box>
              <Content>
                Want to work with me? I want to make things 
                that make a difference.
              </Content>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              ><Button>Get in touch</Button></Link>
            </Box>
          </RightContainer>
        </Container>
      </Body>
    )
  }
  
}
