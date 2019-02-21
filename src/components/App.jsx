import React from 'react'
import Main from './Main/Main'
import Nav from './Nav/Navbar'
import About from './About/About'
import FooterBar from './Footer/FooterBar.jsx'
import { Switch, Route } from 'react-router-dom'

const styles = {
  nav: {
    zIndex: '1900',
  },
  content: {
    zIndex: '100',
  }
}

function App() {
  return (
    <div>
      <div style={styles.content}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
        </Switch>
        <FooterBar />
      </div>
    </div>
  )
}

export default App
