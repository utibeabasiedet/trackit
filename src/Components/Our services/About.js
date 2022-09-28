import React from "react";
import './About.css'
import me from './5.png'

const About = () =>{
    return (
        <div className="courses" id="about">
            <div className="write-up">
                <h3>ABOUT US</h3>
                <h1>Discover Your Trading Potentials</h1>
                <p>The emergence of Bitcoin and Blockchain Technology in 2008, has transformed the Hemisphere of the digital space in no small way. It has made the internet just not a space to read and write, but an horizon that can house the financial system. Bitcoin gave the digital space, a financial environment where people can get involved and milk from the digital financial markets. The CEO of DG DIGITAL NETWORK, Akwaima Bassey Archibong, is embarking on a journey to milking the new ‘Oil-wells(The Digital Financial Market)” and to equipping outnumbered folks with proper Education and information on how to opt in, as well. In pursuit of this, we have niches, so we can properly execute our purpose. Some have been launched, others are still in a build-up and some are yet to be conceived.</p>
            </div>

            <div>
                <img src={me} alt="0" className="me"/> 
            </div>
        </div>
    )
}

export default About