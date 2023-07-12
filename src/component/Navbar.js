import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">New News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                {/* <li className="nav-item"> <Link className="nav-link" to="/About">About</Link></li> */}
                <li className="nav-item"> <Link className="nav-link" to="/bussiness">bussiness</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/entertainment">entertainment</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/general">general</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/health">health</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/science">science</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/sports">sports</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/technology">technology</Link></li>
                


              </ul>
              <li class="nav-item dropdown d-flex">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            Country Name
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" >in</a></li>
            <li><a class="dropdown-item" >us</a></li>
            <li><a class="dropdown-item" >uk</a></li>
            <li><a class="dropdown-item" >ch</a></li>

           
          </ul>
        </li>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
