import React from 'react'
import {NavItem} from 'react-materialize'


const styles = {
  links: {
    marginRight: '10px',
  }
}

function NavText(){
  return (
    <div>
      <NavItem style={styles.links}>Work</NavItem>
      <NavItem style={styles.links}>About</NavItem>
    </div>
  )
}

export default NavText
