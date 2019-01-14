import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {blue, orange} from '@material-ui/core/colors';
import history from '../../history'
import {connect} from 'react-redux'
import {logoutMainProfile} from '../../AC'


const styles = {
  root: {
    flexGrow: 1,
    background:blue[600],
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,

  },
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,

  };


  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  clearLoginedProfileInLocalStorage = () =>{
    history.push('/')
    localStorage.removeItem('loginedUser');
    this.props.logoutMainProfile()
  }


  render() {
    const { classes, onToggle } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar className={classes.root} position="static" >
          <Toolbar >
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.props.openDrawer}  >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Material UI
            </Typography>
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Обновить</MenuItem>
                  <MenuItem onClick={() => {history.push('/profil/settings?category=general')}}>Помощ</MenuItem>
                  <MenuItem onClick={this.clearLoginedProfileInLocalStorage}>Вихід</MenuItem>

                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, {logoutMainProfile})(withStyles(styles)(MenuAppBar))
