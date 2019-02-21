import React from 'react'
import icon from '../../assets/images/test-icon.png'

const styles = {
  image: {
    height: '100px',
    width: '100px'
  }
}

function About() {
  return(
    <div>
      <img style={styles.image} src={icon}/>
      <h3>
        Hi
      </h3>
      <p>Im a web developer based out of portland oregon. I have a passion for creating novel solutions to complex problems, and I dont mind a little design on the side</p>
    </div>
  )
}

export default About