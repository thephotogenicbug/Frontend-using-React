import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Apione from './Apione';
import ApiTwo from './Apitwo'
import ApiThree from './Apithree';
import ApiFour from './Apifour';
import ApiFive from './Apifive';
import ApiSix from './Apisix';
function App(){
  return(
    <HashRouter>
       <Header/>
       <Route exact path='/' component={Apione}/>
       <Route exact path='/service' component={ApiTwo}/>
       <Route exact path='/dashboard' component={ApiThree}/>
       <Route exact path='/apifour' component={ApiFour}/>
       <Route exact path='/apifive' component={ApiFive}/>
       <Route exact path='/apisix' component={ApiSix}/>
    </HashRouter>
  )
}

export default App;
