import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '@material-ui/core/Icon'
import AddPhotoDialog from './AddPhotoDialog'
import {connect} from 'react-redux'
import Moment from 'react-moment'
import {addNewPost} from '../../AC'
import {getFormatedDateId} from '../../helper'
import './style.css'

const styles = theme => ({
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
    mainStyleColor:{
        color: '#2e5689',
        cursor: 'pointer'
    },
    avatar: {
        margin: 10,
        alignItems: 'top'
    },
    bootstrapPopper: arrowGenerator(theme.palette.common.black),
   bootstrapTooltip: {
     backgroundColor: theme.palette.common.black,
   },
   bootstrapPlacementLeft: {
     margin: '0 8px',
   },
   bootstrapPlacementRight: {
     margin: '0 8px',
   },
   bootstrapPlacementTop: {
     margin: '8px 0',
   },
   bootstrapPlacementBottom: {
     margin: '8px 0',
   },
   tooltip: {
     fontSize: '15px'
   }
  });

  function arrowGenerator(color) {
    return {
      '&[x-placement*="bottom"] $arrow': {
        top: 0,
        left: 0,
        marginTop: '-0.95em',
        width: '3em',
        height: '1em',
        '&::before': {
          borderWidth: '0 1em 1em 1em',
          borderColor: `transparent transparent ${color} transparent`,
        },
      },
      '&[x-placement*="top"] $arrow': {
        bottom: 0,
        left: 0,
        marginBottom: '-0.95em',
        width: '3em',
        height: '1em',
        '&::before': {
          borderWidth: '1em 1em 0 1em',
          borderColor: `${color} transparent transparent transparent`,
        },
      },
      '&[x-placement*="right"] $arrow': {
        left: 0,
        marginLeft: '-0.95em',
        height: '3em',
        width: '1em',
        '&::before': {
          borderWidth: '1em 1em 1em 0',
          borderColor: `transparent ${color} transparent transparent`,
        },
      },
      '&[x-placement*="left"] $arrow': {
        right: 0,
        marginRight: '-0.95em',
        height: '3em',
        width: '1em',
        '&::before': {
          borderWidth: '1em 0 1em 1em',
          borderColor: `transparent transparent transparent ${color}`,
        },
      },
    };
  }


class NewPostElement extends React.Component{
        state = {
            smallPost: true,
            selectedImg: 0,
            rows: 1,
            text: '',
            openPhotoDialog: false,
            scroll: 'paper',
        }

        handleAddNewPost = (selectedAccount) => {
          if(this.state.text){
              this.props.addNewPost({id: selectedAccount.posts.length, author: selectedAccount.id ,selectedImg: this.props.fillListImg[this.state.selectedImg].img, text: this.state.text, date: new Date, whoLike: [], simplePost: false})
              this.setState({smallPost: true, selectedImg: 0, row: 1, text: ''})
          }
        }

        handleAddSimplePost = (selectedAccount) => {
          if(this.state.text){
              this.props.addNewPost({id: getFormatedDateId().toString(), author: selectedAccount.id ,text: this.state.text, date: new Date, whoLike: [], simplePost: true})
              this.setState({text: ''})
          }
        }

        handleClickClousePhotoDialog = () => {
          this.setState({ openPhotoDialog: false });

      };


          handleClickOpenPhotoDialog = () => {
            this.setState({ openPhotoDialog: true });
        };


    render() {
        const fullListImg = this.props.fillListImg
        const { selectedAccount, classes } = this.props
        const ListImg = <div className='scrolls'>
                          {fullListImg.map((el, index) => <img className='card' src={el.img} alt="" key={index} onClick={() => {this.setState({selectedImg: el.index})}} />)}
                          </div>

                return(<div>
                          {this.state.smallPost ?
                            <div className={classes.paper + ' ' + classes.paper_row}>
                                  <Avatar style={{marginRight: '10px'}} alt="Remy Sharp" src={selectedAccount.img} />
                                  <InputBase onChange={(ev) => this.setState({text: ev.target.value})} value={this.state.text} multiline className={classes.input} placeholder="Що у вас нового?" fullWidth />
                                  <div className={classes.paper_row}>
                                  <Tooltip
                                     title={
                                       <React.Fragment>
                                         Зображення
                                         <span className={classes.arrow} ref={this.handleArrowRef} />
                                       </React.Fragment>
                                     }
                                     classes={{
                                       tooltip: classes.bootstrapTooltip,
                                       popper: classes.bootstrapPopper,
                                       tooltipPlacementLeft: classes.bootstrapPlacementLeft,
                                       tooltipPlacementRight: classes.bootstrapPlacementRight,
                                       tooltipPlacementTop: classes.bootstrapPlacementTop,
                                       tooltipPlacementBottom: classes.bootstrapPlacementBottom,
                                       tooltip: classes.tooltip
                                     }}
                                     PopperProps={{
                                       popperOptions: {
                                         modifiers: {
                                           arrow: {
                                             enabled: Boolean(this.state.arrowRef),
                                             element: this.state.arrowRef,
                                           },},},
                                         }}
                                       >
                                          <Icon onClick={this.handleClickOpenPhotoDialog} className={classes.iconPaddingringt+ ' '+ classes.iconHover + ' ' + classes.mainStyleColor}>photo_camera</Icon>
                                      </Tooltip>
                                      <Icon className={classes.iconPaddingringt+ ' '+ classes.iconHover + ' ' + classes.mainStyleColor}>local_movies</Icon>
                                      <Icon className={classes.iconPaddingringt+ ' '+ classes.iconHover + ' ' + classes.mainStyleColor}>library_music</Icon>
                                      <Icon className={classes.iconPaddingringt+ ' '+ classes.iconHover + ' ' + classes.mainStyleColor}>notes</Icon>
                                  </div>
                                  <div style={{paddingLeft: '20px', borderLeft: '1px solid #e7e8ec',  marginLeft:'10px'}} >
                                      {this.state.text.length > 0 ?
                                        <Button variant="contained" color="primary" onClick={() =>this.handleAddSimplePost(selectedAccount)}>
                                           Надіслати
                                         </Button> :
                                         <div style={{width:'24px', height:'24px', borderRadius: '50%'}} onClick={() => {this.setState({smallPost: false})} }>
                                             <img src='https://vk.com/images/poster/color_button_20.png' style={{width:'24px', height:'24px', zIndex: 2}} />
                                         </div>
                                      }

                                  </div>

                              </div> :
                              <div style={{position: 'relative'}}>
                                  <div  style={{ backgroundImage: String('url('+ fullListImg[this.state.selectedImg].img+ ')'), opacity: '1', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,color: 'black' , display: 'flex',  justifyContent: 'space-between', width: '100%', height: '100%',  minHeight: '400px', maxHeight: '900px' ,  backgroundPosition: 'center'}} alt="">
                                          <Button style={{ color: 'white', width: '5%',minWidth: '0' }} onClick={()=> { if(this.state.selectedImg > 0 && this.state.selectedImg <= fullListImg.length){ this.setState({selectedImg: this.state.selectedImg-1})} }}><Icon style={{ fontSize: 50 }}>navigate_before</Icon></Button>
                                          <div style={{display: 'flex', flexDirection: 'column', width: '80%',aligenItems: 'center',marginTop: '20px',textAlign:'center'}}>
                                              <div>
                                                <Button  style={{backgroundColor: 'hsla(0,0%,100%,.9)', boxShadow: '0 2px 2px 0 rgba(0,0,0,.12)', cursor: 'pointer' ,backgroundColor: 'white', borderRadius:'16px' ,color: 'black'}}>{fullListImg[this.state.selectedImg].name}</Button>
                                              </div>
                                              <div style={{height: '100%' , display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                                  <textarea value={this.state.text} placeholder='Про що ви думаєте?' autoFocus rows={this.state.rows} onChange={(ev) => {if(ev.target.value.length >= 0 && ev.target.value.length < 20) { this.setState({rows: 1}) }else if (ev.target.value.length >= 20 && ev.target.value.length < 40){this.setState({rows: 2}) }else if(ev.target.value.length >= 40 && ev.target.value.length < 66) {this.setState({rows: 3})}else {this.setState({rows: 4})} this.setState({text: ev.target.value}) }} maxLength='105' style={{color: 'black' ,backgroundColor: 'transparent', border: '0', textAlign:'center', minWidth: '0' ,fontSize:'40px', maxWidth: '900px' }}>
                                                  </textarea>
                                              </div>
                                          </div>
                                          <Button onClick={() => {if(this.state.selectedImg >= 0 && this.state.selectedImg < fullListImg.length-1){ this.setState({selectedImg: this.state.selectedImg+1})} }} style={{ color: 'white',minWidth: '0' , width: '5%'}}><Icon style={{ fontSize: 50 }}>navigate_next</Icon></Button>

                                  </div>
                                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                      <Icon style={{color: 'grey', cursor: 'pointer' ,fontSize: '30px', margin: '0 10px 0 10px'}} onClick={() => this.setState({smallPost: true})}>close</Icon>
                                      {ListImg}
                                      <div style={{display: 'flex' ,margin: '0 10px', minWidth: '130px', alignItems: 'center'}}>
                                          <Icon style={{color: 'grey', fontSize: '25px', cursor: 'pointer',margin: '0 15px 0 0'}}>settings</Icon>
                                          <Button variant="contained" color="primary" onClick={() => this.handleAddNewPost(selectedAccount)}>
                                             Надіслати
                                           </Button>
                                      </div>
                                  </div>
                              </div>
                            }
                            <AddPhotoDialog open={this.state.openPhotoDialog} clouseDialog={this.handleClickClousePhotoDialog} tileData={selectedAccount.photo} />
                            </div>
                            )
                            }


}

export default connect(state => ({
  selectedFriend : state.selectedFriend
}) ,{addNewPost})(withStyles(styles)(NewPostElement))


/*







*/
