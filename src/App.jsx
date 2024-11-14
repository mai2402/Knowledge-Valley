import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Account from "./pages/Account"
import Layout from "./pages/Layout"
import Courses from "./pages/Courses"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Contact from "./pages/Contact"



function App() {
  return(
      <BrowserRouter>
      <Routes>
           {/* unprotected routes  */}
         <Route path="/" element={<Home/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="signup" element={<SignUp/>}/>
         <Route path="*" element={<PageNotFound/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="contact" element={<Contact/>}/>
             {/* protected routes  */}
         <Route path="/home" element={<Layout/>}>
         <Route index  element={<Navigate replace to="courses"/>} />
            <Route path="account" element={<Account/>}/>
            <Route path="courses" element={<Courses/>}/>
            <Route path="admin" element={<Admin/>}/>

         </Route>

      </Routes>
      </BrowserRouter>

  )
}

export default App
