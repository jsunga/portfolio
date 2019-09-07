import React, { Component } from 'react'
import WOW from 'wowjs'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Why from './components/Why/Why'
import Footer from './components/Footer/Footer'

export default class App extends Component {

    componentDidMount() {
        const wow = new WOW.WOW()
        wow.init()
    }

    render() {
        return (
            <>
                <Navbar />
                <Landing />
                <About />
                <Projects />
                <Why />
                <Footer />
            </>
        )
    }

}