import React, { Component } from 'react'
import styled from 'styled-components'
import bg from './images/bg.jpg'

const Body = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`

export default class Main extends Component {
  render() {
    return (
      <Body id='main'>

      </Body>
    )
  }
}
