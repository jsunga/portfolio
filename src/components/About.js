import React, { Component } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import img from './images/web.png'

//link to footer

const Body = styled.div`
  height: 580px;
  background-color: #f6f6f6;

  @media (max-width: 1080px) {
    height: 700px;
  }
`

const Container = styled.div`
  @media (min-width: 1080px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding-top: 100px;
  }
`

const Who = styled.div`
  color: #373a3c;

  @media (min-width: 1080px) {
    width: 50%;
  }

  @media (max-width: 1080px) {
    padding-top: 60px;
  }
`

const ImageContainer = styled.div`
  @media (min-width: 1080px) {
    width: 50%;
  }

  @media (max-width: 1080px) {
    text-align: center;
  }
`

const Image = styled.img`
  @media (min-width: 1080px) {
    border: 2px solid #e05e5e;
    border-radius: 10px;
    float: right;
  }

  @media (max-width: 1080px) {
    width: 352px;
    height: 220px;
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

const Intro = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 19px;

  @media (min-width: 1080px) {
    padding-left: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: 1080px) {
    text-align: center;
    padding-bottom: 10px;
  }
`

const Description = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 17px;

  @media (min-width: 1080px) {
    padding-left: 10px;
  }

  @media (max-width: 1080px) {
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
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

  @media (min-width: 1080px) {
    margin-top: 15px;
    margin-left: 10px;
  }

  @media (max-width: 1080px) {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 65px;
  }
`

export default class About extends Component {

  render() {
    return (
      <Body id='about'>
        <Container>
          <Who className="wow fadeInLeft">
            <Header>Who am I...</Header>
            <Intro>Hi there! My name is Jay Sunga and I am a Full Stack Developer</Intro>
            <Description>
              I enjoy spending my free time increasing my knowledge of 
              Web Development and building new and challenging projects
              with tools like React and Django.
            </Description>
            <Button>Find out more</Button>
          </Who>
          <ImageContainer className="wow fadeInRight">
            <Image src={img} />
          </ImageContainer>
        </Container>
      </Body>
    )
  }

}
