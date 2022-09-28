import React from "react";
import './Footer.css'
import { FaTwitter, FaTelegram, FaWhatsapp} from "react-icons/fa";
// import About from './Components/Our services/About';

function Footer() {
  return (
    <div className="ob" id="footer">
    <div className="background">
      <div className="one">
        <h5>QUICK LINKS</h5>
        <ul className="indiv">
            <li><a href="#about">About</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">services</a></li>
        </ul>
      </div>

      <div className="two">
        <h5>RESOURCES</h5>
        <ul className="indiv">
            <li><a href="#about">About</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">services</a></li>
        </ul>
     </div>

     <div className="three"> 
      <h5>CONTACT</h5>
      <ul className="indiv">
        <a href="https://twitter.com/dgcryptotv"><FaTwitter></FaTwitter> @dgcrptotv</a>
        <a href="https://t.me/dgdigitalnetwork"><FaTelegram></FaTelegram> dgdigitalnetwork </a>
        <a href="https://wa.me/message/IAROE2C27UUTO1"><FaWhatsapp></FaWhatsapp> DG CRYPTO TV</a>
      </ul>
     </div>
    </div>

    <div className="hr"></div>

    <div>
      <h6>© 2023 DG CRYPTOTV. ALL RIGHT RESERVES</h6>
    </div>
    </div>
  )
}

export default Footer
