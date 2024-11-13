import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 text-primary z-20">
                <div className="text-3xl font-bold">Knowledge Valley</div>
                <nav className="flex items-center space-x-15 text-lg">
                    <Link to="/about" className="text-primary hover:text-white transition">About</Link>
                    <Link to="/contact" className="text-primary hover:text-white transition">Contact Us</Link>
                </nav>
            </header>

            <div className="content">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-4">
                    Unlock Your Learning Potential
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-2xl mx-auto">
                    Join thousands of learners and access high-quality courses in tech, business, design, and more.
                </p>

                <div className="buttons space-x-4">
                    <Link to="/signup" className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition">
                        Start Learning Today
                    </Link>
                    <Link to="/login" className="border-white text-white px-6 py-2 border-2 rounded-lg hover:bg-white hover:text-primary transition">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;






