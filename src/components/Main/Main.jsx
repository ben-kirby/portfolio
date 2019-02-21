import React from 'react'
import Nav from '../Nav/Navbar'
import MainContent from './mainComponents/MainContent'
import HeroImage from './mainComponents/HeroImage'

const styles = {
  nav: {
    position: 'relative',
    zIndex: '100',
  },
  hero: {

    position: 'relative',
    marginTop: '-64px',
    zIndex: '1',
  }
}




function Main() {
  return (
    <div>
      <div>
        <div style={styles.nav}>
          <Nav />
        </div>
        <div style={styles.hero}>
          <HeroImage />

        </div>
      </div>
      <div>

      </div>
      <MainContent />
    </div>

  )
}

export default Main
