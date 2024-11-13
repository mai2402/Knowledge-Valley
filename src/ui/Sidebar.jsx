import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUser, FaSignOutAlt } from "react-icons/fa"; // Importing icons from react-icons

function Sidebar() {
  return (
    <aside className="bg-white w-64 h-full p-4">
      
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center py-2 px-4 rounded-lg hover:bg-primary hover:text-white">
            <FaHome className="mr-3" /> Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="flex items-center py-2 px-4 rounded-lg hover:bg-primary hover:text-white">
            <FaBook className="mr-3" /> Courses
          </Link>
        </li>
        <li>
          <Link to="/account" className="flex items-center py-2 px-4 rounded-lg hover:bg-primary hover:text-white">
            <FaUser className="mr-3" /> Account
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex items-center py-2 px-4 rounded-lg hover:bg-primary hover:text-white">
            <FaSignOutAlt className="mr-3" /> Log out
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;


