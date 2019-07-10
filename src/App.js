import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main';
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WhyMe from './components/WhyMe';
import Footer from './components/Footer';

export default class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <WhyMe />
        <Footer />
      </>
    )
  }
  
}
