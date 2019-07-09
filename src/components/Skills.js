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
`

export default class Skills extends Component {
  render() {
    return (
      <Body id='skills'>
        <Container>
          <Header className="wow bounceInDown">Technological Skills</Header>
          <Intro className="wow fadeInLeft">
            I always enjoy learning new things. 
            Especially the skills and technologies that make your company succeed.
          </Intro>
          <Wrapper>

          </Wrapper>
        </Container>
      </Body>
    )
  }
}
