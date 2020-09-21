import React from 'react'
import '../components/style.css'

const Experience = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="experience">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="text-center">Experience</h2>
                    <div className="mb-5 heading-border"></div>
                </div>
                <div className="main-experience" id="experience-box">
                    <div className="experience">
                      <div className="experience-icon"></div>
                      <div className="experience-content">
                          <span className="date">Mar 2018 - Mar Now</span>
                          <h5 className="title">Asisstant Officer of HC System PT INALUM (Persero)</h5>
                          <p className="description">
                                Experienced Assistant Officer with a demonstrated history of working in the mining & metals industry. Skilled in PHP, Data Entry, CodeIgniter, Bootstrap, and Cascading Style Sheets (CSS).
                          </p>
                     </div>
                    </div>
                    <div className="experience">
                      <div className="experience-icon"></div>
                      <div className="experience-content">
                          <span className="date">Jun 2017 - Feb 2018</span>
                          <h5 className="title">IT Staff of Quality Assurance Office UGM</h5>
                          <p className="description">
                                Quality Assurance Office Universitas Gadjah Mada (KJM UGM) was established on 27 November 2001 in accordance with the Rector’s Decree number 123/P/SK/Set.R/2001. KJM UGM in accordance with the decree founding the task to do
                          </p>
                      </div>
                    </div>
                  </div>
            </div>
        </section>
    )
};

export default Experience

