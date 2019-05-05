import React, { Component } from 'react';

export default class SocialMedia extends Component {
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
			<nav className="navbar fixed-bottom navbar-expand-sm social">
				<ul>
					{items.map(item => (
						<li key={item.name}>
							<a className="nav-item" href={item.link}>
								<img className="social" src={"/static/images/" + item.light_image} id={item.name} />
							</a>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}