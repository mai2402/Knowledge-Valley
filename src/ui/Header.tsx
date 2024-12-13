import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FILTER_KEYS } from "../constants/Constants";

 export type CoursesFilters = {
  searchQuery?: string;
};

interface HeaderProps {
  coursesFilters: CoursesFilters; 
  updatedFilteredCourses: (filters: Partial<CoursesFilters>) => void; 
}
function Header({ coursesFilters, updatedFilteredCourses }:HeaderProps)  {

  return (
    <header className="bg-primary text-white p-6 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Knowledge Valley</h1>
      </div>
      <div>
          <SearchBar query={coursesFilters.searchQuery}
                    onSearch={updatedFilteredCourses}
                    filterKey={FILTER_KEYS.name}
          />
      </div>
      {/* Navigation Links */}
      <nav className="flex items-center space-x-8">
        <Link to="/" className="text-lg flex items-center hover:text-teal-400 transition-all">
          <HiShoppingCart className="text-xl" />
        </Link>
        <Link to="/login" className="text-lg hover:text-teal-400 transition-all">
         Login
        </Link>
        <Link to="/signup" className="text-lg hover:text-teal-400 transition-all">
          Sign up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
