import React from 'react'
import Icon from '@mdi/react'
import * from '@mdi/js'

function ReusableIcon (props){
  return(
    <Icon path={props.path}></Icon> 
  )
}

export default ReusableIcon