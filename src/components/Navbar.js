import React from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) =>{
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark`}>

          <div className="container-fluid">
            <Link className="navbar-brand" to="/General">News Daily</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{liHover:'gray'}}>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/General">Home</Link>
                </li>
                {/* <li className="nav-item"><Link className="nav-link active" to="/about">About</a></li> */}
                <li className="nav-item"><Link className="nav-link active" to="/Business">Business</Link ></li>
                <li className="nav-item"><Link className="nav-link active" to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/General">General</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/Health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/Science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/Sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/Technology">Technology</Link></li>

              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" />
                <button className="btn btn-outline-success " type="submit">Search</button>
              </form> */}
              {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.toggleMode}>DarkMode</label>
               </div> */}
            </div>
          </div>
        </nav>
      </div>
    )
  }
export default Navbar