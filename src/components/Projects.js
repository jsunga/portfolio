import React, { Component } from 'react'
import styled from 'styled-components'
import flix from './images/flix.png'
import gator from './images/gator.png'
import tweeper from './images/tweeper.png'
import eye from './images/eye.png'
import skyla from './images/skyla.jpg'

const Body = styled.div`
  background-color: #f6f6f6;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 70px;
  color: #373a3c;
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 29px;
  width: 30%;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 10px;
  margin-left: 20px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    text-align: center;
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const Row = styled.div`
  @media (min-width: 768px) {
    display: flex;
    padding: 10px;
  }
`

const Col = styled.div`
  border: 1px solid #e8e8e8;
  margin: 10px;
  background-color: white;

  @media (min-width: 768px) {
    width: 33.33%;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const Card = styled.div`
`

const ImageContainer = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, .5);
  }
`

const Description = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  padding: 5px 12px 12px 12px;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, .3);

  &:hover {
    opacity: 1;
  }
`

const Icon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

export default class Projects extends Component {

  render() {
    return (
      <Body id='projects'>
        <Container>
          <Header className='wow bounceInDown'>My Latest Projects</Header>
          <Row>
            <Col className='wow fadeIn' data-wow-duration='1s'>
              <Card>
                <a href="https://github.com/jsunga/Tweeper" target="_blank" rel="noopener noreferrer">
                <ImageContainer>
                  <Image src={tweeper} alt='thumbnail' />
                  <Overlay>
                    <Icon src={eye} alt='icon' />
                  </Overlay>
                </ImageContainer>
                </a>
                <Description>
                  Register for Tweeper and broadcast short posts for everyone to see. 
                  Follow your friends and idols, hear what people are talking about, 
                  and join the conversation.
                </Description>
              </Card>
            </Col>
            <Col className='wow fadeIn' data-wow-duration='1s' data-wow-delay='.2s'>
              <Card>
                <a href="https://github.com/jsunga/Gatorbnb" target="_blank" rel="noopener noreferrer">
                <ImageContainer>
                  <Image src={gator} alt='thumbnail' />
                  <Overlay>
                    <Icon src={eye} alt='icon' />
                  </Overlay>
                </ImageContainer>
                </a>
                <Description>
                  We help SFSU students find housing by connecting students to 
                  landlords offering a place to rent near SFSU.
                </Description>
              </Card>
            </Col>
            <Col className='wow fadeIn' data-wow-duration='1s' data-wow-delay='.4s'>
              <Card>
                <a href="https://github.com/jsunga/Flix-Reviews" target="_blank" rel="noopener noreferrer">
                <ImageContainer>
                  <Image src={flix} alt='thumbnail' />
                  <Overlay>
                    <Icon src={eye} alt='icon' />
                  </Overlay>
                </ImageContainer>
                </a>
                <Description>
                  Browse your favorite and popular movies. Rate and write your casual review 
                  on movies playing in theaters.
                </Description>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className='wow fadeIn' data-wow-duration='1s'>
              <Card>
                <a href="https://github.com/jsunga/Skyla-Fitness" target="_blank" rel="noopener noreferrer">
                <ImageContainer>
                  <Image src={skyla} alt='thumbnail' />
                  <Overlay>
                    <Icon src={eye} alt='icon' />
                  </Overlay>
                </ImageContainer>
                </a>
                <Description>
                  An upcoming fitness gym chain that takes pride in having 
                  multiple great plans for varying fitness goals and 
                  passionate trainers.
                </Description>
              </Card>
            </Col>
            <Col className='wow fadeIn' data-wow-duration='1s' style={{backgroundColor: '#F6F6F6', border: 'none'}}>
            </Col>
            <Col className='wow fadeIn' data-wow-duration='1s' style={{backgroundColor: '#F6F6F6', border: 'none'}}>
            </Col>
          </Row>
        </Container>
      </Body>
    )
  }

}
