import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{"name": "home", "url": ""}, 
				{"name": "projects", "url": ""}, 
				{"name": "contact", "url": ""},
			]
		};
	}

	render() {
		const { items } = this.state;
		return (
			<nav className="navbar justify-content-center stick-top navbar-expand-lg stroke home">
				<ul>
					{items.map(item => (
						<li key={item.name}>
							<a className="nav-item" href={item.url}>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
