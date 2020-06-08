import React, { Component } from 'react'

class Footers extends React.Component {
    render() {
        return (
            <div>
                <footer class="secPdngT animated">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="footerInfo text-right">
                                    <a href="index-1.html" class="footerLogo">
                                        <img src="img/footerLogo.png" alt="" />
                                    </a>
                                    <div class="footerTxt">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eui smod tincidunt ut laoreet dolore magna.</p>
                                    </div>
                                    <ul class="footerLinkIcon">
                                        <li><a href="#"><i class="icofont icofont-social-facebook"></i></a></li>
                                        <li><a href="#"><i class="icofont icofont-social-twitter"></i></a></li>
                                        <li><a href="#"><i class="icofont icofont-social-google-plus"></i></a></li>
                                        <li><a href="#"><i class="icofont icofont-social-tumblr"></i></a></li>
                                        <li><a href="#"><i class="icofont icofont-social-yelp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="widget text-right">
                                    <div class="h4">Important Links</div>
                                    <ul class="footerLink">
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Privacy & Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">VPN Service</a></li>
                                        <li><a href="#">Dedicated Server</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="widget text-right">
                                    <div class="h4">out pertners</div>
                                    <ul class="footerLink">
                                        <li><a href="#">ThemeForest</a></li>
                                        <li><a href="#">GraphicRiver</a></li>
                                        <li><a href="#">AudioJungle</a></li>
                                        <li><a href="#">3DOcean</a></li>
                                        <li><a href="#">CodeCanayon</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="contactInfo text-right">
                                    <div class="h4">contact with us</div>
                                    <span class="call"><a href="tel:+214-5212-829"><i class="icofont icofont-ui-call"></i>+214-5212-829</a></span>
                                    <span class="email"><a href="mailto:support@spark.com"><i class="icofont icofont-ui-v-card"></i>support@spark.com</a></span>
                                    <a href="" class="contactBtn Btn">Send us a message</a>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyrightTxt text-right">
                                    <p>&copy; Copyright 2018 Spark, </p>
                                    <p>All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footers;
