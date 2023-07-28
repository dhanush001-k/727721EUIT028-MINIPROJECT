import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './adminhome.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="adnavbar">
      <div className="adcontainer">
        
        <div className="admenu-icon" onClick={handleShowNavbar}>
          <MenuIcon></MenuIcon>
        </div>
        <div className={`adnav-elements  ${showNavbar && 'adactive'}`}>
          <ul>
            <li id="ahcurrent">
              <NavLink to="/AdminHome">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog"></NavLink>
            </li>
         
            <li>
              <NavLink to="/Aprofile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/projects"></NavLink>
            </li>
            <li>
              <NavLink to="/Option">Logout</NavLink>
            </li>
            <li>
              <NavLink to="/projects"></NavLink>
            </li>
            <li>
              <NavLink to="/">Switch Account</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div id="crud">
        <div id="crud1">
          <NavLink to="/Addpro">
          <img src="https://cdn-icons-png.flaticon.com/128/6165/6165464.png" alt="Image 1"/>
          <h1 id="cru">Add Products</h1></NavLink>
        </div>
        <div id="crud2">
          <NavLink to="/Getpro">
          <img src="https://cdn-icons-png.flaticon.com/128/2674/2674505.png" alt="Image 1"/>
          <h1 id="cru">Get Products</h1></NavLink>
        </div>
        <div id="crud3">
        <NavLink to="/Updatepro">
        <img src="https://cdn-icons-png.flaticon.com/128/5334/5334827.png" alt="Image 1"/>
          <h1 id="cru">Update Products</h1></NavLink>
        </div>
        <div id="crud4">
        <NavLink to="/Deletepro">
        <img src="https://cdn-icons-png.flaticon.com/128/8924/8924738.png" alt="Image 1"/>
          <h1 id="cru">Delete Products</h1></NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar