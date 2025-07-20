import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ country, setCountry }) => {
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" alt="Logo" width="120" height="30" className="d-inline-block align-text-top" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/business">Business</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/health">Health</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/science">Science</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/sports">Sports</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/technology">Technology</NavLink>
            </li>
          </ul>

          <div style={{ marginLeft: "auto", marginRight: "10px" }}>
            <i className="bi bi-geo-alt-fill text-white me-2" style={{ fontSize: '1.2rem' }}></i>
            <img
              src={`https://flagsapi.com/${country.toUpperCase()}/flat/64.png`}
              width="30"
              className="me-3"
              style={{ borderRadius: "3px", marginLeft: "3px"}}
              referrerPolicy="no-referrer"/>
            <select
              onChange={handleCountryChange}
              defaultValue="in"
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "1rem",}}
            >
              <option disabled value="">🌍 Select Country</option>
              <option value="au">Australia</option>
              <option value="fr">France</option>
              <option value="in">India</option>
              <option value="ru">Russia</option>
              <option value="gb">UK</option>
              <option value="us">USA</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
