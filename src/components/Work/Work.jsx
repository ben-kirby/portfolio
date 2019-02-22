import React from 'react'
import styled from 'styled-components'

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
  
  `,
}

const highlightedWork = [
  {
    title: 'Messenger Hunt',
    gitUrl: 'https://github.com/ben-kirby/messenger_hunt',
  },
]

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    }
    this.handleChangeContent = this.handleChangeContent.bind(this)
  }

  handleChangeContent(event){
    console.log(event.target);
    
  }

  render() {
    return (
      <styles.Content>
        <styles.ButtonRow>
          <styles.WorkButtons value='0' onClick={this.handleChangeContent}>Work 1</styles.WorkButtons>
          <styles.WorkButtons value='1' onClick={this.handleChangeContent}>Work 2</styles.WorkButtons>
          <styles.WorkButtons value='2' onClick={this.handleChangeContent}>Work 3</styles.WorkButtons>
          <styles.WorkButtons value='3' onClick={this.handleChangeContent}>Work 4</styles.WorkButtons>
        </styles.ButtonRow>
      </styles.Content>
    )
  }
}

export default Work