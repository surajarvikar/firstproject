import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                      <div className="row">
                          {/* header left side start */}
                          <div className="header-left-side col-12 col-lg-6 justify-content-center align-items-center order-lg-first order-last">
                               <h1 className="display-2"> Online Payment Made <br /> Easy For You. </h1>
                               <p className="main-hero-para mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur labore, quidem temporibus repudiandae deleniti sunt dicta delectus? Ratione sapiente ipsam accusantium quidem iste incidunt, doloremque exercitationem ut voluptatum nostrum!</p>
                               <h4>get early access for you </h4>

                                <div className="input-group mt-4">
                                    <input 
                                    type="text" 
                                    className="rounded-pill  w-75 p-2 me-3 form-control-text" 
                                    placeholder="Enter Your Email" />
                                    
                                    <div className="input-group-button">Get It Now</div>
                                </div>
                          </div>
                             {/* header left side end */}

                             {/* header right side start */}
                            <div className="header-right-side col-12 col-lg-6 d-flex main-hero-images justify-content-center align-items-center order-md-first order-sm-first">
                               <img src="./Images/pic-1.jpg" alt="hero-img" className="img-fluid" />
                               <img src="./Images/pic-2.jpg" alt="hero-img" className="img-fluid image-2" />
                            </div>
                          {/* header right side end */}
                      </div>
                </section>
            </header>
        </>
    )
}

export default Header;
