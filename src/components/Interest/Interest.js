import React from 'react'
import '../style.css'
import InterestData from './InterestData'
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
                    <InterestData
                        header="Sport"
                        content="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                        img = {<Sport src={Sport} alt={Sport}/>}
                    />
                    <InterestData
                        header="IT Geek"
                        content="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                        img = {<IT src={IT} alt={IT}/>}
                    /> 
                </div>
            </div>
        </section>
    )
};

export default Interest

