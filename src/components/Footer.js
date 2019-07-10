import React, { Component } from 'react'
import styled from 'styled-components'

const Body = styled.div`
  height: 600px;
  background-color: #484848;
`

const Container = styled.div`

`

const About = styled.div`

`

const Contact = styled.div`

`

const CopyRight = styled.div`

`

const Header = styled.div`

`

const Description = styled.div`

`

export default class Footer extends Component {

  render() {
    return (
      <Body id='footer'>
        <Container>
          <About>
            <Header>About JAY</Header>
            <Description>
              
            </Description>
          </About>
          <Contact>

          </Contact>
          <CopyRight>© 2019 Jay Sunga</CopyRight>
        </Container>
      </Body>
    )
  }

}
