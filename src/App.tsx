import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import PageNotFound from "./pages/PageNotFound"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Account from "./pages/Account"
import Layout from "./pages/Layout"
import SignUp from "./pages/SignUp"
import Contact from "./pages/Contact"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import CourseDetails from "./pages/CourseDetails"
import HomePage from "./pages/HomePage"
import ProtectedRoute from "./ui/ProtectedRoute"
import Login from "./pages/Login"
import Courses from "./pages/Courses"


const queryClient =new QueryClient(
  {
    defaultOptions:{
      queries:{
        staleTime:0,
      }
    }
  }
)

function App() {
  return(
    <QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false} />
  <BrowserRouter>
    <Routes>
      {/* Unprotected Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="aboutus" element={<About />} />
      <Route path="contactus" element={<Contact />} />

      {/* Protected Routes */}
      <Route path="/home" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Navigate replace to="/home/admin" />} />
       
        <Route path="account" element={<Account />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
</QueryClientProvider>


  )
}

export default App



//   <Route path="/" element={
//     <ProtectedRoute> 
//         <AppLayout/>
//     </ProtectedRoute> }>
//   <Route index  element={<Navigate replace to="dashboard"/>} />
//        <Route path="dashboard" element={<DashBoard/>} />
//        <Route  path="bookings" element={<Bookings/>}/>
//        <Route  path="bookings/:bookingId" element={<Booking/>}/>
//        <Route  path="checkin/:bookingId" element={<Checkin/>}/>
//        <Route  path="cabins" element={<Cabins/>}/>
//        <Route path="users" element={<Users/>} />
//        <Route path="settings" element={<Settings/>} />
//        <Route  path="account" element={<Account/>}/>
//   </Route>
//       <Route  path="login" element={<Login/>}/>
//       <Route  path="*" element={<PageNotFound/>}/>
// </Routes>
// </BrowserRouter>
