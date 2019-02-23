import React from 'react'
import WorkScreenshot from './WorkScreenshot'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const styles = {
  content: styled.div`
  display: flex;
  flex-direction: column;
  `,
  projectTitle: styled.h1`
  margin: auto;
  margin-bottom: 3%;
  `,
}

function WorkContent(props){
  return(
    <styles.content>
      <styles.projectTitle>{props.content.title}</styles.projectTitle>
      <div>
        <WorkScreenshot/>
      </div>
    </styles.content>
  )
}

WorkContent.propTypes = {
  content: PropTypes.object,
  title: PropTypes.string,
}

export default WorkContent