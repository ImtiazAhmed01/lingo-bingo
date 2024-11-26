const WhyChooseUs = () => {
    const features = [
        {
            icon: <img width="38" height="38" src="https://img.icons8.com/emoji/48/glowing-star.png" alt="glowing-star" />,
            title: "Interactive Lessons",
            description: "Engaging and immersive lessons tailored to your learning pace.",
        },
        {
            icon: <img width="50" height="50" src="https://img.icons8.com/plasticine/100/controller.png" alt="controller" />,
            title: "Gamified Learning",
            description: "Earn rewards and badges as you progress through your journey.",
        },
        {
            icon: <img width="45" height="45" src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Tutor-writing-and-translation-services-smashingstocks-flat-smashing-stocks.png" alt="external-Tutor-writing-and-translation-services-smashingstocks-flat-smashing-stocks" />,
            title: "Native Tutors",
            description: "Learn from experienced tutors who are native Japanese speakers.",
        },
        {
            icon: <img width="48" height="48" src="https://img.icons8.com/emoji/48/mobile-phone.png" alt="mobile-phone" />,
            title: "Mobile-Friendly",
            description: "Access lessons anytime, anywhere, on any device.",
        },
    ];

    return (
        <div className="py-12 bg-white">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-black"
                    >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold text-green-500 mb-2">{feature.title}</h3>
                        <p className="text-sm text-center text-white">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
