import React from 'react'
import App from './App'
import LoginOrSingIn from './LoginOrSingIn'
import store from '../store/index'
import {Provider} from 'react-redux'
import { Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';




function Root() {


  return(
      <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history}>
              <Switch>
                <div>
                  <Route exact path='/' component={LoginOrSingIn} />
                  <Route path='/profil' component={App} />
                </div>
              </Switch>
            </Router>
        </Provider>
      </MuiThemeProvider>
  )
}


export default Root
