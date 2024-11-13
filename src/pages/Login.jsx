import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center login-container">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl z">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Link
                    to="/"
                    className="block w-full py-2 bg-primary text-white font-semibold text-center rounded-lg hover:bg-primary-dark transition"
                >
                    Log in
                </Link>
            </div>
        </div>
    );
}

export default Login;


