import React from 'react'
import General from './General'

export default class SettingsElement extends React.Component{

    render(){
        return<div className="settingsTitle">{this.getBody()}</div>

    }

    getBody = () => {
      let category = this.props.category
      switch (category) {
        case 'general': return <General />

      }
      return <div>Selected</div>

    }
}
