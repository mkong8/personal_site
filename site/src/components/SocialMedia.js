import React, { Component } from 'react';

export default class SocialMedia extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
	}

	componentDidMount() {
        fetch("http://localhost:8000/api/socialmedia/",
            { 
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Token ' + process.env.REACT_APP_TOKEN
                })
            }
        )
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
                                {console.log( item.light_image)}
								<img className="social" src={"/images/" + item.dark_image} id={item.name} alt={`${item.name} logo`}/>
							</a>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}