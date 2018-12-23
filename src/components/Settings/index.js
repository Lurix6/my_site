import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import SettingsElement from './SettingsElement'

class App extends Component {

  render() {
    let {location} = this.props
    let params = new URLSearchParams(location.search)

    return (
      <div id="setingsMainBlock">
        <div id='mainSettings'>
                    <SettingsElement category={params.get("category")} />
        </div>
        <div id='miniMenu'>
          <ul>
            <Link to={{pathname:"/profil/settings", search:"?category=general"}}><li>Загальне</li></Link>
            <Link to={{pathname:"/profil/settings", search:"?category=secutity"}}><li>Безпека</li></Link>
            <Link to={{pathname:"/profil/settings", search:"?category=privacy"}}><li>Приватність</li></Link>
            <Link to={{pathname:"/profil/settings", search:"?category=notification"}}><li>Сповіщення</li></Link>
            <Link to={{pathname:"/profil/settings", search:"?category=blacklist"}}><li>Чоний список</li></Link>

          </ul>
        </div>
    </div>

    );

  }



}

export default App;
