import React from 'react';
import { Link } from 'react-router-dom';
const StartLearning = () => {

    return (

        <div>

            <h1 className="text-7xl px-32">Start your learning with us!</h1>
            <div className='my-14 mx-32'>
                <h1 className="text-3xl font-bold">Lessons</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {/* Card 1 */}
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <Link to='/lessons'>

                            <div className="card-body">
                                <h2 className="card-title">Lesson 1</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "ありがとう" <br />
                                    <span className='font-bold'>Pronunciation:</span> Arigatou <br />
                                    <span className='font-bold'>Meaning:</span> Thank you <br />
                                    <span className='font-bold'>Part of speech:</span> Expression <br />
                                    <span className='font-bold'>Difficulty:</span>Eeasy <br />
                                    <span className='font-bold'>Lesson no:</span> 1
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-base-100 w-96 shadow-xl"
                    >
                        <Link to='/lessons'>

                            <div className="card-body">
                                <h2 className="card-title">Lesson 2</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "さようなら" <br />
                                    <span className='font-bold'>Pronunciation:</span> Sayounara <br />
                                    <span className='font-bold'>Meaning:</span> Goodbye <br />
                                    <span className='font-bold'>Part of speech:</span> Expression <br />
                                    <span className='font-bold'>Difficulty:</span> Easy <br />
                                    <span className='font-bold'>Lesson no:</span> 2
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-base-100 w-96 shadow-xl"
                    >
                        <Link to='/lessons'>

                            <div className="card-body">
                                <h2 className="card-title">Lesson 3</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "おはよう" <br />
                                    <span className='font-bold'>Pronunciation:</span> Ohayou <br />
                                    <span className='font-bold'>Meaning:</span> Good morning <br />
                                    <span className='font-bold'>Part of speech:</span> Expression <br />
                                    <span className='font-bold'>Difficulty:</span> Easy <br />
                                    <span className='font-bold'>Lesson no:</span> 3
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5'>
                    {/* Card 1 */}
                    <div className="card bg-base-100 w-96 shadow-xl"
                    >
                        <Link to='/lessons'>

                            <div className="card-body">
                                <h2 className="card-title">Lesson 4</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "こんにちは" <br />
                                    <span className='font-bold'>Pronunciation:</span> konnichiwa <br />
                                    <span className='font-bold'>Meaning:</span> Hello <br />
                                    <span className='font-bold'>Part of speech:</span> Expression <br />
                                    <span className='font-bold'>Difficulty:</span> Easy <br />
                                    <span className='font-bold'>Lesson no:</span> 4
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-base-100 w-96 shadow-xl"
                    >
                        <Link to='/lessons'>

                            <div className="card-body">
                                <h2 className="card-title">Lesson 5</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "こんばんは" <br />
                                    <span className='font-bold'>Pronunciation:</span> Konbanwa <br />
                                    <span className='font-bold'>Meaning:</span> Good evening <br />
                                    <span className='font-bold'>Part of speech:</span> Expression <br />
                                    <span className='font-bold'>Difficulty:</span> Easy <br />
                                    <span className='font-bold'>Lesson no:</span> 5
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-base-100 w-96 shadow-xl"
                    >
                        <Link to='/lessons'>

                            <div className="card-body">
                                <h2 className="card-title">Lesson 6</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "美しい" <br />
                                    <span className='font-bold'>Pronunciation:</span> Utsukushii <br />
                                    <span className='font-bold'>Meaning:</span> Beautiful <br />
                                    <span className='font-bold'>Part of speech:</span> Adjective <br />
                                    <span className='font-bold'>Difficulty:</span> Medium <br />
                                    <span className='font-bold'>Lesson no:</span> 6
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5'>
                    {/* Card 1 */}
                    <div className="card bg-base-100 w-96 shadow-xl"
                    >
                        <Link to='/lessons'>

                            <div className="card-body">
                                <h2 className="card-title">Lesson 7</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "楽しい" <br />
                                    <span className='font-bold'>Pronunciation:</span> Tanoshii <br />
                                    <span className='font-bold'>Meaning:</span> Fun, enjoyable<br />
                                    <span className='font-bold'>Part of speech:</span> Adjective<br />
                                    <span className='font-bold'>Difficulty:</span> Easy <br />
                                    <span className='font-bold'>Lesson no:</span> 7
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-base-100 w-96 shadow-xl">


                        <Link to='/lessons'>
                            <div className="card-body">
                                <h2 className="card-title">Lesson 8</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "心配" <br />
                                    <span className='font-bold'>Pronunciation:</span> Shinpai <br />
                                    <span className='font-bold'>Meaning:</span> Worry, concern <br />
                                    <span className='font-bold'>Part of speech:</span> Noun <br />
                                    <span className='font-bold'>Difficulty:</span> Medium <br />
                                    <span className='font-bold'>Lesson no:</span> 8
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>


                    {/* Card 3 */}
                    <div className="card bg-base-100 w-96 shadow-xl"
                    >
                        <Link to='/lessons'>

                            <div className="card-body">
                                <h2 className="card-title">Lesson 9</h2>
                                <p>
                                    <span className='font-bold'>Word:</span> "食べる" <br />
                                    <span className='font-bold'>Pronunciation:</span> Taberu <br />
                                    <span className='font-bold'>Meaning:</span> To eat <br />
                                    <span className='font-bold'>Part of speech:</span> Verb <br />
                                    <span className='font-bold'>Difficulty:</span> Easy <br />
                                    <span className='font-bold'>Lesson no:</span> 9
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='card bg-base-100 w-96 shadow-xl'>
                    <Link to='/lessons'>

                        <div className="card-body">
                            <h2 className="card-title">Lesson 10</h2>
                            <p>
                                <span className='font-bold'>Word:</span> "飲む" <br />
                                <span className='font-bold'>Pronunciation:</span> Nomu <br />
                                <span className='font-bold'>Meaning:</span> To drink <br />
                                <span className='font-bold'>Parts of speech:</span> Verb <br />
                                <span className='font-bold'>Difficulty:</span> Easy <br />
                                <span className='font-bold'>Lesson no:</span> 10
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </Link></div>
            </div>
            <div className='px-32'>
                <h1 className="text-3xl font-bold">Tutorials</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5'>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rGrBHiuPlT0?si=B5cY_YqxmPbq3ZkZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>

                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/bOUqVC4XkOY?si=HoLm1UkrubSsFzRR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>

                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/JnoZE51WZg4?si=1fAqrS8VeYlmms0b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>

                    </div>
                </div>
                <div className="flex justify-center items-center mb-5">
                    <Link to='/tutorials'>
                        <button className="btn btn-outline btn-success">View More</button>
                    </Link>
                </div>
            </div>

        </div >
    );
};

export default StartLearning;