import React from 'react'
import Nav from '../Nav/Navbar'
import MainContent from './mainComponents/MainContent'
import HeroImage from './mainComponents/HeroImage'

const styles = {
  hero: {

    position: 'relative',
    marginTop: '-64px',
    zIndex: '1',
  }
}




function Main() {
  return (
    <div>
      <div style={styles.hero}>
        <HeroImage />
      </div>
      <MainContent />
    </div>

  )
}

export default Main
