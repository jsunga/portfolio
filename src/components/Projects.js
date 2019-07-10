import React, { Component } from 'react'
import styled from 'styled-components'
import flix from './images/flix.png'
import gator from './images/gator.png'
import tweeper from './images/tweeper.png'

//add links to projects
//responsive layout

const Body = styled.div`
  height: 100vh;
  background-color: #f6f6f6;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  color: #373a3c;
`

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 29px;
  width: 30%;
  border-bottom: 1px solid #d4d4d4;
  margin: 10px;
  padding-bottom: 10px;
`


const Row = styled.div`
  display: flex;
  padding: 10px;
`

const Col = styled.div`
  border: 1px solid #e8e8e8;
  width: 33.33%;
  margin: 10px;
  background-color: white;
`

const Card = styled.div``

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Description = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  padding: 5px 12px 12px 12px;
`

export default class Projects extends Component {

  render() {
    return (
      <Body id='projects'>
        <Container>
          <Header className='wow bounceInDown'>My Latest Projects</Header>
          <Row className='wow fadeIn' data-wow-duration='2.5s'>
            <Col>
              <Card>
                <Image src={tweeper} alt='thumbnail' />
                <Description>
                  Register for Tweeper and broadcast short posts for everyone to see. 
                  Follow your friends and idols, hear what people are talking about, 
                  and join the conversation.
                </Description>
              </Card>
            </Col>
            <Col>
              <Card>
                <Image src={gator} alt='thumbnail' />
                <Description>
                  We help SFSU students find housing by connecting students to 
                  landlords offering a place to rent near SFSU.
                </Description>
              </Card>
            </Col>
            <Col>
              <Card>
                <Image src={flix} alt='thumbnail' />
                <Description>
                  Browse your favorite and popular movies. Rate and write your casual review 
                  on movies playing in theaters.
                </Description>
              </Card>
            </Col>
          </Row>
        </Container>
      </Body>
    )
  }

}
