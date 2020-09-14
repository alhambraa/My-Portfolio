import React from 'react'
import PortfolioData from './PortfolioData'
import '../style.css'

const Portfolio = ({header,content,date}) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="Portfolio">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="text-center">Portfolio</h2>
                    <div className="mb-5 heading-border"></div>
                </div>
                <PortfolioData 
                    header="Simple Website"
                    content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                    date="March 2019 - Present"
                />
                <PortfolioData 
                    header="Mini Twitter"
                    content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                    date="March 2019 - Present"
                />
                <PortfolioData 
                    header="Javascript Validation"
                    content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                    date="March 2019 - Present"
                />
                <PortfolioData 
                    header="Final Project"
                    content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                    date="March 2019 - Present"
                />
                
            </div>
        </section>
    )
};

export default Portfolio

