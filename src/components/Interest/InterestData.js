import React from 'react'
import '../style.css'
import PropTypes from 'prop-types'

const InterestData = ({header,content,img}) => {
    return (
        <div className="card one mx-0 p-4 mb-5">
            <div className="resume-content text-md-left" >
                <div className="row">
                    <div className="col-md-9">
                        <h4 className="mb-3">{header}</h4>
                        <p>{content}</p>
                    </div>
                    <div className="col-md-3 mx-auto">
                        <Sport src={Sport} alt={Sport}/>    
                    </div>
                </div>
            </div>
        </div>
    )
};

InterestData.propTypes  = {
    header : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
}

InterestData.defaultProps = {
    header : "Portfolio",
    content : "My Project Was here",
    date : "01-01-1999"
}


export default InterestData