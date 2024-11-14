import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-primary text-white p-6 shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-extrabold">
        <Link to="/" className="hover:text-teal-600 text-white">
          Knowledge Valley
        </Link>
      </h1>
      <nav className="space-x-8">
        <Link to="/" className="text-lg hover:text-teal-600 transition-all">
          Home
        </Link>
        <Link to="/courses" className="text-lg hover:text-teal-600 transition-all">
          Courses
        </Link>
        <Link to="/about" className="text-lg hover:text-teal-600 transition-all">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;

