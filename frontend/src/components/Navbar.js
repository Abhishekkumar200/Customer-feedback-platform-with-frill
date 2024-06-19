import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = (props)=>{
  let location = useLocation();
  useEffect(()=>{
    // console.log(location.pathname);
  }, [location])
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('Tensor-token');
    navigate('/login');
    props.handleAlert("Logged out Successfully.", "success");
  };

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/feedback">Feedback</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className = {`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to={localStorage.getItem('Tensor-token')?'/about':'/login'}>Profile</Link>
              </li>
              <li>
                <Link className={`nav-link ${location.pathname==='/dashboard'?'active':''}`} to={localStorage.getItem('Tensor-token')?'/dashboard':'/login'}>Dashboard</Link>
              </li>
              <li>
                <Link className='nav-link' to={localStorage.getItem('Tensor-token')?'https://app.frill.co/embed/widget/c910e562-529b-4fc3-8772-604fd1b95d8d':'/login'}>Frill</Link>
              </li>
            </ul>
            {localStorage.getItem('Tensor-token')?<button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button> : <form className="d-flex">
              <Link className="btn btn-outline-primary mx-2" to ="/login" role="button">Login</Link>
              {/* <Link className="btn btn-outline-primary mx-2" to ="/signup" role="button">Sign up</Link> */}
            </form>}
          </div>
        </div>
      </nav>
    )
}

export default Navbar;