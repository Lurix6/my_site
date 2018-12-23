import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root:{
    display: 'flex',
  },
  fromControl:{
    margin: theme.spacing.unit*1,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },

});

class RadioButtonGroup extends React.Component {
  state = {
    value: 'female',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
    this.props.handlerSex(event.target.value)
  }

  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.FormControl}>
          <FormLabel component="legend">Стать</FormLabel>
          <RadioGroup
          aria-label="gender"
          name="gender1"
          className={classes.group}
          value={this.state.value}
          onChange={this.handleChange}>
            <FormControlLabel value="female" control={<Radio />} label="Чоловіча" />
            <FormControlLabel value="male" control={<Radio />} label="Жіноча" />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }

}

export default withStyles(styles)(RadioButtonGroup)
