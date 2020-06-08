import React from 'react';
import './App.css';
import Home from './pages/Home';
import HomePageV1 from './pages/Home/HomePageV1';
import HomePageV2 from './pages/Home/HomePageV2';
import HomePageV3 from './pages/Home/HomePageV3';
import HomePageV4 from './pages/Home/HomePageV4';
import cloudHosting from './pages/Hosting/cloudHosting';
import sharedHosting from './pages/Hosting/sharedHosting';
import vpnHosting from './pages/Hosting/vpnHosting';
import webHosting from './pages/Hosting/webHosting';
import cart from './pages/pages/cart';
import chackout from './pages/pages/chackout';
import comingSoon from './pages/pages/comingSoon';
import domainSearch from './pages/pages/domainSearch';
import domainsettings from './pages/pages/domainSettings';
import faq from './pages/pages/FAQ';
import hostingsettings from './pages/pages/hostingSettings';
import myAccount from './pages/pages/myAccount';
import testimonial from './pages/pages/testimonial';
import about from './pages/About';
import singleBlock from './pages/singleBlock';
import Hosting from './pages/Hosting';
import Domain from './pages/Domain';
import Pages from './pages/Pages';
import Support from './pages/Support';
import Blog from './pages/Blog';
import RtlVersion from './pages/RtlVersion';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footers from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/hosting' component={Hosting} />
          <Route path='/homepagev1' component={HomePageV1} />
          <Route path='/homepagev2' component={HomePageV2} />
          <Route path='/homepagev3' component={HomePageV3} />
          <Route path='/homepagev4' component={HomePageV4} />
          <Route path='/cloudHosting' component={cloudHosting} />
          <Route path='/sharedHosting' component={sharedHosting} />
          <Route path='/vpnHosting' component={vpnHosting} />
          <Route path='/webHosting' component={webHosting} />
          <Route path='/cart' component={cart} />
          <Route path='/chackout' component={chackout} />
          <Route path='/comingSoon' component={comingSoon} />
          <Route path='/domainSearch' component={domainSearch} />
          <Route path='/domainsettings' component={domainsettings} />
          <Route path='/faq' component={faq} />
          <Route path='/hostingsettings' component={hostingsettings} />
          <Route path='/myAccount' component={myAccount} />
          <Route path='/testimonial' component={testimonial} />
          <Route path='/about' component={about} />
          <Route path='/singleBlock' component={singleBlock} />
          <Route path='/domain' component={Domain} />
          <Route path='/pages' component={Pages} />
          <Route path='/support' component={Support} />
          <Route path='/blog' component={Blog} />
          <Route path='/rtlversion' component={RtlVersion} />
          <Route path='/contact' component={Contact} />
        </Switch>
        
        <Footers />
      </Router>

    </div>
  );
}

export default App;
