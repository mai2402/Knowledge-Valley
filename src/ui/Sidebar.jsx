import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUser, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="bg-primary w-64 h-full-screen p-6 text-white shadow-xl flex flex-col">
  
      <ul className="flex flex-col flex-1 space-y-6">
        <li>
          <Link
            to="/"
            className="flex items-center py-2 px-4 rounded-lg hover:bg-teal-600 hover:text-white transition-all"
          >
            <FaHome className="mr-4" /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="flex items-center py-2 px-4 rounded-lg hover:bg-teal-600 hover:text-white transition-all"
          >
            <FaBook className="mr-4" /> My Courses
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            className="flex items-center py-2 px-4 rounded-lg hover:bg-teal-600 hover:text-white transition-all"
          >
            <FaUser className="mr-4" /> Account
          </Link>
        </li>
      </ul>
      <div className="mt-auto">
        <Link
          to="/logout"
          className="flex items-center py-2 px-4 rounded-lg hover:bg-teal-600 hover:text-white transition-all"
        >
          <FaSignOutAlt className="mr-4" /> Log out
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;




