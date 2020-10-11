import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'
import SignIn from './components/SignIn'
import Customers from './components/Customers'
import Main from './components/Main'



export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/signin' component={ SignIn } />
          <Route exact path='/customers' component={ Customers } />
                    
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )