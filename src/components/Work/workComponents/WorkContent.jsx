import React from 'react';
import WorkScreenshot from './WorkScreenshot';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import ReusableIcon from '../../Reusable/ReusableIcon';
import { v4 } from 'uuid';

const styles = {
	content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `,
	projectLink: {
		margin: 'auto',
		marginBottom: '3%',
	},
	projectTitle: {
		color: '#529fca',
	},
	techUsed: styled.div`
    display: flex;
    justify-content: space-evenly;
    width: auto;
  `,
};

class WorkContent extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<styles.content>
				<a href={this.props.content.gitUrl}>
					<h1 style={styles.projectTitle}><em>{this.props.content.title}</em></h1></a>
				<div>
					<WorkScreenshot />
				</div>
				<p><em>technology used</em></p>
				<styles.techUsed>
					{this.props.content.techUsed.map((icon) =>
						<ReusableIcon
							img={icon}
							key={v4()}
						/>
					)}
				</styles.techUsed>
			</styles.content>
		);
	}
}

WorkContent.propTypes = {
	content: PropTypes.object,
	title: PropTypes.string,
};

export default WorkContent;