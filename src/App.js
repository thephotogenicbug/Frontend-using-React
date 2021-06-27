import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Apione from './Apione';
import ApiTwo from './Apitwo'
import ApiThree from './Apithree';

function App(){
  return(
    <HashRouter>
       <Header/>
       <Route exact path='/' component={Apione}/>
       <Route exact path='/service' component={ApiTwo}/>
       <Route exact path='/dashboard' component={ApiThree}/>
    </HashRouter>
  )
}

export default App;
