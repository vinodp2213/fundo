import React from 'react';
import {Link} from 'react-router-dom'
import img1 from '../../images/gettyimages-3.jpg'
import img2 from '../../images/gettyimages-2.jpg'
import img3 from '../../images/gettyimages-1.jpg'
import Footer from '../footer/footer'


const HowItWorks = () => {
    return (
        <div>
            <div className="container center">
                <h2 className="dark-text text-darken-4">What is Crowd funding?</h2>
                <p className="crowd-txt">It's the quickest, easiest way to gather a large amount of money 
                through donations from supporters, which includes your family, relatives, friends, colleagues and potential well-wishers.</p>
               <Link to = '/campaign/new'> <button className="waves-effect waves-light btn-large blue z-depth-4"> Start fundraiser</button></Link>
            </div>
            <div>
                <div className="row work-info">
                    <div className="col s5">
                        <img src={img1} alt="camp-details" className="works-pic"/>
                    </div>
                    <div className="col s5 offset-s1 camp-details">
                        <h4>Need Money?</h4>
                        <p>A fundraiser is any event or campaign developed with the sole purpose of raising money for a specific purpose. Fund raisers are held by schools, churches, organizations, charities, and many other groups who need to raise money for their financial goals.</p>
                    </div>
                </div>
                <div className="row work-info">
                    <div className="col s5 camp-details">
                        <h4>How does it work?</h4>
                        <p>the purpose of a fundraiser is to raise money, and the more the better, the goal is to keep the costs as low as possible and to create as large a revenue as possible. The wider the gap between revenue and costs, the larger the profit. The formula to keep in mind is Profit = Revenue - Cost.</p>
                    </div>
                    <div className="col s5 offset-s1">
                        <img src={img2} alt="camp-details" className="works-pic"/>
                    </div>
                </div>
                <div className="row work-info">
                    <div className="col s5">
                        <img src={img3} alt="camp-details" className="works-pic"/>
                    </div>
                    <div className="col s5 offset-s1 camp-details">
                        <h4>Membership Campaigns</h4>
                        <p>This is one effective way of gathering people to know more about your organization and the work that you do. Bringing in members enhances the chances to rake in more funding for your campaigns as most of the members get converted to donors in a short period. </p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default HowItWorks