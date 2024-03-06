import React from 'react'
import logo from '../../assests/google-developers-logo-F8BF3155AC-seeklogo 1.png'
import '../../Components/Navbar/Navbar.css'
 const Navbar = () => {
  return (
    <div>
        <div className="header-main-container">
            <div className="header-logo">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="header-options">
                <ul>
                    <li>
                        <a href="" className='link'>Home</a>
                        <a href="" className='link'>Team</a>
                        <a href="" className='link'>Events</a>
                        <a href="" className='link'>Blogs</a>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Navbar;