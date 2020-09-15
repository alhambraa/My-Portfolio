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
                <div class="main-experience" id="experience-box">
                    <div class="experience">
                      <div class="experience-icon"></div>
                      <div class="experience-content">
                          <span class="date">Mar 2018 - Mar Now</span>
                          <h5 class="title">Asisstant Officer of HC System PT INALUM (Persero)</h5>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                     </div>
                    </div>
                    <div class="experience">
                      <div class="experience-icon"></div>
                      <div class="experience-content">
                          <span class="date">Jun 2017 - Feb 2018</span>
                          <h5 class="title">IT Staff of Quality Assurance Office UGM</h5>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                      </div>
                    </div>
                  </div>
            </div>
        </section>
    )
};

export default Experience

