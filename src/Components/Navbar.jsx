import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Logo" width="120" height="30" className="d-inline-block align-text-top"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
