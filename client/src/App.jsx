import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import UsersPage from './Pages/UsersPage'
import NewNavbar from './Components/NewNavbar'
import Contact from './Pages/Contact'
import UserDashboard from './Pages/UserDashboard'
import ResumeAssitant from './Pages/ResumeAssitant'

const App = () => {
  const location = useLocation()
  return (
    <div>

      {location.pathname === "/" && <Navbar/>}
      {location.pathname === "/userspage" && <NewNavbar/>}
      {location.pathname === "/dashboard" && <NewNavbar/>}
      {location.pathname === "/contactus" && <NewNavbar/>}
      {/* <Navbar/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userspage' element={<UsersPage/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/resume-assistant' element={<ResumeAssitant/>}/>
      </Routes>

      {/* <Footer/> */}
    </div>
  )
}

export default App