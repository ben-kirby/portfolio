import React from 'react'
import Nav from '../Nav/Navbar'
import MainContent from './mainComponents/MainContent'
import HeroImage from './mainComponents/HeroImage'




function Main() {
  return (
    <div>
      <div>
        <Nav />
        <HeroImage/>
      </div>
      <div>
        
      </div>
      <MainContent />
    </div>

  )
}

export default Main
