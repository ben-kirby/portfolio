import React from 'react'

import Icon from '@mdi/react'
import { mdiDesktopMac } from '@mdi/js'
import test from '../../../assets/images/hero-temp.jpg'

const styles = {
  icon: {
    fill: 'grey'
  }
}

function WorkScreenshot() {
  return(
    <div>
      <Icon style={styles.icon} path={mdiDesktopMac} />
      <img src={test} alt=""/>
    </div>
  )
}

export default WorkScreenshot