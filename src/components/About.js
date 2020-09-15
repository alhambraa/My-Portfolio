import React from 'react'
import '../components/style.css'
// import Hobby from './avatar/Hobby'
// import Interest from './avatar/Interest'

const About = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="col-md-7">
            <h2 className="featurette-heading text-left">Hai, Nice to Meet You </h2>
                <br></br>
                <p className="text-left text-dark ml-4">
                    <p>Mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.mollis euismod. Cras mattis consectetur purus sit amet fermentum. </p>
                    <p>Aenean lacinia bibendum nulla sed consectetur.mollis euismod. Cras mattis consectetur purus sit amet fermentum. </p>
                    <p>mollis euismod. Cras mattis consectetur purus sit amet fermentum. </p>
                    <p>Mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.mollis euismod. Cras mattis consectetur purus sit amet fermentum. </p>
                </p>
            </div>
        </section>
    )
};

export default About

/* <div className="col-md-5">
    <div className="row">
        <div className="col-md-6 text-left">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Interest src={Interest} alt={Interest}/>
            <p><h3>My Skill</h3></p>
            <ol style={{align:"left"}}>
                <li>Web Design</li>
                <li>Video Editing</li>
                <li>Database Design</li>
                <li>Presentation Skill</li>
            </ol>
        </div>
        <div className="col-md-6 text-left">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Hobby src={Hobby} alt={Hobby}/>
            <p><h3>My Interest</h3></p>
            <ol style={{align:"left"}}>
                <li>Talent Class</li>
                <li>Talent Mobility</li>
                <li>HC System</li>
                <li>Manpower Plan</li>
            </ol>      
        </div>
    </div>
</div> */