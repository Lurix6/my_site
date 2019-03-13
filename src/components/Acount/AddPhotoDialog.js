import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button'
import SnackBars from './SnackBars'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import { Profils } from '../DB'



const styles = theme => ({
    dialogRoot: {
      width: '100%'
    } ,
    dialogTitle: {
      backgroundColor: '#5b88bd',
      display: 'flex',
      justifyContent: 'space-between'
    },
    dialogTitleTextFormat: {
      cursor: 'pointer',
      color: '#adadad',
      fontSize: '28px',
      '&:hover': {

          backgroundColor:'#5a88bd',
          color: '#fff',
      }
    },
    selectedBtn: {
      position:'absolute',
      border: '2px solid #939393',
      top:'10px',
      left:'10px',
      width: '23px',
      height: '23px',
      borderRadius: '50%',
      opacity: '0.7' ,
      backgroundColor: '#E7E7E6',
      '&:hover': {
          backgroundColor: '#fff',
          opacity: '0.9',

      },
    },
    selectedBtnActive: {
      alignItems: 'center',
      border: '2px solid #939393',
      position:'absolute',
      top:'10px',
      left:'10px',
      width: '23px',
      height: '23px',
      borderRadius: '50%',
      opacity: '0.7' ,
      color: '#e2e2e2',
      backgroundColor: '#2a5885',
      '&:hover': {
          backgroundColor: '#2f6393',
          opacity: '0.9',
          color: '#fff'

      },
      }
})


class AddPhotoDialog extends React.Component {

  state = {
    selectedImg: [],
    openSnackBar: false
  }

  selectedImgForPostImg = (img) => {
    this.props.selectedImgForPostImg(img)
    this.setState({selectedImg: []})
  }

  selectedImgGroupForPostImg = () => {
    if(this.state.selectedImg.length > 0){
      this.props.selectedImgForPostImg(this.state.selectedImg)
      this.setState({selectedImg: []})
    }
  }

  addImgToState = (selectedImg) => {
    if(this.state.selectedImg.indexOf(selectedImg) == -1 && this.state.selectedImg.length <= 10){
        this.setState({selectedImg: [...this.state.selectedImg, selectedImg]})
    }else {
        this.setState({openSnackBar: true})
    }
  }

  deleteImgToState = (selectedImg) => {
      this.setState({selectedImg: this.state.selectedImg.filter(el => el !== selectedImg)})
  }

  cancelAndClearState = () => {
    this.props.clouseDialog()
    this.setState({selectedImg: []})
  }

  render() {
    const {clouseDialog, open, classes} = this.props
    const tileData = Profils[0].photo

      return(
          <Dialog
              classes={{paper: classes.dialogRoot}}
              open={open}
              onClose={this.cancelAndClearState}
              scroll='paper'>
              <DialogTitle disableTypography className={classes.dialogTitle}><Typography variant='subheading' style={{color:'#fff'}}>Прикріплені фотографії</Typography><div><Icon className={classes.dialogTitleTextFormat}   >search</Icon><Icon onClick={clouseDialog} className={classes.dialogTitleTextFormat}>close</Icon></div></DialogTitle>
              <DialogContent >
                <GridList style={{paddingTop: '10px'}} cellHeight={150} cols={3}>
                   {tileData.map(tile => (
                     <GridListTile key={String(tile.img)} cols={1}>
                       <div style={{position:'relative',width: '100%', height: '100%'}}>
                           <img onClick={() =>this.selectedImgForPostImg(tile.img)} style={{width: '100%', height: '100%'}} src={tile.img} />
                           {this.state.selectedImg.indexOf(tile.img) == -1 ?
                                 <div onClick={() => this.addImgToState(tile.img)} className={classes.selectedBtn}></div>
                             :
                                 <div onClick={() => this.deleteImgToState(tile.img)} className={classes.selectedBtnActive}>
                                    <Icon style={{fontSize: '20px',  display: 'block',margin: 'auto auto' }}>check</Icon>
                                 </div>

                           }

                       </div>
                     </GridListTile>
                   ))}
                 </GridList>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.cancelAndClearState} color="primary">
                  Cancel
                </Button>
                <Button disabled={this.state.selectedImg.length === 0} onClick={this.selectedImgGroupForPostImg} color="primary">
                  { this.state.selectedImg.length > 0 ?
                    'Прикріпити '+ this.state.selectedImg.length+' фотографії'
                    :
                      'Виберіть фотографію'
                  }
                </Button>
              </DialogActions>
              <SnackBars open={this.state.openSnackBar}/>
            </Dialog>
    )
  }
}

export default withStyles(styles)(AddPhotoDialog)
