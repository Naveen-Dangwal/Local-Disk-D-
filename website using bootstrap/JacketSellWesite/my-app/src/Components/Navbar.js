import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 border-bottom fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand fs-2">Jacket <span>Website</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
        <li className="nav-item">
          <a className="nav-link active  text-primary" aria-current="page" href="#home">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About</a>
        </li>

        

        

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#jacketmen">Men</a></li>
            <li><a className="dropdown-item" href="#jacketwomen">Women</a></li>
            <li><a className="dropdown-item" href="#jacketchild">Kids</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
        
        
          </ul>
      
    </div>
  </div>
</nav>
  )
}
