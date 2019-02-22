import React from 'react'
import styled from 'styled-components'

import WorkContent from './workComponents/WorkContent'

import { v4 } from 'uuid'

const styles = {
  Content: styled.div`
  display: flex;
  justify-content: center;
  padding: 150px 10% 100px 10%;
  `,
  ButtonRow: styled.div`
  display: flex;

  `,
  WorkButtons: styled.button`
  margin: 5px;
  border: 1px solid black;
  border-radius: .25rem;
  `,
  workExample: styled.div`
  
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
    let renderedWork = <WorkContent content={highlightedWork[this.state.active]} />

    return (
      <styles.Content>

        <styles.ButtonRow>
          <styles.WorkButtons value='0' onClick={this.handleChangeContent}>Work 1</styles.WorkButtons>
          <styles.WorkButtons value='1' onClick={this.handleChangeContent}>Work 2</styles.WorkButtons>
          <styles.WorkButtons value='2' onClick={this.handleChangeContent}>Work 3</styles.WorkButtons>
          <styles.WorkButtons value='3' onClick={this.handleChangeContent}>Work 4</styles.WorkButtons>
        </styles.ButtonRow>
 
        <styles.workExample>
          {renderedWork}
        </styles.workExample>




      </styles.Content>
    )
  }
}

export default Work