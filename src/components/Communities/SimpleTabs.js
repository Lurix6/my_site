import React from 'react';
import PropTypes from 'prop-types';
import { mapToArr } from '../../helper/'
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Icon from '@material-ui/core/Icon'
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {connect} from 'react-redux'
import CommunitiElement from './CommunitiElement'
import {filterGroupByTitle} from '../../selectors'
import {setNewFilters, addNewCommunitie} from '../../AC'
import DialogCommunity from './CreateNewCommunityDialog'

function TabContainer({ children, dir }) {
  return (
    <Typography style={{padding: 0}} component="div" dir={dir} style={{ padding: 8 * 2 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    filter: '',
    openDialog: false
  };



  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleTitleFilter = ev => {
      const {setNewFilters} = this.props
      setNewFilters({title: ev.target.value})
  }
  clouseDialog = () => {
    this.setState({openDialog: false})
  }

  addNewCommunitie = (group) => {
    const {addNewCommunitie} = this.props
    addNewCommunitie(group)
  }

  render() {
    const { classes, theme } = this.props;
    console.log(this.props.communities);
    const communitiElements = this.props.communities.map(element => <li  key={element.url}>
			<CommunitiElement
				element = {element}
			/>
		</li> )


    return (
      <div className={classes.root}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary">
              <Tab className={classes.tab} label="Усі групи" />
              <Tab className={classes.tab} label="Керування" />
          </Tabs>
          <Button variant="contained" color="primary" size="small" className={classes.button} onClick={() => {this.setState({openDialog: true})}}>
            Створити спільноту
          </Button>
        </div>


          <TextField classes={{root:classes.searchGroup}} onChange={this.handleTitleFilter} label="Пошук по спільнотах" type="search" className={classes.textField} margin="normal" variant="filled"/>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex} >
            <TabContainer dir={theme.direction}><ul>{communitiElements}</ul></TabContainer>
            <TabContainer dir={theme.direction}>Item Two</TabContainer>
          </SwipeableViews>

          <DialogCommunity openDialog={this.state.openDialog} clouseDialog={this.clouseDialog} addNewCommunitie={this.addNewCommunitie} allCommunities={this.props.allCommunities} loginProfil={this.props.loginProfil}/>

      </div>
    );
  }
}


export default connect(state => ({
  communities: filterGroupByTitle(state),
  allCommunities: mapToArr(state.communities),
  loginProfil: state.loginProfil
}), {setNewFilters, addNewCommunitie})(withStyles(styles, { withTheme: true })(SimpleTabs))
