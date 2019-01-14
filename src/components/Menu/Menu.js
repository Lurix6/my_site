import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import TabIcon from '@material-ui/icons/Tab'
import {teal, grey} from '@material-ui/core/colors/'
import history from '../../history'



function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


class AppDrawer extends React.Component{

  render(){
    const { isDrawerOpen, clouseDrawer }  = this.props
    console.log(history);
    const { classes } = this.props
      return(
        <Drawer
            open={isDrawerOpen}
            onClose={clouseDrawer}
        >
        <List component="nav">
               <ListItem button onClick={() => {history.push('/profil/myProfile')}} >
                  <ListItemIcon>
                    <Icon>home</Icon>
                  </ListItemIcon>
                 <ListItemText primary="Головна" />
               </ListItem>
               <ListItem button onClick={() => {history.push('/profil/friends')}}>
                 <ListItemIcon>
                   <Icon>person</Icon>
                 </ListItemIcon>
                 <ListItemText primary="Друзі" />
               </ListItem>
               <ListItem button onClick={() => {history.push('/profil/communities')}}>
                 <ListItemIcon>
                   <Icon>group</Icon>
                 </ListItemIcon>
                 <ListItemText primary="Спільноти" />
               </ListItem>
               <ListItem button onClick={() => {history.push('/profil/music')}}>
                <ListItemIcon>
                  <Icon >library_music</Icon>
                </ListItemIcon>
                <ListItemText primary="Музика" />
               </ListItem>
             </List>
        </Drawer>

      )
    }
}

export default AppDrawer;



/*
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../style/Menu.css'

class Menu extends React.Component {

  render() {
    const style = this.props.loginProfil.siteStyle
    return (
      <div className="menu" style={style}>
        <div id="home"><img src="/assets/img/music/home.png" alt=""/><Link to ='/profil/myProfile'>Моя сторінка</Link></div>
        <div id="news"><img src="/assets/img/music/news.png" alt=""/>Новини</div>
        <div id="message"><img src="/assets/img/music/message.png" alt=""/>Повідомлення</div>
        <div id="friens"><img src="/assets/img/music/friends.png" alt=""/><Link to='/profil/friends'>Друзі</Link></div>
        <div id="band"><img src="/assets/img/music/groups.png" alt=""/><Link to='/profil/communities'>Грути</Link></div>
        <div id="foto"><img src="/assets/img/music/photos.png" alt=""/>Фотографії</div>
        <div id="music"><img src="/assets/img/music/music.png" alt=""/><Link to ="/profil/music">Музика</Link></div>
        <div id="video"><img src="/assets/img/music/videos.png" alt=""/>Відео</div>
      </div>
    )

  }

}

export default connect(state => ({
  loginProfil : state.loginProfil
}))(Menu)

*/
