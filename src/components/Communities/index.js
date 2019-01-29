import React from 'react'
import SimpleTabs from './SimpleTabs'
import './style.css'
import CommunityPage from './CommunityPage'
import { Switch, Route } from 'react-router'



class Communities extends React.Component {

  render() {

    return (
        <div id='communitiesMainBlock'>
        <Switch>
          <Route exact path='/profil/communities/' component={SimpleTabs} />
          <Route path='/profil/communities/:communitie' component={CommunityPage} />


        </Switch>
        </div>
    );
  }
}

export default Communities
