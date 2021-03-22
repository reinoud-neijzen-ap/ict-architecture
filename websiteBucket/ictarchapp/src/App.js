import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Main from './screens/Main'

class App extends Component {
  render() {
      return (
        <div className = 'container'>
        <BrowserRouter>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                  <li className='nav-item active'>
                    <Link to={ '/main' } className='nav-link'>Main</Link>
                  </li>
              </ul>
              </div>
            </nav>
            <br/><br/>
            <Switch>
              <Route exact path='/main' component={Main}></Route>
              <Route path='*' component={Main}></Route>
            </Switch>  
        </BrowserRouter>
        </div> 
      )
    }
}


export default App;