import React from 'react'
import styled from 'styled-components'
import WorkContent from './workComponents/WorkContent'
import { v4 } from 'uuid'
import {
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiRuby,
  mdiLanguageRubyOnRails,
  mdiAngular,
  mdiFirebase,
  mdiLanguageTypescript
} from '@mdi/js'



const styles = {
  Content: styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 10% 100px 10%;
  `,
  ButtonRow: styled.div`
  justify-content: center;
  display: flex;
  margin-top: -5%;
  `,
  WorkButtons: styled.button`
  border: 0px solid black;
  background: white;
  margin: 5px;
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
    techUsed: [
      {mdiLanguageCss3},
      {mdiLanguageHtml5},
      {mdiLanguageJavascript},
      {mdiRuby},
      {mdiLanguageRubyOnRails},
    ]
  },
  {
    key: v4(),
    title: 'Quizzle Me Timbers',
    gitUrl: 'https://github.com/ben-kirby/quizzle-me-timbers',
    techUsed: [
      { mdiAngular},
      {mdiLanguageCss3},
      { mdiFirebase},
      {mdiLanguageHtml5},
      {mdiLanguageJavascript},
      { mdiLanguageTypescript},
    ]
  },
  {
    key: v4(),
    title: 'Lift',
    gitUrl: 'https://github.com/ben-kirby/Lift',
    techUsed: [
      { mdiAngular},
      {mdiLanguageCss3},
      { mdiFirebase},
      {mdiLanguageHtml5},
      {mdiLanguageJavascript},
      { mdiLanguageTypescript},
    ]
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
    this.setState({ active: parseInt(event.target.value) })
  }

  render() {
    let renderedWorkText = <WorkContent content={highlightedWork[this.state.active]} />

    return (
      <styles.Content>
        <styles.ButtonRow>
          <styles.WorkButtons value='0' onClick={this.handleChangeContent}>Work 1</styles.WorkButtons>
          <styles.WorkButtons value='1' onClick={this.handleChangeContent}>Work 2</styles.WorkButtons>
          <styles.WorkButtons value='2' onClick={this.handleChangeContent}>Work 3</styles.WorkButtons>
        </styles.ButtonRow>
        {renderedWorkText}
      </styles.Content>
    )
  }
}

export default Work