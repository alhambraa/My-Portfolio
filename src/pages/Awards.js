import React from 'react'
import AwardsData from '../components/Awards/AwardsData'
import '../components/style.css'

const Awards = ({header,content,date}) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="awards">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="text-center">Awards</h2>
                    <div className="mb-5 heading-border"></div>
                </div>
                <AwardsData 
                    header="Hacktown Mandiri"
                    content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                    date="2014"
                />
                <AwardsData 
                    header="Smart Apps Mobile"
                    content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                    date="2017"
                />

            </div>
        </section>
    )
};

export default Awards

