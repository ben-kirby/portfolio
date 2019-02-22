import React from 'react'
import Main from './Main/Main'
import About from './About/About'
import Work from './Work/Work'
import FooterBar from './Footer/FooterBar.jsx'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Navbar'

const styles = {
  nav: {
    position: 'relative',
    zIndex: '100',
  },
  content: {
    position: 'relative',
    marginTop: '-64px',
    padding: '0px 10% 0px 10%',
    zIndex: '1',
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'main'
    }
  }

  render() {
    return (
      <div>
        <div style={styles.nav}>
          <Nav />
        </div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
        </Switch>
        <FooterBar />
      </div>
    )
  }
}

export default App
