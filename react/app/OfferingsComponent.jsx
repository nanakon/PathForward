import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';
import OfferingExampleComponent from './OfferingExampleComponent.jsx';
import BackButtonLogoComponent from './BackButtonLogoComponent.jsx';

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

class OfferingsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	this.go_to_page = this.go_to_page.bind(this);
	};

	go_to_page(destination) {
		this.props.go_to_page(destination);
	};

	render() {	

		var picture_map = {
			"offering-1": "chatbot_2.jpg",
			"offering-2": "smartreader.jpg",
			"offering-3": "optimization.jpg",
			"offering-4": "office_automation.jpg",
			"offering-5": "automation.jpg",
			"offering-6": "bigdata.jpg",
		};
		var items_to_render = [];

		for (var i=1; i<=10;i++) {
			var title_handle = "div"+i+"-title";
			var text_handle = "div"+i+"-text";

			if (language_pack[this.props.course][this.props.match.params.offering_id][title_handle] != "") {
				items_to_render.push(<br/>);
				items_to_render.push(<h3 className="offering-description-title">{language_pack[this.props.course][this.props.match.params.offering_id][title_handle]}</h3>);
				items_to_render.push(<br/>);
			};

			if (language_pack[this.props.course][this.props.match.params.offering_id][text_handle] != "") {
				items_to_render.push(<h3 className="offering-description-div">{language_pack[this.props.course][this.props.match.params.offering_id][text_handle]}</h3>);
			};
		};

		//		<img id="offering-pic" src={"./pics/"+picture_map[this.props.match.params.offering_id]}/>
	  	//		<img id="offering-pic-mobile" src={"./pics/landscape_"+picture_map[this.props.match.params.offering_id]}/>
	  	
	  	var examples_section;

	  	if (this.props.match.params.offering_id == "offering-3") {
	  		examples_section = (
	  			<div id="examples_section">
		  			<h3 className="offering-description-title">Examples</h3>
		  			<br/>
		  			<OfferingExampleComponent course={this.props.course} offering_id={this.props.match.params.offering_id}/>
	  			</div>
	  		);
	  	}

		var background_image_path = "./pics/"+picture_map[this.props.match.params.offering_id]
	  	return (
	  		<div className="page" id="team-page">
	  			<div className="page-content" style={{position:'relative'}}>
	  				<div className="left-column" style={{backgroundImage:'url('+background_image_path+')', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  					<div className="page-title" id="offering-title">{language_pack[this.props.course][this.props.match.params.offering_id]["name"]}</div>
	  				</div>
	  				<div className="right-column">
	  					<div className="right-column-content">
	  						<div className="course-description">
	  							{items_to_render}
	  						</div>
	  						<div className="examples-wrapper">
	  						<br/>
	  							{examples_section}
	  						</div>
	  					</div>
	  					<br/>
	  					<BackButtonLogoComponent history={this.props.history}/>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default OfferingsComponent;