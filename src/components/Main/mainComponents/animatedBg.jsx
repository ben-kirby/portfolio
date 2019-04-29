import React from 'react';
import Sky from 'react-sky';

import test from '../../../assets/images/profile.jpeg';

class SkyHero extends React.Component {
	render() {
		return(
			<div>
				<Sky
					images={{
						0: test
					}}
					how={100}
					time={20}
					size={'50px'}
					background={'#576C6C'}
				/>
			</div>
		);
	}
}

export default SkyHero;