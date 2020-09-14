import React from 'react'
import '../style.css'
import PropTypes from 'prop-types'

const PortfolioData = ({header,content,date}) => {
    return (
        <div className="resume-item col-md-6 col-sm-12 " > 
            <div className="card one mx-0 p-4 mb-5">
                <div className=" resume-content mr-auto">
                    <h4 className="mb-3"><i className="fa fa-globe mr-3 text-info"></i>{header}</h4>
                    <p>{content}</p>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">{date}</span>
                </div>
            </div>  
        </div>
    )
};

PortfolioData.propTypes  = {
    header : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
}

PortfolioData.defaultProps = {
    header : "Portfolio",
    content : "My Project Was here",
    date : "01-01-1999"
}


export default PortfolioData