import { Link } from "react-router-dom"


function Header() {
    return (
        <header className="bg-primary text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-buttonHover text-textPrimary">Knowledge Valley</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="text-textPrimary hover:text-buttonHover">Home</Link>
          <Link to="/courses" className="text-textPrimary hover:text-buttonHover">Courses</Link>
          <Link to="/about" className="text-textPrimary hover:text-buttonHover">About</Link>
        </nav>
      </header>
    )
}

export default Header
