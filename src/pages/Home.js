import React from 'react'
import Facebook from '../components/avatar/Facebook'
import Twitter from '../components/avatar/Twitter'
import Instagram from '../components/avatar/Instagram'
import '../components/style.css'


const Home = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="home">
        <div className="my-auto" >
            <div className="row featurette">
                <p className="text-left ml-4">
                    <h1>Al Hambra</h1>
                </p>
                <p className="text-left ml-4"> 
                Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area Twitter: @JakartaJS and we user the hashtag #jakartajs
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
export default Home