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
              <NavLink className="nav-link" to="/">
                {({ isActive }) => (
                  <>
                    <i className={`bi ${isActive ? 'bi-newspaper' : 'bi-newspaper'} me-1 ms-1 text-white`}></i>
                    Home
                  </>
                )}
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/business">
                {({ isActive }) => (
                  <>
                    <i className={`bi ${isActive ? 'bi-briefcase-fill' : 'bi-briefcase'} me-1 ms-1 text-white`}></i>
                    Business
                  </>
                )}
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/entertainment">
                {({ isActive }) => (
                  <>
                    <i className={`bi ${isActive ? 'bi-film' : 'bi-film'} me-1 ms-1 text-white`}></i>
                    Entertainment
                  </>
                )}
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/health">
                {({ isActive }) => (
                  <>
                    <i className={`bi ${isActive ? 'bi-heart-pulse-fill' : 'bi-heart-pulse'} me-1 ms-1 text-white`}></i>
                    Health
                  </>
                )}
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/science">
                {({ isActive }) => (
                  <>
                    <i className={`bi ${isActive ? 'bi-flask-fill' : 'bi-flask'} me-1 ms-1 text-white`}></i>
                    Science
                  </>
                )}
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/sports">
                {({ isActive }) => (
                  <>
                    <i className={`bi ${isActive ? 'bi-trophy-fill' : 'bi-trophy'} me-1 ms-1 text-white`}></i>
                    Sports
                  </>
                )}
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link" to="/technology">
                {({ isActive }) => (
                  <>
                    <i className={`bi ${isActive ? 'bi-cpu-fill' : 'bi-cpu'} me-1 ms-1 text-white`}></i>
                    Technology
                  </>
                )}
              </NavLink>
            </li>
          </ul>

          <div style={{ marginLeft: "auto", marginRight: "10px" }}>
            <i className="bi bi-geo-alt-fill text-white me-2" style={{ fontSize: '1.5rem' }}></i>
            <img
              src={`https://flagsapi.com/${country.toUpperCase()}/flat/64.png`}
              height="35"
              width="35"
              className="me-3"
              style={{ borderRadius: "3px", marginLeft: "3px", marginBottom: "2px"}}
              referrerPolicy="no-referrer"/>
            <select
              onChange={handleCountryChange}
              defaultValue="in"
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "1rem",
                }}
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
