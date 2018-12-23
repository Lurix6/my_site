import React from 'react'

export default InputComponent => class Hovered extends React.Component{

  state = {
       hover: false
  }

  render(){
    return<InputComponent {...this.props} {...this.state} hoverOn={this.hoverOn} hoverOff={this.hoverOff} />
  }

  hoverOn = () =>{
    this.setState({ hover: true });
  }

  hoverOff = () => {
    this.setState({ hover: false });
  }

}
