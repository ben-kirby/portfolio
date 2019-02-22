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
    <Icon path={mdiApple}/>
  )
}

// FooterLinks.propTypes = {
//   path: PropTypes.object,
//   url: PropTypes.string,
//   key: PropTypes.string
// }

export default FooterLinks