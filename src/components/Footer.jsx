import React from 'react';
import "./Footer.css";

function Footer() {
 return (
    <footer className="Footer">
            
            <div id="footer-container">
                    <div id="footerlogo">
                        <img src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg" alt="LEGO"></img>
                    </div> 

                    <div id="menu-below-footer-logo">
                        <nav className="nav-footer">
                            <ul className="nav-footer-links">
                            <li className="nav-footer-link"><a href="https://www.lego.com/en-us/categories/new-sets-and-products">Gift Cards</a></li>
                            <li className="nav-footer-link"><a href="https://www.lego.com/en-us/themes">LEGO Catalogs</a></li>
                            <li className="nav-footer-link"><a href="https://www.lego.com/en-us/holiday-gifts">Find a LEGO Store</a></li>
                            </ul>
                        </nav>
                    </div> 


                <div id="about-us-footer">
                    <h3>ABOUT US</h3>
                        <ul>
                        <li>About the LEGO Group</li>
                        <li>LEGO® News</li>
                        <li>Sustainability</li>
                        <li>Supply Chain Transparency Statement</li>
                        <li>LEGO Product Certification</li>
                        <li>LEGO Jobs</li>
                        <li>LEGO Compliance Line</li>
                        </ul>
                </div>

                <div id="about-us-footer">
                    <h3>SUPPORT</h3>
                        <ul>
                        <li>Contact Us</li>
                        <li>Find Building Instructions</li>
                        <li>Replacement Parts</li>
                        <li>Shipping and Returns</li>
                        <li>Payment Methods</li>
                        <li>Terms & Conditions</li>
                        <li>Product Recalls</li>
                    </ul>
                </div>

                    <div id="attraction-footer">
                        <h3>ATTRACTIONS</h3>
                            <ul>
                            <li>LEGO® House</li>
                            <li>LEGOLAND® Parks</li>
                            <li>LEGOLAND Discovery Centers</li>
                            </ul>
                    </div>

                    <div id="more-from-us-footer">
                        <h3>MORE FROM US</h3>
                            <ul>
                                <li>LEGO® LIFE</li>
                                <li>LEGO Education</li>
                                <li>LEGO Ideas</li>
                                <li>LEGO Foundation</li>
                                <li>Affiliate Program</li>
                                <li>Student Offers</li>
                                <li>Parent Offers</li>
                                <li>LEGO® Braille Bricks</li>
                            </ul>
                    </div> 
            </div>               
    </footer>
 );
}
export default Footer;