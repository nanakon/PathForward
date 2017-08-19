//this is the frontend entrypoint
import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import SideMenuComponent from './SideMenuComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


var language_pack;

import app_selector from './app_selector.json';

import language_pack_ad from './lang_packs/eng.json';
import language_pack_pf from './lang_packs/pfeng.json';

if (app_selector["app"] == "altum_data") {
	language_pack = language_pack_ad;
};
if (app_selector["app"] == "path_forward") {
	language_pack = language_pack_pf;
};


class App extends React.Component {
	constructor() {
		super();
		this.get_database_content = this.get_database_content.bind(this);
		this.setParentStateCallback = this.setParentStateCallback.bind(this);
		this.state = {
			database: [],
			site_to_display: app_selector,
			logged_in_userEmail: "",
			logged_in_userName: "",
			logged_in_userIsAdmin: "false",
		};
	};

	componentDidMount() {
    	//this.get_database_content();
    	//this.get_logged_in_user();
    };

    setParentStateCallback(obj) {
    	this.setState(obj);
    };

  
	get_logged_in_user() {
		let url = "/logged_in_user_info";
		axios.get(url).then(res => {
			console.log("Response about logged in user: ");
			console.log(res.data);
			this.setState({logged_in_userEmail: res.data.userEmail, 
							logged_in_userName:res.data.name,
							logged_in_userIsAdmin: res.data.isAdmin}, function(){
								console.log("Information about user has been sate as a state in the main component. The data is as follows: ");
								console.log(this.state.logged_in_userEmail +" "+ this.state.logged_in_userName);;
							});
		});
	};

	get_database_content() {
		let url = "/dataEndpoint";
		console.log("Requested Data Refresh");
		axios.get(url).then(res => {
	    
	    var database = res.data.map(function(obj){
			return obj.doc;
		});
		
	    }).catch(function(error){
	      console.log(error);
	    });
    };

 	render () {
 		var logo_path_sidebar = {
 			'altum_data': "/pics/logo_3.png",
 			"path_forward": "/pics/path_forward_logo.png"
 		}
 		var side_menu = <SideMenuComponent setParentStateCallback={this.setParentStateCallback}/>	
 		return (	
 			<Router>
			<div id="outer_container">
				<div id="bar-mobile">
			  			<Link to="/" className="nav-link-mobile"><span className="nav-link-mobile-label">{language_pack["nav-links"]["home"]}</span></Link>
			  			<Link to="about" className="nav-link-mobile"><span className="nav-link-mobile-label">{language_pack["nav-links"]["about"]}</span></Link>
			  			<Link to="/expertises" className="nav-link-mobile"><span className="nav-link-mobile-label">{language_pack["nav-links"]["expertises"]}</span></Link>
			  			<Link to="/team" className="nav-link-mobile"><span className="nav-link-mobile-label">{language_pack["nav-links"]["team"]}</span></Link>	
				</div>
				<div id="bar">
					<Link to="/"><img id="logo-bar" src={logo_path_sidebar[app_selector["app"]]}/></Link>
				</div>
				{side_menu}
			</div>
			</Router>
		);
  	};
};

render(<App/>, document.getElementById('app'));
