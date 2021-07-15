import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Apione from './Apione-fetch-class-component';
import ApiTwo from './Apitwo-fetch-class-component';
import ApiThree from './Apithree-fetch-class-component';
import ApiFour from './Apifour-fetch-class-component';
import ApiFive from './Apifive-fetch-class-component';
import ApiSix from './Apisix-fetch-delete-class-component';
import Employee from './emp-fetch-delete-class-component';
import NewEmployee from './newemp-fetch-post-class-component';
import EditEmployee from './editemp-post-functional-component';
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
