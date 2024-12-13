import { Outlet } from "react-router-dom";


import UserHeader from "../ui/UserHeader";

function Layout() {

  return (
    <div className="flex flex-col h-[100vh] bg-slate-100">
      <UserHeader/>
      <div className="flex flex-1 h-full">
        {/* <Sidebar /> */}
        <main className="flex-1 p-8 overflow-y-auto bg-background-light shadow-xl rounded-l-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;


