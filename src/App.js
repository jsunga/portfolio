import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Why from './components/Why/Why'
import Footer from './components/Footer/Footer'

const App = () => {

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

export default App