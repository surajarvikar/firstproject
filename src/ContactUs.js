import React from 'react';

const ContactUs = () => {
    return (
        <>
            <section className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                {/* left side start */}
                                <div className="contact-left-side col-12 col-lg-5 ">
                                    <h1 className="main-heading fw-bold">Connect With Our <br /> Sales Team.</h1>
                                    <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quisquam cum eaque commodi maiores nesciunt?</p>
                                    <img src="./Images/pic-5.jpg" alt="contact-us-img" className="img-fluid" />
                                </div>
                                {/* left side end */}
                                {/* right side start */}
                                <div className="col-12 col-lg-7 contact-right-side">
                                    <form method="POST">
                                        <div className="row">

                                            <div className="col-12 col-lg-6 contact-input">
                                                <input type="text" name="" id="" placeholder="First Name" className="form-control" />

                                            </div>
                                            <div className="col-12 col-lg-6 contact-input">
                                                <input type="text" name="" id="" placeholder="Last Name" className="form-control" />

                                            </div>
                                            <div className="col-12 col-lg-6 contact-input">
                                                <input type="text" name="" id="" placeholder="Phone Number" className="form-control" />

                                            </div>
                                            <div className="col-12 col-lg-6 contact-input">
                                                <input type="text" name="" id="" placeholder="Email Id" className="form-control" />

                                            </div>
                                        </div>

                                            <div className="row">
                                                 <div className="col-12 contact-input">
                                                     <input type="text" name="" id="" placeholder="Add Address" className="form-control"/>
                                                 </div>
                                            </div>
                                            <div className="row">
                                                 <div className="col-12 contact-input">
                                                     <input type="text" name="" id="" placeholder="Enter Your Message" className="form-control"/>
                                                 </div>
                                            </div>
                                            <div className="form-check form-checkbox-style">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                                <label class="form-check-label" className="main-hero-para">I agree that the surajpay may contact me at the email address or phone number above.</label>
                                                 
                                            </div>

                                            <button type="submit" className="our-services-button">Submit</button>

                                            
                                    </form>

                                </div>
                                {/* right side end */}
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactUs;
