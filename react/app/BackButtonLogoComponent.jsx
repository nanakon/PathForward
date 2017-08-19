import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import app_selector from './app_selector.json';

class BackButtonLogoComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
		var small_logo_path = {
 			'altum_data': "/pics/logo_3.png",
 			"path_forward": "/pics/path_forward_logo.png"
 		}
	  	return (
	  		<div onClick={this.props.history.goBack}>
	  			<img className="back-button" id="tiny-logo" src={small_logo_path[app_selector["app"]]}/>
	  		</div>
	    );
  	}

}

export default BackButtonLogoComponent;