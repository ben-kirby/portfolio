import React from 'react';
import Sky from 'react-sky';

import angularjs from '../../../assets/sky/angularjs.png';
import bitbucket from '../../../assets/sky/bitbucket.png';
import firebase from '../../../assets/sky/firebase.png';
import git from '../../../assets/sky/git.png';
import githubCircle from '../../../assets/sky/github-circle.png';
import jira from '../../../assets/sky/jira.png';
import css from '../../../assets/sky/language-css3.png';
import html5 from '../../../assets/sky/language-html5.png';
import javascript from '../../../assets/sky/language-javascript.png';
import rubyOnRails from '../../../assets/sky/language-ruby-on-rails.png';
import typescript from '../../../assets/sky/language-typescript.png';
import medium from '../../../assets/sky/medium.png';
import nodejs from '../../../assets/sky/nodejs.png';
import reactIcon from '../../../assets/sky/react.png';
import ruby from '../../../assets/sky/ruby.png';
import visualStudioCode from '../../../assets/sky/visual-studio-code.png';


class SkyHero extends React.Component {
	render() {
		return(
			<div>
				<Sky
					images={{
						0: angularjs,
						1: bitbucket,
						2: firebase,
						3: git,
						4: githubCircle,
						5: jira,
						6: css,
						7: html5,
						8: javascript,
						9: rubyOnRails,
						10: typescript,
						11: nodejs,
						12: reactIcon,
						13: ruby,
						14: visualStudioCode,
						15: medium
					}}
					how={100}
					time={15}
					size={'50px'}
					background={'#122525'}
				/>
			</div>
		);
	}
}

export default SkyHero;