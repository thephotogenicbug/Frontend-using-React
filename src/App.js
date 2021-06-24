import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Apione from './Apione';
import Header from './Header';

function App(){
  return(
    <HashRouter>
       <Header/>
       <Route exact path='/' component={Apione}/>
    </HashRouter>
  )
}

export default App;
