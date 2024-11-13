function About() {
    return (
        <div className="relative min-h-screen bg-background">
            <header className="absolute top-4 left-4 text-3xl font-bold text-primary z-20">
                Knowledge Valley
            </header>

            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full sm:max-w-md md:max-w-lg z-10">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
                        About Knowledge Valley
                    </h2>
                    <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-6">
                        Knowledge Valley is a cutting-edge e-learning platform offering a vast array of courses
                        designed to help learners develop the skills they need to succeed in today's fast-paced world.
                    </p>
                    <div className="flex justify-center space-x-4 mt-6">
                        <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-accent transition">
                            Learn More
                        </button>
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;



