import React from "react";
import './Content.css'
import Courses from "./Courses";

const con = [
    {
        title: 'BLOCKCHAIN TECHNOLOGY',
        price: '$100',
        duration: '4 Months',
        footer: 'Apply Now'
    },

    {
        title: 'Technical Analysis',
        price: '$100',
        duration: '4 Months',
        footer: 'Apply Now'
    },

    {
        title: 'DEFI MASTERY',
        price: '$100',
        duration: '4 Months',
        footer: 'Apply Now'
    },

    {
        title: 'NFT/CRYPTO JOBS',
        price: '$100',
        duration: '4 Months',
        footer: 'Apply Now'
    }
]

const Content = () => {
    return(
        <div>
            <h3 className="head">OUR COURSES</h3>
            <div className="course">
                <Courses title={con[0].title} price={con[0].price} duration={con[0].duration} footer={con[0].footer}> </Courses>
                <Courses title={con[1].title} price={con[1].price} duration={con[1].duration} footer={con[1].footer}> </Courses>
                <Courses title={con[3].title} price={con[2].price} duration={con[2].duration} footer={con[2].footer}> </Courses>
                <Courses title={con[3].title} price={con[3].price} duration={con[3].duration} footer={con[3].footer}> </Courses>
            </div>
        </div>
    )
}

export default Content