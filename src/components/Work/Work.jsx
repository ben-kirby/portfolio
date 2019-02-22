import React from 'react'
import 

const highlightedWork = [
  {
    title: 'Messenger Hunt',
    gitUrl: 'https://github.com/ben-kirby/messenger_hunt',
  },
]


class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 1,
    }
  }

  render(){
    return(
      <div>working</div>
    )
  }
}

export default Work