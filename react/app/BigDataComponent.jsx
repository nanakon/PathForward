import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';
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

class BigDataComponent extends React.Component {
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
	  	return (
	  		<div className={"page"} id="big-data-page" style={{backgroundImage:'url(./pics/data_architecture_2.jpg)', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundSize:'cover', backgroundAttachment: 'fixed'}}>
	  		<div className="page-content">
	  			<div className="dark-tint-overlay"/>
	  			<div style={{position:'relative'}}>
	  				<div className="page-title">{language_pack["homepage-block-buttons"]["big-data-analytics"]}</div>
	  			</div>
	  			<div className="course-description-text">
		  			<div className="">{language_pack["big-data-analytics"]["description"]["div1"]}</div><br/>	
		  			<div className="">{language_pack["big-data-analytics"]["description"]["div2"]}</div><br/>
		  			<div className="">{language_pack["big-data-analytics"]["description"]["div3"]}</div><br/>
		  			<div className="">{language_pack["big-data-analytics"]["description"]["div4"]}</div><br/>
	  			</div>
	  			<br/>
	  			<BackButtonLogoComponent history={this.props.history}/>
	  		</div>
	  		</div>
	    );
  	}

}

export default BigDataComponent;