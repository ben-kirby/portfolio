import React from 'react';

const styles = {
	svg: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		width: '50px',
		height: '50px'
	}
};

class ReusableIcon extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<svg style={styles.svg}>
					<path 
						d={Object.values(this.props.img)[0]}
						fill="#529fca"
						transform="scale(2)"
					/>  
				</svg>  
			</div>
		);
	}
}



export default ReusableIcon;