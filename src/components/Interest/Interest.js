import React from 'react'
import '../style.css'
import Sport from '../avatar/Sport'
import IT from '../avatar/IT'

const Interest = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="interest">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="text-center">Interest</h2>
                    <div className="mb-5 heading-border"></div>
                </div>
                <div className="resume-item col-md-12 col-sm-12 " > 
                    <div className="card one mx-0 p-4 mb-5">
                        <div className="resume-content text-md-left" >
                            <div className="row">
                                <div className="col-md-9">
                                    <h4 className="mb-3">Sport</h4>
                                    <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                </div>
                                <div className="col-md-3 mx-auto">
                                    <Sport src={Sport} alt={Sport}/>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card one mx-0 p-4 mb-5">
                        <div className="resume-content text-md-left" >
                            <div className="row">
                                <div className="col-md-9">
                                    <h4 className="mb-3">IT Geek</h4>
                                    <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                </div>
                                <div className="col-md-3 mx-auto">
                                    <IT src={IT} alt={IT}/>    
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    )
};

export default Interest

