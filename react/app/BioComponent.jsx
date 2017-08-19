import React from 'react';

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

class BioComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
		var pic_url = "/pics/profile_photos/"+this.props.match.params.person_name+".jpg";
		//<img id="profile-photo" src={"/pics/profile_photos/"+this.props.match.params.person_name+".jpg"}/>
	  	return (
	  		<div className="page" id="aboutus-page">
	  			<div className="page-content" style={{position:'relative'}}>
	  				<div className="left-column-bio" style={{backgroundImage:'url('+pic_url+')', backgroundRepeat:'no-repeat', backgroundPosition:'top-center', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  				</div>
	  				<div className="right-column-bio">
	  					<div className="right-column-content">
	  						<div className="bio-content" >
	  							<div id="profile-name">
			  						{language_pack["bios"][this.props.match.params.person_name]["name"]}<br/>
			  					</div>
			  					<div id="profile-role">
			  						{language_pack["bios"][this.props.match.params.person_name]["role"]}<br/>
			  					</div>
	  							<h3 className="offering-description-div">
	  								{language_pack["bios"][this.props.match.params.person_name]["div1"]}
	  							</h3>
	  							<h3 className="offering-description-div">
	  								{language_pack["bios"][this.props.match.params.person_name]["div2"]}
	  							</h3>
	  						</div>
	  					</div>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default BioComponent;