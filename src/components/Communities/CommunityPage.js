import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import { mapToArr } from '../../helper/'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar'
import Style from 'style-it';

const styles = theme => ({

  root: {
    display:'flex',
    padding: '12px 12px 12px 12px'
  },
  rootPater: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  tape: {
    marginRight: '12px'
  },
   avaterIMG: {
     width: '100%',
     height: 'auto'
   },
   heading: {
     fontSize: theme.typography.pxToRem(15),
     fontWeight: theme.typography.fontWeightRegular,
   },
  signDiv: {
    width: '100%'
  },
  rootPaterList: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    marginTop: '12px'
  },
  disabled: {
    color: '#3670b3'

  },
  displayFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
  },
  displayFlexRow: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  avaterSubscriber: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  avaterSubscriberImg: {
    width: 50,
    height: 50,
  }

});

class CommunityPage extends React.Component {
    state = {
      expanded: false,
      open: false,
      more: false
 };

 handleToggle = () => {
   this.setState(state => ({ open: !state.open }));
 };

 handleClose = event => {
   if (this.anchorEl.contains(event.target)) {
     return;
   }

   this.setState({ open: false });
 };


  render(){
    const { classes } = this.props;
    const community = this.props.allCommunities.filter(el => (el.url === this.props.match.params.communitie))[0]

    return <div className={classes.root}>
              <div className={classes.tape} style={{display: 'flex', flexDirection: 'column', width: '75%'}}>
                <Paper className={classes.rootPater} elevation={1}>
                   <Typography variant="h5" component="h3">
                     This is a sheet of paper.
                   </Typography>
                   <Typography component="p">
                     Paper can be used to build surface or other elements for your application.
                   </Typography>
                 </Paper>
              </div>
              <div style={{display: 'flex', flexDirection: 'column' , width: '25%'}}>
              <Paper className={classes.rootPater} elevation={1}>
                <div>
                  <img className={classes.avaterIMG} alt='avatar' src={community.img} />
                  <div className={classes.signDiv}>
                     <Button
                      fullWidth
                       buttonRef={node => {
                         this.anchorEl = node;
                       }}
                       aria-owns={this.state.open ? 'menu-list-grow' : undefined}
                       aria-haspopup="true"
                       onClick={this.handleToggle}
                     >
                       Ви учасник
                     </Button>
                     <Popper style={{zIndex: 1}} open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
                       {({ TransitionProps, placement }) => (
                         <Grow
                           {...TransitionProps}
                           id="menu-list-grow"
                           style={{ transformOrigin: ' bottom' }}
                         >
                           <Paper>
                             <ClickAwayListener onClickAway={this.handleClose} >
                               <MenuList>
                                 <MenuItem onClick={this.handleClose}>Вийти з групи</MenuItem>
                                 <MenuItem onClick={this.handleClose}>Приховувати новини</MenuItem>
                               </MenuList>
                             </ClickAwayListener>
                           </Paper>
                         </Grow>
                       )}
                     </Popper>
                   </div>
                  </div>

               </Paper>

               <Paper className={classes.rootPaterList} elevation={1}>
               <Style>
                {`
                  .iconHover:hover {
                    color: #494949;
                  }
                  `}
                 <List
                    component="nav"
                    className={classes.rootPaterList}
                  >
                    <ListItem className={classes.disabled}  >
                      <Icon >
                        chat_bubble_outline
                      </Icon>
                      <ListItemText  >
                        <p className={classes.disabled}>Повідомлення</p>
                      </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className="iconHover" button>
                      <Icon>
                        notification_important
                      </Icon>
                      <ListItemText inset primary="Увімкнути сповіщення" />
                    </ListItem>

                    {this.state.more ?
                      <List>
                          <ListItem className="iconHover"  button >
                            <Icon>
                              chat_bubble_outline
                            </Icon>
                            <ListItemText inset primary="Дозволити повідомлення" />
                          </ListItem>
                          <ListItem className="iconHover"  button >
                            <Icon>
                              star_border
                            </Icon>
                            <ListItemText inset primary="Зберегти в закладки" />
                          </ListItem>
                        </List>
                         :
                        <ListItem className="iconHover" button onClick={() => {this.setState({more: true})}}>
                          <Icon>
                            more_horiz
                          </Icon>
                          <ListItemText inset primary="Ще" />
                        </ListItem> }

                  </List>
                  </Style>
                </Paper>

                <Paper className={classes.rootPaterList} elevation={1}>
                    <div className={classes.displayFlexColumn}>
                      <div className={classes.displayFlexRow}>
                          <Typography fontWeight="fontWeightMedium" m={1} variant="p" >
                                Учасники:
                         </Typography>
                         <Typography >
                           111
                        </Typography>
                      </div>
                      <Grid container direction='column' style={{marginTop: '3px'}} spacing={24}>
                        <Grid container direction='row' item xs={24}>
                          <Grid container item justify='center' xs={4}>
                              <div className={classes.avaterSubscriber}>
                                <Avatar alt="Remy Sharp" src={community.img} className={classes.avaterSubscriberImg} />
                                <Typography >
                                  111
                               </Typography>
                              </div>
                           </Grid>
                           <Grid item xs={4}>
                           <div className={classes.avaterSubscriber}>
                             <Avatar alt="Remy Sharp" src={community.img} className={classes.avaterSubscriberImg} />
                             <Typography >
                               111
                            </Typography>
                           </div>
                            </Grid>
                            <Grid item xs={4}>
                            <div className={classes.avaterSubscriber}>
                              <Avatar alt="Remy Sharp" src={community.img} className={classes.avaterSubscriberImg} />
                              <Typography >
                                111
                             </Typography>
                            </div>
                             </Grid>
                         </Grid>
                         <Grid container direction='row' item xs={24}>
                           <Grid item justify='center' xs={4}>
                               <div className={classes.avaterSubscriber}>
                                 <Avatar alt="Remy Sharp" src={community.img} className={classes.avaterSubscriberImg} />
                                 <Typography >
                                   111
                                </Typography>
                               </div>
                            </Grid>
                            <Grid item xs={4}>
                            <div className={classes.avaterSubscriber}>
                              <Avatar alt="Remy Sharp" src={community.img} className={classes.avaterSubscriberImg} />
                              <Typography >
                                111
                             </Typography>
                            </div>
                             </Grid>
                             <Grid item xs={4}>
                             <div className={classes.avaterSubscriber}>
                               <Avatar alt="Remy Sharp" src={community.img} className={classes.avaterSubscriberImg} />
                               <Typography >
                                 111
                              </Typography>
                             </div>
                              </Grid>
                          </Grid>
                      </Grid>
                    </div>
                 </Paper>
                 <Paper className={classes.rootPaterList} elevation={1}>
                     <div className={classes.displayFlexColumn}>
                       <div className={classes.displayFlexRow}>
                           <Typography fontWeight="fontWeightMedium" m={1} variant="p" >
                                 Контакти:
                          </Typography>
                          <Typography >
                            1
                         </Typography>
                       </div>
                       <div className={classes.displayFlexRow } style={{marginTop: '5px'}}>
                         <Avatar alt="Remy Sharp" src={community.img} className={classes.avaterSubscriberImg} />
                            <div style={{marginLeft: '9px'}}>
                                <Typography >
                                  Іммя
                               </Typography>
                               <Typography >
                                 Посада
                              </Typography>
                            </div>

                       </div>
                     </div>
                  </Paper>
              </div>
           </div>
  }
}

export default  connect(state => ({
  allCommunities: mapToArr(state.communities)}))
(withStyles(styles)(CommunityPage))
