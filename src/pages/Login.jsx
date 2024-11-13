import { Link } from "react-router-dom";

function Login() {
    return (<>
     <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 text-primary z-20">
                <div className="text-3xl font-bold">Knowledge Valley</div>
                <nav className="flex items-center  text-lg">
                    <Link to="/about" className="text-primary hover:text-teal-600 transition px-4">About</Link>
                    <Link to="/contact" className="text-primary hover:text-teal-600 transition ">Contact Us</Link>
                </nav>
            </header>
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          
          <form>
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
            <button
              type="submit"
              className="block w-full py-2 bg-primary text-white font-semibold text-center rounded-lg hover:bg-teal-700 transition"
            >
              Log in
            </button>
          </form>
  
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:text-teal-600 transition">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
              </>
    );
}

export default Login;



