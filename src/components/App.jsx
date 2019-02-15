import React from 'react'
import Main from './Main'
import Nav from './Navbar'
import { Switch, Route} from 'react-router-dom'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/about' component={}/>
      </Switch>
    </div>
  )
}

export default App
