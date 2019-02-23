import React from 'react'

import WorkScreenshot from './WorkScreenshot'

import styled from 'styled-components'

const styles = {
  content: styled.div`
  display: flex;
  flex-direction: column;
  `,
  projectTitle: styled.h1`
  margin: auto
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

export default WorkContent