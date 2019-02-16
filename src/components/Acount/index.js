import React, { Component } from 'react'
import {connect} from 'react-redux'
import { mapToArr } from '../../helper/'
import AccountMusicElement from './NewPostElement'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import Divider from '@material-ui/core/Divider'
import GridList from '@material-ui/core/GridList';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import Style from 'style-it';
import Post from './Post'
import NewPostElement from './NewPostElement'
import { postImg } from '../DB'

const styles = theme => ({
  root: {
    display:'flex',
    padding: '0 12px 12px 12px'
  },
  root2: {
      paddingTop:'5px',
      display:'flex',
      justifyContent: 'space-between',
      color: '#54657B'
  },
  left_block: {
      display:'flex',
      flexDirection:'column',
      paddingRight: '12px',
      width: '30%',
  },
  right_block: {
      width: '70%',
  },
  avatar_img: {
      width: '100%',
      height: '40%',

  },
  paper:{
      marginTop: '8px',
      padding: '8px',
  },
  paper_row:{
      display:'flex',
      flexDirection: 'row',
      alignItems: 'center',
  }  ,
  button:{
      width:'80%',
      background: '#DDE5EC',
      color: '#54657B'
  },
  buttonWidth100:{
      width:'100%',
      textTransform: 'none'
},
  icon: {
    textAlign:'right',
    width:'20%',
      '&:hover': {

      },
  },
    iconHover: {
        '&:hover': {
            color: '#99A7B8'
        },
    },
    typographyHover: {
        '&:hover': {
            color: '#2e5689'
        },
    },
    typographyPaddyngRight:{
        width:'150px'
    },
    typographyTextAligenCenter:{
        textAlign:'center'
    },
    iconPaddingringt:{
         paddingRight: '5px'
    },
    typography:{
         display: 'flex',
         alignItems: 'flex-end'
    },
    justifyContent: {
        justifyContent: 'center',
        flexWrap:'wrap'
    },
    padding15:{
        padding: '14px',
    },
    marginBottom6: {
        margin: '6px'
    },
    alignItemsCenter:{
        alignItems: 'center',

    },
    mainStyleColor:{
        color: '#2e5689',
        cursor: 'pointer'
    },
    gridRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        margin: 0
    },
    avatar: {
        margin: 10,
        alignItems: 'top'
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

});

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      moreInf: false,
      basicInf: false,
      education: false,
      personalInf: false,
    }
  }

  fillListImg = () => {
      let list = []

      for (let i = 0; i < postImg.abstractImg.length; i++) {
          list[list.length] = {img : postImg.abstractImg[i].img,name : 'abstract', index: i}
      }
      for (let i = 0; i < postImg.gradientImg.length; i++) {
          list[list.length] = {img : postImg.gradientImg[i].img, name : 'gradient', index: list.length}
      }
      for (let i = 0; i < postImg.emotionsImg.length; i++) {
          list[list.length] = {img : postImg.emotionsImg[i].img, name : 'emotions', index: list.length}
      }
      return list

  }


  render(){
    const location = this.props.location

    if (location.pathname === "/profil/myProfile") {
      selectedAccount = this.props.mainProfile
    }else {
      selectedAccount = this.getAccountById(location)    }
    const { classes } = this.props;
    let selectedAccount


    return (
        <div className={classes.root}>
            <div className={classes.left_block}>
                <Paper  className={classes.paper}>
                  <img className={classes.avatar_img} alt='avatar' src={selectedAccount.img} />
                  <div className={classes.root2}>
                      <Button variant="contained" color="primary" className={classes.button}>
                          Редагувати
                      </Button>
                      <Icon className={classes.icon + ' '+ classes.iconHover + ' ' + classes.mainStyleColor} fontSize="large">assessment</Icon>
                  </div>
                </Paper>
                <Paper className={classes.paper + ' '+ classes.root2}>
                    <div className={classes.paper_row}>
                        <Icon className={classes.iconPaddingringt+ ' '+ classes.iconHover + ' ' + classes.mainStyleColor}>cake</Icon>
                        <Typography >
                            Укажіть дату народження
                        </Typography>
                    </div>
                    <Icon className={classes.iconHover}>clear</Icon>
                </Paper>
            </div>
            <div className={classes.right_block}>
                <Paper className={classes.paper}>
                    <div>
                        <div className={classes.root2}>
                            <Typography variant="h5" component="h3">
                                {selectedAccount.firstName + ' '+ selectedAccount.lastName}
                            </Typography>
                            <Typography variant="h5" style={{marginRight: '15px'}}>
                                {selectedAccount.online ? 'online': 'ofline'}
                            </Typography>
                        </div>

                        <Typography className={classes.typographyHover + ' ' +classes.marginBottom6} component="p">
                            {selectedAccount.status}
                        </Typography>
                    </div>
                    <Divider />
                    <div>
                        <div className={classes.paper_row + ' ' +classes.marginBottom6}>
                            <Typography className={classes.typographyPaddyngRight} component="p">
                                День народження:
                            </Typography>
                            <Typography variant="inherit">
                                {selectedAccount.personalDate.birthday}
                            </Typography>
                        </div>
                        <div className={classes.paper_row + ' ' + classes.marginBottom6}>
                            <Typography className={classes.typographyPaddyngRight} component="p">
                                Мiсто:
                            </Typography>
                            <Typography variant="inherit">
                                {selectedAccount.personalDate.city}
                            </Typography>
                        </div>
                        <Button className={classes.buttonWidth100 + ' ' + classes.marginBottom6} onClick={ () => {this.setState({moreInf: !this.state.moreInf})}} >
                            {this.state.moreInf ? 'Приховати детальну інформацію' : 'Детальніше'}
                        </Button>
                        <div>{this.state.moreInf ? this.getMoreInf(selectedAccount, classes) :null}</div>
                    </div>
                    <Divider />
                    <div >
                        <div className={classes.paper_row + ' '+classes.justifyContent}>

                            <div className={classes.padding15 + ' ' + classes.typographyHover}>
                                <Typography className={classes.typographyTextAligenCenter + ' ' + classes.mainStyleColor} variant="h6">
                                    183
                                </Typography>
                                <Typography variant="subheading" >
                                    Друзів
                                </Typography>
                            </div>
                            <div className={classes.padding15 + ' ' + classes.typographyHover}>
                                <Typography className={classes.typographyTextAligenCenter + ' ' + classes.mainStyleColor} variant="h6">
                                    131
                                </Typography>
                                <Typography variant="inherit">
                                    Підписники
                                </Typography>
                            </div>
                            <div className={classes.padding15 + ' ' + classes.typographyHover}>
                                <Typography className={classes.typographyTextAligenCenter + ' ' + classes.mainStyleColor} variant="h6">
                                    86
                                </Typography>
                                <Typography variant="inherit">
                                    Фотографії
                                </Typography>
                            </div>
                            <div className={classes.padding15 + ' ' + classes.typographyHover}>
                                <Typography className={classes.typographyTextAligenCenter + ' ' + classes.mainStyleColor} variant="h6">
                                    0
                                </Typography>
                                <Typography variant="inherit">
                                    Позначок
                                </Typography>
                            </div>
                            <div className={classes.padding15 + ' ' + classes.typographyHover}>
                                <Typography className={classes.typographyTextAligenCenter + ' ' + classes.mainStyleColor} variant="h6">
                                    163
                                </Typography>
                                <Typography variant="inherit">
                                    Відеозаписів
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </Paper>
                <Paper className={classes.paper}>
                    <div className={classes.paper_row + ' ' + classes.root2  + ' ' + classes.marginBottom6} style={{cursor: 'pointer'}}>
                        <div className={classes.paper_row}>
                            <Typography  color='textPrimary'>
                                Мої фотографії
                            </Typography>
                            <Typography variant='h6'>_{selectedAccount.musicList.length}</Typography>
                        </div>
                        <Typography variant="inherit" >
                           Показати на мапі
                        </Typography>
                    </div>
                    <div className={classes.gridRootoot}>
                        <GridList className={classes.gridList} style={{justifyContent: 'center'}}  cols='4.2'>

                            <img src={selectedAccount.img} alt={selectedAccount.firstName + ' ' + selectedAccount.lastName} />
                            <img src={selectedAccount.img} alt={selectedAccount.firstName + ' ' + selectedAccount.lastName} />
                            <img src={selectedAccount.img} alt={selectedAccount.firstName + ' ' + selectedAccount.lastName} />
                            <img src={selectedAccount.img} alt={selectedAccount.firstName + ' ' + selectedAccount.lastName} />

                        </GridList>
                    </div>
                </Paper>




                <Paper style={{marginTop: '8px'}}>
                   <NewPostElement selectedAccount={selectedAccount} fillListImg={this.fillListImg()}/>
                </Paper>
                {selectedAccount.posts.length > 0 ?
                  <div>
                      {this.getAllPosts(selectedAccount)}
                  </div>

                : null
                }
            </div>
        </div>

    );
  }


  getAllPosts = (selectedAccount) => {
      return  selectedAccount.posts.map(el => <Post key={el.id} post={el} selectedAccount={selectedAccount} />)


  }







  getMoreInf = (selectedAccount, classes) => {
      const {hover, hoverOn, hoverOff} = this.props
      return <div>
                 <div onMouseEnter={() =>{this.setState({basicInf: true})}} onMouseLeave={() =>{this.setState({basicInf: false})}}>
                      <div className={classes.paper_row + ' ' + classes.alignItemsCenter}>
                              <Typography component="p">
                                  Основна інформація
                              </Typography>
                              <Divider style={{flex: 2, margin: '0 8px '}}/>
                              { this.state.basicInf ?
                                  <Typography component="p" style={{cursor: 'pointer'}}>
                                    Редагувати
                            </Typography> : null}
                      </div>
                      <div className={classes.paper_row + ' ' +classes.marginBottom6}>
                          <Typography className={classes.typographyPaddyngRight} component="p">
                              Мови:
                          </Typography>
                          <Typography component="p">
                              {selectedAccount.personalDate.language[0]}
                          </Typography>
                      </div>
                 </div>
                 <div onMouseEnter={() =>{this.setState({education: true})}} onMouseLeave={() =>{this.setState({education: false})}}>
                     <div className={classes.paper_row + ' ' + classes.alignItemsCenter}>
                         <Typography component="p">
                             Освіта:
                         </Typography>
                         <Divider style={{flex: 2, margin: '0 8px '}}/>
                         { this.state.education ?
                             <Typography component="p" style={{cursor: 'pointer'}}>
                                 Редагувати
                             </Typography> : null}
                     </div>
                     <div className={classes.paper_row + ' ' +classes.marginBottom6}>
                         <Typography className={classes.typographyPaddyngRight} component="p">

                         </Typography>
                         <Typography component="p">
                             Інформація відсутня
                         </Typography>
                     </div>
                 </div>
                  <div onMouseEnter={() =>{this.setState({personalInf: true})}} onMouseLeave={() =>{this.setState({personalInf: false})}}>
                      <div className={classes.paper_row + ' ' + classes.alignItemsCenter}>
                          <Typography component="p">
                              Особиста iнформацiя:
                          </Typography>
                          <Divider style={{flex: 2, margin: '0 8px '}}/>
                          { this.state.personalInf ?
                              <Typography component="p" style={{cursor: 'pointer'}}>
                                  Редагувати
                              </Typography> : null}
                      </div>
                      <div className={classes.paper_row + ' ' +classes.marginBottom6}>
                          <Typography className={classes.typographyPaddyngRight} component="p">
                              Групи:
                          </Typography>
                          <Typography component="p" className={classes.paper_row }  style={{flexWrap:'wrap'}}>
                              {selectedAccount.musicList.map(el =>  <Typography variant='subheading' key={el}>{el},</Typography>)}
                          </Typography>
                      </div>
                  </div>
      </div>
  }


  handleMoreMusic = () => {
    this.setState({
      moreMusic: !this.state.moreMusic
    })
  }

  getAccountById = (location) => {
      if (location.pathname === '/profil/myP') {
          return this.props.mainProfile
      }
      const id = location.pathname.replace('/profil/id/', '')
      const test = this.props.allProfile.filter(element => element.id === id)
      return test[0]

  }


  showMusicList = (account) => {
    if (this.state.moreMusic) {
      return account.musicList.map(element => <li className="userMusicLi" key={element}><AccountMusicElement element={element} /></li>)
    }else {
      return this.getFirstThreeElement(account.musicList).map(element => <li className="userMusicLi" key={element}><AccountMusicElement element={element} /> </li>)
    }

  }


  getFirstThreeElement = (list) => {
      if (list.length <= 3 && list.length !== 0)
          return list
      if (list.length === 0)
          return false
      if (list.length > 3){
        let result = []

        for(var i = 0 ; i < 3 ;i++){
          result.push(list[i])
        }


      return result
    }
  }

}

export default connect(state => ({
  mainProfile: state.loginProfil,
  allProfile: mapToArr(state.accounts)
})) (withStyles(styles)(App));
