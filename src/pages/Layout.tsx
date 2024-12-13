import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import useFilterList from "../hooks/useFilterList";

function Layout() {
  const {
    updatedFilteredCourses,
    coursesFilters
} = useFilterList();
  return (
    <div className="flex flex-col h-full bg-slate-100">
      <Header updatedFilteredCourses={updatedFilteredCourses} coursesFilters={coursesFilters} />
      <div className="flex flex-1 h-full">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto bg-background-light shadow-xl rounded-l-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;


