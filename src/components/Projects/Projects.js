import React from 'react'
import twitter from '../../assets/twitter.png'
import zellow from '../../assets/zellow.png'
import apples from '../../assets/apples.png'
import foodie from '../../assets/foodie.png'
import diaryhub from '../../assets/diaryhub.png'
import skyla from '../../assets/skyla.jpg'
import eye from '../../assets/eye.png'
import './Projects.scss'

const Projects = () => {
    
    return (
        <div className='projects'>
            <h1 className='wow fadeInRight'>PROJECTS</h1><span className='wow fadeIn' data-wow-duration='2s' data-wow-delay='.5s' />
            <div className='container'>
                <div className='row'>
                    <div className='col wow fadeInUp'>
                        <h2>Twitter Clone</h2>
                        <a href="http://13.52.178.103/" target="_blank" rel="noopener noreferrer">
                        <div className='image-container'>
                            <img className='thumbnail' src={twitter} alt='thumbnail' />
                            <div className='overlay'>
                                <img className='icon' src={eye} alt='thumbnail' />
                            </div>
                        </div>
                        </a>
                        <p>
                            Register for Tweeper and broadcast short posts for everyone to see.
                            Follow your friends and idols, hear what people are talking about,
                            and join the conversation.
                        </p>
                    </div>
                    <div className='col wow fadeInUp' data-wow-delay='.2s'>
                        <h2>Real Estate</h2>
                        <a href="http://13.57.19.213/search/?queue=" target="_blank" rel="noopener noreferrer">
                        <div className='image-container'>
                            <img className='thumbnail' src={zellow} alt='thumbnail' />
                            <div className='overlay'>
                                <img className='icon' src={eye} alt='thumbnail' />
                            </div>
                        </div>
                        </a>
                        <p>
                            We help SFSU students find housing by connecting students to landlords
                            offering a place to rent near SFSU.
                        </p>
                    </div>
                    <div className='col wow fadeInUp' data-wow-delay='.4s'>
                        <h2>Movies & TV Shows</h2>
                        <a href="https://jsunga.github.io/Rotten-Apples/#/movies" target="_blank" rel="noopener noreferrer">
                        <div className='image-container'>
                            <img className='thumbnail' src={apples} alt='thumbnail' />
                            <div className='overlay'>
                                <img className='icon' src={eye} alt='thumbnail' />
                            </div>
                        </div>
                        </a>
                        <p>
                            Browse your favorite and popular movies and TV shows. Find reviews
                            and ratings of movies and TV shows you are interested in.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col wow fadeInUp' data-wow-delay='.6s'>
                        <h2>Recipes</h2>
                        <a href="https://jsunga.github.io/Foodie-Land/" target="_blank" rel="noopener noreferrer">
                        <div className='image-container'>
                            <img className='thumbnail' src={foodie} alt='thumbnail' />
                            <div className='overlay'>
                                <img className='icon' src={eye} alt='thumbnail' />
                            </div>
                        </div>
                        </a>
                        <p>
                            Search over 1,000,000 recipes for ingredients, instructions, and full articles.
                        </p>
                    </div>
                    <div className='col wow fadeInUp' data-wow-delay='.8s'>
                        <h2>Food & Workout Tracker</h2>
                        <a href="https://github.com/jsunga/DiaryHub" target="_blank" rel="noopener noreferrer">
                        <div className='image-container'>
                            <img className='thumbnail' src={diaryhub} alt='thumbnail' />
                            <div className='overlay'>
                                <img className='icon' src={eye} alt='thumbnail' />
                            </div>
                        </div>
                        </a>
                        <p>
                            Reach your fitness goals with the help of Diary Hub. Manage and log your foods, 
                            workouts, and measurements.
                        </p>
                    </div>
                    <div className='col wow fadeInUp' data-wow-delay='1s'>
                        <h2>Skyla Fitness</h2>
                        <a href="https://jsunga.github.io/Skyla-Fitness/#/" target="_blank" rel="noopener noreferrer">
                        <div className='image-container'>
                            <img className='thumbnail' src={skyla} alt='thumbnail' />
                            <div className='overlay'>
                                <img className='icon' src={eye} alt='thumbnail' />
                            </div>
                        </div>
                        </a>
                        <p>
                            An upcoming fitness gym chain that takes pride in having multiple great plans for
                            varying fitness goals and passionate trainers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects