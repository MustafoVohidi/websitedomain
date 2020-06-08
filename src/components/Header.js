import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="headerTopArea">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-2 col-5">
                                    <div className="langOpt">
                                        <span className="langIcon"><span className="langCode">en</span><i className="icofont icofont-caret-down"></i> </span>
                                        <ul className="lang">
                                            <li data-code="en">english</li>
                                            <li data-code="bn">bengali</li>
                                            <li data-code="ar">aribic</li>
                                            <li data-code="da">dansk</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-10 col-7">
                                    <div className="top-area-left">
                                        <ul className="topInfo">
                                            <li className="call"><a href="tel:+214-5212-829"><i className="icofont icofont-ui-call"></i>+214-5212-829</a></li>
                                            <li className="email"><a href="mailto:support@spark.com"><i className="icofont icofont-ui-v-card"></i>support@spark.com</a></li>
                                            <li className="clientAreaLi"><span><i className="icofont icofont-user-alt-3"></i>Client area</span></li>
                                        </ul>
                                        <div className="clientLogin">
                                            <form action="login.php" method="post">
                                                <div className="closeBtn"><i className="icofont icofont-close"></i></div>
                                                <div className="h5">sign in</div>
                                                <div className="userName">
                                                    <input name="userName" placeholder="Username" type="text" />
                                                </div>
                                                <div className="password">
                                                    <input name="password" placeholder="Password" type="password" />
                                                </div>
                                                <input type="submit" value="sign in" />
                                                <div className="h5">Forgot Passsword? <a href="#">Click here</a></div>
                                                <div className="logBtm">
                                                    <div className="h5">Don’t have an account yet?</div>
                                                    <a href="#" className="signUp">Click here to sign up.</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headerBottomArea">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-3 col-9">
                                    <a href="index.html" className="logo"><img src="img/logo.png" alt="" /></a>
                                </div>
                                <div className="col-lg-9 col-md-7 menuCol col-9">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                            <span className="sr-only"></span>
                                            <i className="fa fa-navicon"></i>
                                        </button>
                                    </div>
                                    <nav id="navbar" className="collapse navbar-collapse">
                                        <ul id="nav">
                                            <li className="current-menu-item"><Link to="/"> Home</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/homepagev1">homepage v1</Link></li>
                                                    <li><Link to="/homepagev2">homepage v2</Link></li>
                                                    <li><Link to="/homepagev3">homepage v3</Link></li>
                                                    <li><Link to="/homepagev4">homepage v4</Link></li>
                                                    <li><Link to="/rtlversion">RTL Version</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/hosting">hosting</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/webHosting">web hosting</Link></li>
                                                    <li><Link to="/cloudHocting">cloud hosting</Link></li>
                                                    <li><Link to="/vpnhosting">vpn hosting</Link></li>
                                                    <li><Link to="/hsharedHosting">shared hosting</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/domain">domain</Link></li>
                                            <li className="dropdown-megamenu"><Link to="/pages">pages </Link>
                                                <ul className="mega-menu clearfix">
                                                    <li className="mMenuCol">
                                                        <ul className="menuRow">
                                                            <li><Link to="/homepagev1">homepage v1</Link></li>
                                                            <li><Link to="/homepagev2">homepage v2</Link></li>
                                                            <li><Link to="/homepagev3">homepage v3</Link></li>
                                                            <li><Link to="/homepagev4">homepage v4</Link></li>
                                                            <li><Link to="/rtlversion">RTL Version</Link></li>
                                                        </ul>
                                                        <ul className="menuRow">
                                                            <li><Link to="/about">about</Link></li>
                                                            <li><Link to="/webHosting">web hosting</Link></li>
                                                            <li><Link to="/cloudHosting">cloud hosting</Link></li>
                                                            <li><Link to="/vpnhosting">vpn hosting</Link></li>
                                                            <li><Link to="/sharedHosting">shared hosting</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mMenuCol">
                                                        <ul className="menuRow">
                                                            <li><Link to="/myaccount">My account</Link></li>
                                                            <li><Link to="/domainsearch">domain search</Link></li>
                                                            <li><Link to="/domainsettings">domain settings</Link></li>
                                                            <li><Link to="/hostingsettings">hosting settings</Link></li>
                                                        </ul>
                                                        <ul className="menuRow">
                                                            <li><Link to="/testimonial">testimonial</Link></li>
                                                            <li><Link to="/faq">faq</Link></li>
                                                            <li><Link to="/support">support</Link></li>
                                                            <li><Link to="/contact">contact</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mMenuCol">
                                                        <ul className="menuRow">
                                                            <li><Link to="/cart">cart</Link></li>
                                                            <li><Link to="/checkout">checkout</Link></li>
                                                        </ul>
                                                        <ul className="menuRow">
                                                            <li><Link to="/blog">blog</Link></li>
                                                            <li><Link to="/singleblog">single blog</Link></li>
                                                        </ul>
                                                        <ul className="menuRow">
                                                            <li><Link to="/comingsoon">coming soon</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mMenuCol">
                                                        <div className="menuDiscount">
                                                            <div className="discountImg"><img src="img/icon/menu-img.png" alt="" /></div>
                                                            <span>10% discount on</span>
                                                            <div className="h3">any hosting</div>
                                                            <a href="#">Try it now!</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link to="/support">Support</Link></li>
                                            <li><Link to="/blog">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/blog">Blog</Link></li>
                                                    <li><Link to="/singleblog">single blog</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/rtlversion">RTL Version </Link></li>
                                            <li><Link to="/contact"> contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-1 col-md-2 cartCol col-3">
                                    <a href="cart.html" className="cart">
                                        <span className="count">10</span>
                                        <i className="icofont icofont-cart-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;