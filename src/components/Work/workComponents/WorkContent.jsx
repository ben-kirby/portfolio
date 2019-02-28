import React from 'react'
import WorkScreenshot from './WorkScreenshot'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '@mdi/react'
import ReusableIcon from '../../Reusable/ReusableIcon'

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
    color: 'black',
  },
  techUsed: styled.div`
    display: flex;

  `,
}

class WorkContent extends React.Component {
  constructor(props){
    super(props);
  }

  showProps(props){
    console.log(this.props.content);
  }

  render() {
    this.showProps();

    return (
      <styles.content>
        <a href={this.props.content.gitUrl}>
          <h1 style={styles.projectTitle}>{this.props.content.title}</h1></a>
        <div>
          <WorkScreenshot />
        </div>
        <styles.techUsed>
          <p><em>technology used</em></p>
          {this.props.content.map((iconInfo) =>
            <ReusableIcon
              path={iconInfo.techUsed}
              key={iconInfo.key} />
          )}
        </styles.techUsed>
      </styles.content>
    )
  }
}

WorkContent.propTypes = {
  content: PropTypes.object,
  title: PropTypes.string,
}

export default WorkContent