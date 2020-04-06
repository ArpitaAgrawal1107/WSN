import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Route from 'react-router-dom/Route';
import Greet  from './components/Greet'
import Welcome from'./components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import SideBar1 from './components/SideBar1'
import Sidebar2 from './components/Sidebar2'
import Home from './components/Home'
import Postlist from './components/Pstlist'
import Graph from './components/Graph'
import Analytics from './components/Analytics';
const home = () =>
{

  return (<Home/>)
}
const analytics = () =>
{
  return (<Analytics/>)
}
const status = () =>
{
  return (<status/>)
}


class App extends Component {
 render()
 {
  return (
    <Router>
    <div className="App" >
     
     <SideBar1 />
      <div id="page-wrap">
        <home/>
 
  </div>
   <Route path="/status" exact strict  
        component={status}
        />
   <Route path="/Home"  exact strict
        component={home}
        />
   <Route path="/analytics"  exact strict
        component={analytics}
        />
      
  </div>
</Router>
  );

}
}
export default App;
