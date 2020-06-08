import React, { Component } from 'react';
import Header from '../components/Header';
// import pagetitlearea from '../components/pageTitleArea';
// import domainsearcharea from '../components/domainSearchArea';
// import domainctaarea from '../components/domainCtaArea';
import Footers from '../components/Footer';


class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <Preloader/> */}
           
                {/* <pagetitlearea/> */}
                <div class="pageTitleArea animated">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="pageTitle text-right">
                                    <div class="h2">Search a domain</div>
                                    <ul class="pageIndicate">
                                        <li><a href="">home</a></li>
                                        <li><a href="">domain</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <domainsearcharea/> */}

                <div class="domainSearchArea secPdng">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-12">
                                <div class="sectionTitle animated">
                                    <div class="h2">Find a perfect domain for you. <br />Search your domain here.</div>
                                </div>
                            </div>
                            <div class="col-lg-10 clearfix">
                                <form action="domainSearch.html" class="domainSearchForm  animated" method="get">
                                    <div class="domainInput">
                                        <input class="submit" type="submit" name="submit" value="Search Domain" />
                                        <input class="serach" type="search" name="search" value="spark.com" />
                                    </div>
                                    <div class="domainCheck text-right">
                                        <span class="com"><input type="checkbox" id="com" name="com" value="com" /> .com ($9.00)<label for="com"></label></span>
                                        <span class="net"><input type="checkbox" id="net" name="net" value="net" /> .net ($8.49)<label for="net"></label></span>
                                        <span class="org"><input type="checkbox" id="org" name="org" value="org" /> .org ($10.00)<label for="org"></label></span>
                                        <span class="in"><input type="checkbox" id="in" name="in" value="in" /> .in ($8.49)<label for="in"></label></span>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-12">
                                <ul class="domains">
                                    <li class="availableDomain clearfix  animated">
                                        <div class="aDomainLeft clearfix">
                                            <div class="checkIcon"><i class="icofont icofont-verification-check"></i></div>
                                            <div class="DomainName">
                                                <div class="h3">spark.com</div>
                                                <span>is available now!</span>
                                            </div>
                                        </div>
                                        <div class="domainBtn clearfix">
                                            <a href="#" class="btnCart Btn"><span class="add">add to cart</span><span class="added">remove from cart</span></a>
                                            <a href="#" class="btnBuy Btn">Buy Now</a>
                                        </div>
                                    </li>
                                    <li class="singleDomain  animated">
                                        <div class="h4 singleDomainName">spark.studio</div>
                                        <div class="singleDomainRight">
                                            <h4 class="price">$8.49</h4>
                                            <a href="#" class="cartBtn"><span class="add">add to cart</span><span class="added">remove from cart</span></a>
                                        </div>
                                    </li>
                                    <li class="singleDomain  animated">
                                        <div class="h4 singleDomainName">spark.net</div>
                                        <div class="singleDomainRight">
                                            <h4 class="price"><del>$12.49</del>$8.49</h4>
                                            <a href="#" class="cartBtn"><span class="add">add to cart</span><span class="added">remove from cart</span></a>
                                        </div>
                                    </li>
                                    <li class="singleDomain  animated">
                                        <div class="h4 singleDomainName">spark.org</div>
                                        <div class="singleDomainRight">
                                            <h4 class="price">$8.49</h4>
                                            <a href="#" class="cartBtn"><span class="add">add to cart</span><span class="added">remove from cart</span></a>
                                        </div>
                                    </li>
                                    <li class="singleDomain  animated">
                                        <div class="h4 singleDomainName">spark.info</div>
                                        <div class="singleDomainRight">
                                            <h4 class="price">$8.49</h4>
                                            <a href="#" class="cartBtn"><span class="add">add to cart</span><span class="added">remove from cart</span></a>
                                        </div>
                                    </li>
                                    <li class="singleDomain  animated">
                                        <div class="h4 singleDomainName">spark.co</div>
                                        <div class="singleDomainRight">
                                            <h4 class="price">$11.49</h4>
                                            <a href="#" class="cartBtn"><span class="add">add to cart</span><span class="added">remove from cart</span></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <domainctaarea/> */}
                <div class="domainCtaArea  animated">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="domainCta">
                                    <div class="h2">20,000+ People trust Sparks! Be one of them today.</div>
                                    <a href="#" class="ctaBtn Btn">get started now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;