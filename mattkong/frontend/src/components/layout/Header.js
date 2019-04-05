import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
	}

	componentWillMount() {
		fetch("/api/socialmedia/")
		.then(res => res.json())
		.then(result => {
			this.setState({
				items: result,
				isLoaded: true
			});
		});
	}

	render() {
		const { items } = this.state;
		return (
			<nav className="navbar justify-content-center stick-top navbar-expand-lg stroke home">
				<ul>
					{items.map(item => (
						<li key={item.name}>
							<a className="nav-item" href={item.link}>
								<img className="social" src="{% static 'images/'|add:{item.name}|add:'_light.png' %}" id={item.name} />
							</a>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
