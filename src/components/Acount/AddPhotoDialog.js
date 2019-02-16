import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import { Profils } from '../DB'



const styles = theme => ({
    dialogRoot: {
      backgroundColor: 'black',
      width: '100%'
    } ,
    dialogTitle: {
      backgroundColor: '#5b88bd',
      display: 'flex',
      justifyContent: 'space-between'
    },
    dialogTitleTextFormat: {
      color: '#adadad',
      fontSize: '28px',
      '&:hover': {
                color: '#fff',
      }
    },
    selectedBtn: {
      position:'absolute',
      top:'10px',
      left:'10px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      opacity: '0.7' ,
      backgroundColor: '#E7E7E6',
      '&:hover': {
          backgroundColor: '#fff',
          opacity: '0.9',

      },
      }
})


class AddPhotoDialog extends React.Component {

  render() {
    const {clouseDialog, open, classes} = this.props
    const tileData = Profils[0].photo
      return(
          <Dialog
              classes={{paper: classes.dialogRoot}}
              open={open}
              onClose={clouseDialog}
              scroll='paper'>
              <DialogTitle disableTypography className={classes.dialogTitle}><Typography variant='subheading' style={{color:'#fff'}}>Прикріплені фотографії</Typography><div><Icon className={classes.dialogTitleTextFormat} stale={{paddingRight: '5px'}}>search</Icon><Icon onClick={clouseDialog} className={classes.dialogTitleTextFormat}>close</Icon></div></DialogTitle>
              <DialogContent >
                <GridList style={{paddingTop: '10px'}} cellHeight='150' cols={3}>
                   {tileData.map(tile => (
                     <GridListTile key={tile.img} cols={1}>
                       <div style={{position:'relative',width: '100%', height: '100%'}}>
                           <img style={{width: '100%', height: '100%'}} src={tile.img} />
                           <div className={classes.selectedBtn}></div>
                       </div>
                     </GridListTile>
                   ))}
                 </GridList>
              </DialogContent>
              <DialogActions>
                <Button onClick={clouseDialog} color="primary">
                  Cancel
                </Button>
                <Button onClick={clouseDialog} color="primary">
                  Subscribe
                </Button>
              </DialogActions>
            </Dialog>
    )
  }
}

export default withStyles(styles)(AddPhotoDialog)
