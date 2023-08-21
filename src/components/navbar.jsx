import React from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async() => {
    try {
        await axios.delete('http://localhost:5000/logout');
        navigate("/")
    } catch (error) {
        if(error.response){
            console.error(error)
        }
    }
}

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className='container ml-5'>
          <div className="navbar-brand">
            <a  href="/#" className="navbar-item">
              MSH
            </a>
          </div>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href='/#' className="navbar-item">
            Home
          </a>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href='/#' onClick={Logout} className="button is-light">
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;