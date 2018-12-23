import React from 'react'
import '../style/header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { logoutMainProfile } from '../../AC'

 class Header extends React.Component {

  render(){

    const style = this.props.loginProfil.siteStyle

      return (
      <div className="header" style={style}>
        <div className="header_section">
          <div className="logo">
            LOGO
          </div>

        </div>

        <div className="header_section_half">
          <div>Update Your rating
          </div>
        </div>

        <div className="header_section_two">
            <div className="header_item headerButton"><Link to='/profil/settings?category=general'><img src="https://www.freeiconspng.com/uploads/settings-icon-16.png" alt=""/></Link></div>
          <div className="header_item headerButton"><Link to='/'><img onClick={this.clearLoginedProfileInLocalStorage} src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/012_power-512.png" alt=""/></Link></div>
        </div>
      </div>

    )

  }
  clearLoginedProfileInLocalStorage = () =>{
    localStorage.removeItem('loginedUser');
    this.props.logoutMainProfile()
  }

}

export default connect(state => ({
  loginProfil : state.loginProfil
}),{logoutMainProfile})(Header)



/*
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/globe-7-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/search-13-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/group-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/joystick-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/star-5-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/start-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/headphones-3-xxl.png" alt=""/>
        </div>
*/
