import React from 'react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
    document.title = `Tutorials - Lingo Bingo`;
    return (
        <div>
            <h1 className="text-5xl text-center my-4 font-bold">Welcome to the tutorials</h1>
            <p className='text-xl text-center font-semibold mb-8'>Here we provide you with some of the most effective video tutorials</p>
            <div className='px-8 lg:px-32'>
                <h3 className="text-3xl font-bold">Our video tutorials</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5'>
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
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/k74yjmfFb_A?si=ovUOMUlS9LwVvmhR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/KUIWRsVZZZA?si=pbDy-1z072gFss6H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZGGufccTLso?si=WdamLD-WzKkGbfpO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/W0n-ODPwtzA?si=jl8JsDZbnfYp4mf_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/p9PEIsOzJ5E?si=7xOGuqPt0TlZXrbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/p9PEIsOzJ5E?si=7xOGuqPt0TlZXrbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Lo5_5k7EPIM?si=Tm13ETgrJ80kA2GH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center my-5">
                <Link to='/start_learning'>
                    <button className="btn btn-outline btn-success">Learn Vocabularies</button>
                </Link>
            </div>
        </div>
    );
};

export default Tutorials;