import React from 'react'
import './Footer.css'
import twitterlogo from '../images/twitterlogo.png'
import instagramlogo from '../images/instagramlogo.png'
import facebooklogo from '../images/facebooklogo.png'
import youtubelogo from '../images/youtubelogo.png'

const Footerv1 = () => {
    return (
        <div className='footer'>
            <div className='sb__footer section__padding'>
                <div className='sb__footer__links'>
                    <div className='sb__footer__links__div'>
                        <h4>For Business</h4>
                        <a href="">
                            <p>Employee</p>
                        </a>
                        <a href="">
                            <p>Health Plan</p>
                        </a>
                        <a href="">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='sb__footer__links__div'>
                        <h4>Resource</h4>
                        <a href="">
                            <p>Resource</p>
                        </a>
                        <a href="">
                            <p>Testimonials</p>
                        </a>
                        <a href="">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className='sb__footer__links__div'>
                        <h4>Partners</h4>
                        <a href="">
                            <p>Swing tech</p>
                        </a>
                    </div>
                    <div className='sb__footer__links__div'>
                        <h4>Company</h4>
                        <a href="">
                            <p>About</p>
                        </a>
                        <a href="">
                            <p>Press</p>
                        </a>
                        <a href="">
                            <p>Career</p>
                        </a>
                        <a href="">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className='sb__footer__links__div'>
                        <h4>Coming soon on</h4>
                        <div className='socialmedia'>
                            <p><img src={facebooklogo} alt="" id="facebooklogo" /></p>
                            <p><img src={twitterlogo} alt="" id="twitterlogo" /></p>
                            <p><img src={youtubelogo} alt="" /></p>
                            <p><img src={instagramlogo} alt="" id="instagramlogo" /></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className='sb__footer__below'>
                    <div className='sb__footer_copyright'>
                        <p>
                            @{new Date().getFullYear()} LEARNPRO. All right reserved.
                        </p>
                    </div>
                    <div className='sb__footer__below__links'>
                        <a href=""><div><p>Terms & Conditions</p></div></a>
                        <a href=""><div><p>Privacy</p></div></a>
                        <a href=""><div><p>Security</p></div></a>
                        <a href=""><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footerv1