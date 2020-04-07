import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class SideBar1 extends Component {

	render() {
		return (
			<Menu>
				<a className="menu-item" href="/home">Home </a>
				<a className="menu-item" href="/analytics" >Analytics </a>
				<a className="menu-item" href="/status" >Status </a>
			</Menu>
		)
	}
}
export default SideBar1