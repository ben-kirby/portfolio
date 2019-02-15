import React from 'react'
import Hero from '../../../assets/images/hero-temp.jpg'

const styles = {
  hero: {
    backgroundImage: 'url( {`${Hero}`} )',
    height: '500px',
    width: '100%'
  }
}

function HeroImage(){
  return (
    <div style={styles.hero}>
    </div>
  )
}

export default HeroImage
