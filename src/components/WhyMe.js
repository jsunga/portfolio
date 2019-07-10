import React, { Component } from 'react'
import styled from 'styled-components'
import adapt from './images/adapt.png'
import book from './images/book.png'
import code from './images/code.png'

const Body = styled.div`
  background-color: #f6f6f6;
`

const Container = styled.div`
  color: #373a3c;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    height: 450px;
    padding-top: 130px;
  }
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 29px;
  text-align: center;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 15px;
  width: 350px;
  margin: 0 auto;
`

const Intro = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  text-align: center;
  padding: 15px;
  margin-bottom: 10px;
`

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const Content = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    width: 33.33%;
    padding: 5px;
  }
`

const Title = styled.div`
  font-size: 25px;
  text-align: center;
  padding-bottom: 10px;
`

const Description = styled.div`
  text-align: center;
`

const IconContainer = styled.div`
  text-align: center;
`

const Icon = styled.img`
  
`

export default class WhyMe extends Component {

  render() {
    return (
      <Body>
        <Container>
          <Header className='wow zoomIn'>Why work with me?</Header>
          <Intro className='wow zoomIn'>There are many advantages to working with me. Here are a few:</Intro>
          <Wrapper>
            <Content className='wow fadeIn'>
              <IconContainer><Icon src={code} alt='icon' /></IconContainer>
              <Title>Passionate about development</Title>
              <Description>Big believer in the fact that the greatest work is done by passionate people</Description>
            </Content>
            <Content className='wow fadeIn' data-wow-delay='.2s'>
              <IconContainer><Icon src={book} alt='icon' /></IconContainer>
              <Title>Quick learner</Title>
              <Description>
                Confident in my ability to learn something new and put it into production. 
                Thrive in fast-paced and competitive environments.
              </Description>
            </Content>
            <Content className='wow fadeIn' data-wow-delay='.4s'>
              <IconContainer><Icon src={adapt} alt='icon' /></IconContainer>
              <Title>Adaptable</Title>
              <Description>
                Always excited to learn new things. The most valuable thing I can provide to your 
                company is the ability to be molded to your stack.
              </Description>
            </Content>
          </Wrapper>
        </Container>
      </Body>
    )
  }
  
}
