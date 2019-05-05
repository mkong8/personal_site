import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import SocialMedia from './layout/SocialMedia';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<SocialMedia />
			</Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));