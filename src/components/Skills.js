import React, { Component } from 'react'
import styled from 'styled-components'

const Body = styled.div`
  height: 665px;
  background-color: white;
`

const Container = styled.div`
  color: #373a3c;
  max-width: 860px;
  margin: 0 auto;
  padding-top: 70px;
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  text-align: center;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 15px;
  width: 50%;
  margin: 0 auto;
`

const Intro = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  text-align: center;
  padding: 15px;
`

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`

const Row = styled.div`
  display: flex;
  padding: 10px;
`

const Col = styled.div`
  background-color: #be2835;
  border: 1px solid #be2835;
  width: 33.33%;
  border: 1px solid;
  text-align: center;
  margin: 2px;
  border-radius: 5px;
  padding: 10px;
  transition: .8s;

  &:hover {
    background-color: white;
    color: #be2835;
  }
`

const Content = styled.div`
  background-color: #be2835;
  border: 1px solid #be2835;
  width: 25%;
  border: 1px solid;
  text-align: center;
  margin: 2px;
  border-radius: 5px;
  padding: 10px;
  transition: .8s;

  &:hover {
    background-color: white;
    color: #be2835;
  }
`

export default class Skills extends Component {
  render() {
    return (
      <Body id='skills'>
        <Container>
          <Header>Technological Skills</Header>
          <Intro>
            I always enjoy learning new things. 
            Especially the skills and technologies that make your company succeed.
          </Intro>
          <Wrapper>
            <Row>
              <Col>HTML</Col>
              <Col>CSS</Col>
              <Col>Sass</Col>
            </Row>
            <Row>
              <Content>JavaScript</Content>
              <Content>Python</Content>
              <Content>Ruby</Content>
              <Content>Java</Content>
            </Row>
            <Row>
              <Col>React.js</Col>
              <Col>Redux.js</Col>
              <Col>Node.js</Col>
            </Row>
            <Row>
              <Content>Django</Content>
              <Content>Rails</Content>
              <Content>SQL</Content>
              <Content>NoSQL</Content>
            </Row>
            <Row>
              <Col>Git</Col>
              <Col>Linux</Col>
              <Col>Microservices</Col>
            </Row>
          </Wrapper>
        </Container>
      </Body>
    )
  }
}
