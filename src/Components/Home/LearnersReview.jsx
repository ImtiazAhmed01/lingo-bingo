import React from "react";

const LearnersReview = () => {
    const LearnersReview = [
        {
            name: "Andrew Jesson",
            review: "Lingo Bingo has made learning Japanese fun and effective! The interactive lessons are a game-changer.",
            photo: "https://media.istockphoto.com/id/1444077739/photo/college-study-and-education-student-man-portrait-with-back-to-school-backpack-and-portfolio.jpg?s=612x612&w=0&k=20&c=PAQmqKzYd3OiKhlfrT1DVMQNkGu-drX4rtJ5p6y7D8c=",
        },
        {
            name: "Sophia Martinez",
            review: "I love the gamified experience. It keeps me motivated to learn every day!",
            photo: "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k=",
        },
        {
            name: "John Carter",
            review: "The native tutors are excellent and the vocabulary-building exercises are top-notch!",
            photo: "https://media.istockphoto.com/id/1134239459/photo/young-man-in-library-working-on-laptop.jpg?s=612x612&w=0&k=20&c=CSegv_L3yyM519x_H4EnPofZmP2PUToQNAuTsKfRO94=",
        },
    ];

    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-8">What Our Users Say</h2>
            <div className="flex overflow-x-auto space-x-6 px-4 sm:px-8">
                {LearnersReview.map((learnersReview, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <img
                            src={learnersReview.photo}
                            alt={learnersReview.name}
                            className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-green-800 text-center">{learnersReview.name}</h3>
                        <p className="text-gray-600 text-sm text-center mt-2">{learnersReview.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnersReview;
