import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary px-4 border-bottom  fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand fs-2">Jacket <span>Website</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
        <li class="nav-item">
          <a class="nav-link active  text-primary" aria-current="page" href="#home">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about">About</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jackets
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#jacketmen">Mens</a></li>
            <li><a class="dropdown-item" href="#jacketwomen">Womens</a></li>
            <li><a class="dropdown-item" href="#jacketchild">Kids</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}
