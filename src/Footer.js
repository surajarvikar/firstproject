import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h2 className="sub-heading">Company</h2>
                                    <ul>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2 className="sub-heading">Support</h2>
                                    <ul>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h2 className="sub-heading">Services</h2>
                                    <ul>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">About</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h2 className="sub-heading">Follow Us</h2>
                                    <div className="row">
                                        <div className="col-6 mx-auto d-grid">
                                            <a href="https://www.facebook.com/"><i className="fab fa-instagram fontawesome-style"></i></a>
                                            <a href=""><i className="fab fa-facebook-f fontawesome-style"></i></a>
                                            <a href=""><i className="fab fa-youtube fontawesome-style "></i></a>
                                            <a href=""><i className="fab fa-twitter fontawesome-style "></i></a>
                                         </div>

                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className="mt-2 ">
                                <p className="main-hero-para text-center">
                                    Copyright @ 2021 SurajPay. All Rights reserved.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;
