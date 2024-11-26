import React from "react";
import CountUp from "react-countup";

const SuccessSection = () => {
    return (
        <div className="py-12 bg-black text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Our Achievements</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                    <h3 className="text-4xl font-bold text-green-500">
                        <CountUp end={5000} duration={2.5} />
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-white">Users</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-green-500">
                        <CountUp end={300} duration={2.5} />
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-white">Lessons</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-green-500">
                        <CountUp end={1000} duration={2.5} />
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-white">Vocabulary Words</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-green-500">
                        <CountUp end={150} duration={2.5} />
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-white">Tutorials</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessSection;
