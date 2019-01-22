import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  dialogRoot: {
    borderRadius: '12px',
    minHeight: '80%',
    maxHeight: 'auto'
  },
  dialogTitle:{
    display: 'flex',
    color: 'white',
    justifyContent: 'space-between',
    backgroundColor: '#5982B9'
  },
  dialogContent: {
    margin: '15px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  dialogContentText: {
    textAlign: 'center',
    fontSize: '13px',
    color: 'black'
  },
  dialogActions: {
    justifyContent: 'space-between'
  },
  button: {
    margin: theme.spacing.unit,
    width: '160px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  tabs: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'

  },
  searchGroup: {
    width: '98%'
  },
  egreeBtnRoot: {
    backgroundColor: '#5982B9',
    color: 'white',
    '&:hover': {
    backgroundColor: '#7922B9'
    }
  },
  inpuDiv:{
    marginTop: '15px',
    display: 'flex',
    width: '100%'
  },
  inputDivItemLeft: {
    marginRight: '5px',
    width: '30%',
    textAlign: 'right'
  },
  inputDivItemRight: {
    width: '70%'

  },
  selectInputRoot: {
    margin: '0'
  },
  bootstrapRoot: {
    border: '1px solid #d3d9de',
    borderRadius: '2px',
    height: '25px'
  }
})

const currencies = [
  {
    value: 'auto',
    label: 'Авто, мото',
  },
  {
    value: 'business',
    label: 'Бізнес',
  },
  {
    value: 'house',
    label: 'Будинок, ремонт',
  },
  {
    value: 'petsAnimal',
    label: 'Домашні і дикі тварини',
  },
  {
    value: 'hobby',
    label: 'Захоплення та хобі',
  },
  {
    value: 'technology',
    label: 'Комп`ютер, інтернет',
  },
  {
    value: 'beauty',
    label: 'Краса та здоров`я',
  },
  {
    value: 'cooking',
    label: 'Кулінарія, рецепти',
  },
  {
    value: 'city',
    label: 'Міста, країни',
  },
  {
    value: 'medecine',
    label: 'Медецина',
  },
  {
    value: 'music',
    label: 'Музика',
  },
  {
    value: 'education',
    label: 'Освіта',
  },
  {
    value: 'fun',
    label: 'Розваги',
  },
  {
    value: 'sport',
    label: 'Спорт',
  },
  {
    value: 'relation',
    label: 'Відносини',
  },
  {
    value: 'tourism',
    label: 'Туризм, подорожі',
  },
  {
    value: 'finances',
    label: 'Фінанси',
  }
];


  class DialogCommunity extends React.Component{
      state = {
        egreeWithRules: false,
        category: 'auto',
        name: '',
        webSite: '',
        imgUrl: ''

      }

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };


      createCommuniityObj = allCommunities => {

        let communitie = {}

        let index = 0
        for (var i = 0; i < allCommunities.length; i++) {
          if (allCommunities[i].defaultURL) {
           index++
         }
        }
        communitie.url = String('public'+ index)
        communitie.title = this.state.name
        communitie.img = this.state.imgUrl ? this.state.imgUrl : 'https://us.v-cdn.net/6030293/uploads/TCYRA09SKWFQ.jpg'
        communitie.subscribers = []
        communitie.subject = currencies.filter(el => this.state.category === el.value)[0].label
        communitie.defaultURL = true
        communitie.administrators = [this.props.loginProfil.id]
        this.clearState()
        this.props.clouseDialog()

        return communitie
    }

    clearState = () => {
        this.setState({egreeWithRules: false,   category: 'auto', name: '', webSite: '', imgUrl: ''})

    }

    nameIsCorrect = () => {
      const {allCommunities} = this.props
      let notUsed = true

      for (var i = 0; i < allCommunities.length; i++) {
        if (allCommunities[i].title === this.state.name){
            notUsed = false

        }
      }

      if (this.state.name && notUsed ) {
        this.props.addNewCommunitie(this.createCommuniityObj(this.props.allCommunities))
      }
    }

  render() {
    const { classes, theme } = this.props;

         return(
          <Dialog
          open={this.props.openDialog}
          onClose={this.props.clouseDialog}
          aria-labelledby="draggable-dialog-title"
          classes={{paper: classes.dialogRoot}}>
          <DialogTitle disableTypography classes={{root: classes.dialogTitle}}><Typography variant='h6' >Створення спільноти</Typography><Icon className={classes.pointedIcon}  onClick={this.props.clouseDialog}>close</Icon></DialogTitle>
          <DialogContent classes={{root: classes.dialogContent}}>
            <img src='https://vk.com/images/groups/groups_create_136.png' style={{width: '120px', height: '120px'}} />
            <DialogContentText >
              Група за інтересами
            </DialogContentText>
            <DialogContentText className={classes.dialogContentText}>
              Спілкуйтеся і діліться контентом з однокласниками, колегами та однодумцями
            </DialogContentText>
            <FormControl className={classes.margin}>
            <div className= {classes.inpuDiv}>
              <DialogContentText className={classes.dialogContentText, classes.inputDivItemLeft}>
              Назва:
              </DialogContentText>
               <InputBase
                  className={classes.inputDivItemRight}
                  classes={{
                   root: classes.bootstrapRoot,
                  }}
                  onChange={(ev) => {this.setState({name: ev.target.value})}}
               />
            </div>
            <div className= {classes.inpuDiv}>
              <DialogContentText className={classes.dialogContentText, classes.inputDivItemLeft}>
                Тематика:
              </DialogContentText>
              <TextField
                select
                className={classes.selectInputRoot}
                value={this.state.currency}
                onChange={this.handleChange('category')}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
              >
                {currencies.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className= {classes.inpuDiv}>
              <DialogContentText className={classes.dialogContentText, classes.inputDivItemLeft}>
                Веб-сайт:
              </DialogContentText>
              <InputBase
                 className={classes.inputDivItemRight}
                classes={{
                  root: classes.bootstrapRoot,
                 }}
                 onChange={(ev) => {this.setState({webSite: ev.target.value})}}

              />
            </div>
            <div className= {classes.inpuDiv}>
              <DialogContentText className={classes.dialogContentText, classes.inputDivItemLeft}>
              Icon(url):
              </DialogContentText>
              <InputBase
                placeholder='Не обов`язково'
                className={classes.inputDivItemRight}
                classes={{
                  root: classes.bootstrapRoot,
                 }}
                 onChange={(ev) => {this.setState({imgUrl: ev.target.value})}}
              />
            </div>
           </FormControl>
          </DialogContent>
          <DialogActions classes={{root: classes.dialogActions}}>
            <div>
            <FormControlLabel
               control={
                 <Checkbox
                   checked={this.state.egreeWithRules}
                   onChange={() => {this.setState({egreeWithRules: !this.state.egreeWithRules})}}
                   color="primary"
                 />
               }
               label="Я прочитав і згоден з правилами"
             />

            </div>
            <div>
              <Button onClick={this.props.clouseDialog} color="primary">
                Скасувати
              </Button>
              <Button onClick={() => {this.nameIsCorrect() }}  disabled={!this.state.egreeWithRules} classes={{ root: classes.egreeBtnRoot, disabled: classes.egreeBtnDisabled}}>
                Створити спільноту
              </Button>
            </div>
          </DialogActions>
          </Dialog>

        )
  }
}


export default(withStyles(styles))(DialogCommunity)
