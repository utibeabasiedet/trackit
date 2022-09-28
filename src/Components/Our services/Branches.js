import React from "react";
import './Branches.css'

const Branches = (props) => {
    return(
        <div className="b1">
            <div>
                <img src={props.img} alt="0" className="tv"/>
            </div>

            <div className="b2">{props.title}</div>
        </div>
    )
}

export default Branches