import React from "react";
import './Firstdiv.css'
import Branches from "./Branches";
import tv from './1.png'
import lib from './2.png'
import hub from './3.png'
import aca from './4.png'

    const branches = [
        {
        img: tv,
        title: 'Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous'
        },

        {
        img: lib,
        title: 'Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous'
        },

        {
        img: hub,
        title: 'Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous'
        },

        {
        img: aca,
        title: 'Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous'
        }

    ]


const Firstdiv = () => {
    return(
        <div>
            <div className="our-services">
                <h3>OUR SERVICES</h3>
                <span><b>What</b> we do</span>
                <p>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous</p>
            </div>

            <div className="branch">
                <Branches className="b1" title={branches[0].title} img={branches[0].img} ></Branches>
                <Branches className="b2" title={branches[1].title} img={branches[1].img} ></Branches>
                <Branches className="b3" title={branches[2].title} img={branches[2].img} ></Branches>
                <Branches className="b4" title={branches[3].title} img={branches[3].img} ></Branches>
            </div>

        </div>
    )
}

export default Firstdiv 