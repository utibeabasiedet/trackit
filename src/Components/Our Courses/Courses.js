import React from "react";
import './Courses.css'

const Courses = (props) => {
    return(
        <div className="each">
            <div className="each1">
                <h4>{props.title}</h4>
                <h5>{props.price}</h5>
            </div>

            <div className="each2">
                <h3>{props.duration}</h3>
            </div>

            <div className="each3">
                <button>{props.footer} </button>
            </div>
            
        </div>
    )
}

export default Courses