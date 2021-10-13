import React, { useState } from 'react' ;
import sendmoneyapi from "./API/sendmoneyapi" ;

const SendMoney = () => {

    const [moneyData , setMoneyData] = useState(sendmoneyapi);

    return (
        <>
            <section>
                <div className="container send-money-container text-align-center justify-content-center">
                    <h1 className="main-heading text-center">How to send money</h1>
                    <div className="row">
                        {moneyData.map((currEle , index)=>{
                            const { logo , title , info} = currEle ;
                            return(
                                <>
                                    <div key={index} className="col-12 col-lg-4 send-money-container-sub text-align-center justify-content-center ">
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

export default SendMoney;
