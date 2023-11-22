import React from 'react'
import "../navbar/navbar.css"
import Sidebar from '../sidebar/sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
         <div className="wrapper">
            <span></span>
            <div className="social">
                <a href="https://github.com/trishmanjunath" target="_black"><img src="/github2.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/trishmanjunath216/" target="_black"><img src="/linkedin.png" alt=""/></a>
            </div>
         </div>

    </div>
   
  )
}

export default Navbar