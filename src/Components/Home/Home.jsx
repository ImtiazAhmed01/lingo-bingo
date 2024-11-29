
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';  // Importing Animate.css for animations

import SuccessSection from './SuccessSection';
import WhyChooseUs from './WhyChooseUs';
import LearnersReview from './LearnersReview';
import slide1Pic from '../../../src/images/images.jpeg'
import slide2Pic from '../../../src/images/istockphoto-965099436-612x612.jpg'
import slide3Pic from '../../../src/images/language-composition-with-flat-design_23-2147897413.avif'
import slide4Pic from '../../../src/images/pixelcut-export.jpeg'
import missionPic from '../../../src/images/mission.png'

const Home = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="carousel carousel-vertical rounded-box h-96 mb-10 w-[800px] relative">
                    {/* Slide 1 */}
                    <div className="carousel-item relative w-full animate__animated animate__fadeIn" id="slide1">
                        <img
                            src={slide1Pic}
                            className="w-full h-96 object-cover"
                            alt="Slide 1"
                        />
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white ">
                            <h1 className='text-3xl font-bold animate__animated animate__fadeInUp'>Welcome to the Lingo-Bingo</h1>
                            <p className='text-xl animate__animated animate__fadeInUp'>A multi-language learning online platform</p>
                        </div>
                        <div
                            className="absolute top-5 bottom-5 left-1/2 flex -translate-x-1/2 transform flex-col justify-between z-20">
                            <a href="#slide4" className="btn btn-circle -rotate-90">❯</a>
                            <a href="#slide2" className="btn btn-circle rotate-90">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item relative w-full animate__animated animate__fadeIn" id="slide2">
                        <img
                            src={slide2Pic}
                            className="w-full h-96 object-cover"
                            alt="Slide 2"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-2xl font-bold pt-5">
                            <p>
                                Dive into engaging lessons, practice with native speakers, and track your progress—all while enjoying a gamified experience designed to keep you motivated. Let's make language learning an adventure!
                            </p>
                        </div>
                        <div
                            className="absolute top-5 bottom-5 left-1/2 flex -translate-x-1/2 transform flex-col justify-between z-20">
                            <a href="#slide1" className="btn btn-circle -rotate-90">❯</a>
                            <a href="#slide3" className="btn btn-circle rotate-90">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item relative w-full animate__animated animate__fadeIn" id="slide3">
                        <img
                            src={slide3Pic}
                            className="w-full h-96 object-cover"
                            alt="Slide 3"
                        />
                        <div
                            className="absolute top-5 bottom-5 left-1/2 flex -translate-x-1/2 transform flex-col justify-between z-20">
                            <a href="#slide2" className="btn btn-circle -rotate-90">❯</a>
                            <a href="#slide4" className="btn btn-circle rotate-90">❯</a>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="carousel-item relative w-full animate__animated animate__fadeIn" id="slide4">
                        <img
                            src={slide4Pic}
                            className="w-full h-96 object-cover"
                            alt="Slide 4"
                        />
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-green-500">
                            <h1 className='text-3xl font-bold animate__animated animate__fadeInUp'>Let's start learning today</h1>
                            <Link to='/start_learning' className='btn btn-success text-bold ml-28'>Start Learning</Link>
                        </div>
                        <div
                            className="absolute top-5 bottom-5 left-1/2 flex -translate-x-1/2 transform flex-col justify-between z-20">
                            <a href="#slide3" className="btn btn-circle -rotate-90">❯</a>
                            <a href="#slide1" className="btn btn-circle rotate-90">❯</a>
                        </div>
                    </div>
                </div>
            </div >

            {/* About Our Mission */}
            <div className="hero bg-green-300 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={missionPic}
                        className="max-w-2xl rounded-lg shadow-2xl animate__animated animate__fadeInLeft" />
                    <div>
                        <h1 className="text-5xl font-bold animate__animated animate__fadeInUp">About Our Mission!</h1>
                        <p className="py-6 animate__animated animate__fadeInUp">
                            Lingo Bingo is dedicated to making Japanese language learning fun, simple, and effective. We aim to help you build confidence in speaking, reading, and understanding Japanese through engaging tools and resources. Master Japanese vocabulary with interactive flashcards, daily quizzes, and practice exercises that focus on real-life usage. Explore themed word lists and pronunciation tools to enhance your learning experience. Let’s make learning Japanese an exciting journey together!
                        </p>
                        <button className="btn btn-success animate__animated animate__fadeInUp">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Success Section */}
            <SuccessSection></SuccessSection>

            {/* 2 Extra Sections */}
            <WhyChooseUs></WhyChooseUs>
            <LearnersReview></LearnersReview>
        </>
    );
};

export default Home;
