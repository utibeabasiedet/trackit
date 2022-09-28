import React from "react";
import './Brandpic.css'
import img1 from './TABLE (1).png'
import img2 from './MEN.png'
import img3 from './CHAIR.png'


const Brandpic = () => {
    return (
        <div className="BrandPic-background">
            <div className="xyz">
                <img src={img1} alt="0" className="img1"/>
                <img src={img2} alt="0" className="img2"/>
                <img src={img3} alt="0" className="img3"/>
            </div>

            <div className="BrandPic-text">
                <h2>CRYPTOCURRENCY</h2>
                <p className="one">MODERN SOLUTION TO CENTRALIZED BANKING VIA</p>
                <h3 className="three">BLOCKCHAIN TECHNOLOGY</h3>
            </div>

            <div className="footer">
            The main point of cryptocurrency is to fix the problems of traditional currencies by putting the power and responsibility in the currency holders' hands.
            </div>
            
        </div>
    )
}

export default Brandpic