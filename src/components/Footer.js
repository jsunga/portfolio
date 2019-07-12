import React, { Component } from 'react'
import styled from 'styled-components'

const Body = styled.div`
  background-color: #484848;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    height: 600px;
  }
`

const Container = styled.div` 
  width: 1200px;
  margin-left: 50px;
  margin-right: 50px;

  @media (min-width: 768px) {
    display: flex;
  }
`

const About = styled.div`
  @media (min-width: 768px) {
    width: 70%;
    padding-right: 20px;
  }
`

const Contact = styled.div`
  @media (min-width: 768px) {
    width: 30%;
  }
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 29px;
  padding-bottom: 10px;
`

const Description = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  padding-bottom: 10px;
`

const Tag = styled.a`
  text-decoration: none;
  color: white;
`

export default class Footer extends Component {

  render() {
    return (
      <Body id='footer'>
        <Container className='wow fadeInUp'>
          <About>
            <Header>About JAWYN</Header>
            <Description>Hello there! My name is Jawyn Sunga and I'm a Full Stack Developer.</Description>
            <Description>
              I am a recent graduate from San Francisco State University who is eager for opportunities and improve my technical skill. 
              Passionate in learning new things especially the skills and technologies that make your 
              company special.
            </Description>
            <Description>
              I code every day and try to learn more popular technologies by taking Udemy online courses.
            </Description>
            <Description>
              I want to make things that make a difference, and that is why I'm thriving to make a big impact 
              at a high growth company.
            </Description>
            <Description style={{fontSize: '14px'}}>© 2019 Jawyn Sunga</Description>
          </About>
          <Contact>
            <Header>Say Hello:</Header>
            <Description>Email: jptsunga@gmail.com</Description>
            <Description><Tag href="https://github.com/jsunga" target="_blank" rel="noopener noreferrer">GitHub: www.github.com/jsunga</Tag></Description>
            <Description><Tag href="https://www.linkedin.com/in/jsunga16/" target="_blank" rel="noopener noreferrer">LinkedIn: www.linkedin.com/in/jsunga16</Tag></Description>
            <Description>Phone: (650) 278-7449</Description>
          </Contact>
        </Container>
      </Body>
    )
  }

}
