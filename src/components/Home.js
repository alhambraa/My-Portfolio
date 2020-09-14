import React from 'react'
import Facebook from './avatar/Facebook'
import Twitter from './avatar/Twitter'
import Instagram from './avatar/Instagram'
import Animate from 'animate.css-react'
import PropTypes from 'prop-types'
import '../components/style.css'


const Home = ({name,description}) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="home">
            <div className="my-auto" >
                <div className="row featurette">
                    <p className="text-left ml-4">
                    <Animate
                        appear="fadeInDown"
                        durationAppear={1000}
                        component="p" >
                        <h1>{name}</h1>
                    </Animate>
                    </p>
                    <p className="text-left ml-4"> 
                       {description}
                    </p>
                    <p>
                    <Facebook src={Facebook} alt={Facebook}/>
                    <Twitter src={Twitter} alt={Twitter}/>
                    <Instagram src={Instagram} alt={Instagram}/>
                    </p>
                </div>
            </div>
        </section>
    )
};

Home.propTypes  = {
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

Home.defaultProps = {
    header : "Who Are You",
    description : "Live Your Life",
}

export default Home