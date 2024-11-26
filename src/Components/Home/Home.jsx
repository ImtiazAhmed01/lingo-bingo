// import React from 'react';
// // import img from '../../../src/images/images (1).jfif'

// const Home = () => {

//     return (
//         <div>
//             {/* Banner */}
//             <div className="carousel w-full">
//                 <div id="slide1" className="carousel-item relative w-full">
//                     <img
//                         src='../../../src/images/images (1).jfif'
//                         className="w-[50px]" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide4" className="btn btn-circle">❮</a>
//                         <a href="#slide2" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide2" className="carousel-item relative w-full">
//                     <img
//                         src="../../../src/images/images.jfif"
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide1" className="btn btn-circle">❮</a>
//                         <a href="#slide3" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide3" className="carousel-item relative w-full">
//                     <img
//                         src="../../../src/images/istockphoto-965099436-612x612.jpg"
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide2" className="btn btn-circle">❮</a>
//                         <a href="#slide4" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide4" className="carousel-item relative w-full">
//                     <img
//                         src="../../../src/images/language-composition-with-flat-design_23-2147897413.avif"
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide3" className="btn btn-circle">❮</a>
//                         <a href="#slide1" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import SuccessSection from './SuccessSection';
import WhyChooseUs from './WhyChooseUs';
import LearnersReview from './LearnersReview';

// const carouselImageStyle = {
//     width: '100%',
//     height: '300px',
//     objectFit: 'cover'
// };

// const Home = () => {
//     return (
//         <div>
//             {/* Banner */}
//             <div className='px-40'>
//                 <div className="carousel w-full h-[300px]">
//                     <div id="slide1" className="carousel-item relative w-full">
//                         <img
//                             src='../../../src/images/images (1).jfif'
//                             alt="Slide 1"
//                             style={carouselImageStyle}
//                         />
//                         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                             <a href="#slide4" className="btn btn-circle">❮</a>
//                             <a href="#slide2" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide2" className="carousel-item relative w-full">
//                         <img
//                             src='../../../src/images/images.jfif'
//                             alt="Slide 2"
//                             style={carouselImageStyle}
//                         />
//                         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                             <a href="#slide1" className="btn btn-circle">❮</a>
//                             <a href="#slide3" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide3" className="carousel-item relative w-full">
//                         <img
//                             src='../../../src/images/istockphoto-965099436-612x612.jpg'
//                             alt="Slide 3"
//                             style={carouselImageStyle}
//                         />
//                         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                             <a href="#slide2" className="btn btn-circle">❮</a>
//                             <a href="#slide4" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide4" className="carousel-item relative w-full">
//                         <img
//                             src='../../../src/images/language-composition-with-flat-design_23-2147897413.avif'
//                             alt="Slide 4"
//                             style={carouselImageStyle}
//                         />
//                         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                             <a href="#slide3" className="btn btn-circle">❮</a>
//                             <a href="#slide1" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


const Home = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="carousel carousel-vertical rounded-box h-96 mb-10 w-[800px] relative">
                    {/* Slide 1 */}
                    <div className="carousel-item relative w-full" id="slide1">
                        <img
                            src='../../../src/images/images.jpeg'
                            className="w-full h-96 object-cover"
                            alt="Slide 1"
                        />
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white ">
                            <h1 className='text-3xl font-bold'>Welcome to the Lingo-Bingo</h1>
                            <p className='text-xl'>A multi-landuage learning online platform</p>
                        </div>
                        <div
                            className="absolute top-5 bottom-5 left-1/2 flex -translate-x-1/2 transform flex-col justify-between z-20">
                            <a href="#slide4" className="btn btn-circle -rotate-90">❯</a>
                            <a href="#slide2" className="btn btn-circle rotate-90">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item relative w-full" id="slide2">
                        <img
                            src='../../../src/images/istockphoto-965099436-612x612.jpg'
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
                    <div className="carousel-item relative w-full" id="slide3">
                        <img
                            src='../../../src/images/language-composition-with-flat-design_23-2147897413.avif'
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

                    <div className="carousel-item relative w-full" id="slide4">
                        <img
                            src='../../../src/images/pixelcut-export.jpeg'
                            className="w-full h-96 object-cover"
                            alt="Slide 4"
                        />
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-green-500">
                            <h1 className='text-3xl font-bold'>Lets start learning today</h1>
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
            {/* About Our mission */}
            <div className="hero bg-green-300 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="../../../src/images/mission.png"
                        className="max-w-2xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Our Mission!</h1>
                        <p className="py-6">
                            Lingo Bingo is dedicated to making Japanese language learning fun, simple, and effective. We aim to help you build confidence in speaking, reading, and understanding Japanese through engaging tools and resources. Master Japanese vocabulary with interactive flashcards, daily quizzes, and practice exercises that focus on real-life usage. Explore themed word lists and pronunciation tools to enhance your learning experience. Let’s make learning Japanese an exciting journey together!
                        </p>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
            </div>
            {/* Success Section */}
            <SuccessSection></SuccessSection>
            {/* 2 extra section */}
            <WhyChooseUs></WhyChooseUs>
            <LearnersReview></LearnersReview>
        </>
    );
};

export default Home;
