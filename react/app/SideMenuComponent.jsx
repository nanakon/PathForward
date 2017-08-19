import React from 'react';

import HomePageComponent from './HomePageComponent.jsx';
import BigDataComponent from './BigDataComponent.jsx';
import AboutUsComponent from './AboutUsComponent.jsx';
import ExpertisesComponent from './ExpertisesComponent.jsx';
import TeamComponent from './TeamComponent.jsx';
import CorporateProgramComponent from './CorporateProgramComponent.jsx';
import CorporateProgramLSSComponent from './CorporateProgramLSSComponent.jsx';
import CorporateProgramLeanComponent from './CorporateProgramLeanComponent.jsx';
import CorporateProgramStrategyChangeComponent from './UnderConstruction.jsx';
import CorporateProgramHighPerformingTeamsComponent from './UnderConstruction.jsx';
import CorporateProgramAgileComponent from './CorporateProgramAgileComponent.jsx';
import CorporateProgramSpecialtyWorkshopsComponent from './CorporateProgramSpecialtyWorkshopsComponent.jsx';
import CognitiveTransformationComponent from './CognitiveTransformationComponent.jsx';
import OfferingsComponent from './OfferingsComponent.jsx';
import BioComponent from './BioComponent.jsx';

import {push as Menu} from 'react-burger-menu';

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

class SideMenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			domain: app_selector["app"],
			side_menu_open: false
		}
		this.onToggle = this.onToggle.bind(this);
	};

	componentDidMount() {
		this.setState({side_menu_open: false});
		console.log(Router);
	};

	onToggle(which_column) {
		this.setState({side_menu_open: true});
	};

	render() {	
		var styles = {
		  bmBurgerButton: {
		    position: 'fixed',
		    width: '100px',
		    height: '100%',
		    left: '0px',
		    top: '0px'
		  },
		  bmBurgerBars: {
		  	position:'fixed',
		  	left: '36px',
		  	top: '36px',
		  	height: '20px',
		  	width: '36px',
		    backgroundImage: 'url("./pics/bar-logo.png")',
		    backgroundRepeat: 'no-repeat',
		    backgroundSize: 'cover',
		    backgroundPosition: 'left-top'
		  },
		  bmCrossButton: {
		    height: '24px',
		    width: '24px'
		  },
		  bmCross: {
		    background: '#bdc3c7'
		  },
		  bmMenu: {
		  	textAlign: 'left',
		    background: 'rgba(0,0,0,1)',
		    padding: '2.5em 1.5em 0',
		    fontSize: '1.15em',
		    height: '100vh'
		  },
		  bmMorphShape: {
		    fill: '#373a47'
		  },
		  bmItemList: {
		    color: '#b8b7ad',
		    padding: '0.8em'
		  },
		  bmOverlay: {
		    background: 'rgba(0, 0, 0, 0.3)'
		  }
		};	

		var contact_email = {
			'altum_data': "info@altumdata.com",
			'path_forward': "info@pathforwardteam.com"
		}

		var contact_number = {
			'altum_data': "+421 904 164 197",
			'path_forward': "1-570-553-2487"
		}

		var logo_path = {
			'altum_data': "/pics/altumdata_small.png",
			'path_forward': "/pics/pathforward_small.png"
		}

	  	return (
	  		<div>
	  		<Menu id="menuComponent" styles={styles} isOpen={this.state.side_menu_open} pageWrapId={"page-wrap"} outerContainerId={"outer_container"}>
	  			<div id="nav-wrapper">
		  			<Link to="/" className="nav-link"><h4>{language_pack["nav-links"]["home"]}</h4></Link>
		  			<Link to="/about" className="nav-link"><h4>{language_pack["nav-links"]["about"]}</h4></Link>
		  			<Link to="/expertises" className="nav-link"><h4>{language_pack["nav-links"]["expertises"]}</h4></Link>
		  			<Link to="/team" className="nav-link"><h4>{language_pack["nav-links"]["team"]}</h4></Link>
	  			</div>
	  			<div id="legal-in-sidebar">
	  				<div id="legal-in-sidebar-absolute">
	  					<img id="legal-logo" src={logo_path[this.state.domain]}/><br/>
	  					{contact_email[this.state.domain]}<br/>
	  					{contact_number[this.state.domain]}<br/><br/>
	  					Pennsylvania,
	  					Atlanta,<br/>
	  					Florida,
	  					New York,
	  					Bratislava
	  				</div>
	  			</div>
	  		</Menu>

	  		<main id="page-wrap">
	  			<Route exact path="/" component={HomePageComponent}/>
	  			<Route path="/about" component={AboutUsComponent}/>
	  			<Route path="/expertises" component={ExpertisesComponent}/>
	  			<Route exact path="/team" component={TeamComponent}/>
	  			<Route path="/team/:person_name" component={BioComponent}/>
	  			<Route path="/big_data" component={BigDataComponent}/>

	  			<Route exact path="/corporate_program" component={CorporateProgramComponent}/>
	  			<Route path="/corporate_program/lean_six_sigma" component={CorporateProgramLSSComponent}/>
	  			<Route path="/corporate_program/lean_training" component={CorporateProgramLeanComponent}/>
	  			<Route path="/corporate_program/strategy_and_change" component={CorporateProgramStrategyChangeComponent}/>
	  			<Route path="/corporate_program/building_high_performing_teams" component={CorporateProgramHighPerformingTeamsComponent}/>
	  			<Route path="/corporate_program/agile" component={CorporateProgramAgileComponent}/>
	  			<Route path="/corporate_program/specialty_workshops" component={CorporateProgramSpecialtyWorkshopsComponent}/>
	  			
	  			<Route exact path="/cognitive_transformation" component={CognitiveTransformationComponent}/>
	  			<Route path="/cognitive_transformation/:offering_id" render={(props)=>(<OfferingsComponent {...props} course="it-cognitive-transformation-page"/>)}/>
	  			
	  			<Route path="/bio" component={BioComponent}/>
	  			<Route path="/dummy_offering" component={OfferingsComponent}/>
	  		</main>
	  		</div>
	    );
  	}

}

export default SideMenuComponent;