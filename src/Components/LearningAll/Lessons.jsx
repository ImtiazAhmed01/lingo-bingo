import React from 'react';
import { useParams } from 'react-router-dom';

const Lessons = () => {
    const { lessonId } = useParams();

    return (
        <div>
            <h1>Lesson Details</h1>
            <p>You are viewing details for Lesson {lessonId}.</p>
            {/* Add more details based on `lessonId` */}
        </div>
    );
};

export default Lessons;
