import React, { useState } from 'react'
import workapi from './API/WorkApi';

const HowItWorks = () => {

    const [workData , setWorkData] = useState(workapi);
    
    return (
        <>
            <section>
                <div className="container work-container">
                    <h1 className="main-heading text-center">How Does It Work</h1>
                    <div className="row upper">
                        {workData.map((currEle)=>{
                            const {id,logo,title,info} = currEle ;
                            return(
                            <>
                                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                       <i className={`fontawesome-style ${logo}`}></i>
                                       <h2 className="sub-heading">{title}</h2>
                                       <p className="main-hero-para">{info}</p>
                                </div>
                            </>
                            )

                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks ;

