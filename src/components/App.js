import React, { Component } from 'react'
import Music from './Music'
import Menu from './Menu/Menu'
import Header from './Header'
import User from './Acount'
import Friends from './Friends'
import Settings from './Settings'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeSiteStyle, loginMainProfile} from '../AC'
import Communities from './Communities'

class App extends Component {


  render() {
    console.log(this.props);

    return (
      <div className="block_header">
        <Header />
      <div className="siteBody">
        <div>
            <Menu />
                <Route exact  path='/profil/id/:id' component={User}/>
                <Route exact  path='/profil/myProfile' component={User}/>
                <Route path='/profil/settings' component={Settings}/>
                <Route path='/profil/music' component={Music}/>
                <Route path='/profil/friends' component={Friends} />
                <Route path='/profil/communities' component={Communities} />

        </div>
      </div>
    </div>

    );

  }

  componentWillMount(){
    if (localStorage.getItem("loginedUser")) {
        this.props.loginMainProfile(JSON.parse(localStorage.getItem("loginedUser")));
    }
    if (localStorage.getItem(this.props.loginProfil.id)) {
        this.props.changeSiteStyle(localStorage.getItem(this.props.loginProfil.id))

    }

  }
}

export default connect(state => ({
    loginProfil: state.loginProfil
}), {changeSiteStyle, loginMainProfile})(App);
