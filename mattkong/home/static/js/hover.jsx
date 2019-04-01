'use strict';

const e = React.createElement;

class HoverSocialIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '../images/github_light.png'
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      src: '../images/github_dark.png'
    });
  }

  handleMouseOut() {
    this.setState({
      src: '../images/github_light.png'
    });
  }

  render() {
    return (<div>
      <img
	     onMouseOver={this.handleMouseOver}
	     onMouseOut={this.handleMouseOut}
       src={this.state.src}
      />
    </div>)
  }
}

const socialIcon = document.querySelector('img.social-test');
ReactDOM.render(e(HoverSocialIcon), socialIcon);