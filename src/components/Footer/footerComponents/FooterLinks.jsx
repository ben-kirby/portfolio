import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Icon from '@mdi/react'
import { mdiApple } from '@mdi/js'

const styles = {
  icon: {
    height: '64px',
    fill: 'red'
  }
}

function FooterLinks(props) {
  return (
    <Icon style={StyleSheet.icon} key={props.id} path={mdiApple}/>
  )
}

FooterLinks.propTypes = {
  icon: PropTypes.object,
  url: PropTypes.string,
  id: PropTypes.string
}

export default FooterLinks