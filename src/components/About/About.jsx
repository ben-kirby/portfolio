import React from 'react'
import icon from '../../assets/images/test-icon.png'
import styled from 'styled-components'

const styles = {
  image: styled.img`
    height: 100px;
    width: 100px;
  `,
}

function About() {
  return(
    <div>
      <styles.image src={icon}></styles.image>
      <h3>
        Hi
      </h3>
      <p>Im a web developer based out of portland oregon. I have a passion for creating novel solutions to complex problems, and I dont mind a little design on the side</p>
    </div>
  )
}

export default About