import React, { Component } from 'react'
import styled from 'styled-components'
import adapt from './images/adapt.png'
import book from './images/book.png'
import code from './images/code.png'

const Body = styled.div`
  background-color: #f6f6f6;

  @media (min-width: 768px) {
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding-top: 65px;
    padding-bottom: 65px;
  }
`

const Container = styled.div`
  color: #373a3c;
  max-width: 1200px;
  margin-left: 15px;
  margin-right: 15px;
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 29px;
  text-align: center;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 15px;
  width: 350px;
  margin: 0 auto
`

const Intro = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  text-align: center;
  padding-top: 15px;

  @media (min-width: 768px) {
    padding: 15px;
  }
`

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const Content = styled.div`
  font-family: 'Source Sans Pro', sans-serif;

  @media (min-width: 768px) {
    width: 33.33%;
    padding: 5px;
  }

  @media (max-width: 768px) {
    padding-top: 30px;
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

export default class WhyMe extends Component {

  render() {
    return (
      <Body>
        <Container>
          <Header className='wow zoomIn' data-wow-duration='2s'>Why work with me?</Header>
          <Intro className='wow zoomIn' data-wow-duration='2s'>There are many advantages to working with me. Here are a few:</Intro>
          <Wrapper>
            <Content className='wow fadeIn' data-wow-duration='1s'>
              <Description><img src={code} alt='icon' /></Description>
              <Title>Passionate about development</Title>
              <Description>Big believer in the fact that the greatest work is done by passionate people.</Description>
            </Content>
            <Content className='wow fadeIn' data-wow-delay='.5s' data-wow-duration='1s'>
              <Description><img src={book} alt='icon' /></Description>
              <Title>Quick learner</Title>
              <Description>
                Confident in my ability to learn something new and put it into production. 
                Thrive in fast-paced and competitive environments.
              </Description>
            </Content>
            <Content className='wow fadeIn' data-wow-delay='1s' data-wow-duration='1s'>
              <Description><img src={adapt} alt='icon' /></Description>
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
