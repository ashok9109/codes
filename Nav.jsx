
import { NavLink } from 'react-router';
import 'remixicon/fonts/remixicon.css'

const Nav = () => {

  return (
    <>
        <nav className='h-20 w-full bg-gray-600 flex items-center justify-evenly text-3xl font-bold' >
        <NavLink
        className={(e) => e.isActive? "text-red-600" : "" }
         to="/">Home <i className="ri-arrow-drop-down-line"></i> </NavLink>
        <NavLink
        className={(e) => e.isActive? "text-red-600" : "" }
         to="/about">About <i className="ri-arrow-drop-down-line"></i></NavLink>
        <NavLink 
        className={(e) => e.isActive? "text-red-600" : "" }
        to="/product">Product <i className="ri-arrow-drop-down-line"></i></NavLink>
        
        </nav>
    </>
  )
}

export default Nav;
