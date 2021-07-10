import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Apione from './Apione';
import ApiTwo from './Apitwo'
import ApiThree from './Apithree';
import ApiFour from './Apifour';
import ApiFive from './Apifive';
import ApiSix from './Apisix';
import Employee from './emp';
import NewEmployee from './newemp';
import EditEmployee from './editemp';
import FileSystem from './filesystem';
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
       <Route exact path='/emplist' component={Employee}/>
       <Route exact path="/newemp" component={NewEmployee}/>
       <Route exact path="/:id/editemp" component={EditEmployee}/>
       <Route exact path='/filesystem' component={FileSystem}/>
    </HashRouter>
  )
}

export default App;
