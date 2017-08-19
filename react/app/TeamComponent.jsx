import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import app_selector from './app_selector.json';

import language_pack_ad from './lang_packs/eng.json';
import language_pack_pf from './lang_packs/pfeng.json';

var language_pack;

if (app_selector["app"] == "altum_data") {
	language_pack = language_pack_ad;
};
if (app_selector["app"] == "path_forward") {
	language_pack = language_pack_pf;
};

class TeamComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
		var team_links_ad = (
			<div id="team-page-content-sub-wrapper">
		  				<Link className="custom-link" to={{pathname:"/team/don-sobeski" , person_name:"don-sobeski"}} className="name-link">Don Sobeski</Link><span className="person-role"> - {language_pack["bios"]["don-sobeski"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/david-hare", person_name:"david-hare"}} className="name-link">David Hare</Link><span className="person-role"> - {language_pack["bios"]["david-hare"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/alan-henderson", person_name:"alan-henderson"}} className="name-link">Alan Henderson</Link><span className="person-role"> - {language_pack["bios"]["alan-henderson"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/slobodan-radenkovic", person_name:"slobodan-radenkovic"}} className="name-link">Slobodan Radenković</Link><span className="person-role"> - {language_pack["bios"]["slobodan-radenkovic"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/richard-orth", person_name:"richard-orth"}} className="name-link">Richard Orth</Link><span className="person-role"> - {language_pack["bios"]["richard-orth"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/barbara-reusser", person_name:"barbara-reusser"}} className="name-link">Barbara Reusser</Link><span className="person-role"> - {language_pack["bios"]["barbara-reusser"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/luca-bencini", person_name:"luca-bencini"}} className="name-link">Luca Bencini</Link><span className="person-role"> - {language_pack["bios"]["luca-bencini"]["role"]}</span>
	  		</div>
		);

		var team_links_pf = (
			<div id="team-page-content-sub-wrapper">
		  				<Link className="custom-link" to={{pathname:"/team/don-sobeski" , person_name:"don-sobeski"}} className="name-link">Don Sobeski</Link><span className="person-role"> - {language_pack["bios"]["don-sobeski"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/david-hare", person_name:"david-hare"}} className="name-link">David Hare</Link><span className="person-role"> - {language_pack["bios"]["david-hare"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/slobodan-radenkovic", person_name:"slobodan-radenkovic"}} className="name-link">Slobodan Radenković</Link><span className="person-role"> - {language_pack["bios"]["slobodan-radenkovic"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/richard-orth", person_name:"richard-orth"}} className="name-link">Richard Orth</Link><span className="person-role"> - {language_pack["bios"]["richard-orth"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/barbara-reusser", person_name:"barbara-reusser"}} className="name-link">Barbara Reusser</Link><span className="person-role"> - {language_pack["bios"]["barbara-reusser"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/luca-bencini", person_name:"luca-bencini"}} className="name-link">Luca Bencini</Link><span className="person-role"> - {language_pack["bios"]["luca-bencini"]["role"]}</span>
	  		</div>
		);

		var team_links = app_selector["app"] == "altum_data" ? team_links_ad : team_links_pf;
		
	  	return (
	  		<div className="page" id="team-page" style={{backgroundImage:'url("./pics/team.jpg")', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover', backgroundAttachment: 'fixed'}}>
	  		<div className="page-content">
	  			<div id="team-page-content-wrapper">
	  			<div style={{position:'relative'}}>
	  				<div className="page-title">THE ALTUM DATA TEAM</div>
	  			</div>	
	  			<div id="team-page-content">
	  				{team_links}
	  			</div>
	  			</div>
	  		</div>
	  		</div>
	    );
  	}

}

export default TeamComponent;