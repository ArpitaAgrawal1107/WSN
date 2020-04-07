import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";

function App(props) {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    </div>
  );
}
export default App;

// import React, { Component, useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import SideBar1 from './components/SideBar1';
// import Home from './components/Home';
// import Analytics from './components/Analytics';
// import Login from './components/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Routes from "./Routes";

// // function CheckForLoggedIn(props) {
// // 	const isLoggedIn = props.isloggedin;
// // 	console.log(isLoggedIn);
// // 	if (isLoggedIn) {
// // 		return (
// // 				<div className="App" >
// // 					<SideBar1 />
// // 					<Switch>
// // 						<Route path="/status" exact strict component={status} />
// // 						<Route path="/Home" exact strict component={home} />
// // 						<Route path="/analytics" exact strict component={analytics} />
// // 					</Switch>
// // 				</div>
// // 		);
// // 	}
// // 	else {
// // 		return (<Login />);
// // 	}
// // }

// class App extends Component {
	
// 	render() {
// 		return (
// 			<Route/>
// 			// <Router>
// 			// 	{/* <CheckForLoggedIn isloggedin={sessionStorage.username !== undefined ? true : false} /> */}
// 			// 	<Switch>
// 			// 			<Route path="/login" exact component={Login} />
// 			// 			{/* <Route path="/status" exact strict component={status} /> */}
// 			// 			<Route path="/Home" exact strict component={Home} />
// 			// 			<Route path="/analytics" exact strict component={Analytics} />
// 			// 	</Switch>
// 			// </Router>

// 		);

// 	}
// }
// export default App;