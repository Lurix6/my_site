import React from 'react'
import {connect} from 'react-redux'

class AccountMusicElement extends React.Component{

  render(){
    const element = this.getObjectMusicElementById(this.props.element)
    return(<div>
                <div id="author_music">
                  {element.executor} -
                </div>
                <div className="name_music">
                  - {element.title}
                </div>
            </div>)


    }

    getObjectMusicElementById = (selected) => {
      return this.props.allMusic.filter(element => element.id === selected)[0]

    }


}

export default connect(state => ({
  allMusic : state.allMusic
}))(AccountMusicElement)
