import React from 'react'
import styled from 'styled-components'

import WorkContent from './workComponents/WorkContent'
import WorkScreenshot from './workComponents/WorkScreenshot'

import { v4 } from 'uuid'

const styles = {
  Content: styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 10% 100px 10%;
  `,
  ButtonRow: styled.div`
  justify-content: center;
  display: flex;
  `,
  WorkButtons: styled.button`
  margin: 5px;
  border: 1px solid black;
  border-radius: .25rem;
  `,
  workExample: styled.div`
  display: flex;
  justify-content: center;

  
  `,
}

const highlightedWork = [
  {
    key: v4(),
    title: 'Messenger Hunt',
    gitUrl: 'https://github.com/ben-kirby/messenger_hunt',
  },
  {
    key: v4(),
    title: 'whatever',
  }
]

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    }
    this.handleChangeContent = this.handleChangeContent.bind(this)
  }

  handleChangeContent(event) {
    this.setState({ active: parseInt(event.target.value) });
    console.log(highlightedWork[this.state.active].title);

  }

  render() {
    let renderedWorkText = <WorkContent content={highlightedWork[this.state.active]} />

    return (
      <styles.Content>

        <styles.ButtonRow>
          <styles.WorkButtons value='0' onClick={this.handleChangeContent}>Work 1</styles.WorkButtons>
          <styles.WorkButtons value='1' onClick={this.handleChangeContent}>Work 2</styles.WorkButtons>
          <styles.WorkButtons value='2' onClick={this.handleChangeContent}>Work 3</styles.WorkButtons>
          <styles.WorkButtons value='3' onClick={this.handleChangeContent}>Work 4</styles.WorkButtons>
        </styles.ButtonRow>

        <styles.workExample>
          {renderedWorkText}
        </styles.workExample>
        <WorkScreenshot />




      </styles.Content>
    )
  }
}

export default Work