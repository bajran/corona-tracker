import React from 'react';
import NavigationMenu from './navigation';

import {FaAddressCard, FaQuestion, FaUsers, FaDatabase} from 'react-icons/fa'
import Countries from './countries';

const About = () => {
    return(
        <div className="about">
           <NavigationMenu/>
           <div className="about-precaution">
                <Countries/>
           </div>
           <div className="container-fluid">
            <div className="about-info">
           <div className="container about-container">
                <div className="jumbotron about-jumbo">
                    <h1 className="about-heading"><FaAddressCard size={23} style={{marginRight:'10px'}}/> About</h1>
                </div>
                <div className="jumbotron about-jumbo">
                    <h3 className="about-heading"><FaQuestion size={23} style={{marginRight:'10px'}}/>Reason to make this website</h3>
                    <p className="lead">
                        To show the global information about covid-19
                    </p>
                </div>
                <div className="jumbotron about-jumbo">
                    <h3 className="about-heading"><FaUsers size={23} style={{marginRight:'10px'}}/>Collaboration</h3>
                    <p className="lead">
                        If you have cool ideas and wanna add it to the website, then please send me mail
                        <span> stop.coronas@gmail.com</span>
                        {/* <a href="https://www.linkedin.com/in/akshay-biyani-478b8aaa/">linkedin</a>  */}
                    </p>
                    <p class="lead" style={{paddintTop: '5px'}}>
                       Connect me on 
                        <a href="https://www.linkedin.com/in/akshay-biyani-478b8aaa/"> linkedin</a> 
                    </p>
                </div>
                <div className="jumbotron about-jumbo">
                    <h3 className="about-heading"><FaDatabase size={23} style={{marginRight:'10px'}}/>Sources</h3>
                    <p className="lead">
                        All data is taken from
                        <h5><a href="https://covid19api.com/">Covid-19</a></h5>
                        <h5><a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins CSSE</a></h5> 
                    </p>
                </div>
            </div>
            </div> 
            </div>          
        </div>
    )
}

export default About