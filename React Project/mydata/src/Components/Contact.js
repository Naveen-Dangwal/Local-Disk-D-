import React from 'react'

export default function Contact() {
  return (
    <section id='contact'>
    <div className="container">
        <div>
            <h1 className='text-center'>Con<span>tact</span></h1>
            <hr className='w-25 m-auto'></hr>
        </div>

        <div className="row my-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-auto text-end">
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRosBMHqEgNO5TztKpasn6p4VEWUT8-O_DEHM-TcuY85XzJCLq8yrTIRrVfLqv78lwgsffTpsUUtxhbLpKhiUWlR01FP4fTy5K5JTh48jiE9yG6aT4DUhpA&usqp=CAE" className='contactimg img-fluid img-thumbnail' alt="" />
            </div>

        </div>
    </div>

    <div className="container-fluid bg-primary text-white text-center p-2 fs-3">Developed By Naveen Dangwal</div>
    </section>
    
  )
}
