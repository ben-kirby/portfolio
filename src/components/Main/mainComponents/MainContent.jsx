import React from 'react'
import styled from 'styled-components'

const styles = {
  content: styled.div`
    background: #BADBDB;
    margin-top: 0px;
    padding-left: 10%;
    padding-right: 10%;
  `,
  red: styled.h1` 
    color: #BD5252;
    margin: 0px;
    padding-top: 25px;
  `,
  noMargin: styled.p`
    margin-bottom: 0px;
    padding-bottom: 25px;
  `,
}

function MainContent() {
  return (
    <styles.content>
      <styles.red>Things i do</styles.red>

      <p>Do you have any idea how long it takes those cups to decompose. Remind me to thank John for a lovely weekend. What do they got in there? King Kong? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! What do they got in there? King Kong.</p>

      <p>This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Hey, take a look at the earthlings. Goodbye! I was part of something special. You know what? It is beets. I've crashed into a beet truck. Life finds a way. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>

      <p>Must go faster. They're using our own satellites against us. And the clock is ticking. Checkmate... I gave it a cold? I gave it a virus. A computer virus. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.</p>

      <p>Must go faster. Checkmate... Yes, Yes, without the oops! Remind me to thank John for a lovely weekend. Life finds a way. Remind me to thank John for a lovely weekend. I was part of something special. Must go faster. God help us, we're in the hands of engineers.</p>

      <styles.noMargin>They're using our own satellites against us. And the clock is ticking. Must go faster. You really think you can fly that thing? Hey, take a look at the earthlings. Goodbye! Must go faster. Yes, Yes, without the oops! God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.</styles.noMargin>
    </styles.content>
  )
}

export default MainContent