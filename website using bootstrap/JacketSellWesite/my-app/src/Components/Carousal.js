import React from 'react'

export default function Carousal() {
  return (
    <section id="home" style={{paddingTop:"40px"}}>
    <div id="carouselExampleCaptions" className="carousel slide my-5">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.realmenrealstyle.com/wp-content/uploads/2018/11/7-Winter-Jackets-Men-Must-Have-pvercoat-fur-cold.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5>Jackets For Men</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.fitcoat.com/wp-content/uploads/1/Casual-Winter-Jacket-For-Women-Unique.jpg" className="d-block w-100" alt=''/>
      <div className="carousel-caption  d-md-block">
        <h5>Jackets For Womens</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://image.cdn2.seaart.ai/2023-06-17/35490848026693/db627a412da100c6f034f7a4f2b0c6414e37bc6e_high.webp" className="d-block w-100" alt=''/>
      <div className="carousel-caption d-md-block">
        <h5>Jackets For Children</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
   
  )
}
