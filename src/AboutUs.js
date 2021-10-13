import React, { useState } from 'react' ;
import howtouseapi from './API/howtouseapi';

const AboutUs = () => {

    const [useData , setUseData] = useState(howtouseapi) ;

    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        {/* left side info start */}
                        <div className="col-12 col-lg-5 text-center justify-content-center our-service-left-side-image">
                            <img src="./Images/pic-5.jpg" alt="about.jpg" />

                        </div>
                        {/* left side info end */}

                        {/* Right side info start */}

                        <div className="col-12 col-lg-7  our-services-list">
                            <h3 className="mini-title">
                                -- AVAILABLE @ GOOGLE AND APP IOS APP STORE ONLY
                            </h3>
                            <h1 className="main-heading">How To Use The App ?</h1>
                            
                            
                            <div className="row our-services-info">

                                {useData.map((curEle)=>{
                                    const {id,title,info } = curEle ;
                                    return (
                                    <>
                                        {/* left side start */}
                                          {/* <div className="col-1 our-services-number">{id}</div>  */}
                                        {/* left side end */} 

                                        {/* right side start */}
                                            <div className="col-10 our-services-data">
                                                <h2 className="heading-2">{title}</h2>
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        {/* right side end */}
                                    </>
                                    )
                                })}
                            </div>

                            <button className="our-services-button">Learn More</button>
                            
                        </div>
                        {/* Right side info end */}
                   </div>
                </div>
            </section>

            {/* 2nd ABOUT US SECTION START **************************/}
            <section className="common-section our-services our-services-2nd-side ">
                <div className="container mb-5">
                    <div className="row">
                        {/* Right side info start */}
                        <div className="col-12 col-lg-7 our-services-list-second our-services-right-side-content d-flex justify-content-center align-items-start flex-column order-lg-first order-last">
                            <h3 className="mini-title mini-title-2">
                                -- SUPPORT IN ANY LANGUAGES
                            </h3>
                            <h1 className="main-heading">World class support is <br />available 24/7</h1>
                            
                            <div className="row our-services-info">

                                {useData.map((curEle)=>{
                                    const {title,info } = curEle ;
                                    return (
                                    <>
                                        {/* left side start */}
                                          {/* <div className="col-1 our-services-number">{id}</div>  */}
                                        {/* left side end */} 

                                        {/* right side start */}
                                            <div className="col-10 our-services-data">
                                                <h2 className="heading-2">{title}</h2>
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        {/* right side end */}
                                    </>
                                    )
                                })}
                            </div>

                            <button className="our-services-button">Learn More</button>
                            
                        </div>
                        {/* Right side info end */}

                        {/* left side info start */}
                        <div className="col-12 col-lg-5 text-center d-flex align-items-center justify-content-start our-service-left-side-image our-service-left-side-image-second order-md-first order-sm-first">
                            <img src="./Images/pic-4.jpg" alt="about.jpg" />

                        </div>
                        {/* left side info end */}
                   </div>
                </div>
            </section>
            {/* 2nd ABOUT US SECTION END **************************/}
        </>
    )
}

export default AboutUs ;
