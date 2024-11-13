import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

function Layout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto bg-background">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;


