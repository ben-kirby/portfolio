import React from 'react'
import Main from './Main/Main'
import About from './About/About'
import Work from './Work/Work'
import FooterBar from './Footer/FooterBar.jsx'
import { Switch, Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
        </Switch>
        <FooterBar />
      </div>
    </div>
  )
}

export default App
