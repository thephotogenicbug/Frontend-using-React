import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Apione from './Apione';
import ApiTwo from './Apitwo'

function App(){
  return(
    <HashRouter>
       <Header/>
       <Route exact path='/' component={Apione}/>
       <Route exact path='/service' component={ApiTwo}/>
    </HashRouter>
  )
}

export default App;
